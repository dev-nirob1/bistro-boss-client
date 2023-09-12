import SectionTitle from "../../../Components/SectionTiltle/SectionTitle";
import featuredImage from './../../../assets/home/featured.jpg'
import './featured.css'

const Featured = () => {
    return (
        <div className="featured-item my-24 py-10 bg-slate-500 bg-opacity-40">
            <SectionTitle
                heading={'FROM OUR MENU'}
                subHeading={'---Check it out---'}
            ></SectionTitle>
            <div className="text-white md:flex justify-center items-center py-16 px-24 gap-5 bg-slate-500 bg-opacity-40">
                <div>
                    <img src={featuredImage} alt="" />
                </div>
                <div className="ml-10 space-y-4">
                    <h2 className="text-xl">March 20, 2023</h2>
                    <h3 className="text-2xl">WHERE CAN I GET SOME?</h3>
                    <p className="text-lg"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className="rounded-lg border-b border-gray-700 px-5 py-3">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;