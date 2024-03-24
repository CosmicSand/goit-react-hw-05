import { Outlet } from "react-router-dom";
import AdditionInfo from "../components/AdditionInfo/AdditionInfo";
import MovieCard from "../components/MovieCard/MovieCard";

export default function MovieDetailsPage() {
  return (
    <main>
      <MovieCard />
      <AdditionInfo />
      <Outlet />
    </main>
  );
}
