import RegisterForm from '@/app/components/Molecule/form/registerForm';
import CardTypeUser from '@/app/components/Molecule/register/cardTypeUser';
import { userTypes } from '@utils/Register/TypeUser/typeUser';

const ViewRegister = ({
    loadingRegister,
    registerCompleted,
    handleRegister,
    typeUser,
    setTypeUser
}) => {

    return (
        <div className="h-screen pt-[60px] md:pt-[80px] w-full flex flex-col justify-center">
            {!typeUser ? (
                <div className="flex flex-col justify-center">
                    <h2 className="text-2xl font-bold text-center">Seleccione como deseea registrarse</h2>
                    {userTypes.map((userType) => (
                        <CardTypeUser
                            key={userType.type}
                            setTypeUser={() => setTypeUser(userType.type)}
                            title={userType.title}
                            description={userType.description}
                            icon={userType.icon}
                            type={userType.type}
                        />
                    ))}
                </div>
            ) : (
                <div className="w-auto flex flex-col items-center justify-center">
                    <div className="text-center mb-6">
                        <p className="text-2xl font-bold">Te registraras como {typeUser === 'customer' ? 'Cliente' : 'Emprendedor'}</p>
                    </div>
                    <RegisterForm
                        loadingRegister={loadingRegister}
                        registerCompleted={registerCompleted}
                        handleRegister={handleRegister}
                        setTypeUser={setTypeUser}
                    />
                </div>
            )}
        </div>
    )
}

export default ViewRegister;