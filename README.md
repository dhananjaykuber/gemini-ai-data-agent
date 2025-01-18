# AI Data Agent with Gemini and MongoDB

A Node.js application that uses Google's Gemini AI to process natural language queries and convert them into MongoDB operations. The system allows users to query student data using plain English and receive both structured data and natural language responses.

## Features

- Natural language query processing using Gemini AI
- MongoDB integration for data storage and retrieval
- Custom function declarations for common database operations
- Automatic query generation from natural language input
- Natural language response generation for query results
- REST API endpoints for data querying

## API Endpoints

### Natural Language Query

```http
POST /query
Content-Type: application/json

{
  "query": "Find students with percentage above 90% and sort based on the percentage and only include rollNo, name, percentage, grade and class of students"
}
```

### Response

```json
{
  "result": [
    {
      "_id": "678bc625fa5e914fc3c1a1ea",
      "rollNo": 1004,
      "name": "Sarah Davis",
      "percentage": 95.1,
      "grade": "A+",
      "class": "10A"
    },
    {
      "_id": "678bc625fa5e914fc3c1a1f6",
      "rollNo": 1016,
      "name": "Mia Rodriguez",
      "percentage": 94.7,
      "grade": "A+",
      "class": "10A"
    },
    {
      "_id": "678bc625fa5e914fc3c1a1f0",
      "rollNo": 1010,
      "name": "Olivia Garcia",
      "percentage": 93.8,
      "grade": "A+",
      "class": "10A"
    },
    {
      "_id": "678bc625fa5e914fc3c1a1fa",
      "rollNo": 1020,
      "name": "Amelia Baker",
      "percentage": 92.8,
      "grade": "A+",
      "class": "10A"
    },
    {
      "_id": "678bc625fa5e914fc3c1a1e8",
      "rollNo": 1002,
      "name": "Emma Wilson",
      "percentage": 92.3,
      "grade": "A+",
      "class": "10A"
    },
    {
      "_id": "678bc625fa5e914fc3c1a1ee",
      "rollNo": 1008,
      "name": "Sophia Anderson",
      "percentage": 91.2,
      "grade": "A+",
      "class": "10A"
    },
    {
      "_id": "678bc625fa5e914fc3c1a1f3",
      "rollNo": 1013,
      "name": "Alexander White",
      "percentage": 90.4,
      "grade": "A+",
      "class": "10A"
    }
  ],
  "naturalLanguageResponse": "Seven students achieved above 90% in their class.  Sarah Davis (roll no. 1004) scored the highest with 95.1%, followed by Mia Rodriguez (roll no. 1016) with 94.7%. All seven students received an A+ grade and are in class 10A.\n"
}
```

### Natural Language Query

```http
POST /query
Content-Type: application/json

{
  "query": "give the all fields of student model"
}
```

### Response

```json
{
  "result": {
    "documentCount": 20,
    "schema": [
      "_id",
      "rollNo",
      "name",
      "percentage",
      "grade",
      "class",
      "__v",
      "createdAt",
      "updatedAt"
    ],
    "example": {
      "_id": "678bc625fa5e914fc3c1a1e7",
      "rollNo": 1001,
      "name": "John Smith",
      "percentage": 87.5,
      "grade": "A",
      "class": "10A",
      "__v": 0,
      "createdAt": "2025-01-18T15:17:57.168Z",
      "updatedAt": "2025-01-18T15:17:57.168Z"
    }
  },
  "naturalLanguageResponse": "The student model has the following fields: `_id`, `rollNo`, `name`, `percentage`, `grade`, `class`, `__v`, `createdAt`, and `updatedAt`.  There are currently 20 student documents in the database.  The example shows a student with `rollNo` 1001, named John Smith, achieving 87.5% and a grade of A in class 10A.\n"
}
```

#### Helpful Resources

- [Intro to function calling with the Gemini API](https://ai.google.dev/gemini-api/docs/function-calling)
- [Build an AI data exploration agent with Gemini](https://ai.google.dev/gemini-api/tutorials/sql-talk)

###

Developed by [Dhananjay Kuber](dhananjaykuber.in)
