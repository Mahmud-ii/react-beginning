import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import data from './data';




function App() {
  const cards = data.map(item => {
    return (
      <Card 
        key={item.id}
        {...item}
        // coverImg={item.coverImg} 
        // stats={item.stats} 
        // location={item.location} 
        // title={item.title} 
        // price={item.price} 
        // openSpots={item.openSpots} 
      />
    )
  })

  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <section className="cards-list">
        {cards}
      </section>
    </div>
  );
}

export default App;
