import React, { useState } from "react";

function Authentication() {
  const [apiKey, setApiKey] = useState("");

  const generateApiKey = async () => {
    try {
      const response = await fetch("https://trybookai.com/generate-api-key", {
        method: "POST",
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const generatedApiKey = await response.json();
      setApiKey(generatedApiKey.api_key);
    } catch (error) {
      console.error("Error generating API key:", error);
      setApiKey("Error generating API key, please try again.");
    }
  };

  return (
    <section
      id="authentication"
      className="dark:bg-section-background rounded-lg p-8 md:p-8 mb-8 shadow-md border border-slate-700"
    >
      <h2 className="font-sans mt-8 text-primary dark:text-secondary text-2xl font-bold">
        Authentication
      </h2>
      <p>
        To use the API, you need to include your API key in the header of each
        request:
      </p>
      <pre className="mt-4">
        <code className="font-mono dark:bg-section-background rounded-md m-2 p-2  overflow-x-auto whitespace-pre-wrap break-words text-sm border border-slate-700 font-bold">
          X-API-Key: YOUR_API_KEY
        </code>
      </pre>
      <p className="py-2">To generate an API key, use the button below:</p>
      <button
        onClick={generateApiKey}
        className="bg-accent text-slate-900 border-0 p-2 rounded cursor-pointer text-lg font-bold transition duration-300 transform mt-4 hover:bg-primary -translate-y-0.5"
      >
        Generate API Key
      </button>
      <div
        id="apiKeyDisplay"
        className="mt-4 p-2 dark:bg-section-background rounded font-mono border border-border break-all"
      >
        {apiKey && (
          <div>
            Your API Key: <strong>{apiKey}</strong>
          </div>
        )}
      </div>
    </section>
  );
}

export default Authentication;
