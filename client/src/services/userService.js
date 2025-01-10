import axios from "axios";
import API_CONFIG from "../config/apiConfig";

const API_BASE_URL = API_CONFIG.API_BASE_URL;

const getUsers = () => axios.get(`${API_BASE_URL}/users`).then(res => res.data);
const getUserById = (id) => axios.get(`${API_BASE_URL}/users/${id}`).then(res => res.data);
const createUser = (user) => axios.post(`${API_BASE_URL}/users`, user);
const updateUser = (user) => axios.put(`${API_BASE_URL}/users/${user.id}`, user);
const deleteUser = (id) => axios.delete(`${API_BASE_URL}/users/${id}`);

export default { getUsers, getUserById, createUser, updateUser, deleteUser };
