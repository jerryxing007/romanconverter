const app = require('./index.js');
const request  = require('supertest');

describe('Roman numeral endpoints', () => {
    it('GET /romannumeral should return roman output with valid query', async () => {
        const res = await request(app).get('/romannumeral?query=1');
        expect(res.status).toEqual(200);
        expect(res.type).toEqual(expect.stringContaining('json'));
        expect(res.body).toHaveProperty('output')
    });
    it('GET /romannumeral should return 400 bad request error with invalid query', async () => {
        const res = await request(app).get('/romannumeral?query=1$');
        expect(res.status).toEqual(400);
        expect(res.type).toEqual(expect.stringContaining('json'));
        expect(res.body).toHaveProperty('error')
    });
});