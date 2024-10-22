import { SplideSlide } from '@splidejs/react-splide';
import StoreCard from '@components/Molecule/shop/card/index';

const SlideCardEntrepreneurship = ({
    slideProps
}) => {

    return (
        <SplideSlide>
            <StoreCard
                className="col-span-12 950:col-span-6 xl:col-span-4 px-4"
                id={slideProps?.id}
                key={slideProps?.url}
                name={slideProps?.name}
                description={slideProps?.description}
                categories={slideProps?.store_categories}
                image={slideProps?.imgUrl}
                color={slideProps?.backgroundColor || 'bg-white'}
                url={slideProps?.Url}
                setHoveredMarker={()=>{}}
            />
        </SplideSlide>
    )
}

export default SlideCardEntrepreneurship;