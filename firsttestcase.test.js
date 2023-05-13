/* eslint-disable no-undef */
const request = require('supertest')
const app = require('./index')
const axios = require('axios')
jest.mock('axios')

// it.todo('jest setup')

const samplejoke = 'HAHA'

describe('JOKES TEST', () => {
  it('Should return 200 status code: Success case', async () => {
    const response = await request(app).get('/test/getRandomJoke')
    expect(response.statusCode).toBe(200)
  })

  it('getRandomJoke,should returnt eh same joke', async () => {
    axios.mockImplementation(() =>
      Promise.resolve({ data: { joke: samplejoke, error: false } })
    )
    const response = await request(app).get('/test/getRandomJoke')
    expect(response.text).toBe(samplejoke)
  })

  it(' securedRandomJoke ,BYPASSING MIDDLEWARE', async () => {
    axios.mockImplementation(() =>
      Promise.resolve({ data: { joke: samplejoke, error: false } })
    )
    const response = await request(app)
      .get('/test/securedRandomJoke')
      .query({ isSuperUser: 1 })
    expect(response.text).toBe(samplejoke)

    const responseult = await request(server).get('/test/securedRandomJoke').query({ isSuperUser: 0 })
    expect(responseult.text).toBe('Access Denied')
  })
})
