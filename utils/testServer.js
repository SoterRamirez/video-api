const express = require('express');
const supertest = require('supertest');

function testServer(Route) {
    const app = express();
    Route(app);
    return supertest(app);
}

module.exports = testServer;