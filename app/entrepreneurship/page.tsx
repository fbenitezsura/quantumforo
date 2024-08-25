'use client'
import ContainerEntrepreneurship from "@components/Templates/Entrepreneurship/ContainerEntrepreneurship";
import { useSearchParams } from 'next/navigation'

const EntrepreneurshipPage = () => {

    const searchParams = useSearchParams()

    const search = searchParams.get('search');
    const city = searchParams.get('city');

    console.log('search',search);

    console.log('city',city);

    return (
        <ContainerEntrepreneurship
        search={search}
        city={city}
        />
    )
}

export default EntrepreneurshipPage;