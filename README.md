# getir-assignment
Getir Assignment for Engineer role


# Pre-requisites

Node 14.x.x

# Setup steps

1) npm install
2) Copy .env.example in new file .env and update it with Production credentials

# Start
npm run start

# Running test suites
npm run test

# API Route

Method: POST

Route :  /v1/records/fetch

Payload: 

{
    
    "startDate": "2018-01-01",  // YYYY-MM-DD
    
    "endDate": "2018-02-01",    // YYYY-MM-DD
    
    "minCount": 300,            // Integer type
    
    "maxCount": 400             // Integer type
    
}
