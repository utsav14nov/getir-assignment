process.env.NODE_ENV = "test";
// supertest to test HTTP requests/responses
const request = require("supertest");

const app = require("../app");
const responses = require('../configs/responses');

var DbConnection = require('../database');


const testCases = require("../configs/testCases");

afterAll(async () => {
  await DbConnection.Close();
});


// Invalid route Test
describe("Route /v1 ", () => {
  test("Post /v1 respond 400 INCORRECT_ROUTE", async () => {
    const response = await request(app).post("/v1");
    expect(response.body).toEqual(responses.INCORRECT_ROUTE);
    expect(response.statusCode).toBe(400);
  });
  test("Get /v1 respond 400 INCORRECT_ROUTE", async () => {
    const response = await request(app).get("/v1");
    expect(response.body).toEqual(responses.INCORRECT_ROUTE);
    expect(response.statusCode).toBe(400);
  });
});

// Invalid route Test
describe("Route /v1/records ", () => {
  test("Post /v1/records respond 400 INCORRECT_ROUTE", async () => {
    const response = await request(app).post("/v1/records");
    expect(response.body).toEqual(responses.INCORRECT_ROUTE);
    expect(response.statusCode).toBe(400);
  });
  test("Get /v1/records respond 400 INCORRECT_ROUTE", async () => {
    const response = await request(app).get("/v1/records");
    expect(response.body).toEqual(responses.INCORRECT_ROUTE);
    expect(response.statusCode).toBe(400);
  });
});

// Valid route test
describe("Route /v1/records/fetch ", () => {
  test("Get /v1/records/fetch respond 400 INCORRECT_ROUTE", async () => {    // Invalid get request
    const response = await request(app).get("/v1/records/fetch");
    expect(response.body).toEqual(responses.INCORRECT_ROUTE);
    expect(response.statusCode).toBe(400);
  });
  test("Post /v1/records/fetch EMPTY Post data should return INCORRECT_REQUEST_FIELDS", async () => {   // Empty Post Data
    const response = await request(app)
    	.post("/v1/records/fetch")
    	.send(testCases.EMPTY_PAYLOAD);
    expect(response.body).toEqual(responses.INCORRECT_REQUEST_FIELDS);
    expect(response.statusCode).toBe(400);
  });

  test("Post /v1/records/fetch WITHOUT startDate field in Post json should return INCORRECT_REQUEST_FIELDS", async () => {  // Without startDate field
    const response = await request(app)
    	.post("/v1/records/fetch")
    	.send(testCases.WITHOUT_STARTDATE);
    expect(response.body).toEqual(responses.INCORRECT_REQUEST_FIELDS);
    expect(response.statusCode).toBe(400);
  });

  test("Post /v1/records/fetch WITHOUT endDate field in Post json should return INCORRECT_REQUEST_FIELDS", async () => {  // Without endDate field
    const response = await request(app)
    	.post("/v1/records/fetch")
    	.send(testCases.WITHOUT_ENDDATE);
    expect(response.body).toEqual(responses.INCORRECT_REQUEST_FIELDS);
    expect(response.statusCode).toBe(400);
  });

  test("Post /v1/records/fetch WITHOUT minCount field in Post json should return INCORRECT_REQUEST_FIELDS", async () => {  // Without minCount field
    const response = await request(app)
    	.post("/v1/records/fetch")
    	.send(testCases.WITHOUT_MINCOUNT);
    expect(response.body).toEqual(responses.INCORRECT_REQUEST_FIELDS);
    expect(response.statusCode).toBe(400);
  });

  test("Post /v1/records/fetch WITHOUT maxCount field in Post json should return INCORRECT_REQUEST_FIELDS", async () => {   // Without maxCount field
    const response = await request(app)
    	.post("/v1/records/fetch")
    	.send(testCases.WITHOUT_MAXCOUNT);;
    expect(response.body).toEqual(responses.INCORRECT_REQUEST_FIELDS);
    expect(response.statusCode).toBe(400);
  });

  test("Post /v1/records/fetch INCORRECT DATE FORMAT in Post json should return INCORRECT_REQUEST_FIELDS", async () => {   // Incorrect Date format
    const response = await request(app)
    	.post("/v1/records/fetch")
    	.send(testCases.INCORRECT_DATEFORMAT);
    expect(response.body).toEqual(responses.INCORRECT_REQUEST_FIELDS);
    expect(response.statusCode).toBe(400);
  });

  test("Post /v1/records/fetch STRING TYPE COUNT in Post json should return INCORRECT_REQUEST_FIELDS", async () => {   // Incorrect count type
    const response = await request(app)
    	.post("/v1/records/fetch")
    	.send(testCases.STRING_COUNT_TYPE);
    expect(response.body).toEqual(responses.INCORRECT_REQUEST_FIELDS);
    expect(response.statusCode).toBe(400);
  });

  test("Post /v1/records/fetch WITH CORRECT PAYLOAD in Post json should return SUCCESS_FETCH_RECORDS With non empty records field", async () => {   // Correct Payload
    const response = await request(app)
    	.post("/v1/records/fetch")
    	.send(testCases.CORRECT_PAYLOAD);
    	expect(response.body).toHaveProperty("code");
    	expect(response.body.code).toBe(0);

    	expect(response.body).toHaveProperty("msg");
    	expect(response.body.msg).toBe("success");

    	expect(response.body).toHaveProperty("records");
    	expect(response.body.records.length).toBeGreaterThan(0);

    expect(response.statusCode).toBe(200);
  });

  test("Post /v1/records/fetch Error response When Database not connected return SUCCESS_FETCH_RECORDS With non empty records field", async () => {   // Correct Payload
  	
  	DbConnection.Get = jest.fn()
  	DbConnection.Get.mockReturnValueOnce(null);

    const response = await request(app)
    	.post("/v1/records/fetch")
    	.send(testCases.CORRECT_PAYLOAD);

    	expect(response.body).toHaveProperty("code");
    	expect(response.body.code).toBe(-1);

    	expect(response.statusCode).toBe(500);
  });
});