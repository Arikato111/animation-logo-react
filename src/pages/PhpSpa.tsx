import React, { useEffect } from "react";

export default function PhpSpa() {
  useEffect(() => {
    document.title = "PHP_SPA";
  }, []);
  return (
    <div>
      <link rel="stylesheet" href="/php-spa.css" />
      <div className="content">
        <div className="box">
          <div className="triangle"></div>
          <div className="triangle fixed"></div>
        </div>
      </div>
    </div>
  );
}
