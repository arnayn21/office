import React from 'react';
import '../Footer/Footer.css';

const Footer = () => {
    return (
        <div>
            
        <div class="container">
     <div class="row">
       <div class="col-4">
           <h5>Latest News</h5>
           <small>the website</small> template has been designed by free website teplates for you,for free
       </div>
       <div class="col-4">
           <h3>Contact Us</h3>
           <small>
               Address : wari,Dhaka .
               <br/>
               phone: 01020304050607
               <br/>
               Email : abc@gmail.com
           </small>
       </div>
       <div class="col-4">
           <h3>Send us a message</h3>
           <small>“The only person who is educated is the one who has learned how to learn …and change.”</small>
      <br/>
      <button>Click to send an email</button>
       </div>
     </div>
   </div>
   
   <div className="foter">
       <br/>
<small>@CopyRight 2023Manes winchester.All Rights Reserved</small>

   </div>



           </div>
    );
};

export default Footer;