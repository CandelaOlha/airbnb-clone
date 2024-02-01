import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data.js";

console.log(data);

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      {data.map((item) => (
        <Card
          key={item.id}
          img={item.coverImg}
          rating={item.stats.rating}
          reviewCount={item.stats.reviewCount}
          location={item.location}
          title={item.title}
          price={item.price}
        />
      ))}
    </>
  );
};

export default App;
