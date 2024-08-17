import React from "react";

function Pricing() {
  return (
    <section
      id="pricing"
      className="dark:bg-section-background rounded-lg p-8 mb-8 shadow-md border border-border"
    >
      <h2 className="font-sans mt-8 text-primary dark:text-secondary text-2xl font-bold">
        API Pricing
      </h2>
      <p className="mt-4">
        Our API pricing is based on the model used and the number of tokens
        processed. Here's a breakdown of the costs:
      </p>
      <table className="w-full border-separate border-spacing-0 mt-4 overflow-hidden rounded-lg border border-border">
        <thead>
          <tr>
            <th className="bg-indigo-500 font-semibold uppercase tracking-wide text-s text-white p-4 text-left">
              API
            </th>
            <th className="bg-indigo-500 font-semibold uppercase tracking-wide text-s text-white p-4 text-left">
              Model
            </th>
            <th className="bg-indigo-500 font-semibold uppercase tracking-wide text-s text-white p-4 text-left">
              Price per 1K tokens
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="font-sans p-4 border-b border-border">OpenAI</td>
            <td className="p-4 border-b border-border">GPT-3.5</td>
            <td className="p-4 border-b border-border">$0.002</td>
          </tr>
          <tr>
            <td className="font-sans p-4 border-b border-border">OpenAI</td>
            <td className="p-4 border-b border-border">GPT-4</td>
            <td className="p-4 border-b border-border">$0.03</td>
          </tr>
          <tr>
            <td className="font-sans p-4 border-b border-border">
              Together AI
            </td>
            <td className="p-4 border-b border-border">Llama-2-70b</td>
            <td className="p-4 border-b border-border">$0.0008</td>
          </tr>
          <tr>
            <td className="font-sans p-4 border-b border-border">
              Together AI
            </td>
            <td className="p-4 border-b border-border">Llama-2-13b</td>
            <td className="p-4 border-b border-border">$0.0006</td>
          </tr>
        </tbody>
      </table>
      <h3 className="font-sans mt-8 text-primary dark:text-secondary text-2xl font-bold">
        Token Estimation
      </h3>
      <p>
        On average, 1 token is approximately 4 characters or 0.75 words. For
        precise pricing, we recommend using our token calculator tool.
      </p>
      <h3 className="text-primary dark:text-secondary mt-8 text-xl font-bold">
        Billing
      </h3>
      <p>
        You will only be charged for the tokens used in generating the book. The
        API tracks token usage and bills accordingly. Detailed usage reports are
        available in your account dashboard.
      </p>
    </section>
  );
}

export default Pricing;
