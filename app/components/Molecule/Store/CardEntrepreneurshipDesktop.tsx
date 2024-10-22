const CardEntrepreneurshipDesktop = ({ detailStore, detailEntrepreneur }) => {

    console.log('detailEntrepreneur', detailEntrepreneur)

    return (
        <div className="col-span-12 grid grid-cols-12 p-5 mr-10">
            <div className="flex justify-center col-span-4 flex-col items-center">
                <img src={detailEntrepreneur?.imgUrl} className="h-[250px] w-[250px] rounded-full border-2" />
                <h2 className="font-bold uppercase text-center text-[36px] mt-5">{detailEntrepreneur?.user.data.attributes.first_name} {detailEntrepreneur?.user.data.attributes.last_name}</h2>
            </div>
            <div className="mt-5 col-span-8">
                <p className="text-justify text-[18px]">{detailEntrepreneur?.description}</p>
                <div className="mt-7">
                    <button className="mr-3 px-6 py-2 rounded-full text-white font-bold bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
                        Instagram
                    </button>
                    <button className="px-6 py-2 rounded-full text-white font-bold bg-gradient-to-r from-red-600 to-red-800">
                        YouTube
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CardEntrepreneurshipDesktop;