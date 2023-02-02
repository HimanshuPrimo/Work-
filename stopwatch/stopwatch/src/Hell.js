import React, { useState } from 'react'

const Hell = () => {
    const [user, setUser] = useState({
        todo:""
    })
    const [data, setData] = useState([])
    const [edit, setEdit] = useState(false)
    const [active, setActive]= useState(null);
    const {todo}= user;

    const handlechange = (e) =>{
        const {name,value}=e.target;
        setUser({
            ...user,
            [name]:value,
        })
    }
    console.log(user);
    const handleSubmit =(e)=>{
        
        e.preventDefault();
        
        setUser({
            todo:""
        })
        let newuser = {todo:user.todo}
        if(edit){
            let copy = data;
            Object.assign(copy[active], newuser);
          
            setData([...copy])
            setEdit(false);
            setActive(null)
        }else{
            setData([
                ...data, user
            ])
        }

    }
    const handleDelete = (ind)=>{
        // console.log(item, "================>");
   
       data.splice(ind, 1);
       setData([...data])
    // const result = data.filter((val)=>val !== item)
    // setData([...result])
    }

    const handleEdit = (index)=>{
        setEdit(true);
        const updated = data[index];
        setUser({todo:updated.todo})
        setActive(index)
    }

  return (
    <div>
        <input type="text" name="todo" onChange={handlechange} value={todo} />
        <button type="submit" onClick={handleSubmit}>{edit ? "Update Todo": "Add Todo"}</button>
        {data.map((item,index)=>(
            <div>
            <span>{index}</span>
            <span>{item.todo}</span>
            <button onClick={()=>handleEdit(index)}>Edit</button>
            <button onClick={()=>handleDelete(index)}>Delete</button>
            </div>
        ))}

    </div>
  )
}

export default Hell