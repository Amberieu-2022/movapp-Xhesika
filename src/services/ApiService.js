export default class ApiService {
  getMovies (page) {
    return fetch(`https://api.themoviedb.org/3/discover/movie?api_key=bdb555b0bf88c623472ee0329fe4dac6&sort_by=popularity.desc&page=1&with_watch_monetization_types=flatrate&language=fr-FR&include_adult=false&include_video=false&query=${page}`)
  }

  getSearch (search) {
    return fetch(`https://api.themoviedb.org/3/search/movie?language=fr-FR&query=${search}&include_adult=false&api_key=bdb555b0bf88c623472ee0329fe4dac6`)
  }

  getSeries (page) {
    return fetch(`https://api.themoviedb.org/3/discover/tv?api_key=bdb555b0bf88c623472ee0329fe4dac6&language=fr-Fr&query=${page}&sort_by=popularity.desc&page=1&timezone=Europe%2FFrance&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`)
  }

  getTvSeries (id) {
    return fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=bdb555b0bf88c623472ee0329fe4dac6&language=fr-FR`)
  }

  getInfo (info) {
    return fetch(`https://api.themoviedb.org/3/movie?api_key=bdb555b0bf88c623472ee0329fe4dac6&language=fr-FR&query=${info}`)
  }

  getMovie (id) {
    return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=9387500ea70ccb66e78501523ae83273&language=fr-FR`)
  }

  getGenres () {
    return fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=bdb555b0bf88c623472ee0329fe4dac6&language=fr-FR')
  }

  getMoviesGenre (page, genre) {
    return fetch(`https://api.themoviedb.org/3/discover/movie?api_key=bdb555b0bf88c623472ee0329fe4dac6&language=fr-FR&page=${page}&with_genres=${genre}`)
  }
}
