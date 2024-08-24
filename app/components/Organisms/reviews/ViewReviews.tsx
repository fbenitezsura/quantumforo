const ViewReviews = () => {

    return (
        <div className="p-5 w-full">
            <div className="border-b-2">
                <h2 className="text-2xl font-bold">Comentarios de esta tienda.</h2>
            </div>
            <div className="grid grid-cols-12">
                <div className="col col-span-6">
                    <div className="bg-[#ccc] p-5">
                        <p><span className="text-2xl">4.4</span> / 5 </p>
                        <p className="text-sm">Estrellas</p>
                        <p className="text-sm">157 comentarios</p>
                    </div>
                </div>
                <div className="col col-span-6 flex justify-end">
                    <button
                    className="p-4 border-[#ccc] border-2 rounded-md h-auto w-auto"
                    >
                        Califica este producto
                    </button>
                </div>
                <div className="col col-span-12">
                    comentarios

                </div>
            </div>
        </div>
    );

}

export default ViewReviews;