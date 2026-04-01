export default function AboutUs() {
    return (
        <section className="w-full flex flex-col justify-center my-10 h-[1300px] relative">
            <div className="absolute inset-0 bg-[url('/images/bg_about_us.png')] bg-cover h-auto"></div>
            <div className="absolute top-0 w-full flex flex-col justify-center mt-10 gap-2">
                <h2 className="text-[30px] text-center tracking-[1px] font-bold text-[#ea0009]">ABOUT US</h2>
                <button className="w-48 h-8 flex items-center justify-center text-[#ba0000] font-bold bg-white mx-auto rounded-full py-6">Learn More</button>
            </div>
        </section>
    );
}