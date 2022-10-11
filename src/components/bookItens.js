import React from "react";
import { Books } from "./books";
import { Card } from "react-bootstrap";

export class BookItens extends React.Component {

    render() {
        return (

            <Card>
                <Card.Header>{this.props.book.title}</Card.Header>
                <Card.Body>
                    <blockquote>
                        <img src={this.props.book.thumbnailUrl} width="200" height="200"></img>
                        <footer>
                            {this.props.book.authors[0]}
                        </footer>
                    </blockquote>
                </Card.Body>
            </Card>

        );
            /* <div>
                <h3>{this.props.book.title}</h3>
                <img src={this.props.book.thumbnailUrl} width="200" height="200"></img>
                <h4>{this.props.book.authors[0]}</h4>
            </div>
 */}

     
}