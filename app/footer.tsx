export default function Footer() {
    return (
        <footer className="w-full flex flex-col justify-center h-[235px] relative bg-[#d71920]">
            <div className="absolute inset-0 bg-[url('/images/bg_footer.png')] bg-cover h-auto flex items-center justify-center">
                <div className="flex flex-col w-[1180px] h-[155px] items-center justify-center">
                    <div className="flex flex-row w-full h-full">
                        <div className="col w-full h-full">
                            <p className="uppercase text-white text-[12px] font-bold leading-[18px] mb-[5px]">Toll Free Line</p>
                            <p className="uppercase text-white text-[24px] font-bold leading-[28px] mb-[5px]">1-800-88-1118</p>
                            <p className="text-white text-[12px] font-bold leading-[18px]">Monday-Friday, 8.30am to 5.30pm <br /> (excluding public holidays)</p>
                        </div>
                        <div className="col w-full h-full">
                            <p className="uppercase text-white text-[12px] font-bold leading-[18px] mb-[5px]">Outside Malaysia</p>
                            <p className="uppercase text-white text-[24px] font-bold leading-[28px] mb-[5px]">+603-7849 5000</p>
                        </div>
                        <div className="col w-full h-full">
                            <p className="uppercase text-white text-[12px] font-bold leading-[18px] mb-[5px]">Connect with us</p>
                            <ul className="flex flex-row gap-4">
                                <li><a href="#"><img src="/images/footer/footer-fb.svg" className="w-10 h-10" /></a></li>
                                <li><a href="#"><img src="/images/footer/footer-insta.svg" className="w-10 h-10" /></a></li>
                                <li><a href="#"><img src="/images/footer/footer-tiktok.svg" className="w-10 h-10" /></a></li>
                                <li><a href="#"><img src="/images/footer/footer-youtube.svg" className="w-10 h-10" /></a></li>
                            </ul>
                        </div>
                    </div>
                    <hr className="w-full text-white my-[32px] opacity-[0.25]" />
                    <div className="flex flex-row w-full h-full">
                        <div className="col w-full h-full">
                            <ul className="flex flex-row gap-[10px] text-white text-[11px] font-normal">
                                <li><a href="#">Sitemap</a></li>
                                <li><a href="#">Privacy Notice</a></li>
                                <li><a href="#">Scam Notice</a></li>
                                <li><a href="#">Terms of Use</a></li>
                            </ul>
                        </div>
                        <div className="col w-full h-full">
                            <p className="text-white text-[11px] font-normal">© Copyright 2026 Sime Darby Property Berhad 197301002148 (15631-P) All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}