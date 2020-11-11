 import React from 'react';
 import ImageHeroUser from 'assets/image/hero-user.jpg';
 import ImageHeroName from 'assets/image/hero-name.png';
 
 export default function Hero(props) {
     return (
         <section className="container-fluid ">
             <div className="row align-items-center">
                 <div className="col pr-5"
                  >
                     <img src={ImageHeroUser} alt="Responsive imageUser" className="img-fluid" style={{margin:"-30px 0 0 -30px",zIndex:1}}></img>
                 </div>
                 <div className="col pr-5"
                  >
                     <img  src={ImageHeroName} alt="Responsive imageName" className="img-fluid " style={{margin:"0 0  0 -110px", zIndex:1}}></img>
                 </div>
             </div>
         </section>
     )
 }
 