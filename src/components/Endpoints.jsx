import React from "react";

function Endpoints() {
  return (
    <section
      id="endpoints"
      className="dark:bg-section-background rounded-lg p-6 md:p-8 mb-8 shadow-md border border-slate-700"
    >
      <h2 className="font-sans mt-8 text-primary dark:text-secondary text-2xl font-bold">
        Endpoints
      </h2>
      <h3 className="font-sans mt-8 text-primary dark:text-secondary text-2xl font-bold">
        Generate Book
      </h3>
      <p>
        <span className="bg-accent text-slate-900 px-2 py-1 rounded font-bold mr-2">
          POST
        </span>{" "}
        <span className="bg-primary px-4 py-2 rounded font-bold inline-block mb-4 text-text">
          /api/generate-book
        </span>
      </p>
      <h4 className="font-sans mt-8 text-primary dark:text-secondary text-2xl font-bold">
        Request Body
      </h4>
      <table className="w-full border-separate border-spacing-0 mt-4 overflow-hidden rounded-lg border border-border">
        <thead>
          <tr>
            <th className="bg-primary font-semibold uppercase tracking-wide text-xs text-white p-4 text-left">
              Parameter
            </th>
            <th className="bg-primary font-semibold uppercase tracking-wide text-xs text-white p-4 text-left">
              Type
            </th>
            <th className="bg-primary font-semibold uppercase tracking-wide text-xs text-white p-4 text-left">
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="font-bold text-accent p-4 border-b border-border">
              api
            </td>
            <td className="p-4 border-b border-border">string</td>
            <td className="p-4 border-b border-border">
              The API provider to use. Options: "openai" or "together"
            </td>
          </tr>
          <tr>
            <td className="font-bold text-accent p-4 border-b border-border">
              model
            </td>
            <td className="p-4 border-b border-border">string</td>
            <td className="p-4 border-b border-border">
              The specific model to use (e.g., "gpt-3.5-turbo", "gpt-4",
              "llama-2-70b")
            </td>
          </tr>
          <tr>
            <td className="font-bold text-accent p-4 border-b border-border">
              topic
            </td>
            <td className="p-4 border-b border-border">string</td>
            <td className="p-4 border-b border-border">
              The main topic or theme of the book
            </td>
          </tr>
          <tr>
            <td className="font-bold text-accent p-4 border-b border-border">
              language
            </td>
            <td className="p-4 border-b border-border">string</td>
            <td className="p-4 border-b border-border">
              The language in which the book should be generated
            </td>
          </tr>
          <tr>
            <td className="font-bold text-accent p-4 border-b border-border">
              word_count
            </td>
            <td className="p-4 border-b border-border">integer</td>
            <td className="p-4 border-b border-border">
              The approximate number of words for the generated book
            </td>
          </tr>
        </tbody>
      </table>

      <h4 className="font-sans mt-8 text-primary dark:text-secondary text-2xl font-bold">
        Response
      </h4>
      <pre className="font-mono dark:bg-section-background rounded-md overflow-x-auto whitespace-pre-wrap break-words text-sm border border-slate-700">
        <code>{
    `
       {
        "message": "Book generation started",
        "status": "processing",
        "job_id": "unique-job-identifier"
       }
   `}</code>
      </pre>
    </section>
  );
}

export default Endpoints;
