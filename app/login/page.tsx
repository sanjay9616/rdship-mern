import { FormControl, TextField } from '@mui/material'
import React from 'react'

const page = () => {
    return (
        <section className='flex items-center justify-center mt-2 w-full'>
            <div className='w-[40%] bg-white border border-solid border-[#ccc] shadow-[0_3px_6px_rgb(0_0_0_/_16%)] rounded-[5px]'>
                <div className='m-8 flex flex-col justify-center'>
                    <TextField className='input' id="outlined-basic" label="Email" variant="outlined" />
                    <TextField className='input mt-4' id="outlined-basic" label="Password" variant="outlined" />
                </div>
            </div>
        </section>
    )
}

export default page