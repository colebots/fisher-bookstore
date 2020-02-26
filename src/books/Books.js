import React from "react";
import "./Books.css";
import { getDefaultNormalizer, render } from "@testing-library/react";

render() 
    return (
        <div className="Books">
            <div className="lander">
                <BookDisplay books={this.state.books} />
            </div>
        </div>
    );
}

constructor(props) {
    super(props);
    this.state = {
        books: [
            {
                id: 1,
                title: "Domain Driven Design",
                author: "Eric Evans",
                isbn: "978-032112517"
            },
            {
                id: 2,
                title: "Harry Potter and the Deathly Hallows",
                author: "J.K. Rowling",
                isbn: "978-0605039070"
            },
            {
                id: 3,
                title: "Harry Potter and the Sorceror's Stone",
                author: "J.K. Rowling",
                isbn: "978-0590353427"
            },
            {
                id: 4,
                title: "Accelerate",
                author: "Nicole Forsgren",
                isbn: "978-1942788331"
            },
            {
                id: 5,
                title: "The Lord of the Rings",
                author: "J.R.R. Tolkien",
                isbn: "978-0544003415"
            },
            {
                id: 6,
                title: "The Hobbit",
                author: "J.R.R. Tolkien",
                isbn: "978-0547928227"
            }
        ]
    };
}