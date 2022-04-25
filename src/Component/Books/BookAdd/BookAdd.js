import React from "react";
const BookAdd = (props) => {

    const [formData, updateFormData] = React.useState({
        name: "",
        availableCopies: -1,
        author: 4,
        category: "DRAMA"
    });

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        const name = formData.name
        const availableCopies = formData.availableCopies
        const author = formData.author
        const category = formData.category
        props.onAddBook(name, author, availableCopies, category);

        setTimeout(redirect, 500)
    }

    const redirect = () => {
        window.location.href="https://frontend-lab2.herokuapp.com/books"
    }


    return(
        <div className="container mt-5 mx-auto w-50">
            <form onSubmit={onFormSubmit}>
                <div className="form-group my-2">
                    <label htmlFor="name" className="text-">Product name</label>
                    <input type="text"
                           className="form-control"
                           id="name"
                           name="name"
                           required
                           onChange={handleChange}
                    />
                </div>
                <div className="form-group my-2">
                    <label htmlFor="availableCopies">Available</label>
                    <input type="text"
                           className="form-control"
                           id="availableCopies"
                           name="availableCopies"
                           required
                           onChange={handleChange}
                    />
                </div>
                <div className="form-group my-2">
                    <label>Category</label>
                    <select name="category" className="form-control" onChange={handleChange}>
                        {props.categories.map(category =>{
                                return <option selected value={category}>{category}</option>
                            }
                        )}
                    </select>
                </div>
                <div className="form-group my-2">
                    <label>Author</label>
                    <select name="author" className="form-control" onChange={handleChange}>
                        {props.authors.map(author =>{
                                return <option selected value={author.id}>{author.name + ' ' + author.surname}</option>
                            }
                        )}
                    </select>
                </div>
                <div className="container-fluid">
                    <button id="submit" type="submit" className="btn btn-primary w-25 btn-lg mt-2">Submit</button>
                </div>
            </form>
        </div>
    )
}


export default BookAdd;