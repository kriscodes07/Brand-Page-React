import React from 'react'

const Hero = () => {
  return (
    <>
    <div className="container">

        <div className="hero-container">
            <h1>YOUR FEET 
DESERVE
THE BEST</h1>
<p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.

</p>

<div className="btns">
    <button className='btndiamension'>Shop Now</button>
    <button className=' secondbtn'>Category</button>
</div>

<div className="available">
    <p>Also Available On</p>
    <div className="brand-logos">
        <img src="/amazon.png" alt="" />
        <img src="/flipkart.png" alt="" />
    </div>
</div>
        </div>

        <div className="hero-image">
            <img src="shoe_image.png" alt="" />
        </div>
    </div>
    
    </>
  )
}

export default Hero