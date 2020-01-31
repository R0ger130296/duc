const express = require('express');
const router = express.Router();
const FlyBehaivor = require('./fly');
const QuackBehaivor = require('./quack');
const flyBehavior = new FlyBehaivor();
const quackBehaivor = new QuackBehaivor();
class Duck {
    constructor() {
        this.flyBehavior = flyBehavior
        this.quackBehaivor = quackBehaivor
    };

    display() {
        console.log('')
    };
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
const mallard = new Duck();

module.exports = Duck;