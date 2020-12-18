import React, {useState,useEffect } from 'react'
import Note from './Note'
import base_url from './../api/bootapi'
import axios from 'axios'
import {toast} from "react-toastify"
const AllNotes=()=> {
    useEffect(()=>{
        document.title="See All The Notes"
    },[])

const getAllNotesFromServer=()=>{
    axios.get(`${base_url}/notes`).then(
        (response)=>{
                //success
                //console.log(response)
                console.log(response.data)
                toast.success("Note Loaded!")
                setNotes(response.data)
        },
        (error)=>
        {
            console.log(error,"There is an Error while Fetching the data. Please Try Again")
            toast.error("Server Down!")
        }
    )

}

useEffect(() => {
    getAllNotesFromServer()
    
}, [])

    const [notes,setNotes]=useState([
        
    ])
    const updateNote=(id)=>{
        setNotes(notes.filter((c)=> c.id !== id))
    }
    return (
        <div>
             <h1>All Notes</h1>
             <p>List of notes are as follows</p>
             {
                 notes.length>0? notes.map((item)=> <Note key={item.id}note={item} update={updateNote}/>)

                 : "No notes Available"
             }
        </div>
    )
}

export default AllNotes
