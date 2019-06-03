// import axios from 'axios';

export { mock } from './mocks';

// setup baseUrl
const baseUrl = 'http://127.0.0.1:8080';

// create and initialize axios
// const ax = axios.create({
//     baseURL: baseUrl,
//     // withCredentials: true,
// });

const init = {
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
};

export const get = (url) => fetch(`${baseUrl}${url}`);

export const post = (url, body = {}) => fetch(`${baseUrl}${url}`, { ...init, method: 'POST', body: JSON.stringify(body) });

export const put = (url, body = {}) => fetch(`${baseUrl}${url}`, { ...init, method: 'PUT', body: JSON.stringify(body) });

export const del = (url) => fetch(`${baseUrl}${url}`, { method: 'DELETE' });

export const img = (uuid) => `${baseUrl}/attachments/images/${uuid}`;
