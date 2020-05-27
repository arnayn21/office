import React from 'react';
import pic1 from '../New folder/Class-size.jpg';
import pic2 from '../New folder/gettyimages-1128725181-612x612.jpg';
import pic3 from '../New folder/images.jpg';
import pic4 from '../New folder/students-modern-classroom-illustration_1308-27136.jpg';
import '../Cardd/Cardd.css';


const Cardd = () => {
    return (
       <div className="group">
           <br/>
           <h5 className="text">WHY CHOOSE US </h5>
           <br/>
       <div class="card-deck">
  <div class="card">
    <img src={pic1} class="card-img-top" alt="..."></img>
    <div class="card-body">
      <h5 class="card-title">Our Lawyers </h5>
      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <button>Read ME</button>
    </div>
  </div>

  <div class="card">
    <img src={pic2} class="card-img-top" alt="..."></img>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <button>Read ME</button>
    </div>
  </div>
  <div class="card">
    <img src={pic3} class="card-img-top" alt="..."></img>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <button>Read ME</button>
    </div>
  </div>

  <div class="card">
    <img src={pic4} class="card-img-top" alt="..."></img>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <button>Read ME</button>
    </div>
  </div>
</div>
</div>
    );
};

export default Cardd;