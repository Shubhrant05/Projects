import React from 'react'
import SignupForm from './Form/SignupForm'

const Container = () => {
    return (
        
        <div className='w-55 min-h-70 mt-3 mx-auto container-bg rounded-box p-3'>
           <div className='d-flex justify-content-between mb-3'>
               <span className='text-grey sans f-13'>Applicant Details <p className='text-white d-inline sans'>Wyoming Ilc</p></span>
               <span className='text-grey sans f-13'>20%</span>
           </div>
           <div style={{height: "20px"}}></div>
            <div className='mx-auto text-white sans f-24'>Your Contact Information</div>

            <div className='mx-auto f-13 text-grey sans'>We need your information in order to create a company in the U.S</div>

            <div className='mt-4 '>
                <SignupForm/>
            </div>
        </div>
        
    )
}

export default Container
