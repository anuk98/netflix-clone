const API_KEY="b09aad7d2e2511f0ee46493fdd79272d"
const request={
    Trending:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
    NetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
    TopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    ActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    ComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    HorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    RomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    Documentries:`/discover/movie?api_key=${API_KEY}&with_genres=99`,

}
export default request;