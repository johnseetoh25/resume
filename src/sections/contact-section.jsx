import React from 'react'
import '../sections/contact-section.css'
import { Divider, TextField } from '@mui/material';
import { GitHub, LinkedIn, Mail, Phone } from '@mui/icons-material';

function ContactListingLayout() {
  const iconStyle = { fontSize: 36 };

  const contactList = [
    { icon: <Mail className='icon-style' sx={iconStyle}/>, title: 'Email', data: 'yeedingseetoh@gmail.com' },
    { icon: <Phone className='icon-style' sx={iconStyle}/>, title: 'Phone', data: '+6011-1057 5487' },
    { icon: <LinkedIn className='icon-style' sx={iconStyle}/>, title: 'LinkedIn', data: 'seetohyeeding0325' },
    { icon: <GitHub className='icon-style' sx={iconStyle}/>, title: 'GitHub', data: 'johnseetoh25' },
  ];
  return (
    <div className='contact-listing-layout'>
      { contactList.map((contactItem, index) => (
        <div className="contact-item-layout">
          <div className='contact-item-icon'>{contactItem.icon}</div> 
          <b>{contactItem.title}</b>
          <div>{contactItem.data}</div>
        </div>
      ))}
    </div>
  );
}

function FormsLayout() {
    return(
        <div className='forms-layout'>
          <TextField label='Name' variant='outlined' fullWidth/>
          <TextField label='Company Name' variant='outlined' fullWidth/>
          <TextField label='Contact NO.' variant='outlined'fullWidth/>
          <TextField label='Email' variant='outlined' fullWidth/>
        </div>
    );
}

const ContactSection = () => {
  return (
    <div className='contact-section-layout'>
      <div className="contact-card-layout">
        <div className="hiring-layout">
            <div className='contact-card-title'>Contact Form</div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor molestias hic iure ducimus. Consequatur quae cupiditate hic, dolorem labore nihil quos ea deleniti harum fugiat, ipsam tenetur suscipit delectus vel.
            </p>
            <FormsLayout/>
        </div>
        <Divider orientation='vertical' flexItem/>
        <div className="contact-layout">
            <div className='contact-card-title'>Contact Info</div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum cum autem itaque ut, ea debitis obcaecati provident ex inventore blanditiis consequuntur velit modi quasi iusto, cupiditate voluptatum eligendi quia recusandae.
            </p>
            <ContactListingLayout/>
        </div>
      </div>
      
    </div>
  )
}

export default ContactSection
