import axios from 'axios';

let baseUrl ="http://47.96.143.29:5432";
// axios.defaults.headers.common['Authorization'] ="Bearer "+localStorage.getItem("token");
let headers="application/json";

export const GET = (url,params)=>{
    return axios.get(`${baseUrl}${url}`,{params:params}).then(data=>data);
}

export const POST = (url,params)=>{
    return axios.post(`${baseUrl}${url}`,params).then(data=>data);
}

export const DELETE = (url)=>{
    return axios.delete(`${baseUrl}${url}`).then(data=>data);
}

export const PUT = (url,params)=>{
    return axios.put(`${baseUrl}${url}`,params).then(data=>data);
}