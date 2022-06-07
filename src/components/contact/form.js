import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import styled from "styled-components";
import { Button } from "@mui/material"


const Form = () =>{
 
    const [state, handleSubmit] = useForm('xqknqpzn');
      
    if (state.succeeded) {
      return <p>Thanks for your submission!</p>
    }

    return (
        <Wrapper>
        <form method="post" onSubmit={handleSubmit} className="mt-6">
                    <input 
                    type="text" 
                    name="firstname" 
                    required="required" 
                    placeholder="First name" 
                    className="inputBox box-content p-1 border-2 rounded-sm mt-4 w-5/6 text-black"
                    />
                    <ValidationError prefix="Name" field="name" errors={state.errors} />
            
                    <input 
                    type="text" 
                    name="" 
                    required="required" 
                    placeholder="Last name"
                    className="inputBox box-content p-1 border-2 rounded-sm mt-4 w-5/6 text-black"
                    /> 
                    <ValidationError prefix="Name" field="name" errors={state.errors} />
                    
                    <input 
                    type="mail" 
                    name="lastname" 
                    required="required" 
                    placeholder="Email address"
                    className="inputBox box-content p-1 border-2 rounded-sm mt-4 w-5/6 text-black"
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
          
                    <textarea 
                    required="required" 
                    name="message" 
                    placeholder="Type message here ..."
                    className="inputBox box-content p-1 border-2 rounded-sm mt-4 mb-6 w-5/6 h-36 text-black"
                    ></textarea>
                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                   
                    <div>
                    <Button
                       variant="contained"
                       type="submit"
                       value="Send"
                       disabled={state.submitting}
                       className="inputBox box-content rounded-sm w-1/5"
                    >
                      Get in touch
                    </Button>
                    </div>
    
                   <ValidationError errors={state.errors} />
        </form>
        </Wrapper>
    )
}
const Wrapper = styled.div`
  position: relative;
  gap: 20px;
  text-align: center;
  padding: 10px;
  background: linear-gradient(120deg,  #663182 6.33%, #322d6d 39.13%);
  color: rgba(255, 255, 255, 0.7);
`;


export default Form;