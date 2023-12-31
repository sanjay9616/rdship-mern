"use client"
import { Button, FormControl, FormHelperText, InputLabel, OutlinedInput, TextField } from '@mui/material'
import axios from 'axios'
import {useForm,SubmitHandler} from 'react-hook-form'
import React, { useState } from 'react'


interface form{
    email:string,
    mobile:string,
    password:string,
    reEnterPassword:string
}
function page() {
    const {register,handleSubmit, watch,formState: { errors }} = useForm<form>()

    const SubmitHandler = (data:any) => {
        console.log(data)
        signUpCallApi(data)
    }

    // function to call Api For SignUp
    const signUpCallApi = async (request: form) => {
        // if input is Not Valid don't Proceed further and refresh Component

        let payload = { email: request.email, mobileNo: request.mobile, password: request.password };
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
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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
                        <OutlinedInput {...register("email", { required:"Email Should be Required", 
                        pattern:{value:emailRegex,message:"Invalid Email Format"} })}
                           id="signup-email" 
                           name='email'
                            type='text'
                            label="Enter Email"></OutlinedInput>
                        <FormHelperText sx={{color:'red'}}>{errors.email ? errors.email.message: null}</FormHelperText>
                    </FormControl>
                    <FormControl>
                        <InputLabel htmlFor="signup-mobile">Enter Mobile</InputLabel>
                        <OutlinedInput
                            {...register("mobile",{required:"Mobile Number is Required",pattern:{value:/^\d+$/,message:"Mobile Number Should contain only numeric value"}})}
                            id="signup-mobile"
                            name="mobile"
                            type="text"
                            label="Enter Mobile">
                        </OutlinedInput>
                        <FormHelperText sx={{color:'red'}}>{errors.mobile ? errors.mobile?.message : ''}</FormHelperText>
                    </FormControl>
                </div>
                {/*  Input for password and Recorrect-password */}
                <div className='flex flex-col mt-2'>
                    <FormControl variant="outlined">
                        <InputLabel htmlFor="signup-password" >Enter Password</InputLabel>
                        <OutlinedInput
                         {...register("password",{required:"Password is Required",})}
                         id="signup-password" 
                         name='password' 
                         type='text' 
                         label="Enter Password"></OutlinedInput>
                        <FormHelperText sx={{color:'red'}}>{errors.password ? errors.password.message : ''}</FormHelperText>

                    </FormControl>
                    <FormControl className='mt-3'>
                        <InputLabel htmlFor="signup-repassword">Re Enter Password</InputLabel>
                        <OutlinedInput
                        {...register("reEnterPassword",{required:true,validate:(data)=>{  
                            if(watch().password!==data){
                                console.log("true ,",data)
                                return "Password Does not match"
                            }
                            return true;   
                        }})}
                         id="signup-repassword" 
                         name="reEnterPassword"
                         type="text"
                         label="Re Enter Password"
                        ></OutlinedInput>
                        <FormHelperText sx={{color:'red'}}>{errors.reEnterPassword ? errors.reEnterPassword.message : ''}</FormHelperText>
                    </FormControl>
                    <FormControl className='mt-2'>
                        <Button onClick={handleSubmit(SubmitHandler)} style={{ backgroundColor: 'blue', color: 'white' }} variant='contained'>Sign Up</Button>
                    </FormControl>
                </div>
            </div>
        </section>
    )
}

export default page