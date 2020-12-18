import React, { useEffect } from 'react';
import { Jumbotron } from 'reactstrap';
const Home=()=> {
    useEffect(() => {
        document.title="Home   ||    Notify"
        
    }, [])
    return (
        <div>
            <Jumbotron >
                <h1 className="display-3">Welcome to Notify</h1>
                <p>Write your Notes here</p>
                <small><p>This is version 1.</p></small>
            </Jumbotron>
        </div>
    )
}
export default Home