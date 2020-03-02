import axios from "axios";

const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL: `https://reqres.in/api`,
        headers: {
            Authorization: token,
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
          
        }
    })
}

export default axiosWithAuth;