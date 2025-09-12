import { createContext, useState, ReactNode } from "react";
import { IEmailResponse } from "../../shared/IEmailResponse";

interface EmailResponseContextType {
  emailResponse: IEmailResponse[] | null;
  setEmailResponse: React.Dispatch<React.SetStateAction<IEmailResponse[] | null>>;
}

export const EmailResponseContext = createContext<EmailResponseContextType>({
  emailResponse: null,
  setEmailResponse: () => null,
});

interface EmailResponseProviderProps {
  children: ReactNode;
}

export const EmailResponseProvider = ({ children }: EmailResponseProviderProps) => {
  const [emailResponse, setEmailResponse] = useState<IEmailResponse[] | null>(null);

  return (
    <EmailResponseContext.Provider value={{ emailResponse, setEmailResponse }}>
      {children}
    </EmailResponseContext.Provider>
  );
};
