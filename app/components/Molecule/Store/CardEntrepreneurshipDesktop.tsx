const CardEntrepreneurshipDesktop = ({ detailStore }) => {
    return (
        <div className="hidden md:block col-span-4 flex p-5 flex-col justify-center mr-10">
            <h2 className="text-2xl font-bold text-center mb-[70px]">Detalles del Emprendedor</h2>
            <div className="w-full flex justify-center">
                <img src={'/entrepreneurship/1.avif'} className="h-[150px] w-[150px] rounded-full" />
            </div>
            <div className="mt-5">
                <p className="text-xl text-center font-bold mb-[20px]">Camilo Jose</p>
                <p className="text-justify text-md">Soy Camilo José, un emprendedor apasionado por transformar ideas en realidades. Me dedico a identificar oportunidades y crear soluciones innovadoras que marcan la diferencia en el mercado. Me gusta asumir riesgos y liderar proyectos que generan impacto positivo y crecimiento sostenible.</p>
            </div>
        </div>
    );
}

export default CardEntrepreneurshipDesktop;