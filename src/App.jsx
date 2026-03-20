import { Navbar } from "./components/Navbar";
import HeroTitle from "./components/HeroTitle";

function App() {

  return (
    <main className="min-h-screen bg-primary-bg">
      <Navbar/>
      <div className="min-h-[calc(100vh-74px)] w-full px-6">
        <div className="container mx-auto">
          <HeroTitle />
        </div>
      </div>
    </main>
  );
}

export default App;
