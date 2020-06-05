
var app = require('../app')
var expect = require('chai').expect
var assert = require('chai').assert
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
const { window } = new JSDOM();

var $ = jQuery = require('jquery')(window);

describe('App ' , ()=>{
    it('app sould return hello',()=>{
        let result = app.sayHello(); 
        assert.equal(result,'hello');
    })

    it('say hello type' , ()=>{
        let result = app.sayHello();
        assert.typeOf(result,'string');
    })

    it('add two numbers function' , ()=>{
        let result = app.addNum(5,5);
        assert.isAbove(result,5)
    });

    it('check type of add Numbers function' , ()=>{
        let result = app.addNum(5,5);
        assert.typeOf(result,'number')
    })

    it('check return value of add Numbers function' , ()=>{
        let result = app.addNum(5,5);
        assert.equal(result,10)
    })
    
})

