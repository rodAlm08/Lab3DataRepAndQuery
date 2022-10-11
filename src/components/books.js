import React from "react";
import { BookItens } from "./bookItens";

export class Books extends React.Component{
    render(){

        return this.props.books.map(
            (book)=>{
                return <BookItens book={book} key={book.isbn}></BookItens>
            }

        );
    }
}