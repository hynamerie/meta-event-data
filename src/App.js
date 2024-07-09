import { useState } from 'react';

export default function InputComponent() { 
  const [inputText, setText] = useState('hello'); 
  function handleChange(e) { 
    setText(e.target.value); 
  } 

 // REGISTER FORM
  const [form, setForm] = useState({ 
   firstName: 'Name', 
   lastName: 'Last', 
   email: 'email@email.com', 
 }); 

  return ( 
    <> 
      <input value={inputText} onChange={handleChange} /> 
      <p>You typed: {inputText}</p> 
      <button onClick={() => setText('hello')}> 
        Reset 
      </button> 
      
      {/* REGISTER FORM */}
      <div> 
         <h1>REGISTER FORM</h1>
       <label> 
         First name: 
         <input 
           value={form.firstName} 
           onChange={e => { 
             setForm({ 
               ...form, firstName: e.target.value 
             }); 
           }} 
         /> 
       </label> 
       <label> 
         Last name: 
         <input 
           value={form.lastName} 
           onChange={e => { 
             setForm({ 
               ...form, lastName: e.target.value 
             }); 
           }} 
         /> 
       </label> 
       <label> 
         Email: 
         <input 
           value={form.email} 
           onChange={e => { 
             setForm({ 
               ...form, email: e.target.value 
             }); 
           }} 
         /> 
       </label> 
       <p> 
         {form.firstName}{' '} 
         {form.lastName}{' '} 
         ({form.email})
       </p> 
     </div> 

    </> 
  ); 
} 

// export default function RegisterForm() { 
//    const [form, setForm] = useState({ 
//      firstName: 'Luke', 
//      lastName: 'Jones', 
//      email: 'lukeJones@sculpture.com', 
//    }); 
 
//    return ( 
//      <> 
//        <label> 
//          First name: 
//          <input 
//            value={form.firstName} 
//            onChange={e => { 
//              setForm({ 
//                ...form, 
//                firstName: e.target.value 
//              }); 
//            }} 
//          /> 
//        </label> 
//        <label> 
//          Last name: 
//          <input 
//            value={form.lastName} 
//            onChange={e => { 
//              setForm({ 
//                ...form, 
//                lastName: e.target.value 
//              }); 
//            }} 
//          /> 
//        </label> 
//        <label> 
//          Email: 
//          <input 
//            value={form.email} 
//            onChange={e => { 
//              setForm({ 
//                ...form, 
//                email: e.target.value 
//              }); 
//            }} 
//          /> 
//        </label> 
//        <p> 
//          {form.firstName}{' '} 
//          {form.lastName}{' '} 
//          ({form.email})
//        </p> 
//      </> 
//    ); 
//  } 