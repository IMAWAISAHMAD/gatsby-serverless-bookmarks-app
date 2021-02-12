import React,{useState,useEffect} from 'react'
import {Box,Grid,Typography} from "@material-ui/core"
import {nanoid} from "nanoid"
import _ from "lodash"
import axios from "axios"
import BookMark from "./BookMark"

const BookMarks = ({data}) => {
    const [bookmarks,setBookmarks] = useState(data)
    const [brokenEdges, setBrokenEdges]  = useState(_.chunk(bookmarks, 3));

    useEffect(() => {
        const updatedEdges = _.chunk(bookmarks, 3);
        setBrokenEdges(updatedEdges);
    }, [bookmarks]);

    const handleDelete = async (id) => {
        const payload = {};
        payload['id'] = id;
        const deleted = await axios.post('/api/delete-bookmark',payload);
        const deletedBookmark = deleted.data.bookmark;
        if(deletedBookmark){
            console.log('Deleted',deletedBookmark);
            const remainingBookmarks = bookmarks.filter(bookmark=>id!==bookmark['_id']);
            setBookmarks(remainingBookmarks);
        }
        
    }

    return (   
        <Grid 
        spacing={4}
        container
        alignItems="center"
        justify="center"
        >
        {brokenEdges.length? brokenEdges.map(edges=>(
            edges.map((bookmark)=>(
                <Grid item  xs={12} md={4} key={nanoid()}>
                    <Box mt={10}>
                     <BookMark key={nanoid()} data={bookmark} handleDelete={handleDelete}/>
                    </Box>
                </Grid>
            ))
        )):
        <Typography variant="h4" color="secondary">
            Your Bookmarks List is Empty
        </Typography>
        }
        </Grid>
    )
}

export default BookMarks;