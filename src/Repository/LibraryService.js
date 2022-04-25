import axios from "../Custom-Axios/axios";

const LibraryService = {
    fetchAuthors: () => {
        return axios.get("/authors");
    },
    fetchCategories: () => {
        return axios.get("/categories");
    },
    fetchCategoriesCount: () => {
        return axios.get("/categories/count");
    },
    fetchCountries: () => {
        return axios.get("/countries");
    },
    fetchBooks: () => {
        return axios.get("/books");
    },
    deleteBook: (id) => {
        return axios.delete(`/books/delete/${id}`);
    },
    addBook: (name, author, availableCopies, category) => {
        return axios.put('/books/add',{
            "name": name,
            "author": Number(author),
            "category": category,
            "availableCopies": Number(availableCopies)
        })
    },
    editBook: (id, name, author, availableCopies, category) => {
        return axios.post(`/books/edit/${id}`,{
            "name": name,
            "author": Number(author),
            "category": category,
            "availableCopies": Number(availableCopies)
        })
    },
    takeBook: (id) => {
        return axios.put(`/books/take/${id}`)
    },
    getBook: (id) => {
        return axios.get(`/books/get/${id}`)
    }
}

export default LibraryService;
