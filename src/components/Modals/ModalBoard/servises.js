import axios from "axios"

const instance = axios.create({
    baseURL: 'https://taskpro-backend-zulp.onrender.com',
    
})

export const setToken = (token) => {
    instance.defaults.headers.common['Authorization'] = token
}

export const getIcon = async (token) => {
    setToken(`Bearer ${token}`);
    const {data} = await instance.get(`/api/board/icon`)
    return data;
}

export const getImage = async (token) => {
    setToken(`Bearer ${token}`);
    const {data} = await instance.get(`/api/board/background`)
    return data;
}