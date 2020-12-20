import axios from 'axios';

/*base url to make request to the movi databae*/
const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
})

/*axios.get('abc') => 'https://api.themoviedb.org/3/abc'*/
export default instance;
