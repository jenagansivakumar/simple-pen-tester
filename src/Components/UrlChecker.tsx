import React, { useState } from "react";

export default function UrlChecker() {
  const [url, setUrl] = useState("");
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
      </form>
    </div>
  );
}
