import banner from './../../../assets/home/banner.jpg'
const BannerInfo = () => {
    return (
        <div className='relative my-24'>
            <div>
                <img src={banner} alt="banner image" />
            </div>
            <div className='text-center w-3/4 top-1/3 left-40 absolute p-10 bg-white'>
                <h2 className='text-4xl'>Bistro Boss</h2>
                <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
            </div>
        </div>
    );
};

export default BannerInfo;