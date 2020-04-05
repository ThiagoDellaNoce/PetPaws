import React from 'react';
import styles from './style.css'
import Header from '../../inc/header'

import carousel_01 from './assets/carousel_01.jpg'
import carousel_02 from './assets/carousel_02.jpg'
import carousel_03 from './assets/carousel_03.jpg'

const active = {
  color: '#DA70D6'
}

function Home() {
  return (
    <>
    <Header />

    <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li styles={active} data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
        <li styles={active} data-target="#carouselExampleCaptions" data-slide-to="1"></li>
        <li styles={active} data-target="#carouselExampleCaptions" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src={carousel_01} class="d-block w-100" alt="..." />
          <div class="carousel-caption d-none d-md-block">
            <h5>First slide label</h5>
            <p style={ position: "Absolute", left: "0px" }>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src={carousel_02} class="d-block w-100" alt="..." />
          <div class="carousel-caption d-none d-md-block">
            <h5>Second slide label</h5>
            <p style={ position: "Absolute", left: "0px" }>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src={carousel_03} class="d-block w-100" alt="..." />
          <div class="carousel-caption d-none d-md-block">
            <h5>Third slide label</h5>
            <p style={ position: "Absolute", left: "0px" }>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </div>
        </div>
        </div>
      </div>
      </>
  );
}

export default Home;
