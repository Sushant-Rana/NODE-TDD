/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

const request = require('supertest')
const APP = require('./index')
const CONSTANT = require('./src/const')

const inputValue1 = 4
const inputValue2 = 2

describe('testCase case for calculator application', () => {
  it('testCase for addition', async () => {
    const res = await request(APP).get('/test/calculator').query({ valueOne: inputValue1, valueTwo: inputValue2, operation: CONSTANT.CALCULATOR_OPERATIONS.ADDITION }).send()
    expect(res.status).toEqual(200)
    expect(res.body.success).toEqual(true)
    expect(res.body.result).toEqual(6)
  })

  it('testCase for substratcion', async () => {
    const res = await request(APP).get('/test/calculator').query({ valueOne: inputValue1, valueTwo: inputValue2, operation: CONSTANT.CALCULATOR_OPERATIONS.SUBTRACTION }).send()
    expect(res.status).toEqual(200)
    expect(res.body.success).toEqual(true)
    expect(res.body.result).toEqual(2)
  })

  it('testCase for multiplication', async () => {
    const res = await request(APP).get('/test/calculator').query({ valueOne: inputValue1, valueTwo: inputValue2, operation: CONSTANT.CALCULATOR_OPERATIONS.MULTIPLICATION }).send()
    expect(res.status).toEqual(200)
    expect(res.body.success).toEqual(true)
    expect(res.body.result).toEqual(8)
  })

  it('testCase for division', async () => {
    const res = await request(APP).get('/test/calculator').query({ valueOne: inputValue1, valueTwo: inputValue2, operation: CONSTANT.CALCULATOR_OPERATIONS.DIVISION }).send()
    expect(res.status).toEqual(200)
    expect(res.body.success).toEqual(true)
    expect(res.body.result).toEqual(0.5)
  })

  it('testCase for invalid operation', async () => {
    const res = await request(APP).get('/test/calculator').query({ valueOne: inputValue1, valueTwo: inputValue2, operation: '%/' }).send()
    expect(res.status).toEqual(200)
    expect(res.body.success).toEqual(true)
    expect(res.body.result).toEqual('Invalid operations')
  })
})
