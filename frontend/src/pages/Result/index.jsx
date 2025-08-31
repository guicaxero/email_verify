import { Link } from "react-router-dom";
import ButtonCpnt from "../../components/ButtonCpnt";
import Card from "../../components/Card";
import { useEmailResponse } from "../../hooks/useEmailResponse";
import EmailResponseCard from "../../components/EmailResponseCard";

const Result = () => {
    const { emailResponse } = useEmailResponse();

    return (
        <Card title="Resultado gerado">
            {emailResponse && emailResponse.length > 0 ? (
                emailResponse.map((email, index) => {
                    const isProductive = email.is_productive ? "Produtivo" : "Improdutivo";
                    return (
                        <EmailResponseCard
                            key={index}
                            isProductive={isProductive}
                            responseGenerate={email.response_generate}
                            position={index + 1}
                        />
                    );
                })
            ) : (
                <div className="flex flex-col items-center justify-center text-center p-6 bg-white rounded-2xl shadow-md w-full">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">
                        Nenhum resultado disponível
                    </h2>
                    <p className="text-gray-600">
                        Volte para processar mais emails e gerar respostas automáticas.
                    </p>
                </div>
            )}

            <Link to="/" className="mt-6">
                <ButtonCpnt buttonClass=" bg-gray-400 px-6 hover:bg-gray-500">
                    Voltar para a página inicial
                </ButtonCpnt>
            </Link>
        </Card>
    );
};

export default Result;
