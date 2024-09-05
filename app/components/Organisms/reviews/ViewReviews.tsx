import CardReviews from '@/app/components/Molecule/Reviews/CardReviews/index'
import ContainerReviewForm from '@components/Templates/Modal/ContainerReviewForm';
import LoadingSpinner from '@components/Molecule/LoadingSpinner/index';
import Link from 'next/link';
import StarDisplay from '@components/Molecule/Start/Display'

const ViewReviews = ({
    handleOpenAddReview,
    detailStore,
    reviewStore,
    loadingGetReviews,
    canAddReview,
    userLogged
}) => {

    return (
        <>
            <div className="p-5 w-full">
                <div className="border-b-2">
                    <h2 className="text-2xl font-bold">Comentarios de esta tienda</h2>
                </div>
                {loadingGetReviews ? (
                    <div className="w-full flex justify-center h-[220px]">
                        <LoadingSpinner text={'Cargando...'} />
                    </div>
                ) : (
                    <div className="grid grid-cols-12 mt-5 mb-10">
                        <div className="col-span-12 md:col-span-6">
                            <div className="pt-5 px-5 flex md:flex-col items-center justify-around md:items-start">
                                <p><span className="text-4xl mb-2">4.4</span><span className="text-xl">/ 5</span></p>
                                <StarDisplay rating={4} />

                            </div>
                            <div className="pb-5 px-5 flex justify-around md:justify-start md:ml-1">
                                <p className="text-md">157 comentarios</p>
                            </div>

                        </div>
                        {userLogged ? (
                            <div className="col-span-12 md:col-span-6 flex justify-center items-center">
                                <button
                                    onClick={() => {
                                        handleOpenAddReview();
                                    }}
                                    className="p-3 border-[#ccc] flex flex-col items-center border-2 rounded-md h-[50px] w-auto"
                                    disabled={!canAddReview}
                                >
                                    {canAddReview ? 'Califica este producto' : 'Gracias por dejar tu comentario.'}
                                </button>
                            </div>
                        ) : (
                            <Link className="col-span-12 md:col-span-6 flex justify-center md:justify-end" href="/account/login">
                                <button className="p-3 border-[#ccc] flex flex-col items-center border-2 rounded-md h-[50px] w-auto">Iniciar Sesion</button>
                            </Link>
                        )}
                        <div className="col-span-12 h-auto">
                            {reviewStore.length === 0 && (
                                <div className="pb-[100px]">
                                    <p className="text-center">No hay comentarios para esta tienda</p>
                                </div>
                            )}
                            {reviewStore?.map((review) => {
                                return (
                                    <CardReviews review={review} />
                                )
                            })}
                        </div>
                    </div>
                )}
            </div>
            <ContainerReviewForm
                detailStore={detailStore}
            />
        </>
    );

}

export default ViewReviews;