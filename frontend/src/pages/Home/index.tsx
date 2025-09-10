import { useState } from "react";
import FormCpnt from "../../components/FormCpnt";
import Card from "../../components/Card";
import ButtonCpnt from "../../components/ButtonCpnt";
import { ArrowLeftIcon } from '@heroicons/react/24/solid';


const Home = () => {
    const [showForm, setShowForm] = useState<boolean>(false);

    return (
        <>
            {!showForm ? (
                <div className="max-w-4xl text-center text-white space-y-6 bg-[#1a2235] p-6 sm:p-12 2xl:p-30 rounded-2xl shadow-2xl border border-[#00FFFF]">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-[#00FFFF]">
                        Simplifique a validação e resposta de emails
                    </h1>
                    <p className="text-lg sm:text-xl 2xl:text-2xl">
                        O <strong>Email Verify</strong> é uma ferramenta inteligente que analisa seus emails, 
                        classifica-os como produtivos ou improdutivos, e ainda gera respostas automáticas 
                        com tom profissional e objetivo.
                    </p>
                    <p className="text-lg sm:text-xl 2xl:text-2xl">
                        Economize tempo e agilize sua comunicação, seja no uso pessoal ou no ambiente corporativo. 
                        Basta digitar ou fazer upload dos seus emails e receber análises rápidas e precisas em segundos.
                    </p>
                    <ButtonCpnt
                        buttonClass="text-white border border-[#00FFFF] px-5 w-full
                            hover:bg-[#00FFFF] 
                            hover:text-black 
                        "
                        onClick={() => setShowForm(true)}
                    >
                        Começar agora
                    </ButtonCpnt>
                </div>
            ) : (
                <Card>
                    <div className="flex flex-col md:w-full justify-center md:relative">
                        <ButtonCpnt
                            buttonClass="
                                text-[#00FFFF] font-semibold 
                                rounded-lg p-2
                                transition shadow-lg
                                flex flex-row gap-1 justify-center
                                md:absolute md:left-2
                                mb-2
                                hover:bg-cyan-800
                            "
                            onClick={() => setShowForm(false)}
                        >
                        <ArrowLeftIcon className="w-6 h-6" />
                            Voltar
                        </ButtonCpnt>
                        <h2 className="text-2xl sm:text-4xl font-bold text-center text-white mb-4">Análise de Email</h2>
                    </div>
                    <FormCpnt />
                </Card>
            )}
        </>
    );
};

export default Home;
