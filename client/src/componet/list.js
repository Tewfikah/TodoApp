import axios from 'axios';
import React, { Fragment,useState,useEffect } from 'react';
import EditTo from './edit';

const List = ( ) =>{

    const [todos , setTodo] = useState([])

     const deleteTo = (id) => {
          axios.delete(`http://localhost:5000/todos/${id}`).then((response)=> {
            setTodo(todos.filter(to => to.id !== id));
          })
        }
 
 useEffect(()=>{
    axios.get('http://localhost:5000/todos').then((response)=>{
        setTodo(response.data)
    })
 } ,[])
 console.log(todos)

    return <Fragment>         
    <table class="table mt-5 text-center">
      <thead>
        <tr >
          <th>Activity</th>
          <th>Edit</th>
          <th>Delate</th>
        </tr>
      </thead>
      <tbody>
        {/*  <tr>
          <td>John</td>
          <td>Doe</td>
          <td>john@example.com</td>
        </tr>
        <tr>*/}

       {todos.map(to =>(
        <tr key={to.id}>
            <td>{to.activity}</td>
            <td>
            <EditTo  to={to}/>
                </td>
            <td><button className='btn btn-danger' onClick={()=>deleteTo(to.id)}>Delete</button></td>
        </tr>
       ))}
      </tbody>
    </table>
    </Fragment>
 
}
export default List