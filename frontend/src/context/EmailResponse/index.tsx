import { createContext, useState, ReactNode } from "react";

interface EmailResponse {
    is_productive: boolean;
    response_generate: string;
}

interface EmailResponseContextType {
  emailResponse: EmailResponse[] | null;
  setEmailResponse: React.Dispatch<React.SetStateAction<EmailResponse[] | null>>;
}

export const EmailResponseContext = createContext<EmailResponseContextType>({
  emailResponse: null,
  setEmailResponse: () => null,
});

interface EmailResponseProviderProps {
  children: ReactNode;
}

export const EmailResponseProvider = ({ children }: EmailResponseProviderProps) => {
  const [emailResponse, setEmailResponse] = useState<EmailResponse[] | null>(null);

  return (
    <EmailResponseContext.Provider value={{ emailResponse, setEmailResponse }}>
      {children}
    </EmailResponseContext.Provider>
  );
};
