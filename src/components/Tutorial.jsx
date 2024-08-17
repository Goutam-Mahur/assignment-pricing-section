import React from "react";

function Tutorial() {
  return (
    <section
      id="tutorial"
      className="dark:bg-section-background rounded-lg p-6 md:p-8 mb-8 shadow-md border border-slate-700"
    >
      <h2 className="font-sans mt-8 text-primary dark:text-secondary text-xl font-bold">
        Tutorial
      </h2>

      <h3 className="font-sans mt-8 text-primary dark:text-secondary text-xl font-bold">
        Step 1: Obtain an API Key
      </h3>
      <p className="mb-4">
        Generate an API key using the button in the Authentication section
        above.
      </p>

      <h3 className="font-sans mt-8 text-primary dark:text-secondary text-xl font-bold">
        Step 2: Make a Request
      </h3>
      <p className="mb-4">
        Use your preferred programming language or tool to make a POST request
        to the /api/generate-book endpoint. Include your API key in the header
        and the required parameters in the request body.
      </p>

      <h3 className="font-sans mt-8 text-primary dark:text-secondary text-xl font-bold">
        Step 3: Handle the Response
      </h3>
      <p className="mb-4">
        The API will return a response with a job ID. You can use this ID to
        check the status of your book generation job.
      </p>

      <h3 className="font-sans mt-8 text-primary dark:text-secondary text-xl font-bold">
        Step 4: Retrieve the Generated Book
      </h3>
      <p className="mb-4">
        Once the job is complete, you can retrieve the generated book using the
        job ID (endpoint to be implemented).
      </p>
    </section>
  );
}

export default Tutorial;
