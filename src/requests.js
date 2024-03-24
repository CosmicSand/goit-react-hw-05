import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";
axios.defaults.headers.common["Authorization"] =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OTQ2MDNlYTc2Y2E5MzJkYjUxZTJjNWMxMDdjOWY1YSIsInN1YiI6IjY1ZmNiNTA5MTk3ZGU0MDE4NjE0ZDhhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MIes9M7d8N9ACLcUd0_R7zZ1Wufq5JuiXZQ8MNNGNjM";

export async function filmListRequest() {
  const response = await axios("/trending/movie/day");
  return response.data.results;
}

export async function movieInfoRequest(movieId) {
  const resp = await axios(`/movie/${movieId}`);
  return resp.data;
}

export async function creditsRequest(movieId) {
  const resp = await axios(`/movie/${movieId}/credits`);
  return resp.data.cast.filter((actor) => actor.profile_path);
}

export async function reviewsRequest(movieId) {
  const resp = await axios(`/movie/${movieId}/reviews`);
  return resp.data.results;
}

export async function searchRequest(title) {
  const options = {
    params: { query: title, page: 1, include_adult: false, languag: "en" },
  };
  const resp = await axios(`/search/movie`, options);
  console.log(resp);
  return resp.data.results;
}
