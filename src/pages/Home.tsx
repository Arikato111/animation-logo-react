import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const MenuList = ["clock", "php-spa", "nexit"];

  useEffect(()=> {
    document.title = "Home"
  }, [])
  return (
    <main>
      <h1 className="header">Animation logo</h1>
      {MenuList.map((ml) => (
        <div className="menu">
          <Link to={`/${ml}`}>{ml}</Link>
        </div>
      ))}
    </main>
  );
}
