import React, {Component} from "react";
import LibraryService from "../../Repository/LibraryService";
import Navigation from '../../Component/Navigation/Navigation'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import BookAdd from '../Books/BookAdd/BookAdd'
import BookEdit from '../Books/BookEdit/BookEdit'
import Books from '../Books/BookList/BookList'
import Categories from '../Categories/Categories'



class App extends Component{
  constructor() {
    super()
    this.state = {
      books: [],
      authors: [],
      countries: [],
      categories: [],
      categoriesCount: [],
      selectedBook: {}
    }
  }

  render() {
    return (
        <Router>
          <Navigation/>
          <main>
            <div className="container">
              <Routes>
                <Route path={"/books/add"} element={
                      <BookAdd authors={this.state.authors} categories={this.state.categories} onAddBook={this.addBook}/>}
                />

                <Route path={"/books/edit/:id"} element={
                      <BookEdit authors={this.state.authors} categories={this.state.categories} book={this.state.selectedBook} onBookEdit={this.bookEdit}/>}
                />

                <Route path={"/books"} element={
                      <Books books={this.state.books} onDeleteBook={this.deleteBook} onBookEdit={this.getBook} onTakeBook={this.takeBook}/>}
                />


                <Route path={"/"} element={
                      <Books books={this.state.books} onDeleteBook={this.deleteBook} onBookEdit={this.getBook} onTakeBook={this.takeBook}/>}
                />

                <Route path={"/categories"} element={
                    <Categories categories={this.state.categoriesCount}/>}
                />

              </Routes>
            </div>
          </main>
        </Router>
    );
  }


    componentDidMount() {
        this.loadBooks();
        this.loadAuthors();
        this.loadCountries();
        this.loadCategories();
        this.loadCategoriesWithCount();
    }

    loadBooks = () =>{
        LibraryService.fetchBooks()
            .then((data) => {
                this.setState({
                    books: data.data
                })
            });
    }


    loadAuthors = () =>{
        LibraryService.fetchAuthors()
            .then((data) => {
                this.setState({
                    authors: data.data
                })
            });
    }

    loadCountries = () => {
        LibraryService.fetchCountries()
            .then((data) => {
                this.setState({
                    countries: data.data
                })
            })
    }

    loadCategories = () =>{
        LibraryService.fetchCategories()
            .then((data) => {
                this.setState({
                    categories: data.data
                })
            });
    }

    loadCategoriesWithCount = () =>{
        LibraryService.fetchCategoriesCount()
            .then((data) => {
                this.setState({
                    categoriesCount: data.data
                })
            });
    }

    deleteBook = (id) =>{
        LibraryService.deleteBook(id).then(() => {
            this.loadBooks();
        })
    }

    takeBook = (id) =>{
        LibraryService.takeBook(id).then(() => {
            this.loadBooks();
        })
    }

    addBook = (name, author, availableCopies, category) => {
        LibraryService.addBook(name, author, availableCopies, category).then(() => {
            this.loadBooks();
        })
    }


    bookEdit = (id, name, author, availableCopies, category) => {

        LibraryService.editBook(id, name, author, availableCopies, category).then(() => {
            this.loadBooks();
        })
    }

    getBook = (id) => {
        LibraryService.getBook(id).then((data) => {
            this.setState({
                selectedBook: data.data
            })
        })
    }


}

export default App;

