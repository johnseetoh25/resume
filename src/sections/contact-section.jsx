import React from 'react'
import '../sections/contact-section.css'
import { TextField } from '@mui/material';

function FormsLayout() {
    return(
        <div className='forms-layout'>
            <div className="hiring-layout">
                <h3>Hiring Me</h3>
                <div className="hiring-form">
                    <TextField label='Name' variant='outlined' fullWidth/>
                    <TextField label='Company Name' variant='outlined' fullWidth/>
                    <TextField label='Contact NO.' variant='outlined'fullWidth/>
                    <TextField label='Email' variant='outlined' fullWidth/>
                </div>
            </div>
            <div className="contact-layout">
                <h3>contact details</h3>
                <span className="contact-row">Phone</span>
                <span className="contact-row">Email</span>
                <span className="contact-row"></span>
                
            </div>
        </div>
    );
}

const ContactSection = () => {
  return (
    <div className='contact-section-layout'>
      <FormsLayout/>
    </div>
  )
}

export default ContactSection
