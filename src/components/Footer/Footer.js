import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className="d-flex flex-column h-100">
         <footer className="w-100 py-4 flex-shrink-0">
           
           <br />
           <h2 style={{color: 'white', paddingLeft: '15px'}}>Teach the world online</h2>
         <div style={{display: 'flex'}}>
         
           <p style={{color: 'whitesmoke', paddingLeft: '15px'}}>Create an online video course, reach students across the globe, and earn money</p>
           <button style={{ border: '2px solid white',
                            backgroundColor: 'black',
                            color: 'white',
                            padding: '20px 18px',
                            fontSize: '15px',
                            cursor: 'pointer',
                            position: 'relative',
                            left: '48%',
                            bottom: '30px'
                         }}>Teach on Udemy</button>
         </div>

           <hr />
           
           <div style={{display: 'flex'}}>

          
           <div style={{display: 'flex' , flexDirection: 'row', justifyContent: 'left', height: '70px' , width: '150px', alignContent: 'center', paddingLeft: '20px'}}>
           <img src="https://s.udemycdn.com/partner-logos/v4/nasdaq-light.svg" alt="" /> 
           <img src="https://s.udemycdn.com/partner-logos/v4/volkswagen-light.svg" alt="" />
           <img src="https://s.udemycdn.com/partner-logos/v4/box-light.svg" alt="" />
           <img src="https://s.udemycdn.com/partner-logos/v4/netapp-light.svg" alt="" />
           <img src="https://s.udemycdn.com/partner-logos/v4/eventbrite-light.svg" alt="" />
           </div>
           </div>


           <hr />
         
         <br />
         <div style={{display: 'flex'}}>
            <img src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg" alt="" width='91px' height='34px' style={{paddingRight: '1280px'}} />
            <h3 style={{paddingRight: '50px' }}>CJ</h3>
         </div>
         <br />
    </footer>
    </div>
  )
}

export default Footer