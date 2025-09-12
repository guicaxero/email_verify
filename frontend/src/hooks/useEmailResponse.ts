import { useContext, useEffect } from "react"
import { EmailResponseContext } from "../context/EmailResponse"
import { StorageService } from "../services/StorageService"

export const useEmailResponse = () => {
    const {
        emailResponse,
        setEmailResponse
    } = useContext(EmailResponseContext)

    useEffect(() => {
        if (emailResponse) {
            StorageService.save(emailResponse);
        }
    }, [emailResponse]);

    return { emailResponse, setEmailResponse }
}
