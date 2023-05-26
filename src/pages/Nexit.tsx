import React, { useEffect } from "react";

export default function Nexit() {
  useEffect(() => {
    document.title = "Nexit";
  }, []);
  return (
    <div>
      <link rel="stylesheet" href="/nexit.css" />
      <div className="box">
        <div className="triangle" />
        <div className="triangle reverse" />
      </div>
    </div>
  );
}
