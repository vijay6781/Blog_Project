
import {Box,makeStyles, FormControl, InputBase,Button, TextareaAutosize} from '@material-ui/core';
import {AddCircle} from '@material-ui/icons';
import { useState } from 'react';
import {useHistory} from 'react-router-dom';
import {createPost} from '../../service/api';

const useStyle = makeStyles(theme => ({ 
    container: {
        padding:'10px 100px',
        margin:'auto',
        [theme.breakpoints.down('sm')]: {
            padding: 0
        },
    },
    image: {
        width: '100%',
        height: '50vh',
        objectFit: 'cover'
    },
    form:{
    display: 'flex',
    flexDirection: 'row',
    marginTop:10
    },
    textfield:{
        flex:1,
        margin:'0 25px',
        fontSize: '25'
    },
    textarea: {
        width: '100%',
        border: 'none',
        marginTop: 50,
        fontSize: 18,
        '&:focus-visible': {
            outline: 'none'
        }
    }
}))


const initialValues = {
 title: '',
 description: '',
 picture:'',
 username:'codeforproject',
 category: 'All',
 createDate: new Date()

}


const CreateView=()=>{
    const classes=useStyle();
  const url='https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80';
   const history =useHistory();

   const [post, setPost] = useState(initialValues); 

const handleChange=(e)=>{
setPost({...post, [e.target.name]:e.target.value})
}


const savePost =async() =>{
    await createPost(post);
    history.push('/');
}

    return (
<Box className={classes.conatiner}>
    <img className={classes.image} src={url} alt="banner"/>

<FormControl className={classes.form}>
    <AddCircle fontSize="large" color="action"/>

<InputBase 
onChange={(e) => handleChange(e)} 
name="title"
placeholder="Title of Article" 
className={classes.textfield}
/>

<Button onClick={() => savePost()} variant="contained" color="primary">Publish</Button>
</FormControl>
           <TextareaAutosize
                rowsMin={5}
                placeholder="Write Your Description..."
                className={classes.textarea}
                name='description'
                onChange={(e) => handleChange(e)} 
            />
</Box>
    )
}

export default CreateView;

