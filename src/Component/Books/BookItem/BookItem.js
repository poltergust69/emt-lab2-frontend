import React from "react";
import {Link} from "react-router-dom";

const bookItem = (props) => {
    let button = <a className="btn btn-success" onClick={() => props.onTakeBook(props.book.id)}>Mark as Taken</a>
    if(props.book.availableCopies < 1)
        button = <a className="btn btn-outline-danger disabled" onClick={() => props.onTakeBook(props.book.id)}>Mark as Taken</a>
    return(<tr>
        <td>{props.book.name}</td>
        <td>{props.book.category}</td>
        <td>{props.book.author.name + ' ' + props.book.author.surname}</td>
        <td>{props.book.availableCopies}</td>
        <td>
            <a className="btn btn-danger" onClick={() => props.onDeleteBook(props.book.id)}>Delete</a>
            <Link className="btn btn-primary mx-2"
                  onClick={() => props.onBookEdit(props.book.id)}
                  to={`/books/edit/${props.book.id}`}>Edit</Link>
            { button
            }
        </td>
    </tr>)
}

export default bookItem;