import { useEmailResponse } from "../../hooks/useEmailResponse";
import EmailResponseList from "../../components/EmailResponseList";

const Responses = () => {
  const { emailResponse } = useEmailResponse();

  return (
    <EmailResponseList
      title="Resultado Gerado"
      data={emailResponse || []}
    />
  );
};

export default Responses;
