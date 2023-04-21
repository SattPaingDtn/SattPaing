import { BrowserRouter } from "react-router-dom";
import { Navbar, Hero, About } from "./components";
function App() {
  return (
    <BrowserRouter>
      <div className="relative bg-primary">
        <Navbar />
        <Hero />
      </div>
      <About />
    </BrowserRouter>
  );
}

export default App;
