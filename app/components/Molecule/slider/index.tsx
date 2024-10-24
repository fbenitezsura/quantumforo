'use client'
import { Splide } from '@splidejs/react-splide';
import SlideBanner from '@components/Molecule/slider/slides/Banner';
import SlideCardEntrepreneurship from '@components/Molecule/slider/slides/CardEntrepreneurship/index';
import SlideCardCategory from '@components/Molecule/slider/slides/CardCategory/index';
import SliderImg from '@components/Molecule/slider/slides/cardImg/index';
import { type } from 'os';

interface Slider {
    data?: Array<any>
    typeSlider?: string,
    options?: Array<Object>
}
const Slider = ({
    data,
    typeSlider,
    options
}: Slider) => {

    return (
        <Splide
            options={{
                ...options
            }}
            aria-label="Banners"
            >
            {data?.map((slideProps) => {

                if (typeSlider === 'banner') {
                    return (
                        <SlideBanner
                            slideProps={slideProps}
                        />
                    )
                }

                if (typeSlider === 'cardEnterpreneurship') {
                    return (
                        <SlideCardEntrepreneurship
                            slideProps={slideProps}
                        />
                    )
                }

                if (typeSlider === 'cardCategory') {
                    return (
                        <SlideCardCategory
                            slideProps={slideProps}
                        />
                    )
                }

                if(typeSlider === 'cardImg') {
                    return (
                        <SliderImg
                            slideProps={slideProps}
                        />
                    )
                }

            })}
        </Splide>
    )

}

export default Slider;