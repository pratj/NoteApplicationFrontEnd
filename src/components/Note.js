import axios from 'axios';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  Button, Card,
  CardBody,



  CardFooter, CardSubtitle,
  CardText,


  Container
} from "reactstrap";
import base_url from '../api/bootapi';


const Note=({note, update})=> {

  const deleteNote=(id)=>{
     axios.delete(`${base_url}/notes/${id}`).then(
       (response)=>{
         toast.success("Deleted!")
         update(id )
       },(error)=>{
         toast.error("Unable to delete")
       }
     )
  }
  const history = useHistory()
  const handleButtonClick = (event) => {
    history.push(event.target.value)
  }
    return (
<Card className="text-center">
  <CardBody>
    <CardSubtitle className="font-weight-bold">{note.userName}</CardSubtitle>
    <CardText>{note.notes}</CardText>
    <CardFooter className="font-italic small">{note.creationTime}</CardFooter>
    <CardFooter className="font-italic small"><mark>{note.updatedTime}</mark></CardFooter>
    <Container className="text-center">
      <Button color="danger mt-2" onClick={()=>{
                 deleteNote(note.id);
      }}>Delete</Button>
      <Button color="warning mt-2 ml-3 " value="/add-note"
      onClick={handleButtonClick}
                 
      >Update</Button>
    </Container>
  </CardBody>
</Card>


    )
}

export default Note
