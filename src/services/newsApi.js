import axios from 'axios';

const fetchNewsWithQuery = (searchQuery, page) => {
    return (axios
    .get(`https://hn.algolia.com/api/v1/search?query=${searchQuery}&page=${page}`)
    .then(response=> response.data.hits)
    )
}

export default {
    fetchNewsWithQuery,
}