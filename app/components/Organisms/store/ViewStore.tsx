import ContainerReviews from '@components/Templates/reviews/ContainerReviews';
import Link from 'next/link';
import CardEntrepreneurshipMobile from '@components/Molecule/Store/CardEntrepreneurshipMobile';
import CardEntrepreneurshipDesktop from '@components/Molecule/Store/CardEntrepreneurshipDesktop';

const ViewStore = ({
    detailStore,
    detailEntrepreneur
}) => {

    console.log('detailEntrepreneur', detailEntrepreneur)

    console.log('detailStore view', detailStore)

    return (
        <div className="container mx-auto w-full h-screen flex flex-col pt-[170px]">
            <div className="grid grid-cols-12 gap-4">
                <CardEntrepreneurshipMobile
                    detailStore={detailStore}
                />
                <CardEntrepreneurshipDesktop
                    detailStore={detailStore}
                    detailEntrepreneur={detailEntrepreneur}
                />
                <div className="col-span-12 flex mt-10 p-5">
                    <div className="flex flex-col w-full pl-2 mx-5">
                        <p className="text-[36px] font-bold">{detailStore?.name}</p>
                        <span>{detailStore?.description}</span>
                        <button
                            className="w-[240px] h-[50px] rounded-xl border-2 mt-10">
                            Visitar tienda
                        </button>
                    </div>
                    <Link href={detailStore?.Url || 'https://google.cl'} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                        <img src={detailStore?.imgUrl} className="h-[200px]" />
                    </Link>
                </div>

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