import ContainerEntrepreneurship from "@components/Templates/Entrepreneurship/ContainerEntrepreneurship";
import { Suspense } from 'react'

function SearchBarFallback() {
    return <>placeholder</>
}

const EntrepreneurshipPage = () => {

    return (
        <Suspense fallback={<SearchBarFallback />}>
            <ContainerEntrepreneurship
            />
        </Suspense>

    )
}

export default EntrepreneurshipPage;