import { Link } from "react-router-dom";
import ButtonCpnt from "../../components/ButtonCpnt";
import Card from "../../components/Card";
import { useEmailResponse } from "../../hooks/useEmailResponse";
import EmailResponseCard from "../../components/EmailResponseCard";

const Result = () => {
    const { emailResponse } = useEmailResponse();
    const hasResults = emailResponse && emailResponse.length > 0;

    return (
        <Card title="Resultado gerado">
            {hasResults ? (
                <div className="flex-1 w-full overflow-y-auto pr-2">
                    {emailResponse.map((email, index) => {
                        const isProductive = email.is_productive ? "Produtivo" : "Improdutivo";
                        return (
                            <EmailResponseCard
                                key={index}
                                isProductive={isProductive}
                                responseGenerate={email.response_generate}
                                position={index + 1}
                            />
                        );
                    })}
                </div>
            ) : (
                <div className="
                    flex flex-col items-center justify-center text-center 
                    p-8 rounded-2xl shadow-2xl border border-[#00FFFF]/20 
                    bg-[#1a2235]/80 backdrop-blur-sm w-full
                ">
                    <h2 className="text-2xl font-semibold text-white mb-3">
                        Nenhum resultado disponível
                    </h2>
                    <p className="text-gray-300">
                        Volte para processar mais emails e gerar respostas automáticas.
                    </p>
                </div>
            )}

            <Link to="/" className="mt-6">
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

export default Result;
