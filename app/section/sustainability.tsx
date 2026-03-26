export default function Sustainability() {
    return (
        <section className="w-full flex flex-col justify-center my-10 h-auto relative">
            <div className="absolute inset-0 bg-[url('/images/bg_sustainability.jpg')] bg-cover h-auto"></div>
            <div className="absolute inset-0 bg-linear-to-b from-transparent to-white"></div>
            <div className="w-full flex flex-col justify-center mt-10 gap-2">
                <h2 className="text-[30px] text-center tracking-[1px] font-bold text-[#ea0009] aos-init aos-animate" data-aos="fade-up">SUSTAINABILITY</h2>
                <p className="mb-3 text-md-center text-center aos-init aos-animate" data-aos="fade-up">Championing Urban Biodiversity</p>
                <button className="w-48 h-8 flex items-center justify-center text-[#ba0000] font-bold bg-white mx-auto rounded-full py-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">Learn More</button>
            </div>
            <div className="w-full flex justify-center mt-5">
                <div className="w-[500px] h-[450px] overflow-hidden"
                style={{
                    clipPath: "polygon(30% 10%, 70% 10%, 95% 50%, 70% 90%, 30% 90%, 5% 50%)",
                    backgroundImage: "url('/images/img-fly.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}></div>
            </div>
            <div className="w-[200px] h-[200px] absolute top-3/4 left-1/5">
                <img src="/images/element-butterfly.gif" alt="" />
            </div>
            <div className="w-[200px] h-[200px] absolute top-1/3 left-2/3">
                <img src="/images/element-butterfly-2.gif" alt="" />
            </div>
            <div className="w-[200px] h-[200px] absolute top-3/9 left-1/5">
                <img src="/images/element-fly.gif" alt="" />
            </div>
        </section>
    );
}