import React from 'react'
import Image1 from '/src/assets/images/a.jpg'
import Image2 from '/src/assets/images/b.jpg'
import Image3 from '/src/assets/images/car1.jpg'
import Image4 from '/src/assets/images/chair.jpg'
import Image5 from '/src/assets/images/chair3.webp'
import Image6 from '/src/assets/images/c.jpeg'
import Image7 from '/src/assets/images/findcar.jpg'
const Slider = () => {
    let sliders = [
        {id:1,image:Image1,title:'image1',desc:'image1desc'},
        {id:2,image:Image2,title:'image2',desc:'image2desc'},
        {id:3,image:Image3,title:'image2',desc:'image2desc'},
        {id:4,image:Image4,title:'image2',desc:'image2desc'},
        {id:5,image:Image5,title:'image2',desc:'image2desc'},
        {id:6,image:Image6,title:'image2',desc:'image2desc'},
        {id:7,image:Image7,title:'image2',desc:'image2desc'}
    ]
  return (
    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
        {sliders.map((s,i)=>
        <div class={`carousel-item ${i==0 && 'active'}`} key={s.id} data-bs-interval="2000">
            <img src={s.image} class="d-block w-100" height={350} alt={s.title}/>
            <div class="carousel-caption d-none d-md-block">
                <h5>{s.title}</h5>
                <p>{s.desc}</p>
            </div>
        </div>
        )}
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  )
}

export default Slider
