import React from 'react'
import { Container } from '@mui/material'
import Hurdle from '../images/hurdle.jpg'
import Playing from '../images/playing.jpg'
import Sport from '../images/sport.jpg'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination} from "swiper";
import '../Gallery/gallery.css';
import { styled } from '@mui/material';
import Typography from '@mui/material/Typography'

const Typo=styled(Typography)({
    marginTop:'100px',
    marginBottom:'80px',
    fontSize: '30px',
    fontFamily: 'Berkshire Swash, cursive',
    color:'#black',
    textAlign:'center'
})
function gallery() {
    return(
        <React.Fragment>
            <Container maxWidth='lg'>
            <Typo>Gallery</Typo>
                
                <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={Hurdle} alt='Hurdle'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Playing} alt='Playing'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Sport} alt='Sport'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Hurdle} alt='Hurdle'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Playing} alt='Playing'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Sport} alt='Sport'/>
        </SwiperSlide>

      </Swiper>
                
            
        
            </Container>





        </React.Fragment>
        
       
    )
    
}

export default gallery