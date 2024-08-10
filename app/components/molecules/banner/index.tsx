const Banner = () => {
    return (
        <div className="w-full relative flex items-center justify-center h-[100vh] bg-cover bg-center bg-[url('/banner/1.webp')]">
            <div className="text-center text-white z-10 max-w-xl">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Descubre y Apoya Negocios Locales
                </h1>
                <p className="text-lg md:text-2xl mb-8">
                    Conectando a la comunidad con negocios únicos y sostenibles cerca de ti.
                </p>
                <div className="flex max-w-lg mx-auto">
                    <input
                        type="text"
                        placeholder="¿Qué estás buscando? (por ejemplo, Café, Moda)"
                        className="flex-grow p-4 rounded-l-lg text-black"
                    />
                    <button className="p-4 bg-orange-500 text-white font-semibold rounded-r-lg hover:bg-orange-600 transition">
                        Buscar
                    </button>
                </div>
            </div>
            <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
    );
};

export default Banner;