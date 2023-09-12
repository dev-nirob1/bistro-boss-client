import Banner from "../Banner/Banner";
import BannerInfo from "../BannerInfo/BannerInfo";
import Cateagory from "../Category/Cateagory";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
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