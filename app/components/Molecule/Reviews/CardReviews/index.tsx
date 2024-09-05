import StarDisplay from '@components/Molecule/Start/Display'

const CardReviews = ({ 
    review 
}) => {

    console.log(review)

    return (
        <div className="w-full h-auto border-2 shadow-md p-3 rounded-md my-5">
            <div className="flex justify-between">
                <span>{review.comment}</span>
                <StarDisplay rating={review.rating} />
            </div>
            <div className="flex justify-between">
                <span>Por {review.user.first_name} {review.user.last_name}</span>
                Hace 2 Dias
            </div>
        </div>
    );
}

export default CardReviews;