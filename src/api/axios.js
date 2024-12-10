const apiURL = 'http://localhost:1337/api/';
const imageURL = 'http://localhost:1337/';
const axiosInstance = axios.create({
    baseURL: apiURL,
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json'
    }
});