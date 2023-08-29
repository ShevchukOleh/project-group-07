import axios from "axios"

const instance = axios.create({
    baseURL: 'https://taskpro-backend-zulp.onrender.com',
    
})

// const token= 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZWRkMTIzZWFiZjkxMjVmMzI0ODNhMyIsImlhdCI6MTY5MzMyMTMzNSwiZXhwIjoxNjkzNDA0MTM1fQ.fA9XbH9XNFx6_S8_QSkmGifM67V63jMkgqxdr-3jvLU'


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