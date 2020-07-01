
var app         = require('../app')
var expect      = require('chai').expect
var assert      = require('chai').assert
const jsdom     = require("jsdom");
const sinon     = require('sinon')
const { JSDOM } = jsdom;
const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
const { window } = new JSDOM();

var $ = jQuery = require('jquery')(window);
var calObj = new app();
describe('App ' , ()=>{
    it('app sould return hello',()=>{
        let result = calObj.sayHello(); 
        assert.equal(result,'hello');
    })

    it('say hello type' , ()=>{
        let result = calObj.sayHello();
        assert.typeOf(result,'string');
    })

    it('add two numbers function' , ()=>{
        let result = calObj.addNum(5,5);
        assert.isAbove(result,5)
    });

    it('check type of add Numbers function' , ()=>{
        let result = calObj.addNum(5,5);
        assert.typeOf(result,'number')
    })

    it('check return value of add Numbers function' , ()=>{
        let result = calObj.addNum(5,5);
        assert.equal(result,10)
    })

    it('check calculation function with sinon spy', ()=>{
        let spy    = sinon.spy(calObj , 'addNum')
        let result = calObj.calOparations(5,10,'add');
        expect(spy.calledWith(5,10)).to.be.true;
        sinon.assert.calledOnce(spy)
    })
    
})

