import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import CarouselHero from "./components/Carousel/CarouselHero"
import Header from "./components/Header/Header"
import MovieList from "./components/MovieList/MovieList"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <CarouselHero />
        <MovieList />
        <MovieList title="Popular movies" />
        <Footer />
      </header>
    </div>
  )
}

export default App
