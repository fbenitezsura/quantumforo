import ContainerReviews from '@components/Templates/reviews/ContainerReviews';
import Link from 'next/link';
import CardEntrepreneurshipMobile from '@components/Molecule/Store/CardEntrepreneurshipMobile';
import CardEntrepreneurshipDesktop from '@components/Molecule/Store/CardEntrepreneurshipDesktop';

const ViewStore = ({
    detailStore
}) => {

    console.log('detailStore', detailStore)

    return (
        <div className="container w-full h-screen flex flex-col pt-[170px]">
            <div className="grid grid-cols-12 gap-4">
                <CardEntrepreneurshipMobile
                detailStore={detailStore}
                />
                <div className="col-span-12 md:col-span-8 flex p-5 flex-col items-center mx-2 md:mx-0 md:ml-10 border-2 shadow-md rounded-lg">
                    <div className="flex justify-between w-full pl-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                        </svg>

                        <p className="text-2xl font-bold text-center mb-4">{detailStore?.Name}</p>
                        <div className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg>
                            <p className="ml-2">{detailStore?.Location}</p>
                        </div>

                    </div>
                    <Link href={detailStore?.Url} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                        <img src={detailStore?.imgUrl} className="h-[400px] rounded-xl" />
                    </Link>

                </div>
                <CardEntrepreneurshipDesktop 
                detailStore={detailStore}
                />
                <div className="col-span-12">
                    <ContainerReviews
                        detailStore={detailStore}
                    />
                </div>
            </div>
        </div>
    );
}

export default ViewStore;