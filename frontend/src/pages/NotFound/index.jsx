import { Link } from "react-router-dom";
import ButtonCpnt from "../../components/ButtonCpnt";
import Card from "../../components/Card";

const NotFound = () => {
    return (
        <Card>
            <h1 className="text-6xl font-extrabold text-gray-900 mb-4">Ops!</h1>
            <h2 className="text-2xl font-semibold text-gray-700 mb-6">
                Algo deu errado
            </h2>
            <p className="text-center text-xl text-gray-600 max-w-md mb-6">
                Não foi possível acessar a página solicitada. Isso pode ter ocorrido devido a um endereço incorreto ou um problema temporário. 
                Por favor, verifique o endereço ou retorne à página inicial.
            </p>
            <Link to="/">
                <ButtonCpnt buttonClass={`bg-gray-400 hover:bg-gray-500 px-8 font-medium`}>
                    Voltar para a página inicial
                </ButtonCpnt>
            </Link>
        </Card>
    );
};

export default NotFound;
