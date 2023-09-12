import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import slide1 from './../../../assets/home/slide1.jpg'
import slide2 from './../../../assets/home/slide2.jpg'
import slide3 from './../../../assets/home/slide3.jpg'
import slide4 from './../../../assets/home/slide4.jpg'
import slide5 from './../../../assets/home/slide5.jpg'
import SectionTitle from '../../../Components/SectionTiltle/SectionTitle';

const Cateagory = () => {
    return (
        <div className='my-24'>
            <SectionTitle subHeading={'---From 11:00am to 10:00pm---'}
                heading={'ORDER ONLINE'}
            ></SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={slide1} alt="category image" />
                    <h2 className='text-center text-4xl text-white -mt-20'>SALAD</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="category image" />
                    <h2 className='text-center text-4xl text-white -mt-20'>SOUPS</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="category image" />
                    <h2 className='text-center text-4xl text-white -mt-20'>PIZZAS</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="category image" />
                    <h2 className='text-center text-4xl text-white -mt-20'>DESSERTS</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="category image" />
                    <h2 className='text-center text-4xl text-white -mt-20'>SOUPS</h2>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Cateagory;