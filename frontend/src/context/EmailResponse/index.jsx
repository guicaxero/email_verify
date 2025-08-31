import { createContext, useState } from "react";
/* eslint-disable react-refresh/only-export-components */


export const EmailResponseContext = createContext({
    emailResponse: '',
    setEmailResponse: () => null
})

export const EmailResponseProvider = ({children}) => {
    const [emailResponse, setEmailResponse] = useState(null)

    return (
        <EmailResponseContext.Provider value={{emailResponse, setEmailResponse}}>
            {children}
        </EmailResponseContext.Provider>
    )
}
