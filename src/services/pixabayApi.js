
import axios from 'axios';

export default function pixabayApi (query, page) {
   return axios
    .get(`https://pixabay.com/api/?q=${query}&page=${page}&key=16743632-772c8ce0f5559f9ded6b8a6e6&image_type=photo&orientation=horizontal&per_page=12`)
    .then(response=>response.data.hits)
}