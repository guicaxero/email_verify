import { useContext } from "react"
import { EmailResponseContext } from "../context/EmailResponse"

export const useEmailResponse = () => {
    const {
        emailResponse,
        setEmailResponse
    } = useContext(EmailResponseContext)
    return { emailResponse, setEmailResponse }
}
