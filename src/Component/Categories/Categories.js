import React from "react";
const categories = (props) => {
    return (
        <div className={"container-fluid mm-4 mt-5"}>
            <div className={"row rounded-2"}>
                <div className={"table-responsive"}>
                    <table className={"table table-striped"}>
                        <thead>
                        <tr>
                            <th scope={"col"} className="display-6">Name</th>
                            <th scope={"col"} className="display-6">Books for category</th>
                        </tr>
                        </thead>
                        <tbody>
                        {props.categories.map((term) => {
                            return (
                                <tr>
                                    <td className="">{term.category}</td>
                                    <td className="">{term.count}</td>
                                </tr>
                            );
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default categories;
