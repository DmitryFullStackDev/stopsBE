# 🚏 Stops Backend (stopsBE)

This is the backend service for the [Stops Frontend](https://github.com/DmitryFullStackDev/stopsFE) application — a simple app that displays a list of transportation stops and their details.

## 🛠 Tech Stack

- **Node.js** + **Express**
- **CORS**, **dotenv**, **morgan**
- **nodemon** for development

## 📦 Features

- REST API to manage stop points
- Endpoints to fetch all stops
- Cross-origin support for frontend communication

## Example POST /stops Body:

| Method | Endpoint | Description     |
| ------ | -------- | --------------- |
| GET    | `/stops` | Fetch all stops |

response example:
```yaml
    [{
        "line": 110,
        "stop": "Cmentarz Grębałów",
        "order": 9,
        "time": "12:38"
    }]
```

## Running server is here
https://stops-be.vercel.app/stops
