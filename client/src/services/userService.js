import axios from "axios";
import API_CONFIG from "../config/apiConfig";

const API_BASE_URL = API_CONFIG.API_BASE_URL;

// Replace 'users' with 'books' in the endpoints

const getBooks = () => axios.get(`${API_BASE_URL}/books`).then(res => res.data);
const getBookById = (id) => axios.get(`${API_BASE_URL}/books/${id}`).then(res => res.data);
const createBook = (book) => axios.post(`${API_BASE_URL}/books`, book);
const updateBook = (book) => axios.put(`${API_BASE_URL}/books/${book.id}`, book);
const deleteBook = (id) => axios.delete(`${API_BASE_URL}/books/${id}`);

export default { getBooks, getBookById, createBook, updateBook, deleteBook };
