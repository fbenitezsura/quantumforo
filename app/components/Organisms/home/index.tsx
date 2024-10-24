import Banner from '@/app/components/Molecule/Banner/index';
import Pricing from '@components/Molecule/Pricing/Pricing'
import Slider from '@components/Molecule/slider/index';
import ContainerZone from '@components/Templates/home/EntrepreneurshipForZone/ContainerZone';
import TextGenerateEffect from '@components/Molecule/TextGenerateEffect/TextGenerateEffect';
import pricingDataShop from '@components/Molecule/Pricing/pricingDataShop.json';
import pricingDataLanding from '@components/Molecule/Pricing/pricingDataServiceLanding.json';
import InfiniteMovingCards from '@components/Molecule/Testimonials/InfiniteCards';
import { testimonials } from '@data/index';

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
                <h2 className="text-2xl font-bold text-center md:text-left">Emprendimientos Destacados</h2>
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
                <h2 className="text-2xl font-bold text-center md:text-left">Emprendimientos Nuevos</h2>
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
            <ContainerZone />

            <div className="w-full max-w-[1200px] mx-auto md:mt-[120px] mt-[180px]">
                <h2 className="text-2xl font-bold mb-5 text-center">Categorias destacadas</h2>
                <Slider
                    typeSlider={'cardCategory'}
                    data={featuredCategory}
                    options={{
                        type: 'loop',
                        perPage: isMobile ? 1 : 5,
                        gap: '10px',
                    }}
                />
            </div>
            <div className="w-full max-w-[1200px] mx-auto mt-10">
                <div className="flex-col md:flex h-auto">
                    <TextGenerateEffect
                        words="Para todos, desde emprendedores hasta empresas"
                        className="text-center md:text-left text-[35px] leading-[4rem] text-black"
                    />
                    <p className="text-center md:text-right md:mt-[60px]">Millones de comerciantes de todos los tamaños han generado colectivamente $1.000.000.000.000 en ventas en QuantumForo.</p>
                </div>

                <div className="grid grid-cols-12 gap-5 mt-10">
                    <div className="col-span-12 md:col-span-4 flex flex-col items-center">
                        <img className="rounded-md h-[250px]" src="/home/w1.jpg" alt="for-entrepreneurs" />
                        <h2 className="text-2xl font-bold mt-8">Comienza con rapidez</h2>
                        <p className="text-justify mt-3 px-3 md:px-0">Iniciar un proyecto con rapidez es fundamental para aprovechar oportunidades. Actuar ágilmente permite a los emprendedores establecerse en el mercado y ajustar su oferta según la retroalimentación. Esta rapidez fomenta la innovación y la confianza, esenciales para enfrentar los desafíos del emprendimiento.</p>

                    </div>
                    <div className="col-span-12 md:col-span-4 flex flex-col items-center">
                        <img className="rounded-md h-[250px]" src="/home/w2.jpg" alt="for-entrepreneurs" />
                        <h2 className="text-2xl font-bold mt-8">Crece todo lo que quieras</h2>
                        <p className="text-justify mt-3 px-3 md:px-0">Una pequeña empresa que comenzó en un garaje ha crecido exponencialmente para convertirse en un líder en su industria, alcanzando ventas anuales que superan los 500 millones de dólares.</p>

                    </div>
                    <div className="col-span-12 md:col-span-4 flex flex-col items-center">
                        <img className="rounded-md h-[250px]" src="/home/w3.jpg" alt="for-entrepreneurs" />
                        <h2 className="text-left text-2xl font-bold mt-8">Aumenta las expectativas</h2>
                        <p className="text-justify mt-3 px-3 md:px-0">Esta innovadora plataforma de eCommerce ha transformado el panorama del comercio en línea al proporcionar a emprendedores la oportunidad de establecer sus propias tiendas y promocionar sus productos de manera efectiva. Con herramientas intuitivas y estrategias de marketing digital, la plataforma permite a las marcas alcanzar a un público más amplio, impulsando sus ventas y creciendo en un mercado competitivo.</p>

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
            <div className="w-full max-w-[1200px] mx-auto mt-10">
                <div className="flex h-auto">
                    <TextGenerateEffect
                        words="Encuentra a tus clientes más leales"
                        className="text-center text-[35px] leading-[4rem] text-black"
                    />
                </div>

                <div className="grid grid-cols-12 gap-5 md:mt-10">
                    <div className="col-span-12 md:col-span-6 flex flex-col items-center p-5 rounded-md">
                        <img className="rounded-md h-[330px]" src="/home/c1.jpg"></img>
                        <h2 className="mt-10 text-2xl text-black font-bold text-left">Llega a los clientes adecuados por menos</h2>
                        <p className="text-justify mt-2">Atrae nuevos clientes y haz que vuelvan por más con herramientas de marketing integradas e Informes y estadísticas útiles.</p>

                    </div>
                    <div className="col-span-12 md:col-span-6 flex flex-col items-center p-5 rounded-md">
                        <img className="rounded-md h-[330px]" src="/home/c2.jpg" alt="for-entrepreneurs" />
                        <h2 className="mt-10 text-2xl text-black font-bold text-left">Impulsa el crecimiento con B2B</h2>
                        <p className="text-justify mt-2">Crea experiencias personalizadas para compradores mayoristas con fijación de precios, descuentos y condiciones de pago flexibles.</p>

                    </div>
                </div>
            </div>
            <div className="w-full max-w-[1200px] mx-auto mt-10">
                <h2 className="text-center text-4xl">Es muy fácil comenzar a vender</h2>
                <div className="grid grid-cols-12 mt-14">
                    <div className="col-span-12 md:col-span-8 flex gap-3 h-auto relative">
                        <Slider
                            typeSlider={'cardImg'}
                            data={[{
                                urlImg: "/home/v1.jpg"
                            },{
                                urlImg: "/home/v2.jpg"
                            }]}
                            options={{
                                type: 'loop',
                                perPage: 1
                            }}
                        />

                    </div>
                    <div className="col-span-12 md:col-span-4 mt-10 md:mt-0 px-5 md:px-0">
                        <ul>
                            <li className="flex">
                                <span className="mr-5">01</span> <p className="w-full pb-2 border-b-2 text-2xl">Agrega tu primer producto</p>
                            </li>
                            <li className="flex mt-5">
                                <span className="mr-5">02</span> <p className="w-full pb-2 border-b-2 text-2xl">Personaliza tu tienda</p>
                            </li>
                            <li className="flex mt-5">
                                <span className="mr-5">03</span> <p className="w-full pb-2 border-b-2 text-2xl">Configura pagos</p>
                            </li>
                            <li className="mt-10 flex justify-center">
                                <button className="min-w-[150px] border bg-white rounded-full p-5">Comienza ya</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center max-lg:mt-10">
                <div
                    // remove bg-white dark:bg-black dark:bg-grid-white/[0.05], h-[40rem] to 30rem , md:h-[30rem] are for the responsive design
                    className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
                >
                    <InfiniteMovingCards
                        items={testimonials}
                        direction="right"
                        speed="slow"
                    />
                </div>
            </div>

        </>
    );
}

export default ViewHome;