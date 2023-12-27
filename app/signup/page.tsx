"use client"
import { FormControl, InputLabel, OutlinedInput, TextField } from '@mui/material'
import React, { useState } from 'react'

type signUpRequest = {
    email: string,
    mobile: string,
    password: string
}
function page() {
    const [signUpForm, setSignUpForm] = useState<signUpRequest>({
        email: '',
        mobile: '',
        password: ''
    });

    const onInputHandler = (e: any) => {
        setSignUpForm(preState => {
            return { ...preState, [e.target.name]: e.target.value }
        })
    }
    return (
        <section className="flex flex-col items-center justify-center w-full bg-white">
            <div className='mt-4'>
                {/* Heading with bold Tag */}
                <div>
                    <b>Sign Up</b>
                </div>
                {/*  Input for Email and Mobile Number */}
                <div className='flex flex-row mt-2'>
                    <FormControl variant="outlined">
                        <InputLabel htmlFor="signup-email" >Enter Email</InputLabel>
                        <OutlinedInput id="signup-email" name='email' type='text' label="Enter Email"></OutlinedInput>
                    </FormControl>
                    <FormControl>
                        <InputLabel htmlFor="signup-mobile">Enter Mobile</InputLabel>
                        <OutlinedInput id="signup-mobile" name="mobile" type="text" label="Enter Mobile"></OutlinedInput>
                    </FormControl>
                </div>
                {/*  Input for password and Recorrect-password */}
                <div className='flex flex-col mt-2'>
                    <FormControl variant="outlined">
                        <InputLabel htmlFor="signup-password" >Enter Password</InputLabel>
                        <OutlinedInput id="signup-password" name='email' type='text' label="Enter Password"></OutlinedInput>
                    </FormControl>
                    <FormControl className='mt-3'>
                        <InputLabel htmlFor="signup-password">Re Enter Password</InputLabel>
                        <OutlinedInput id="signup-password" name="mobile" type="text" label="Re Enter Password"></OutlinedInput>
                    </FormControl>
                </div>
            </div>


        </section>




        // <section className='flex items-center justify-center mt-2 w-full bg-white-100'>
        //     <div className='w-[40%] bg-white border border-solid border-[#ccc] shadow-[0_3px_6px_rgb(0_0_0_/_16%)] rounded-[5px]'>
        //     <h3>SignUp</h3>
        //         <div className='mt-8 grid grid-cols-2 gap-2'>
        //             <TextField className='input' name="email" value={signUpForm.email} onChange={onInputHandler} id="outlined-basic" label="Enter Email" variant="outlined" />
        //             <TextField className='input' name="mobile" value={signUpForm.mobile} onChange={onInputHandler} id="outlined-basic" label="Enter Mobile Number" variant="outlined" />
        //         </div>
        //         <div className='m-8 flex flex-col justify-center'>
        //             <TextField className='input' name="password" value={signUpForm.password} onChange={onInputHandler} id="outlined-basic" type='password' label="Enter Password" variant="outlined" />
        //             <TextField className='input mt-4' id="outlined-basic" type='password' label="Re enter Password" variant="outlined" />
        //         </div>
        //     </div>

        // </section>
    )
}

export default page