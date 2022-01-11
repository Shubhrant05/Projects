import React from 'react'
import Input from './Input'
import { Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
const Signup_form = () => {
    return (
        <div className='w-100'>
            <Form>
                <p className="text-grey align-left f-13 " id="lock"><span style={{ height: "10px" }}><img className="lock" id="lock_img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAA3klEQVRIie3TvQ4BQRSG4TNaP41kK3ErqES0rkGvEK3EBREX4BJwD7MFjQKdxKs5EutnDWaDZL5kq/1ynjmZjEhISoAIGAELYA+sgRnQA0pZoR1gy+OsgGYW6FGBMVAD8vrVgYn+OwBtX2h0sWk/pTfQzgYo+4BH500dulPtDn3ASx1Wc+g2tDv3Ae90WMGhW9TuzgcMgO9+7rNjvZ8bGGgD8fXJU95vInf6FmhdO+YObEWk4nE5ERFrjKk+g53v85UYYxLW79xxgAMc4AD/JRxn4FgXuOsZtzoz5Ds5Af4wL9Li27oYAAAAAElFTkSuQmCC" alt="" /> </span>We protect your personal information. Learn more about our <a id="none" href="">privacy policy. </a> </p>

                <div className='d-flex flex-lg-row flex-column justify-content-evenly'>
                    <Input label="First Name" type="text" sup = "true" name="firstname" />

                    <Input label="Middle Name" type="text" name="middlename" />

                    <Input label="Last Name" type="text" sup = "true" name="lastname" />
                </div>

                <div className='d-flex flex-lg-row flex-column justify-content-evenly'>
                    <Input label="Country of Residency" type="text" sup = "true" name="country" value="India" />

                    <Input label="E-Mail" type="email" sup = "true" name="email" />

                    <Input label="Phone Number" type="text" sup = "true" name="country" />
                </div>
                <div className=' d-flex justify-content-between mt-5 mx-4'>
                    <Button className='back' style={{ border: "0px", background: "none" }}><FaArrowLeft />Back </Button>
                    <Button className="next" style={{ border: "0px", background: "orangered" }}>Next</Button>
                </div>
            </Form>
        </div>
    )
}

export default Signup_form
