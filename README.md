# AI Safety Incident Management System

A Node.js, Express, and MongoDB application designed to manage and record AI safety incidents efficiently. This system provides a simple REST API to create, view, and manage incident reports, helping teams track and respond to AI-related safety issues.

## Features

- Create new AI safety incidents
- Fetch all incidents
- Filter incidents based on severity (Low, Medium, High)

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose (ODM)

## Installation

Clone the repository:

```bash
git clone https://github.com/jitbiswas123/AI-Safety-Incident-Management-System.git
cd AI-Safety-Incident-Management-System
```

Install dependencies:

```bash
npm install
npm install dotenv
npm install express mongoose
```

Set up environment variables:

Create a `.env` file and add your MongoDB URI:

```ini
MONGO_URI=your_mongodb_connection_string
```

Start the server:

```bash
npm start
```

The server will run on [http://localhost:3000/](http://localhost:3000/)

## API Endpoints

### Create a New Incident

**POST** `/incidents`

Request Body:

```json
{
  "title": "Self-driving car crash",
  "description": "Tesla Model X failed to detect a wall",
  "severity": "High"
}
```

Response: Returns the created incident object.

---

### Get All Incidents

**GET** `/incidents`

Response: List of all incidents.

---

### Get Incidents by Severity

**GET** `/incidents?severity=High`

Response: List of incidents filtered by severity.

## Folder Structure

```bash
/models
    Incident.js
app.js
package.json
README.md
.env
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.

---

🚀 Happy Building!
