import React from 'react';
import { Button } from 'react-bootstrap';
import { BsFillTelephoneFill,BsFillEnvelopeFill,BsGeoAltFill,BsFacebook,BsInstagram } from "react-icons/bs";

const Footer = () => {
    return (
        <div className='text-white bg-dark p-5 '>
            <div className='d-flex gap-5 text-center ms-5 ps-5'>
            <h6><BsFillTelephoneFill /> 718-257-7631</h6>
            <h6><BsFillEnvelopeFill />hello@yourdomain.com </h6>
            <h6> <BsGeoAltFill></BsGeoAltFill>9287 Merry Falls, Woodland, NY</h6>
            <h6>Mon-Sun  9:00 am - 10:00 pm</h6>
            </div>
            <h2 className='text-center'>Contact us</h2>
            <div className='text-center '>
            <Button className='w-25 ' variant="outline-primary"><BsFacebook/> Facebook</Button>
            <Button className='w-25' variant="outline-secondary"><BsInstagram/> Instagram</Button>
            </div>
            <div>
                <p className='text-center mt-5'>
                    <small >© 2021 Julia Povarkova, All Rights Reserved</small>
                </p>
            </div>
        </div>
    );
};

export default Footer;