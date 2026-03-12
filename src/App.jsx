import { useState } from "react";
import { Navbar } from "../components/Navbar";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="min-h-screen">
      <Navbar/>
    </main>
  );
}

export default App;
