import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Button from '@mui/joy/Button';
import './App.css'
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import FormHelperText from '@mui/joy/FormHelperText';
import Input from '@mui/joy/Input';
import IconButton from '@mui/joy/IconButton';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Typography from '@mui/joy/Typography';



function NoteItem(props) {
  return (
    <>
      <div className='note'>
        <Typography>
          {props.text}
        </Typography>
        <IconButton onClick={()=>{props.deleteNote(props.idx)}}>
          <DeleteForeverIcon />
        </IconButton>
      </div>
    </>
  );
}


function App() {
  // states -> state management
  const [items, setItems] = useState(['FirstNote' ]);
  const [inputText , setInputText] = useState('');

 const deleteItem = (idx) => {setItems((items)=>items.filter((items,i)=>i!==idx))}

 const handleAdd = () => { 
  if(inputText !== ''){
    setItems((items)=>items.concat([inputText])) 
  }
  
}
  


  return (
    <>
      <div className='app-container'>
        <div></div>
        <div className='main-container'>
          <h1>My Notes App</h1>
          <div className='input-container'>
            <FormControl
              id="Id"
              required
              size="sm"
              color="primary">
              <FormLabel>
                Note
              </FormLabel>
              <Input
                placeholder="Enter Text : "
                name="Name"
                autoComplete="on"
                autoFocus
                error
                fullWidth
                defaultValue={inputText}
                onChange={(event)=>{setInputText(event.target.value)}}
                variant="outlined" />
              
            </FormControl>
            <Button onClick={handleAdd}>
              Add
            </Button>
          </div>

          <div className='notes-container'>
            {items.map((text,idx) => <NoteItem text={text} idx={idx} deleteNote={deleteItem} />  ) }
            

          </div>

        </div>

        <div></div>
      </div>
    </>
  )
}

export default App
