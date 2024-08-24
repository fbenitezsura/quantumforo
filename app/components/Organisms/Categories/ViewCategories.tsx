import Loading from '@components/Molecules/Loading/loading';
import CardCategory from "@components/Molecules/CardCategory3/CardCategory3";
const ViewCategories = ({
    categories,
    loading
}: {
    categories: Array<string>,
    loading: boolean
}) => {

    return (
        <div className={`nc-PageArchive`}>
            <div className="w-full px-2 xl:max-w-screen-2xl mx-auto mt-10">
                <div className="relative aspect-w-16 aspect-h-13 sm:aspect-h-9 lg:aspect-h-8 xl:aspect-h-5 rounded-3xl md:rounded-[40px] overflow-hidden z-0">
                    <div className="absolute inset-0 bg-black text-white bg-opacity-30 flex flex-col items-center justify-center">
                        <h2 className="inline-block align-middle text-5xl font-semibold md:text-7xl ">
                            Todas las categorias
                        </h2>
                        {/*<span className="block mt-4 text-neutral-300">115 Articles</span>*/}
                    </div>
                </div>
            </div>
            <div className="container pt-10 pb-16 lg:pb-28 lg:pt-20 space-y-16 lg:space-y-28">
                {loading ? (
                    <Loading textLoading="Cargando Categorias..." />
                ) : (
                    <>
                        {categories.length === 0 && (
                            <div className="w-full flex justify-center">
                                <span className="text-xl">Sin Categorias.</span>
                            </div>
                        )}
                        <div className="grid sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6 md:gap-8 mt-8 lg:mt-10">
                            {categories?.map((category) => {
                                return (
                                    <CardCategory key={category.id} taxonomy={category} />
                                )
                            })}
                        </div>
                    </>
                )}
            </div>
        </div>

    )

}

export default ViewCategories;