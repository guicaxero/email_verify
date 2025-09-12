import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ButtonCpnt from "../ButtonCpnt";
import axios from "axios"
import { PaperClipIcon } from '@heroicons/react/24/outline';
import { useEmailResponse } from "../../hooks/useEmailResponse";
import Loading from "../Loading";
import { EMAIL_VERIFY_API_URL } from "../../../config";

const FormCpnt = () => {
    const [mode, setMode] = useState("text");
    const [valueText, setValueText] = useState("");
    const [files, setFiles] = useState<FileList | null>(null);
    const [loading, setLoading] = useState(false)
    const { setEmailResponse } = useEmailResponse()

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
            setFiles(files);
        }
    };

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
                setEmailResponse(res.data);
                navigate("/responses");
            })
            .catch(error => {
                console.error("Falha na Requisição", error);
                navigate("/error");
            })
            .finally(() => setLoading(false));
        }
    };

    if (loading) return <Loading />;

    return (
        <form
            className="p-6 bg-[#1a2235]/80 backdrop-blur-sm rounded-xl shadow-xl border border-[#00FFFF]/20 max-w-full md:w-[80%] transition-transform duration-300 hover:scale-[1.01]"
            onSubmit={handleSubmit}
        >
            <h1 className="text-lg md:text-xl font-semibold mb-4 text-center text-white">
                Insira o email ou faça upload do arquivo para análise
            </h1>

            <div className="flex gap-2 mb-6">
                <ButtonCpnt
                    onClick={() => setMode("text")}
                    buttonClass={`flex-1 py-2 rounded-lg font-medium transition-all ${
                        mode === "text"
                            ? "bg-[#00FFFF] text-black shadow-md"
                            : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                    }`}
                >
                    Texto
                </ButtonCpnt>
                <ButtonCpnt
                    onClick={() => setMode("upload")}
                    buttonClass={`flex-1 py-2 rounded-lg font-medium transition-all ${
                        mode === "upload"
                            ? "bg-[#00FFFF] text-black shadow-md"
                            : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                    }`}
                >
                    Upload
                </ButtonCpnt>
            </div>

            {mode === "text" ? (
                <textarea
                    key="textarea"
                    placeholder="Digite aqui..."
                    className="
                        w-full p-3 rounded-lg h-32 md:h-40 lg:h-48 2xl:h-94
                        bg-gray-800 text-white placeholder-gray-400
                        border border-gray-700 focus:outline-none
                        focus:ring-2 focus:ring-[#00FFFF]
                        resize-none transition
                    "
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
                        className="w-full p-3 rounded-lg
                                   bg-gray-800 text-gray-300
                                   border border-gray-700 cursor-pointer
                                   flex items-center justify-center gap-2 flex-wrap
                                   hover:bg-gray-700 hover:border-[#00FFFF]
                                   transition"
                    >
                        <PaperClipIcon className="w-5 h-5 text-[#00FFFF]" />
                        {files && files.length > 0 ? (
                            files.length === 1 ? (
                                files[0].name
                            ) : (
                                <>
                                    {files[0].name} + {files.length - 1} arquivo
                                    {files.length - 1 > 1 ? "s" : ""} selecionado
                                    {files.length - 1 > 1 ? "s" : ""}
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
                buttonClass="mt-6 w-full bg-[#00FFFF] text-black font-semibold py-3 rounded-lg 
                hover:bg-cyan-400 transition shadow-lg"
            >
                Enviar
            </ButtonCpnt>
        </form>
    );
};

export default FormCpnt;
