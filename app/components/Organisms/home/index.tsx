import Banner from '@components/Molecules/Banner/index';
import SectionShop from '@components/Templates/home/SectionShop/index';

const ViewHome = () => {
    return (
        <>
            <div className="w-full">
                <Banner />
            </div>
            <div className="w-full">
                <SectionShop />
            </div>
        </>
    );
}

export default ViewHome;