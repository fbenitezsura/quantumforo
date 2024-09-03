import CardReviews from '@components/Molecules/Reviews/CardReviews/index'
import ContainerReviewForm from '@components/Templates/Modal/ContainerReviewForm';

const ViewReviews = ({
    handleOpenAddReview
}) => {

    return (
        <>
            <div className="p-5 w-full">
                <div className="border-b-2">
                    <h2 className="text-2xl font-bold">Comentarios de esta tienda</h2>
                </div>
                <div className="grid grid-cols-12 mt-1">
                    <div className="col col-span-12 md:col-span-6">
                        <div className="p-5 flex flex-col items-center">
                            <p><span className="text-3xl">4.4</span> / 5 </p>
                            <p className="text-sm">Estrellas</p>
                            <p className="text-xs">157 comentarios</p>
                        </div>
                    </div>
                    <div className="col col-span-12 md:col-span-6 flex justify-center md:justify-end">
                        <button
                            onClick={() => {
                                handleOpenAddReview();
                            }}
                            className="p-3 border-[#ccc] flex flex-col items-center border-2 rounded-md h-[50px] w-auto"
                        >
                            Califica este producto
                        </button>
                    </div>
                    <div className="col col-span-12">
                        <CardReviews />
                    </div>
                </div>
            </div>
            <ContainerReviewForm />
        </>

    );

}

export default ViewReviews;