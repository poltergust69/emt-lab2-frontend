import React from "react";
import BookItem from '../BookItem/BookItem'
import ReactPaginate from "react-paginate";
import {Link} from "react-router-dom";

class Books extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            page: 0,
            size: 5
        }
    }


    componentDidMount() {
    }


    render(){
        const offset = this.state.size * this.state.page;
        const nextPageOffset = offset + this.state.size;
        const pageCounted = Math.ceil(this.props.books.length / this.state.size)
        const books = this.getBooksPage(offset, nextPageOffset);

        return (
            <div className={"container-fluid mm-4 mt-5 vh-50"}>
                <div className={"row rounded-2 h-100"}>
                    <div className={"table h-100"}>
                        <table className={"table table-striped h-100"}>
                            <thead>
                            <tr>
                                <th scope={"col"} className="display-6 col-2">Name</th>
                                <th scope={"col"} className="display-6 col-2">Category</th>
                                <th scope={"col"} className="display-6 col-2">Author</th>
                                <th scope={"col"} className="display-6 col">Stock</th>
                            </tr>
                            </thead>
                            <tbody>
                            {books}
                            </tbody>
                        </table>
                    </div>

                    <ReactPaginate previousLabel={`Previous`}
                                   previousClassName={"page-link col text-decoration-none"}
                                   previousLinkClassName={"text-decoration-none text-info"}
                                   nextLabel={`Next`}
                                   nextClassName={"page-link col"}
                                   breakLabel={<a href="/#">...</a>}
                                   breakClassName={"break-me"}
                                   pageClassName={"page-link  col text-info"}
                                   pageCount={pageCounted}
                                   marginPagesDisplayed={2}
                                   pageRangeDisplayed={5}
                                   onPageChange={this.handleChange}
                                   containerClassName={"pagination container w-25 text-center"}
                                   activeClassName={"bg-info text-light"}
                                   nextLinkClassName={"text-decoration-none text-info"}
                                   disabledLinkClassName={"disabled text-muted text-decoration-none"}
                    />
                </div>
                <div className="container justify-content-center align-content-center text-center">
                    <Link className={"btn btn-dark btn-lg w-25"} to={"/books/add"}>Add Book</Link>
                </div>
            </div>
        );
    }

    handleChange = (data) => {
        let selected = data.selected;
        this.setState({
            page: selected
        })
    }

    getBooksPage = (offset, nextPageOffset) => {
        {
            return this.props.books.map((term) => {
                return (
                    <BookItem
                        book={term}
                        onDeleteBook={this.props.onDeleteBook}
                        onTakeBook={this.props.onTakeBook}
                        onBookEdit={this.props.onBookEdit}
                    />
                );
            }).filter((product, index) => {
                return index >= offset && index < nextPageOffset;
            })
        }
    }
}


export default Books;
