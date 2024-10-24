import { SplideSlide } from '@splidejs/react-splide';

const SlideImg = ({
    slideProps
}) => {

    return (
        <SplideSlide>
            <div className="w-full flex flex-col items-center">
                <img
                    className="h-[70%] w-[80%] cursor-pointer"
                    src={slideProps.urlImg}
                    alt="Image 1"
                />
            </div>
        </SplideSlide>
    )
}

export default SlideImg;