import { useState } from 'react'
import './App.css'

function App() {

  const [entries, setEntries] = useState([])  // entries is an array of objects
  const [newEntry, setNewEntry] = useState('')  // newEntry is a string 
  // const [edit, setEdit] = useState(false)

  // const [editEntry, setEditEntry] = useState("")

  const [editIndex, setEditIndex] = useState(null)

  const handleSubmit = () => {

    if (editIndex !== null) {
      console.log("EDIT POWER")



      setEntries(prev => ([...prev.slice(0, editIndex), newEntry, ...prev.slice(editIndex + 1)]))
      setEditIndex("x")

      setNewEntry("")


    } else if (editIndex !== "x") {
      console.log("else hit")
      setEntries([...entries, newEntry])  // this will add the newEntry to the entries array  
      setNewEntry("")
    }
  }

  const handleChange = (e) => {

    setNewEntry(e.target.value)

  }

  const deleteEntry = (e) => {
    console.log("delete", e.target.id)

    setEntries(entries.filter((entry, index) => index !== parseInt(e.target.id)))
  }

  const handleEdit = (e) => {
    console.log("edit", e.target.id)
    setEditIndex(parseInt(e.target.id))
    setNewEntry(entries[parseInt(e.target.id)])

  }


  return (
    <>
      {console.log("all entries", entries)}
      {/* {console.log("newEntry", newEntry)} */}
      {console.log("Wtf", editIndex)}

      <div>
        {entries.map((entry, index) => {
          // console.log(entry, index)
          return (
            <div key={index}>
              <p
                id={index}
                onClick={(e) => handleEdit(e)}
              >
                {entry}
                <span id={index} style={{ marginLeft: "50px" }}
                  onClick={(e) => { deleteEntry(e) }}
                >x</span>
              </p>
            </div>
          )
        })}

      </div>

      <div>


        <input 
        value={newEntry || ""} type="text" id="entry" 
        onChange={(e) => handleChange(e)} 
        placeholder="Add entry" 
        /> 
{/* <script>alert('XSS');</script> */}


        <br />

        <button onClick={() => handleSubmit()}>Add Entry</button>

      </div>




    </>
  )
}

export default App
