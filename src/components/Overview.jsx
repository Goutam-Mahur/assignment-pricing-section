import React from "react";

function Overview() {
  return (
    <section
      id="overview"
      className=" dark:bg-section-background rounded-lg p-6 md:p-8 mb-8 shadow-md border border-slate-700"
    >
      <h2 className="font-sans mt-8 text-primary dark:text-secondary text-2xl font-bold">
        Overview
      </h2>
      <p>
        The Book Generator API allows you to generate books on various topics
        using different language models. This documentation provides details on
        how to use the API, including authentication, available endpoints, and
        code examples.
      </p>
    </section>
  );
}

export default Overview;
