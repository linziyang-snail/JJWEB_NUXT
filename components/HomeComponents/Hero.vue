<template>
    <section id="hero">
        <NuxtImg
        src="/banner/banner-home.jpg"
        class="hero-image"
        alt="Banner Image"
        format="webp"
        layout="responsive"
        width="1920"
        height="1080"
        quality="80"
      />
      <div class="overlay"></div>
      <div class="container padding-large">
        <div class="row">
          <div class="col-md-6 offset-md-3 text-center">
            <p class="header-top text-white mb-4">𝐀𝐋𝐖𝐀𝐘𝐒 𝐆𝐎𝐓 𝐘𝐎𝐔𝐑 𝐁𝐀𝐂𝐊</p>
            <h1 class="display-1 text-white mb-5">
              JieJiang <br />
              Auto Detailing
            </h1>
            <NuxtLink to="#about-section" prefetch class="btn btn-outline-primary align-items-center">
              查看更多
              <Icon name="tabler:arrow-right" class="arrow-icon" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  const bannerImage = '/banner/banner-home.jpg';
  </script>
  
  <style>
  #hero {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    position: relative;
  }
  
  .hero-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    object-fit: cover;
  }
  
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 0;
  }
  
  .container {
    position: relative;
    z-index: 1;
    text-align: center;
  }
  
  .col-md-6.offset-md-3 {
    margin: 0;
    flex: 0 0 100%;
    max-width: 100%;
  }
  </style>
  