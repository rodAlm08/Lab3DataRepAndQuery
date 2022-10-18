import React from "react";
import { Books } from "./books";
import axios from "axios";

//this component will be exported to be imported in App.js
//React.component is class that has all the functionality to create components 
export class Read extends React.Component{
    //when my componentes become visible what I want to do
    componentDidMount() {
        //axios make a http request and get back a response
        axios.get('https://jsonblob.com/api/jsonblob/1027219693823606784')
        //call back function
        .then((response)=>{
            this.setState({
                books: response.data
            })

        })
        //in case thinks goes wrong
        .catch(function(error){
            console.log(error);
        });
    }

    //create a state object and associate with array of books
    state = {
        books: [
           
            ]
    }
    
    //will embeded 
    render(){
        return(
            <div>

                <Books books={this.state.books}></Books>

            </div>



        );
    }

}