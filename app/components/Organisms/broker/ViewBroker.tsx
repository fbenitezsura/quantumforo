const ViewBroker = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-6 pt-[150px]">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <header className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-800">
                        Información sobre el Broker de Comercio Exterior
                    </h1>
                </header>

                {/* What is a Broker Section */}
                <section className="bg-white shadow-md rounded-lg p-6 mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                        ¿Qué es un Broker de Comercio Exterior?
                    </h2>
                    <p className="text-gray-600">
                        Un broker de comercio exterior es un intermediario especializado en facilitar las transacciones comerciales entre empresas de diferentes países. Su función principal es conectar compradores y vendedores, asegurando que el proceso de importación y exportación se realice de manera eficiente y conforme a las regulaciones.
                    </p>
                </section>

                {/* Benefits Section */}
                <section className="bg-white shadow-md rounded-lg p-6 mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                        Beneficios de Utilizar un Broker de Comercio Exterior
                    </h2>
                    <ul className="list-disc list-inside text-gray-600">
                        <li>Acceso a una red global de contactos.</li>
                        <li>Conocimiento profundo de las regulaciones aduaneras.</li>
                        <li>Optimización de costos logísticos y aduaneros.</li>
                        <li>Asistencia en la negociación de contratos internacionales.</li>
                        <li>Reducción de riesgos asociados al comercio internacional.</li>
                    </ul>
                </section>

                {/* Costs Section */}
                <section className="bg-white shadow-md rounded-lg p-6 mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                        Costos Asociados a un Broker de Comercio Exterior
                    </h2>
                    <p className="text-gray-600">
                        Los costos asociados al uso de un broker de comercio exterior varían según los servicios requeridos y la complejidad de la operación. Estos pueden incluir tarifas por servicios de intermediación, costos de asesoría en regulaciones, y comisiones por transacciones exitosas.
                    </p>
                </section>

                {/* Associated Broker Section */}
                <section className="bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4 text-center md:text-left">
                        Broker Asociado
                    </h2>
                    <div className='grid grid-cols-12'>
                        <div className="flex items-center col-span-12 grid grid-cols-12">
                            <img
                                src="/broker/clogistic.png"
                                alt="Broker Asociado"
                                className="w-full max-w-40 h-40 rounded-full mr-6 col-span-12"
                            />
                            <div className="col-span-12">
                                <h3 className="text-xl font-semibold text-gray-800">
                                    CONTINENTAL LOGISTICS,
                                </h3>
                                <p className="text-gray-600 mt-2">
                                    El broker asociado cuenta con una amplia experiencia en comercio internacional, ofreciendo servicios personalizados para empresas que buscan expandir sus operaciones globalmente. Especializado en la gestión de importaciones y exportaciones, este broker se destaca por su profundo conocimiento de las regulaciones aduaneras y su capacidad para optimizar procesos logísticos, garantizando transacciones seguras y eficientes.
                                </p>
                            </div>
                        </div>
                        <div className="w-full col-span-12">
                            <a href="https://continentallogistics.online/" target="_blank" rel="noopener noreferrer">
                                <img src="/broker/clogisticweb.png" alt="Continental Logistics" />
                            </a>
                        </div>
                    </div>


                </section>
            </div>
        </div>
    );
}

export default ViewBroker;