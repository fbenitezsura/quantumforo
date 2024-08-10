import Banner from '@components/molecules/banner/index';
import SectionShop from '@components/template/home/SectionShop/index';

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