const app = require("../app");
const supertest = require('supertest')
const request = supertest(app)

describe('test get age', ()=>{
    it('get the age endpoint', async () => {
        const response = await request.get('/age/')
        expect(response.status).toBe(200)
    });
    it('get the age endpoint', async () => {
        const response = await request.get('/age/')
        expect(response.status).not.toBe(400)
    });
})
