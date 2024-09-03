const CardReviews = ({ review }) => {
    return (
        <div className="w-full h-full">
            <div className="flex justify-between">
                <span>Titulo</span>
                Estrellas
            </div>
            <div className="flex justify-between">
                <span>Por felipe benitez</span>
                Hace 2 Dias
            </div>
        </div>
    );
}

export default CardReviews;