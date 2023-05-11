/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

const request = require('supertest')
const APP = require('./index')
const CONSTANT = require('./src/const')

const inputValue1 = 50
const inputValue2 = 25

describe('test case for calculator application', () => {
  it('test for addition', async () => {
    const res = await request(APP).get('/test/calculator').query({ valueOne: inputValue1, valueTwo: inputValue2, operation: CONSTANT.CALCULATOR_OPERATIONS.ADDITION }).send()
    expect(res.status).toEqual(200)
    expect(res.body.success).toEqual(true)
    expect(res.body.result).toEqual(75)
  })

  it('test for substration', async () => {
    const res = await request(APP).get('/test/calculator').query({ valueOne: inputValue1, valueTwo: inputValue2, operation: CONSTANT.CALCULATOR_OPERATIONS.SUBTRACTION }).send()
    expect(res.status).toEqual(200)
    expect(res.body.success).toEqual(true)
    expect(res.body.result).toEqual(25)
  })

  it('test for multiplication', async () => {
    const res = await request(APP).get('/test/calculator').query({ valueOne: inputValue1, valueTwo: inputValue2, operation: CONSTANT.CALCULATOR_OPERATIONS.MULTIPLICATION }).send()
    expect(res.status).toEqual(200)
    expect(res.body.success).toEqual(true)
    expect(res.body.result).toEqual(1250)
  })

  it('test for division', async () => {
    const res = await request(APP).get('/test/calculator').query({ valueOne: inputValue1, valueTwo: inputValue2, operation: CONSTANT.CALCULATOR_OPERATIONS.DIVISION }).send()
    expect(res.status).toEqual(200)
    expect(res.body.success).toEqual(true)
    expect(res.body.result).toEqual(0.5)
  })

  it('test for invalid operation', async () => {
    const res = await request(APP).get('/test/calculator').query({ valueOne: inputValue1, valueTwo: inputValue2, operation: '%/' }).send()
    expect(res.status).toEqual(200)
    expect(res.body.success).toEqual(true)
    expect(res.body.result).toEqual('Invalid operations')
  })
})
