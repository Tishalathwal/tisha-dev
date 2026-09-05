# Tisha Lathwal — Portfolio (MERN Stack)

A personal portfolio website built with the MERN stack — React on the frontend, Express and MongoDB on the backend to handle contact form submissions.

## Live Demo
[tishalathwalportfolio.netlify.app](https://tishalathwalportfolio.netlify.app)

## Tech Stack

**Frontend**
- React (Vite)
- Tailwind CSS
- Dark mode support

**Backend**
- Node.js
- Express.js
- MongoDB (Mongoose)

## Features
- Responsive design with dark/light mode toggle
- Scroll-reveal animations
- Services, Projects, About, Certifications, and Contact sections
- Contact form connected to a MongoDB database via a REST API

## Project Structure

```
portfolio-mern-v2/
├── client/          # React frontend
│   └── src/
│       ├── components/
│       └── hooks/
└── server/          # Express backend
    ├── models/
    ├── controllers/
    └── routes/
```

## Getting Started

### Backend Setup
```bash
cd server
npm install
```

Create a `.env` file (based on `.env.example`) and add your MongoDB connection string:
```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

Run the server:
```bash
node server.js
```

### Frontend Setup
```bash
cd client
npm install
npm run dev
```

The app will be available at `http://localhost:5173`.

## Contact
- Email: tishalathwal55@gmail.com
- LinkedIn: [linkedin.com/in/tisha-lathwal](https://www.linkedin.com/in/tisha-lathwal)
- GitHub: [github.com/Tishalathwal](https://github.com/Tishalathwal)