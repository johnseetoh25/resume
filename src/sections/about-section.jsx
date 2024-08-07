import { Label, Mail, Phone } from '@mui/icons-material'
import React from 'react';
import '../sections/about-section.css'

export default function AboutSection() {
  const personalBioList = [
    { label: 'Email', info: 'yeedingseetoh@gmail.com' },
    { label: 'Phone', info: '+6011-1057 5487' },
    { label: 'Date of Birth', info: '25/03/1998' },
    { label: 'Nationality', info: 'Malaysian'}
  ]

  return (
    <div className='about-section-layout'>
      <div className='personal-about-eassy'>
        <h3>About Me</h3>
        <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum ipsam rem fugit reprehenderit est necessitatibus doloribus neque non commodi repudiandae totam, labore fuga eaque? Optio adipisci quae saepe dolorum voluptatum!
            Perferendis doloremque inventore voluptatem pariatur quae quas et eligendi, animi aut voluptatum sunt quisquam minima quo sapiente quibusdam? Dolore consectetur ex quidem inventore. Cumque aliquam asperiores nulla labore dolore id.
          <br /><br />
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio nisi maiores iure repellat, ducimus vitae suscipit quisquam optio incidunt ex iusto, fugit, at quam? Velit assumenda atque minima iste molestias.
            Sapiente qui sunt eos repellat, modi harum aut doloremque nisi voluptatum explicabo unde consectetur hic laborum quo voluptatibus esse quibusdam voluptate rerum! Incidunt accusantium quaerat, dolorum natus voluptates deserunt dicta?
            Doloremque inventore voluptate nesciunt porro eaque debitis ratione eum? Atque autem, blanditiis voluptates necessitatibus ipsam saepe aperiam illum voluptatem facilis vel maiores, aliquid nemo pariatur dolore libero molestias minus praesentium.
        </p>       
      </div>

      <div className='personal-bio'>
        <h2>Personal Bios</h2>
        {personalBioList.map((personBio) => (
          <div className='personal-bio-row'>
            <label>{personBio.label}&thinsp;:</label><p>&emsp;{personBio.info}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
