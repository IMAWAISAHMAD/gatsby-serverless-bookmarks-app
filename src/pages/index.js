import React, { useEffect, useState } from 'react'; 
import {Box} from "@material-ui/core";  
import axios from "axios"; 
import Header from "../components/Header";
import BookMarks from "../components/BookMarks";
 
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
  console.log(bookMarks);
  return (
    <>    
      <Header/>
      <Box mt={10}>
      {
        loading ? <BookMarks data = { bookMarks } /> : <h1>Loading...</h1>
      }
      </Box>
    </>        
  )    
}