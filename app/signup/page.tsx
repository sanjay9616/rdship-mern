"use client"
import { Button, FormControl, InputLabel, OutlinedInput, TextField } from '@mui/material'
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
    const validateInput = () => {
        const { email, mobile, password, reEnterPassword } = signUpForm;
        let isValid = true;
        // for email
        if (email.value == undefined || email.value == null) {
            isValid = false
        }
        // for mobile
        let isNotNumber: string = mobile.value;
        if (mobile.value == undefined || mobile.value == '' || "NaN" === isNotNumber) {
            isValid = false;
        }
        // for passWord
        if (password.value == undefined || password.value == '' || password.value.length < 8) {
            isValid = false;
        }
        if (password.value != reEnterPassword.value) {
            isValid = false;
        }
        return isValid;

    }
    // function to call Api For SignUp
    const signUpCallApi = async (request: SignUpRequest) => {
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
        <section className="flex flex-col items-center justify-center bg-white w-full ">
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
                    </FormControl>
                    <FormControl>
                        <InputLabel htmlFor="signup-mobile">Enter Mobile</InputLabel>
                        <OutlinedInput id="signup-mobile" onChange={onInputHandler} value={signUpForm.mobile.value} name="mobile" type="text" label="Enter Mobile"></OutlinedInput>
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