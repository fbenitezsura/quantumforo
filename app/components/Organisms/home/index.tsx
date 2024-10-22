import Banner from '@/app/components/Molecule/Banner/index';
import Pricing from '@components/Molecule/Pricing/Pricing'
import Slider from '@components/Molecule/slider/index';
import MapComponent from '@components/Molecule/GoogleMaps/index';
import TextGenerateEffect from '@components/Molecule/TextGenerateEffect/TextGenerateEffect';
import pricingDataShop from '@components/Molecule/Pricing/pricingDataShop.json';
import pricingDataLanding from '@components/Molecule/Pricing/pricingDataServiceLanding.json';

const ViewHome = ({
    hoveredMarker,
    setHoveredMarker,
    clickMarker,
    setClickMarker,
    listStoreInZone,
    featuredEntrepreneurship,
    newEntrepreneurship,
    featuredCategory,
    showShopPlans,
    showServicePlans,
    isMobile
}) => {
    return (
        <>
            <div className="w-full">
                <Banner />
            </div>
            <div className="w-full max-w-[1200px] mx-2 md:mx-auto mt-10">
                <h2 className="text-2xl font-bold">Emprendimientos Destacados</h2>
                <Slider
                    typeSlider={'cardEnterpreneurship'}
                    data={featuredEntrepreneurship}
                    options={{
                        type: 'loop',
                        perPage: isMobile ? 1 : 3,
                        gap: '1rem',
                    }}
                />
            </div>
            <div className="w-full max-w-[1200px] mx-auto mt-10">
                <h2 className="text-2xl font-bold">Emprendimientos Nuevos</h2>
                <Slider
                    typeSlider={'cardEnterpreneurship'}
                    data={newEntrepreneurship}
                    options={{
                        type: 'loop',
                        perPage: isMobile ? 1 : 3,
                        gap: '1rem',
                    }}
                />
            </div>
            <div className="w-full max-h-[500px] max-w-[1200px] mx-auto mt-10">
                <h2 className="text-center">Emprendimientos  de tu zona</h2>
                <p className="text-center">Concepcion</p>
                <div className="sticky top-0 h-screen">
                    <MapComponent
                        apiKey="AIzaSyDKamSrVlGgJge4zLs8ET7vF2jPqzkpdPk"
                        center={{ lat: 39.8283, lng: -98.5795 }}
                        listStore={listStoreInZone}
                        hoveredMarker={hoveredMarker}
                        setHoveredMarker={setHoveredMarker}
                        clickMarker={clickMarker}
                        setClickMarker={setClickMarker}
                        containerStyle={{
                            width: '100%',
                            height: '500px',
                        }}
                    />
                </div>
            </div>
            <div className="w-full max-w-[1200px] mx-auto mt-20">
                <h2 className="text-2xl font-bold">Categorias destacadas</h2>
                <Slider
                    typeSlider={'banner'}
                    data={featuredCategory}
                />
            </div>
            <div className="w-full max-w-[1200px] mx-auto mt-10">
                <TextGenerateEffect
                    words="QUANTUM FORO"
                    className="text-center text-[40px] md:text-5xl lg:text-6xl text-black"
                />
                <div className="grid grid-cols-12">
                    <div className="col-span-12 p-1 md:p-0 md:col-span-6">
                        <p>Nuestra plataforma conecta a los usuarios con los mejores emprendimientos locales de manera rápida y sencilla, destacando el poder de las pequeñas y medianas empresas como motores clave de la economía local. Hemos creado un espacio donde puedes descubrir tiendas, servicios y productos cercanos a ti, organizados en categorías como moda, gastronomía, tecnología y servicios sustentables. Con una interfaz intuitiva y funcionalidad de geolocalización avanzada, te ayudamos a explorar y encontrar lo mejor que tu comunidad tiene para ofrecer, desde un café cercano hasta un servicio especializado.</p>
                    </div>
                    <div className="col-span-12 p-1 md:p-0 md:col-span-6">
                        <ul>
                            <li><strong>Búsqueda por ubicación:</strong> Encuentra emprendimientos según tu ubicación actual o selecciona una zona de interés.</li>
                            <li><strong>Categorías personalizadas:</strong> Descubre negocios locales organizados por rubros como moda, gastronomía, tecnología, y más.</li>
                            <li><strong>Recomendaciones y reseñas:</strong> Lee valoraciones de otros usuarios y descubre los emprendimientos más destacados.</li>
                            <li><strong>Ofertas exclusivas:</strong> Accede a promociones y descuentos especiales de los emprendimientos cercanos.</li>
                        </ul>
                    </div>
                </div>
            </div>
            {showShopPlans && (
                <div className="w-full max-w-[1200px] mx-auto">
                    <Pricing
                        user={pricingDataShop.user}
                        products={pricingDataShop.products}
                        subscription={pricingDataShop.subscription}
                        description='Comience a construir de forma gratuita y luego agregue un plano del sitio para comenzar a funcionar. Cuenta
              Los planes desbloquean funciones adicionales.'
                    />
                </div>
            )}
            {showServicePlans && (
                <div className="w-full max-w-[1200px] mx-auto">
                    <Pricing
                        user={pricingDataLanding.user}
                        products={pricingDataLanding.products}
                        subscription={pricingDataLanding.subscription}
                        description='Comience a publicar sus servicios a traves de nuestras landing pages, con un diseño personalizado y un dominio propio.'
                    />
                </div>
            )}
        </>
    );
}

export default ViewHome;