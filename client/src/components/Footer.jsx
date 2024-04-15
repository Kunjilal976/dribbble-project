import React from 'react'
import logo from './../images/logo.png'



export default function Footer() {
  return (
    <div className='pt-[50px]'>
    <div class="grid grid-cols-1 md:grid-cols-6 justify-around bg-blue-100 border-b border-blue-900 outline-none">
    <div className='p-4'>
    <h2 class="text-lg font-semibold mb-2">dribbble</h2>
    <p>Dribbble is the world's leading community for creatives to share,grow,and get hired</p>
    <div className=''>
    <i className="fa fa-globe gap-2"></i>
    <i className="fa fa-twitter p-2"></i>
    <i className="fa fa-facebook p-2"></i>
    <i className="fa fa-instagram p-2"></i>
    </div>
</div>
<div class="border border-none p-4">
  <h2 class="text-lg font-semibold mb-2">For designers</h2>
  <ul>
    <li>Go Prof</li>
    <li>Explore design work</li>
    <li>Design blog</li>
    <li>Overtime podcast</li>
    <li>Playoffs</li>
    <li>Weekly Warm-Up</li>
    <li>Refer a Friend</li>
    <li>Code of conduct</li>
  </ul>
</div>
<div class="border border-none p-4">
  <h2 class="text-lg font-semibold mb-2">Hire designers</h2>
  <ul>
    <li>Post a job opening</li>
    <li>Post a freelancer project</li>
    <li>Search for designers</li>
    <li><span className='font-bold'>Brands</span></li>
    <li>Advertise with us</li>
  </ul>
</div>
<div class="border border-none p-4">
  <h2 class="text-lg font-semibold mb-2">Company</h2>
  <ul>
    <li>About</li>
    <li>Careers</li>
    <li>Support</li>
    <li>Media kit</li>
    <li>Testimonials</li>
    <li>API</li>
    <li>Terms of service</li>
    <li>Privacy Policy</li>
    <li>Cookie policy</li>
  </ul>
</div>
<div class="border border-none p-4">
  <h2 class="text-lg font-semibold mb-2">Directories</h2>
  <ul>
    <li>Design jobs</li>
    <li>Designers for hire</li>
    <li>Freelance designers for hire</li>
    <li>Tags</li>
    <li>Places</li>
    <li><span className='font-bold'>Design assets</span></li>
    <li>Dribbble Marketplace</li>
    <li>Creative Market</li>
    <li>Fontspring</li>
    <li>Font Squirel</li>     
  </ul>
</div>
<div class="border border-none p-4">
  <h2 class="text-lg font-semibold mb-2">Design Resources</h2>
  <ul>
    <li>Freelancing</li>
    <li>Design Hiring</li>
    <li>Design Portfolio</li>
    <li>Creative Process</li>
    <li>Design Industry Trends</li>
  </ul>
</div>
</div>
<div className='pt-[50px] flex justify-around'>
<div><p className="text-gray-500 text-sm">&copy; 2024 Your Company Name. All rights reserved.</p></div>

<div className='flex gap-2 '>
<p className='gap-4 flex'><span className='font-bold'>20,502,853 </span> shots dribbled </p>
<img src={logo} alt="" className='w-6 h-6'/>
</div>

</div>

</div>
  )
}
