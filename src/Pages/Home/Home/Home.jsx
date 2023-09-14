import Banner from "../Banner/Banner";
import BannerInfo from "../BannerInfo/BannerInfo";
import Cateagory from "../Category/Cateagory";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";
import { Helmet } from 'react-helmet-async';


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss Restuarant</title>
            </Helmet>
            <Banner />
            <Cateagory />
            <BannerInfo></BannerInfo>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;