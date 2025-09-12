import { Link } from "react-router-dom";
import { IEmailResponse } from "../../shared/IEmailResponse";
import EmailResponseCard from "../EmailResponseCard";
import Card from "../Card";
import ButtonCpnt from "../ButtonCpnt";


interface EmailResponseListProps {
    title: string;
    data: IEmailResponse[];
}

const EmailResponseList = ({ title, data }: EmailResponseListProps) => {
    return (
        <Card title={title}>
            {data && data.length > 0 ? (
                <div className="flex-1 w-full overflow-y-auto pr-2">
                    {data.map((email, index) => {
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
                <div className="flex flex-col items-center justify-center text-center 
                    p-8 rounded-2xl shadow-2xl border border-[#00FFFF]/20
                    bg-[#1a2235]/80 backdrop-blur-sm w-full"
                >
                    <h2 className="text-2xl font-semibold text-white mb-3">
                        Nenhum resultado disponível
                    </h2>
                    <p className="text-gray-300">
                        Volte para processar mais emails e gerar respostas automáticas.
                    </p>
                </div>
            )}

            <div className="flex gap-2 mt-6">
                <Link to="/">
                    <ButtonCpnt buttonClass="text-white border border-[#00FFFF] px-5
                        hover:bg-[#00FFFF] hover:text-black"
                    >
                        Voltar para a página inicial
                    </ButtonCpnt>
                </Link>
            </div>
        </Card>
    );
};

export default EmailResponseList;
