export default function Expert() {
    return (
        <section className="h-[700px] w-full flex flex-col relative border-t-9 border-[#df6436]">
            <div className="absolute inset-0 bg-[url('/images/bg-expert.jpg')] bg-cover h-auto">
                <div className="w-[760px] h-full flex justify-center items-center absolute right-0" data-aos="fade-right">
                    <div className="w-[340px] text-white px-md-0 px-2 flex flex-col justify-start items-start">
                        <h2 className="text-[30px] tracking-[1px] font-bold text-white pb-2">YOUR GO-TO INDUSTRIAL EXPERTS</h2>
                        <p className="pb-4 text-md-center">Sime Darby Property Industrial offers strategic locations, customise solutions, future-ready spaces to give your business the winning edge.</p>
                        <button className="w-48 h-8 flex items-center justify-center text-[#ba0000] font-bold bg-white rounded-full py-6">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
}