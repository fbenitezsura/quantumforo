import Banner from '@/app/components/Molecules/banner/index';
import SectionShop from '@/app/components/Templates/home/SectionShop/index';

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