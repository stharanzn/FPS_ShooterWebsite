import React from 'react'
import "./Slider.scss"
import { useAuth } from '../../utils/auth'

export default function Slider() {

  const auth = useAuth();

  return (
    <>
    <main class="main">  
  <section class="home container" id="home">
    <div class="swiper home-swiper">
      <div class="swiper-wrapper">        
        <section class="swiper-slide">
          <div class="home__content grid">
            <div class="home__group">
              <img src={`${process.env.PUBLIC_URL}/images/skullLogo.png`} alt="" class="home__img"/>
              <div class="home__indicator"></div>
              <div class="home__details-img">
                <h4 class="home__details-title">Captain Sem</h4>
                <span class="home__details-subtitle">Former Army Officer</span>
              </div>
            </div>
            <div class="home__data">
              <h3 class="home__subtitle">#1 IN THE TROOP</h3>
              <h1 class="home__title">Dominate <br/> Among Your <br/> Friends </h1>
              <p class="home__description">Get together with your friends and compete among yourselves or together to gather <strong>crowns. </strong></p>
              <div class="home__buttons">
                {!auth.user && (
                <a href='/FPS_ShooterWebsite/signin' class="custom-btn btn-8">         
                    Sign In         
                </a>
                )}

                {auth.user && (
                  <a href='/FPS_ShooterWebsite/download' class="custom-btn btn-8">         
                  Download         
              </a>
                )}
                
              </div>
            </div>
          </div>
        </section>
 
      </div>      
    </div>
  </section>
  </main>
    </>
  )
}
