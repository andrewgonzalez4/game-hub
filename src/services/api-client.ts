import axios from "axios";


export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '0c0d32d17ed6488a8cbcb2547c262e07'
    }
})