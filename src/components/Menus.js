import React from 'react'
import {ListGroup, ListGroupItem} from "reactstrap"
import {Link, to} from "react-router-dom"
const Menus = () => {
    return (
        <div>
            <ListGroup>
                <Link className="list-group-item list-group-item-action " tag="a" to="/" action >
                    Home
                </Link>
                <Link className="list-group-item list-group-item-action" tag="a" to="/add-note" action >
                    Add Note
                </Link>
                <Link className="list-group-item list-group-item-action" tag="a" to="/view-notes" action >
                    View
                </Link>
                <Link className="list-group-item list-group-item-action" tag="a" to="#!" action >
                    About Us
                </Link>
            </ListGroup>
        </div>
    )
}

export default Menus
