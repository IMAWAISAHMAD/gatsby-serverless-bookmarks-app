import React from 'react'
import {Card,CardContent,CardActions,Typography,Link,IconButton} from "@material-ui/core"
import DeleteIcon from '@material-ui/icons/Delete';
const BookMark = ({data,handleDelete}) => {
    const {_id,url,pageTitle,description} = data;
    return (
        <>
        {data &&
          <Card>
            <Typography variant="h4">
                <Link href={url}>
                {pageTitle}
                </Link>
            </Typography>
            <CardContent>
              <Typography>
                {description}
              </Typography>
            </CardContent>
            <CardActions>
              <IconButton
              onClick={() => handleDelete(_id)}
              >
                <DeleteIcon/>
              </IconButton>
            </CardActions>
          </Card>
        
        }
          <h2>Book Mark Component</h2>
        </>
    )
}

export default BookMark;