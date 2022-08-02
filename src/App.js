import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import CarouselHero from "./components/Carousel/CarouselHero"
import Header from "./components/Header/Header"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <CarouselHero />
      </header>
    </div>
  )
}

export default App
