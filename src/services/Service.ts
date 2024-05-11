import axios from "axios";

const api = axios.create({
  baseURL: 'https://memora-l79v.onrender.com'
})

export const createUser = async(url: string, data: Object, setData: Function) => {
  const response = await api.post(url, data)
  setData(response.data)
}

export const login = async(url: string, data: Object, setData: Function) => {
  const response = await api.post(url, data)
  setData(response.data)
}

export const search = async(url: string, setData: Function, header: Object) => {
  const response = await api.get(url, header)
  setData(response.data)
}

export const create = async(url: string, data: Object, setData: Function, header: Object) => {
  const response = await api.post(url, data, header)
  setData(response.data)
}

export const update = async(url: string, data: Object, setData: Function, header: Object) => {
  const response = await api.put(url, data, header)
  setData(response.data)
}

export const deleting = async(url: string, header: Object) => {
  await api.delete(url, header)
}