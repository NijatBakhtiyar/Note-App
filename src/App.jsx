import { useState,useEffect } from 'react';
import { nanoid } from 'nanoid'
import NotesList from './components/NotesList.jsx';
import Search from './components/Search.jsx';
import  Header from './Header.jsx';


const App = () => {
  const [searchNote, setSearchNote] = useState("");
  const [darkMode, setDarkMode] = useState(false)
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "first note",
      date: "15/02/2022"
    },
    {
      id: nanoid(),
      text: "second note",
      date: "17/02/2022"
    },
    {
      id: nanoid(),
      text: "third note",
      date: "22/02/2022"
    },
  ])

  useEffect(() => {
    const savedNote = JSON.parse(localStorage.getItem("Note App"))
    if (savedNote) {
      setNotes(savedNote)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("Note App", JSON.stringify(notes))
  }, [notes])

  const handleAddNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text,
      date: date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes)
  }

  const handleDeleteNote = (id) => {
    const newNotes = notes.filter(note => note.id !== id)
    setNotes(newNotes)
  }
  return (
    <div className={`${darkMode && 'dark-mode'} main`}>
      <div className='container'> 
      <Header toggleMode={setDarkMode}/>
      <Search handleSearch={setSearchNote}/>
      <NotesList
        notes={notes.filter(note => note.text.toLowerCase().includes(searchNote))}
        handleAddNote={handleAddNote}
        handleDeleteNote = {handleDeleteNote}
      />
    </div>
    </div>
  )
}
export default App;