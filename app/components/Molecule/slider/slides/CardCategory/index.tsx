import { SplideSlide } from '@splidejs/react-splide';

const SlideCategory = ({
    slideProps
}) => {

    return (
        <SplideSlide>
            <img 
            className="hidden md:block h-[100px]" 
            src={slideProps.urlImg}
            alt="Image 1" 
            width="100%"
            />
            <h2 className="text-center text-xl font-bold mt-1">{slideProps?.title}</h2>
        </SplideSlide>
    )
}

export default SlideCategory;