import logo from "./logo.svg";
import "./App.css";
import Row from "./Row";
import requests from "./request";
import Banner from "./Banner"
function App() {
  return (
    <div className="App">

    <Banner />
      <Row
        title="Netflix Originals"
        fetchURL={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchURL={requests.fetchTrending} />
      <Row title="Top Rated" fetchURL={requests.fetchTopRated} />
      <Row title="Action Movies" fetchURL={requests.fetchActionMovies} />
      <Row title="Comedy" fetchURL={requests.fetchComedyMovies} />
      <Row title="Horror" fetchURL={requests.fetchHorrorMovies} />
      <Row title="Romance" fetchURL={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchURL={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
