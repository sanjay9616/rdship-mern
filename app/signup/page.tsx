"use client"
import { Button, FormControl, FormHelperText, InputLabel, OutlinedInput, TextField } from '@mui/material'
import axios from 'axios'


import React, { useState } from 'react'

type SignUpRequest = {
    email: {
        value: string,
        error: string
    },
    mobile: {
        value: string,
        error: string
    },
    password: {
        value: string,
        error: string
    }
    reEnterPassword: {
        value: string,
        error: string
    }
}
function page() {
    const [error, setError] = useState(false);
    const [signUpForm, setSignUpForm] = useState<SignUpRequest>({
        email: {
            value: '',
            error: ''
        },
        mobile: {
            value: '',
            error: ''
        },
        password: {
            value: '',
            error: ''
        },
        reEnterPassword: {
            value: '',
            error: ''
        }
    });

    const onInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setSignUpForm((prevForm) => ({
            ...prevForm,
            [name]: {
                ...prevForm[name as keyof SignUpRequest],
                value: value,
            },
        }));
    }
    const onSubmit = () => {
        console.log(signUpForm)
        signUpCallApi(signUpForm);

    }
    // function to validate input
    const validateInput = ()=>{
        signUpForm.email.error = ''
        signUpForm.mobile.error = ''
        signUpForm.password.error = '';
        signUpForm.reEnterPassword.error = '';

        let isValid = true;
        // for email
        if(signUpForm.email.value==undefined || signUpForm.email.value==''){
           isValid = false
           signUpForm.email.error = "Email is Required"
        }
        // for mobile
        let isNotNumber:string = signUpForm.mobile.value;
        if(signUpForm.mobile.value==undefined || signUpForm.mobile.value=='' || "NaN"===isNotNumber){
            isValid = false;
            signUpForm.mobile.error = "Mobile Number cannot Be Empty"
        }
        // for passWord
        if(signUpForm.password.value==undefined || signUpForm.password.value=='' || signUpForm.password.value.length<8 ){
            isValid = false;
            signUpForm.password.error = "Password is Required and Greater than 8 Character";
        }
        if(signUpForm.password.value!=signUpForm.reEnterPassword.value){
            isValid = false;
            signUpForm.reEnterPassword.error = "Password is not Matched";
        }
        return isValid;
  
    }
    // function to call Api For SignUp
    const signUpCallApi = async (request: SignUpRequest) => {
        // if input is Not Valid don't Proceed further and refresh Component
        if(!validateInput()){
          console.log("invalidate in-put")
          setError(true)  
          return;
        }
        let payload = { email: request.email.value, mobileNo: request.mobile.value, password: request.password.value };
        let url = "";
        try {
            console.log("payload=", payload)
            let response = await axios.post(url, payload);
            console.log(response)
        }
        catch (err) {
            console.error(err);
        }
    }
    return (
        <section className="flex flex-col items-center justify-center bg-white  w-full ">
            <div className='mt-4 pb-2 bg-white'>
                {/* Heading with bold Tag */}
                <div>
                    <b>Sign Up</b>
                </div>
                {/*  Input for Email and Mobile Number */}
                <div className='flex flex-row mt-2'>
                    <FormControl variant="outlined">
                        <InputLabel htmlFor="signup-email" >Enter Email</InputLabel>
                        <OutlinedInput id="signup-email" onChange={onInputHandler} value={signUpForm.email.value} name='email' type='text' label="Enter Email"></OutlinedInput>
                        <FormHelperText sx={{color:'red'}}>{true ? signUpForm.email.error : ''}</FormHelperText>
                    </FormControl>
                    <FormControl>
                        <InputLabel htmlFor="signup-mobile">Enter Mobile</InputLabel>
                        <OutlinedInput
                            id="signup-mobile"
                            onChange={onInputHandler}
                            value={signUpForm.mobile.value}
                            name="mobile"
                            type="text"
                            label="Enter Mobile">
                        </OutlinedInput>
                        <FormHelperText sx={{color:'red'}}>{true ? signUpForm.mobile.error : ''}</FormHelperText>
                    </FormControl>
                </div>
                {/*  Input for password and Recorrect-password */}
                <div className='flex flex-col mt-2'>
                    <FormControl variant="outlined">
                        <InputLabel htmlFor="signup-password" >Enter Password</InputLabel>
                        <OutlinedInput
                         id="signup-password" 
                         name='password' 
                         value={signUpForm.password.value}
                         onChange={onInputHandler}
                         type='text' 
                         label="Enter Password"></OutlinedInput>
                        <FormHelperText sx={{color:'red'}}>{true ? signUpForm.password.error : ''}</FormHelperText>

                    </FormControl>
                    <FormControl className='mt-3'>
                        <InputLabel htmlFor="signup-repassword">Re Enter Password</InputLabel>
                        <OutlinedInput
                         id="signup-repassword" 
                         name="reEnterPassword"
                         type="text"
                         value={signUpForm.reEnterPassword.value}
                         onChange={onInputHandler}
                         label="Re Enter Password"
                        ></OutlinedInput>
                        <FormHelperText sx={{color:'red'}}>{true ? signUpForm.reEnterPassword.error : ''}</FormHelperText>
                    </FormControl>
                    <FormControl className='mt-2'>
                        <Button onClick={onSubmit} style={{ backgroundColor: 'blue', color: 'white' }} variant='contained'>Sign Up</Button>
                    </FormControl>
                </div>
            </div>
        </section>
    )
}

export default page