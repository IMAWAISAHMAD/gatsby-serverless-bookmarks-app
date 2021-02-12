import React,{useState} from 'react'
import {TextField,Button} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(5),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '50%',
        marginTop: theme.spacing(3),
        display:'flex',
        alignItems:'center',
        flexDirection:'column'
    },
}));

const AddBookMark = ({createBookMark,setLoading}) => {
    const classes = useStyles();
    const [values,setValues] = useState({
        url:"",
        pageTitle:"",
        description:""
    });
    const handleChange = (e) => {
        const {name,value} = e.target;
        setValues({
            ...values,
            [name]:value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const bookmark = values;
        createBookMark(bookmark);
        setLoading(true);
        setValues({
            url:"",
            pageTitle:"",
            description:""
        });
        
    }
   

    return (
        <div className={classes.paper}>
        <form className={classes.form} autoComplete="off" onSubmit={handleSubmit}>
        <TextField  margin='normal' required name="url" value={values.url} label="URL" onChange={handleChange}/>
        <TextField  margin='normal' required name="pageTitle" value={values.pageTitle} label="Page Title" onChange={handleChange} />
        <TextField  margin='normal' name="description" value={values.description} label="Description" onChange={handleChange}/>
        <Button type="submit" color="primary" variant="outlined">Submit</Button>
        </form>  
        </div>
    )
}
export default AddBookMark;