import EmailResponseList from "../../components/EmailResponseList";
import { StorageService } from "../../services/StorageService";

const History = () => {
    const history = StorageService.get();

  return (
    <EmailResponseList
      title="Histórico de Verificações"
      data={history || []}
    />
  );
};

export default History;
