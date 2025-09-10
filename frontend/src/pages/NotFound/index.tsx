import { Link } from "react-router-dom";
import ButtonCpnt from "../../components/ButtonCpnt";
import Card from "../../components/Card";

const NotFound = () => {
    return (
        <Card>
            <h1 className="text-6xl font-extrabold text-white mb-4">Ops!</h1>
            <h2 className="text-2xl font-semibold text-white mb-6">
                Algo deu errado
            </h2>
            <p className="text-center text-xl text-white max-w-md mb-6">
                Não foi possível acessar a página solicitada. Isso pode ter ocorrido devido a um endereço incorreto ou um problema temporário. 
                Por favor, verifique o endereço ou retorne à página inicial.
            </p>
            <Link to="/">
                <ButtonCpnt buttonClass="text-white border border-[#00FFFF] px-5
                    hover:bg-[#00FFFF] 
                    hover:text-black 
                ">
                    Voltar para a página inicial
                </ButtonCpnt>
            </Link>
        </Card>
    );
};

export default NotFound;
