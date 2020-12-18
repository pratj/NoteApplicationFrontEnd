import React, { Fragment, useEffect, useState } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText, Container, Toast } from 'reactstrap'  
import axios from "axios"
import base_url from "./../api/bootapi"
import {toast} from "react-toastify"
export const AddNote = () => {
    useEffect(() => {
        document.title="Add A New Note"       
        
    }, [])
    const [note,setNotes]=useState({})
    const handleForm=(e)=>{
        
        console.log(note)
        postDataToServer(note)
        console.log(`${base_url}/savenote`)
        e.preventDefault()
        
    }

    const postDataToServer=(data)=>
    {

        console.log("in postdata mehod",data)
        axios.post(`${base_url}/savenote`,data).then(
            (response)=>{
                    
                    console.log(response)
                    console.log("success")
                    toast.success("Note Added!")
        },
        (error)=>{
            console.log(error)
            console.log("error")
            toast.error("Something went wrong!. Try Again!")
            
        })
        
    }
    return (
        <Fragment>
            <h1 className="text-center my-3">Write you note here.</h1>
            <Form onSubmit={handleForm}>
                <FormGroup>
                    <label for="userId">UserName</label>
                    <Input type="text" style={{borderRadius:9999}} placeholder="Enter username here" name="userName" 
                    id="userName"
                    onChange={(e)=>{
                        setNotes({...note,userName: e.target.value})
                    }}
                    />
                </FormGroup>
                <FormGroup>
                    <label for="noteId">Notes</label>
                    <Input type="textarea" style={{borderRadius:9999}} placeholder="Enter your note here" name="note" 
                    id="note"
                    onChange={(e)=>{
                        setNotes({...note,note: e.target.value})
                    }}
                    />
                </FormGroup>
                <Container className="text-center">
                    <Button type="submit" color="success">Add Note</Button>
                    <Button type="reset" color="warning ml-2">Clear</Button>
                </Container>
            </Form>
        </Fragment>
    )
}
