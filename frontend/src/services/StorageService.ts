import { IEmailResponse } from "../shared/IEmailResponse";

export class StorageService {
    private static readonly STORAGE_KEY = "result_emails";

    static get(): IEmailResponse[] {
        return JSON.parse(localStorage.getItem(this.STORAGE_KEY) || "[]");
    }

    static save(newResults: IEmailResponse[]) {
        const existingEmail = this.get();
        const uniqueNewResults = newResults.filter(
            (newItem) =>
                !existingEmail.some(
                    (existingItem) => existingItem.response_generate === newItem.response_generate
                )
        );
        const combinedResults = [...uniqueNewResults, ...existingEmail];
        const historyList = combinedResults.slice(0, 5);
        
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(historyList));
    }

    static clear() {
        localStorage.removeItem(this.STORAGE_KEY);
    }

    static exists(): boolean {
        const data = localStorage.getItem(this.STORAGE_KEY);
        return data !== null && JSON.parse(data).length > 0;
    }
}

