import React, { useState } from "react";

export default function UrlChecker() {
  const [url, setUrl] = useState<string>("");
  const [status, setStatus] = useState<string | null>(null);

  const checkUrl = async (
    event: React.MouseEvent<HTMLButtonElement>
  ): Promise<void> => {
    event.preventDefault(); // prevent the default form submission

    try {
      const response = await fetch(
        `http://localhost:4000/api/check?url=${url}`
      );

      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }

      const data = await response.json();
      setStatus(data.status);
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);

      const errorMessage =
        error instanceof Error ? error.message : "An unexpected error occurred";
      setStatus(`Error: ${errorMessage}`);
    }
  };

  return (
    <div className="url-checker">
      <h1>URL Checker</h1>
      <form>
        <label htmlFor="url">URL</label>
        <input
          type="text"
          name="url"
          value={url}
          onChange={(event) => setUrl(event.target.value)}
          placeholder="Enter URL"
        />
        <button onClick={checkUrl}>Check URL</button>
        <h2>Status: {status}</h2>
      </form>
    </div>
  );
}
