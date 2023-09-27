import React, { useState } from "react";

export default function UrlChecker() {
  const [url, setUrl] = useState<string>("");
  const [status, setStatus] = useState<string | null>(null);

  const checkUrl = async (): Promise<void> => {
    try {
      const response = await fetch("/api/check?url=" + url);
      const data = await response.json();
      setStatus(data.status);
    } catch (error) {
      setStatus("Error fetching");
    }
  };
  return (
    <div className="url-checker">
      <h1> URL Checker</h1>
      <form>
        <label htmlFor="url"> URL </label>
        <input
          type="string"
          name="url"
          value={url}
          onChange={(event) => setUrl(event.target.value)}
          placeholder="Enter URL"
        />
        <button onClick={checkUrl}> Check URL</button>
        <h2> Status: {status} </h2>
      </form>
    </div>
  );
}
