import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

const Container = styled.div`
`;

const SelectImgBox = styled.div`
  display: flex;
  margin-bottom: 50px;
  justify-content: center;
  flex-direction: row;
`;

const SelectImg = styled.img`
  object-fit: contain;
  width: 300px;
  height: 300px;
  display: block;
  margin: 0 auto;
`;

const ImgSliderBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  /* gap: 0 10px; */
  overflow: auto;
  margin: 0 auto;
  width: 320px;
`;

const ImgSlideItem = styled.div`
  box-shadow: none;
  cursor: pointer;
  width: 70px;
  height: 70px;
  min-width: 70px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  border: 1px solid rgb(218, 225, 231);

  .swiper-slide.swiper-slide-thumb-active & {
    border: 1px solid rgb(233, 69, 96);
  }
`;

const ImgSlideItemInner = styled.div`
  display: block;
  position: relative;
  text-align: center;
  font-weight: 600;
  font-size: 20px;
  min-width: 40px;
  overflow: hidden;
  border-radius: 10px;
  width: 40px;
  height: 40px;
`;

const ImgSlideItemImg = styled.img`
  display: block;
  height: 100%;
  width: 100%;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  line-height: 0;
`;

const ProductDetailSlider = ({imagesData}) => {
  const [thumbSwiper, setThumbSwiper] = useState(null);
  const [nima, setNima] = useState(null)

  return (
    <Container>
      <SelectImgBox>
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          spaceBetween={10}
          navigation={false}
          thumbs={{ swiper: thumbSwiper && !thumbSwiper.destroyed ? thumbSwiper : null }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2"
        >
          { imagesData?.map((item, index) => (
            <SwiperSlide key={index}>
              <SelectImg src={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </SelectImgBox>
      <ImgSliderBox>
        <Swiper
          onSwiper={setThumbSwiper}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          { imagesData?.map((item, index) => (
            <SwiperSlide key={index}>
              <ImgSlideItem>
                <ImgSlideItemInner>
                  <ImgSlideItemImg src={item} />
                </ImgSlideItemInner>
              </ImgSlideItem>
            </SwiperSlide>
          ))}
        </Swiper>
      </ImgSliderBox>
    </Container>
  )
}

export default ProductDetailSlider