
import { useState } from 'react';
import './App.css';

function App() {
  const [formData,setFormData]=useState({
    firstname:"",lastname:"",email:"",country:'',
    streetAddress:"",city:'',state:'',postalCode:'',
    comments:false,candidates:false,offers:false,
    placed:""
  })

  function changeHandler(event){
    const {name,value,checked,type}=event.target;
    setFormData((prev)=>({
      ...prev,[name]:type==='checkbox'?checked:value
    }))
  }
  function submitHandler(event){
    event.preventDefault()
    console.log(formData);
  }
  return (
    <div className="App">
      <form onSubmit={submitHandler}>
      <label htmlFor="firstname">Firstname</label>
        <input type="text"
        placeholder='naman'
        name='firstname'
        value={formData.firstname}
        id='firstname'
        onChange={changeHandler}
        
         />
         <br />
         <label htmlFor="lastname">lastname</label>
        <input type="text"
        placeholder='naman'
        name='lastname'
        value={formData.lastname}
        id='lastname'
        onChange={changeHandler}
        
         />
         <br />
         <label htmlFor="email">email</label>
        <input type="text"
        placeholder='love@a123.com'
        name='email'
        value={formData.email}
        id='email'
        onChange={changeHandler}
        
         />
          <br />

         <label htmlFor="country">country</label>
        

         <select name="country" id="country"
         value={formData.country}
         onChange={changeHandler}
         >
          <option value="">India</option>
          <option value="">united states</option>
          <option value="">canada</option>
          <option value="">africa</option>
         </select>

         <br />
         <label htmlFor="streetAddress">streetAddress</label>
        <input type="text"
        placeholder='streetAddress'
        name='streetAddress'
        value={formData.streetAddress}
        id='streetAddress'
        onChange={changeHandler}
        
         />
         <br />
         <label htmlFor="city">city</label>
        <input type="text"
        placeholder='delhi'
        name='city'
        value={formData.city}
        id='city'
        onChange={changeHandler}
        
         />
         <br />

         <label htmlFor="state">state</label>
        <input type="text"
        placeholder='state'
        name='state'
        value={formData.state}
        id='state'
        onChange={changeHandler}
        
         />
         <br />


         <label htmlFor="postalCode">postalCode</label>
        <input type="text"
        placeholder='postalCode'
        name='postalCode'
        value={formData.postalCode}
        id='postalCode'
        onChange={changeHandler}
        
         />
         <br />

         <fieldset>
          <legend>By email</legend>
          <div className='flex'>
          <input 
          id='comments'
          name='comments'
          type='checkbox'
          value={formData.comments}
          onChange={changeHandler}
          
              />
            <div>
            <label htmlFor="comments">Comments</label>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid, sed.</p>
            </div>
          </div>
          <div className='flex'>
          <input 
          id='candidates'
          name='candidates'
          type='checkbox'
          value={formData.candidates}
          onChange={changeHandler}
          
              />
            <div>
            <label htmlFor="candidates">candidates</label>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid, sed.</p>
            </div>
          </div>

          <div className='flex'>
          <input 
          id='offers'
          name='offers'
          type='checkbox'
          value={formData.offers}
          onChange={changeHandler}
          
              />
            <div>
            <label htmlFor="offers">offers</label>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid, sed.</p>
            </div>
          </div>      
         </fieldset>

         <fieldset>
          <legend> placed</legend>
          
            <input
           type="radio" 
            name='placed'
            id='placed'
            value='placed'
           onChange={changeHandler}
            />     
         
          <label htmlFor="placed">Everything</label>
          <br />
          <input
           type="radio" 
            name='placed'
            id='email'
            value='samae  as email'
           onChange={changeHandler}
            />     
         
          <label htmlFor="email">samae  as email</label>

         </fieldset>
<button>save</button>




      </form>
    </div>
  );
}

export default App;