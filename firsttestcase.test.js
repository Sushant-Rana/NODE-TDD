/* eslint-disable no-undef */
const request = require('supertest')
const app = require('./index')
const axios = require('axios')
jest.mock('axios')

// it.todo('jest setup')

const samplejoke = 'HAHA'

describe('JOKES TEST', () => {
  it('Should return 200 status code: Success case', async () => {
    const res = await request(app).get('/test/getRandomJoke')
    expect(res.statusCode).toBe(200)
  })

  it('getRandomJoke,should returnt eh same joke', async () => {
    axios.mockImplementation(() =>
      Promise.resolve({ data: { joke: samplejoke, error: false } })
    )
    const res = await request(app).get('/test/getRandomJoke')
    expect(res.text).toBe(samplejoke)
  })

  it(' securedRandomJoke ,BYPASSING MIDDLEWARE', async () => {
    axios.mockImplementation(() =>
      Promise.resolve({ data: { joke: samplejoke, error: false } })
    )
    const res = await request(app)
      .get('/test/securedRandomJoke')
      .query({ isSuperUser: 1 })
    expect(res.text).toBe(samplejoke)
  })
})
