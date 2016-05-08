/// <reference path="../typings/main.d.ts" />
"use strict";
var DAO = require('../src/in-memory-dao');
var chai = require('chai');
var expect = chai.expect;
var userDAO = new DAO.InMemoryUserDAO();
describe("In Memory User DAO", function () {
    it("should return user", function () {
        var user = userDAO.read(0);
        console.log(user);
        expect(user).to.eql({ id: 0, firstname: 'first', lastname: 'last', age: 42 });
    });
});
