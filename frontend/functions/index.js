const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

const functions = require("firebase-functions");
const express = require("express");
const app = require("../server/server");

exports.api = functions.https.onRequest(app);
