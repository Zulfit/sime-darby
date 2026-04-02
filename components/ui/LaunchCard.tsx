export default function LaunchCard({ image, title, location, highlight }: { image: string, title: string, location: string, highlight: boolean }) {
    return (
        <div className="flex flex-col group w-[296px] cursor-pointer">
            
            {/* Image Container */}
            <div className="relative w-full h-[278px] rounded-2xl overflow-hidden transition-all duration-500 shadow-sm group-hover:shadow-md">
                {/* Image */}
                {!highlight && (
                    <img
                        src={image}
                        alt={title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                )}

                {/* Highlight Overlay */}
                {highlight && (
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent"></div>
                )}
            </div>

            {/* Content Outside the Card */}
            <div className="flex flex-col mt-4 px-2 text-center">
                <h6 className="text-[16px] font-bold text-black">{title}</h6>
                <p className="text-[13px] font-bold text-black">{location}</p>
            </div>
            
        </div>
    );
}