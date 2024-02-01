import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data.js";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <section className="cards-container">
        {data.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </section>
    </>
  );
};

export default App;
