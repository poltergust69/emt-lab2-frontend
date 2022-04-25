import React from "react";
const BookEdit = (props) => {

    const [formData, updateFormData] = React.useState({
        name: "",
        availableCopies: -1,
        author: -1,
        category: "EMPTY"
    });

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
    }

    const onFormSubmit = (e) => {

        e.preventDefault();
        const name = formData.name !== "" ? formData.name : props.book.name;
        const availableCopies = formData.availableCopies !== -1 ? formData.availableCopies : props.book.availableCopies;
        const author = formData.author !== -1 ? formData.author : props.book.author.id;
        const category = formData.category !== "EMPTY" ? formData.category : props.book.category;
        //id, name, author, availableCopies, category
        props.onBookEdit(props.book.id,name,author,availableCopies,category);
        setTimeout(redirect, 500)
    }

    const redirect = () => {
        window.location.href="http://localhost:3000/books"
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
                           onChange={handleChange}
                           placeholder={props.book.name}
                    />
                </div>
                <div className="form-group my-2">
                    <label htmlFor="availableCopies">Available</label>
                    <input type="text"
                           className="form-control"
                           id="availableCopies"
                           name="availableCopies"
                           placeholder={props.book.availableCopies}
                           onChange={handleChange}
                    />
                </div>
                <div className="form-group my-2">
                    <label>Category</label>
                    <select name="category" className="form-control" onChange={handleChange}>
                        {props.categories.map(category =>{
                                if(props.book.category !== undefined && props.book.category === category)
                                    return <option selected value={category}>{category}</option>
                                else
                                    return <option value={category}>{category}</option>
                            }
                        )}
                    </select>
                </div>
                <div className="form-group my-2">
                    <label>Author</label>
                    <select name="author" className="form-control" onChange={handleChange}>
                        {props.authors.map(author =>{
                                if(props.book.author !== undefined && props.book.author.id === author.id)
                                    return <option selected value={author.id}>{author.name + ' ' + author.surname}</option>
                                else
                                    return <option value={author.id}>{author.name + ' ' + author.surname}</option>
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


export default BookEdit;