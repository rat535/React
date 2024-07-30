import {useState} from 'react';
import './App.css';
import './Delete';
import Delete from './Delete';

function App() {

  const[add,setAdd] =useState("");
  const [addItem,setAddItem] = useState([]);


  const create =()=>{
    setAddItem((prev)=>{
      return [...prev,add]
      
    })
    setAdd("")
  }
  const itemEvent = (e)=>{
    setAdd(e.target.value);
  }

  const deleteItem=(id)=>{
    setAddItem((prev)=>{
      return prev.filter((arrElem,index)=>{
        return index !== id;
      })
    })
  }

  return (
    <>
       <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDO List</h1>
          <br />
          <input type="text" 
             placeholder="ADD Items"
             onChange={itemEvent}
             value={add}
          />
          <button onClick={create}>+</button>
          <ol>
          {addItem.map((item,index)=>{
            return <Delete 
                key={index}
                id={index}
                iterables={item}
                onSelect={deleteItem}
            />
          })}
        </ol>
        </div>
       
       </div>
    </>
  );
}

export default App;
