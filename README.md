# ChatAI

A modern AI chatbot built with React, Vite, Axios, and the Google Gemini API. The application allows users to ask questions and receive AI-generated responses through a simple, responsive interface.

##Project Purpose

This project was built as a learning exercise to understand the integration of the Google Gemini API with a React application. The primary goal was to explore API communication, handle AI-generated responses, manage environment variables securely, and build a simple conversational interface using modern frontend technologies.

## Features

* AI-powered conversational interface
* Real-time response generation using the Google Gemini API
* Responsive and clean user interface
* Fast development with Vite
* Secure environment variable configuration
* Axios-based API integration

## Tech Stack

* React
* Vite
* JavaScript (ES6+)
* Axios
* Google Gemini API
* CSS

## Project Structure

```text
chatai/
├── public/
├── src/
│   ├── assets/
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── .env.example
├── .gitignore
├── package.json
├── vite.config.js
└── README.md
```

## Installation

Clone the repository:

```bash
git clone https://github.com/your-username/chatai.git
```

Move into the project directory:

```bash
cd chatai
```

Install dependencies:

```bash
npm install
```

Create a `.env` file in the project root and add your Gemini API endpoint:

```env
VITE_GEMINI_API_URL=YOUR_GEMINI_API_ENDPOINT
```

Start the development server:

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:5173
```

## Environment Variables

Create a `.env` file in the project root.

```env
VITE_GEMINI_API_URL=YOUR_GEMINI_API_ENDPOINT
```

Do not commit your `.env` file to version control.

## Future Enhancements

* Chat history
* Dark mode
* Markdown support
* Copy response functionality
* Syntax highlighting for code responses
* Streaming responses
* Conversation management

## Contributing

Contributions are welcome. Feel free to fork the repository, create a new branch, and submit a pull request.

## License

This project is licensed under the MIT License.

## Author

Jiya Agrawal 
