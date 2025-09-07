import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ButtonCpnt from "../ButtonCpnt";
import axios from "axios"
import { PaperClipIcon } from '@heroicons/react/24/outline' 
import { useEmailResponse } from "../../hooks/useEmailResponse";
import Loading from "../Loading";
import { EMAIL_VERIFY_API_URL } from "../../../config";


const FormCpnt = () => {
    const [mode, setMode] = useState("text");
    const [valueText, setValueText] = useState("");
    const [files, setFiles] = useState<FileList | null>(null);
    const [loading, setLoading] = useState(false);
    const {setEmailResponse} = useEmailResponse()
    
    const navigate = useNavigate()

    const handleChangeText = (text: string) => {
        setValueText(text);
        setFiles(null)
    }

    const handleUploadFile = (files: FileList | null) => {
        if (!files) return;
        setValueText("");
        const filesArray = Array.from(files);
        if (filesArray.length > 5) {
            alert("Você só pode enviar até 5 emails por vez.");
        } else {
            setFiles(files)
        }
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (valueText.trim() !== "" || files) {
            const formData = new FormData();
            if (valueText) formData.append("email", valueText);
            if (files) {
                for (let i = 0; i < files.length; i++) {
                    formData.append("files", files[i]);
                }
            }
            setLoading(true);
            axios.post(`${EMAIL_VERIFY_API_URL}/check_email`, formData, {
                headers: { "Content-Type": "multipart/form-data" }
            })
            .then(res => {
                setEmailResponse(res.data)
                navigate("/result");
            })
            .catch(error => {
                console.error("Falha na Requisição", error);
                navigate("/error")
            })
            .finally(() => setLoading(false));
        }
    };

    if(loading) return <Loading />;

    return (
        <form 
            className="p-6 bg-gray-300 rounded-2xl shadow-md max-w-full"
            onSubmit={event => handleSubmit(event)}
        >
            {loading && <Loading />}
            <h1 className="text-xl font-bold mb-4 text-center text-gray-900">Insira o email ou faça upload do arquivo para análise</h1>

            <div className="flex gap-2 mb-4">
                <ButtonCpnt
                    onClick={() => setMode("text")}
                    buttonClass={`flex-1  ${mode === "text" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
                >
                    Texto
                </ButtonCpnt>
                <ButtonCpnt
                    onClick={() => setMode("upload")}
                    buttonClass={`flex-1 ${mode === "upload" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
                >
                    Upload
                </ButtonCpnt>
            </div>

            {mode === "text" ? (
                <textarea
                    key="textarea"
                    placeholder="Digite aqui..."
                    className="w-full p-2 border rounded-md h-24 sm:h-32 md:h-40 lg:h-48 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    value={valueText}
                    onChange={(event) => handleChangeText(event.target.value)}
                />
            ) : (
                <div className="w-full">
                    <input
                        key="file"
                        type="file"
                        multiple 
                        accept="text/plain, application/pdf"
                        onChange={(event) => handleUploadFile(event.target.files)}
                        id="fileUpload"
                        className="hidden"
                    />
                    <label
                        htmlFor="fileUpload"
                        className="w-full border rounded-md p-3 text-gray-900 cursor-pointer hover:bg-gray-200 flex items-center justify-center gap-2 flex-wrap"
                    >
                        <PaperClipIcon className="w-5 h-5 text-gray-500" />
                        {files && files.length > 0 ? (
                            files.length === 1 ? (
                                files[0].name
                            ) : (
                                <>
                                    {files[0].name} + {files.length - 1} arquivo{files.length - 1 > 1 ? "s" : ""} selecionado{files.length - 1 > 1 ? "s" : ""}
                                </>
                            )
                        ) : (
                            "Clique aqui para fazer upload do arquivo"
                        )}
                    </label>
                </div>
            )}

            <ButtonCpnt
                type="submit"
                buttonClass="mt-4 w-full bg-blue-500 text-white py-2 hover:bg-blue-600 transition"
            >
                Enviar
            </ButtonCpnt>
        </form>
    );
};

export default FormCpnt;
