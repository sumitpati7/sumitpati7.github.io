import { useState } from "react";
import { Navbar } from "../components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="min-h-screen bg-primary-bg">
      <Navbar/>
    </main>
  );
}

export default App;
