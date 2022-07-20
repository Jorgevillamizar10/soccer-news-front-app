import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { CardNews } from './CardNews'
import { NewsMockData } from '../utils/newsData'
import { Autoplay, FreeMode, Mousewheel, Navigation } from 'swiper'

export const SliderNews = () => {
  return (
    <div
      className='bg-[#292929] w-full h-[500px] flex items-center justify-center'
      id='breking_news'
    >
      <div className='container'>
        <h2 className='text-white font-bold text-3xl pl-8 lg:pl-1 mb-5'>
          Breaking News
        </h2>
        <Swiper
          loop={true}
          slidesPerView='auto'
          className='!mx-auto or-swiper-slider-versions-slide-four'
          modules={[Navigation, Mousewheel, FreeMode, Autoplay]}
          mousewheel={{
            forceToAxis: true
          }}
          autoplay={{
            delay: 2000,
            pauseOnMouseEnter: true,
            disableOnInteraction: false
          }}
          freeMode={{
            momentum: false
          }}
          threshold={5}
          slidesPerGroup={1}
          slidesPerGroupAuto={true}
        >
          {NewsMockData.map((data, index) => (
            <SwiperSlide
              key={index}
              className='!w-auto px-1 md:px-2 xl:px-1 slider-safari-workaround'
            >
              <CardNews {...data} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}
