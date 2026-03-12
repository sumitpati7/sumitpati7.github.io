import { useState } from "react";
import { Navbar } from "../components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="min-h-screen bg-primaryBg">
      <Navbar/>
    </main>
  );
}

export default App;
