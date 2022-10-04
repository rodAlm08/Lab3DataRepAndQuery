import React from "react";
//this component will be exported to be imported in App.js
//React.component is class that has all the functionality to create components 
export class Header extends React.Component {
    render() {
        return (
            <div >
                <h1>This is my Header</h1>
                <h1>My Header in another component</h1>
                
            </div>

        );
    }


}