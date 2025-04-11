import React, { Fragment , useState} from 'react';
import axios from 'axios';
 const Input = () =>{


    const [activity, setActivity] = useState('');
    const [show, setShow] = useState([]);
 
  const inputt = (event) => {
    setActivity(event.target.value);
};

   const sub = (event) => {
           event.preventDefault();
           // const data = { activity: activity }
           console.log(activity)
           axios.post('http://localhost:5000/todos', {activity: activity})
           .then((response)=>{
               const showw = {activity: activity};
   
                setShow([...show, showw]);
                setActivity('');
               
           }) 
        //    .catch((error)=>{
        //     console.error('error ading todo:',error)
        //    })
            
       };


    return(
        <Fragment>
        <h1 className='text-center mt-5'>Input Todo</h1>
        <form className='d-flex mt-5' onSubmit={sub}>
            <input
             type='text'
             className='form-control'
             placeholder='Input SearchBar'
             value={activity}
             onChange={inputt}
             />
            <button type='submit'  className='btn btn-success'onClick={sub} >Add</button>
        </form>
        </Fragment>
    )
}
 
 export default Input