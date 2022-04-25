import React from "react";

const navigation = (props) => {
    return(
        <div>
            <nav className="navbar navbar-expand-md navbar-dark navbar-fixed bg-dark p-2 position-sticky">
                <a className="navbar-brand ms-3 me-5" href="/books">Library Manager</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                        aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse w-100 align-content-center" id="navbarCollapse">
                    <ul className="navbar-nav w-100 align-content-center">
                        <li className="nav-item active my-auto">
                            <a className="nav-link" href={"/books"}>Books</a>
                        </li>
                        <li className="nav-item active my-auto">
                            <a className="nav-link" href={"/categories"}>Categories</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>

    )
}

export default navigation;