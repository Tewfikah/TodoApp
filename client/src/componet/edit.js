import axios from 'axios';
import React, { Fragment,useState } from 'react';
 const EditTo = ({to}) =>{
  const [activity,setDes] = useState(to.activity)

 const upDes = async e =>{
  e.preventDefault()
  try{
    const body = {activity}
    const respo = await axios.put(`http://localhost:5000/todos/${to.id}`,body)
    window.location = "/"
  }catch(err){
    console.error('error update todo')
  }

  }
    return(
        <Fragment>
<button type="button" class="btn btn-warning"
 data-toggle="modal" data-target={`#id${to.id}`}>Edit</button>
{/* 

*/}

<div id={`id${to.id}`} 
 onClick={()=> setDes(to.activity)}
class="modal fade" role="dialog">
  <div class="modal-dialog">

   
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" 
        data-dismiss="modal"
        onClick={()=> setDes(to.activity)}
        >&times;
        </button>
        <h4 class="modal-title">Edit ToDo</h4>
      </div>
      <div class="modal-body">
        <p><input type='text' className='form-control' 
        value={activity}
        onChange={e => setDes(e.target.value)}
        ></input></p>
      </div>
      <div class="modal-footer">
        <button type="button"
         class="btn btn-warning"
          data-dismiss="modal"
          onClick={()=> setDes(to.activity)}

          
          >Close</button>

        <button type="button"
         class="btn btn-danger"
          data-dismiss="modal"
        onClick={e=> upDes(e)}
          >Edit</button>
      </div>
    </div>

  </div>
</div>
        </Fragment>
    )
 }
 export default EditTo