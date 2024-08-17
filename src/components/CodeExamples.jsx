import React from "react";

function CodeExamples() {
  const pythonCode = `import requests

API_KEY = "your_api_key_here"
API_ENDPOINT = "https://tryBookAI.com/api/generate-book"

headers = {
    "Content-Type": "application/json",
    "X-API-Key": API_KEY
    }

data = {
    "api": "openai",
    "model": "gpt-3.5-turbo",
    "topic": "The Future of Artificial Intelligence",
    "language": "English",
    "word_count": 5000
    }

response = requests.post(API_ENDPOINT, json=data, headers=headers)

if response.status_code == 200:
    result = response.json()
    print(f"Book generation started. Job ID: {result['job_id']}")
else:
    print(f"Error: {response.status_code} - {response.text}")`;

  const jsCode = `
const axios = require('axios');

const API_KEY = 'your_api_key_here';
const API_ENDPOINT = 'https://tryBookAI.com/api/generate-book';

const headers = {
    'Content-Type': 'application/json',
    'X-API-Key': API_KEY
    };

const data = {
    api: 'openai',
    model: 'gpt-3.5-turbo',
    topic: 'The Future of Artificial Intelligence',
    language: 'English',
    word_count: 5000
    };

axios.post(API_ENDPOINT, data, { headers })
    .then(response => {
        console.log(\`Book generation started. Job ID: \${response.data.job_id}\`);
    })
    .catch(error => {
        console.error('Error:', error.response ? error.response.data : error.message);
    });`;

  return (
    <section
      id="code-examples"
      className="dark:bg-section-background rounded-lg p-6 md:p-8 mb-8 shadow-md border border-border"
    >
      <h2 className="font-sans mt-8 text-primary dark:text-secondary text-2xl font-bold">
        Code Examples
      </h2>
      <h3 className="font-sans mt-8 text-primary dark:text-secondary text-2xl font-bold">
        Python
      </h3>
      <pre className="font-mono dark:bg-section-background rounded-md overflow-x-auto whitespace-pre-wrap break-words text-lg p-3 border border-border">
        <code>{pythonCode}</code>
      </pre>

      <h3 className="mt-8 text-primary dark:text-secondary font-semibold text-xl pb-1">
        JavaScript (Node.js)
      </h3>
      <pre className="font-mono dark:bg-section-background rounded-md overflow-x-auto whitespace-pre-wrap break-words text-lg p-3 border border-border">
        <code>{jsCode}</code>
      </pre>
    </section>
  );
}

export default CodeExamples;
