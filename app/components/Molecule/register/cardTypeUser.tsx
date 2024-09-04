interface CardTypeUserProps {
    setTypeUser: (type: string) => void;
    title: string;
    description: string;
    icon: JSX.Element;
    type: string;
}

const CardTypeUser: React.FC<CardTypeUserProps> = ({ setTypeUser, title, description, icon, type }) => {
    return (
        <div
        onClick={()=>{setTypeUser(type)}}
        className="bg-white w-auto p-5 border rounded-lg text-center cursor-pointer mt-5">
            <div className="w-full flex justify-center mb-4">
                {icon}
            </div>
            <p className="text-xl font-bold">{title}</p>
            <div className="text-center mt-4">
                <span className="text-md font-normal">{description}</span>
            </div>
        </div>
    );
}

export default CardTypeUser;
