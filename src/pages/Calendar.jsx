import Cover from "../components/Cover";
import CarouselLayout from "../components/CarouselLayout";
import { useEffect, useState } from "react";
import { useMovie } from "../helpers/useMovie";
import { nextMoviesUrl } from "../helpers/urls";
// NEXT MOVIES IN CARTEL
export default function Calendar() {
  const [nextMovies, setNextMovies] = useState([]);
  const [coverData, setCoverData] = useState(null);
  const { loadMovies } = useMovie();

  useEffect(() => {
    loadNextMovies();
  }, []);

  const loadNextMovies = async () => {
    const data = await loadMovies(nextMoviesUrl);
    const results = data.results;
    setNextMovies(results);
    setCoverData(results[0]);
  };
  const loadCover = (movie) => {
    setCoverData(movie);
  };

  return (
    <div className="container">
      <Cover data={coverData} />
      {nextMovies && (
        <CarouselLayout
          title="Proximos Estrenos"
          movies={nextMovies}
          setCover={loadCover}
        />
      )}
    </div>
  );
}
