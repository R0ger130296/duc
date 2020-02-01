const express = require('express');
const router = express.Router();
const FlyBehaivor = require('../interfaces/fly');
const QuackBehaivor = require('../interfaces/quack');
const flyBehavior = new FlyBehaivor();
const quackBehaivor = new QuackBehaivor();
class Duck {

    performFly() {
        return flyBehavior;
    }
    performQuack() {
        return quackBehaivor;
    }
    swim() {
        console.log('puedo nadar');
    }
}

module.exports = Duck;