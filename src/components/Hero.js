import React from 'react';
import styled from "styled-components";

const Hero = () => {
  return (
    <HeroWrapper className = "bg-black">
      <div className='container h-100 flex'>
        <div className='hero-content'>
          <h1>Save big. Learn big.</h1>
          <p>Shop our big sale for courses from ₹999. If you wnat to learn it, chances are we've got it. Ends July 29.</p>
          <br />
          <button style={{backgroundColor: 'black' , borderRadius: '5px' ,color: 'white', height: '40px' , width: '50%', textAlign: 'center'}}>Request a demo</button>
        </div>
      </div>
    </HeroWrapper>
  )
}

const HeroWrapper = styled.div`
  background: url('https://img-c.udemycdn.com/notices/web_carousel_slide/image/c473f925-990e-40ba-abd5-f9469f4e3795.jpg') center/cover no-repeat;
  height: 500px;

  .container{
    .hero-content{
      background-color: var(--clr-white);
      max-width: 450px;
      width: 100%;
      margin-left: 0;
      padding: 20px;

      h1{
        font-size: 32px;
        margin-bottom: 5px;
        white-space: nowrap;
      }
      p{
        font-size: 15px;
      }
    }
  }
`;

export default Hero