import React from "react";

//this component will be exported to be imported in App.js
//React.component is class that has all the functionality to create components 
export class Content extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello World!!!!! Content.js</h1>
                <h2>It is {new Date().toLocaleTimeString()}.</h2>
            </div>

        );
    }


}