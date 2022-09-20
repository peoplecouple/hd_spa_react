import React, { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Link } from 'react-router-dom';
import '../css/Main.scss'

const SLIDE = [
  { id: 1, title: '01 The world expands\n along the new path created', des: "현대엘리베이터가 만든 새로운 길을 따라 세상은 위로 넓어집니다.", link: "/sub01" },
  { id: 2, title: '02 The world expands\n along the new path created', des: "현대엘리베이터가 만든 새로운 길을 따라 세상은 위로 넓어집니다.", link: "/sub02" },
  { id: 3, title: '03 The world expands\n along the new path created', des: "현대엘리베이터가 만든 새로운 길을 따라 세상은 위로 넓어집니다.", link: "/sub03" }
]


const Main = () => {
  const [IDX, setIDX] = useState("")
  const MSG = useRef(null)
  // useEffect(() => {
  //   setIDX(0)
  // }, [])

  return (
    <section className='Main'>
      <div className="mainVisual">
        <Swiper
          loop={true}
          onSlideChange={el => setIDX(el.realIndex)}
          ref={MSG}
          className='mainSlider'>
          {
            SLIDE.map((el, idx) => {
              return (
                <SwiperSlide key={el.id} className={`itm itm0${el.id} ${IDX === idx ? "on" : ""}`}>
                  <div className="content">
                    <p>{el.title}</p>
                    <div className="des">
                      {el.des}
                    </div>
                    <Link to={el.link}>자세히보기</Link>
                  </div>
                </SwiperSlide>
              )
            })
          }

        </Swiper>
      </div>
      <ul className="dots">
        {
          SLIDE.map((el, idx) => {
            return (
              <li key={el.id} className={IDX === idx ? "on" : ""}>{el.id}</li>
            )
          })
        }
      </ul>
      <div className="tab">
        {SLIDE[IDX]?.title}
      </div>
      <div className="slideNum">
        {IDX + 1} / {SLIDE.length}
      </div>
      <button onClick={() => MSG.current.swiper.slidePrev()}>PREV</button>
      <button onClick={() => MSG.current.swiper.slideNext()}>NEXT</button>
    </section>
  )
}

export default Main