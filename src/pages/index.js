import React, { useEffect, useState } from 'react'; 
import {Box,Typography} from "@material-ui/core";  
import axios from "axios"; 
import Header from "../components/Header";
import BookMarks from "../components/BookMarks";
import AddBookMark from "../components/AddBookMark"; 

export default () => {    
  const [loading, setLoading ] = useState(false);    
  const [bookMarks, setBookMarks] = useState(null);    
  useEffect(() => {
    axios("/api/get-bookmarks").then(result => {
      if (result.status !== 200) {
        console.error("Error loading shopnotes");
        console.error(result);
        return;
      }
      setBookMarks(result.data.bookmarks);
      setLoading(true);
    });
  }, [loading]);
  const createBookMark = async (bookmark) => {
    await axios.post('/api/create-bookmark',bookmark);
    setLoading(false);
  }
  return (
    <>    
      <Header/>
      <Box mt={10}>
      <AddBookMark createBookMark={createBookMark} setLoading={setLoading}/>
      </Box>
      <Box mt={10}>
      {
        loading ? <BookMarks data = { bookMarks } /> : <div style={{textAlign:"center"}}><Typography variant="h4">Loading....</Typography></div>
      }
      </Box>
      
    </>        
  )    
}