import { default as mongodb } from 'mongodb';
const MongoClient = mongodb.MongoClient;
import dotenv from 'dotenv';
dotenv.config();

import formatMessage from "./utils/messages.js";
import { botName, defaultRoom } from "./utils/constants.js";
import {
  userGreeting,
  userUnsatisfied,
  userLikesBotOrMember,
  userChecksIfBotIsReal,
} from "./utils/user-expected-inputs.js";
import {
  answersForGreetings,
  answersForUnsatisfiedUser,
  answersForNotFunnyStatments,
  answersForUserLikesBotOrMember,
  answersForCheckingIfBotIsReal,
  jokes,
  botPrefixWhenAnswerIsKnown,
} from "./utils/bot-answers-and-statements.js";

const mongo = new MongoClient(process.env.DATABASE_URI);

const delayFirstBotMessageMS = 600;
const delaySecondBotMessageMS = 1300;

var currentQuestion = "";
var userIdWhoAskedCurrentQuestion = "";

function parseMessage(msg) {
  return msg.toLowerCase().replace(/!+$/, "");
}

function emitBotAnswer(
  io,
  botResponse,
  messageDelayMS = delayFirstBotMessageMS
) {
  setTimeout(() => {
    io.to(defaultRoom).emit("message", formatMessage(botName, botResponse));
  }, messageDelayMS);
}

export default async function handleMessageByBot(io, msg, userId) {
  msg = parseMessage(msg);
  if (msg == "i want a magical joke") {
    tellJoke(io);
    return;
  }
  if (userChecksIfBotIsReal.includes(msg)) {
    emitBotAnswer(io, randomItemFromList(answersForCheckingIfBotIsReal));
    return;
  }
  if (isQuestion(msg)) {
    handleQuestion(io, msg, userId);
    return;
  }
  if (userGreeting.includes(msg)) {
    emitBotAnswer(io, randomItemFromList(answersForGreetings));
    return;
  }
  if (userUnsatisfied.includes(msg)) {
    emitBotAnswer(io, randomItemFromList(answersForUnsatisfiedUser));
    return;
  }
  if (msg.includes("not") && msg.includes("funny")) {
    emitBotAnswer(io, randomItemFromList(answersForNotFunnyStatments));
    return;
  }
  if (userLikesBotOrMember.includes(msg)) {
    emitBotAnswer(io, randomItemFromList(answersForUserLikesBotOrMember));
    return;
  }
  if (currentQuestion != "" && userIdWhoAskedCurrentQuestion != userId) {
    handleAnswer(msg);
    return;
  }
}

async function handleQuestion(io, msg, userId) {
  const mongoDoc = await getDocByQuestion(msg);
  if (mongoDoc) {
    answerRepeatingQuestion(io, mongoDoc, msg);
  } else {
    currentQuestion = msg;
    userIdWhoAskedCurrentQuestion = userId;
  }
}

async function getDocByQuestion(question) {
  var docInDb = null;
  try {
    await mongo.connect();
    const db = mongo.db("chat_room");
    const coll = db.collection("questions");
    docInDb = await coll.findOne({ questioncontent: question });
  } catch (error) {
    console.error(
      `getDocByQuestion failed with the following error - ${error}`
    );
  } finally {
    await mongo.close();
  }
  return docInDb;
}

async function handleAnswer(msg) {
  answer = msg;
  insertQuestionAndAnswerToDB(currentQuestion, answer);
  currentQuestion = "";
  userIdWhoAskedCurrentQuestion = "";
  answer = "";
}

async function insertQuestionAndAnswerToDB(question, answer) {
  try {
    await mongo.connect();
    const db = mongo.db("chat_room");
    const coll = db.collection("questions");
    await coll.insertOne({ questioncontent: question, answer: answer });
  } catch (error) {
    console.error(
      `insertQuestionAndAnswerToDB, for question = ${question}, answer = ${answer}, failed with the following error - ${error}`
    );
  } finally {
    await mongo.close();
  }
}

function tellJoke(io) {
  const randomJoke = randomItemFromList(jokes);
  emitBotAnswer(io, randomJoke["question"], delayFirstBotMessageMS);
  emitBotAnswer(io, randomJoke["answer"], delaySecondBotMessageMS);
}

function answerRepeatingQuestion(io, mongoDoc) {
  emitBotAnswer(
    io,
    randomItemFromList(botPrefixWhenAnswerIsKnown),
    delayFirstBotMessageMS
  );
  emitBotAnswer(
    io,
    `The answer is - ${mongoDoc["answer"]}`,
    delaySecondBotMessageMS
  );
}

function isQuestion(msg) {
  const questionWords = ["what", "who", "where", "why", "when", "how"];
  const firstWord = msg.split(/[ .:;?!,]+/)[0];

  if (msg.slice(-1) === "?" || questionWords.includes(firstWord)) {
    return true;
  }
  return false;
}

function randomItemFromList(list) {
  return list[Math.floor(Math.random() * list.length)];
}
