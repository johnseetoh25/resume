import { Copyright } from '@mui/icons-material'
import React from 'react'
import '../footer/footer.css'

const Footer = () => {
  return (
    <div className='footer-layout'>
      <div className="social-icon-list"></div>
      <div className="person-name">See Toh Yee Ding - CV Web Design</div>
      <div className="copyright"><Copyright/>&thinsp;CV, All rights reserved.</div>
    </div>
  )
}

export default Footer
