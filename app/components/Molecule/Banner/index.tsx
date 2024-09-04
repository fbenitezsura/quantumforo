import ContainerSearch from "@components/Templates/home/Search/ContainerSearch";    

const Banner = () => {
    return (
        <div className="w-full relative flex items-center justify-center h-[250px] md:h-[340px] bg-cover bg-center bg-[url('/banner/1.webp')]">
            <div className="text-center text-white z-10 mt-20 w-full mx-5">
                <ContainerSearch />
            </div>
            <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
    );
};

export default Banner;