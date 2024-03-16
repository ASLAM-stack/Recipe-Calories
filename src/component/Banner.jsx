import "../App.css"
const Banner = () => {
    return (
        <div>
            <div className="container mt-12">
                <div className="banner bg-[url('./assets/banner.png')] min-h-[700px]  bg-cover bg-no-repeat rounded-3xl flex justify-center items-center">
                    <div className="banner_content w-[70%] space-y-6">
                        <h1 className="lexend text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white">Discover an exceptional cooking <br /> class tailored for you!</h1>
                        <p className="lexend text-base  lg:text-lg text-center text-white">Unleash your culinary potential with a personalized cooking class designed just for you, <br /> where flavors meet creativity in a bespoke gastronomic journey.</p>
                        <div className="flex flex-col md:flex-row gap-5 justify-center">
                            <div className="btn  rounded-full lexend text-xl font-semibold bg-[#0be58a] outline-none border-none hover:bg-[#eeb7409f] hover:text-white"><a>Explore Now</a>
                            </div>
                            <div className="btn btn-outline rounded-full text-white lexend text-xl font-semibold hover:bg-[#9af0ff27] hover:border-none"><a>Our Feedback</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;