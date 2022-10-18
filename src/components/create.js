import React from "react";

//this component will be exported to be imported in App.js
//React.component is class that has all the functionality to create components 
export class Create extends React.Component {
    
    //you should bind the events otherwise won't work
    constructor(){
        super();
    
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeBookTitle=this.onChangeBookTitle.bind(this);
        this.onChangeBookCover=this.onChangeBookCover.bind(this);
        this.onChangeAuthorTitle=this.onChangeAuthorTitle.bind(this);


        this.state = {
            title:'',
            cover:'',
            author:''
        }
    }
    
    //will take an event wheni t get envoked
    handleSubmit(e){
        e.preventDefault();
        console.log(`${this.state.title},  ${this.state.cover}, ${this.state.author}`);
        this.setState({
            title:'',
            cover:'',
            author:''

        })
       
    }
    
     //method to update the state
    onChangeBookTitle(e){
        this.setState({
            title:e.target.value
        })
    }

    //method to update the state
    onChangeBookCover(e){
        this.setState({
            cover:e.target.value
        })
    }
    
    //method to update the state
    onChangeAuthorTitle(e){
        this.setState({
            author:e.target.value
        })
    }


    render() {
        return (

            <div>
                {/* insert the form with handlers that are going to handle the actions */}
                    <form onSubmit={this.handleSubmit}>

                        <div className="form-group">
                            <label>Add Book Title: </label>                            
                            <input type="text"
                                className="form-control"
                                value={this.state.title}
                                onChange={this.onChangeBookTitle}
                            />
                        </div>

                        
                        <div className="form-group">
                            <label>Add Book Cover: </label>                            
                            <input type="text"
                                className="form-control"
                                value={this.state.cover}
                                onChange={this.onChangeBookCover}
                            />
                        </div>

                        
                        <div className="form-group">
                            <label>Add Book Author: </label>                            
                            <input type="text"
                                className="form-control"
                                value={this.state.author}
                                onChange={this.onChangeAuthorTitle}
                            />
                        </div>

                        <input type="submit" value="Submit" />
                    </form>
              
            </div>


        );
    }
}