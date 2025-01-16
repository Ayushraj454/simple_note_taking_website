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
import EditIcon from '@mui/icons-material/Edit';
import { Edit } from '@mui/icons-material';






function App() {
  // example state for e-commerce product listing.
  // products = [{name: '', 'id': '', 'category': '', 'Price': '', 'Available': True} ,{...}, {...}]
  // const [cart, setCart] = useState([]);
  // const [products, setProducts] = useState([]);

  // // first time executable useEffect. Since it depends on nothing.
  // useEffect(()=>{
  //   fetch('https://myapi.com/v1/products')
  //   .then(response => response.json())
  //   .then(data => {setProducts(data.products)});
  // }, []);

  // // retrieving new sets of product, if cart is updated.
  // useEffect(()=>{
  //   fetch('https://myapi.com/v1/products')
  //   .then(response => response.json())
  //   .then(data => {setProducts(data.products)});
  // }, [cart]);

  // states -> state management
  const [items, setItems] = useState(['FirstNote']);
  const [inputText , setInputText] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

 const deleteItem = (idx) => {setItems((items)=>items.filter((items,i)=>i!==idx))}


 const handleAdd = () => { 
  if(inputText !== ''){
    setItems((items)=>items.concat([inputText])) 
  }
  if (isEditing) {
      const updatedItems = items.map((item, idx) =>
      idx === editIndex ? inputText : item
    );
    setItems(updatedItems);
    setIsEditing(false);
    setEditIndex(null);
  } else {
    setItems([...items, inputText]);
  }
  setInputText(""); 

  
};
const handleEdit = (index) => {
  setInputText(items[index]); 
  setIsEditing(true); 
  setEditIndex(index); 
};

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
        <Button onClick={() =>handleEdit(props.idx)} className='editbtn'>Edit</Button>
      </div>
    </>
  );
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
                value={inputText}
                onChange={(event)=>{setInputText(event.target.value)}}
                variant="outlined" />
              
            </FormControl>
            <Button onClick={handleAdd}>
              {
                isEditing ? "Edit":"Add" 
              }
            </Button>
          </div>

          <div className='notes-container'>
            {items.map((text,idx) => <NoteItem key={idx} text={text} idx={idx} deleteNote={deleteItem} />  ) }
            

          </div>

        </div>

        <div></div>
      </div>
    </>
  )
}

export default App
