import { useState } from 'react';
import Textarea from '@mui/joy/Textarea';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import ListItemContent from '@mui/joy/ListItemContent';
import NotesIcon from '@mui/icons-material/Notes';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


function App() {
  const [text, setText] = useState('');
  const [notes, setNotes] = useState([]);

  const addNote = (message) => {
    if (message === '') return;
    setNotes(curr => curr.concat([message]));
    setText('');
  }

  const deleteNote = (idx) => {
    setNotes(curr => curr.filter((note, i) => i !== idx));
    let newNotes = [];
    // adding items to newNotes;
    // setNotes(newNotes);
  }

  const keyAction = (event) => {
    if(event.key === 'Enter'){
      console.log('Key Pressed!');

    }
  }

  return (
    <>
      <h1 className='title'>My Notes</h1>
      <div className='note-body'>
        
        <Textarea
          placeholder="Add Note.."
          endDecorator={<EditIcon/>}
          onFocus={()=>{}}
          onBlur={(e) => addNote(e.target.value)} 
          value={text} 
          onChange={(e)=>setText(e.target.value)}
          onKeyDown={keyAction}
        />
        <Button onClick={(e) => addNote(e.target.value)}  variant='outlined'/>
      {notes.map((note, idx) => 
        <List key={idx}>
          <ListItem>
            <ListItemButton>
              <ListItemDecorator><NotesIcon /></ListItemDecorator>
                <ListItemContent>{note}</ListItemContent>
                <DeleteIcon  onClick={() => deleteNote(idx)} />
            </ListItemButton>
          </ListItem>
        </List>
      )}
      </div>
    </>
  )
}

export default App
