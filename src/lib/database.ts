import { creationDate } from "./formatCreationDate";

export type resultObject = {exists: boolean, secure: string[], sus: string[], not_secure: string[]};

export const database: {[key: string]: resultObject} = 
{
    "https://www.magazineluiza.com.br/": {
        exists: true,
        secure: ["Livre de malwares", "Site ativo", "Possui HTTPS", creationDate(new Date(1997, 10 - 1, 6))],
        sus: [],
        not_secure: []
    },

    "https://ethingz.com.br/": {
        exists: true,
        secure: ["Livre de malwares", "Possui HTTPS"],
        sus: ["Possíveis anúncios indesejáveis"],
        not_secure: []
    },

    "http://flshopbr.com/": {
        exists: true,
        secure: ["Site ativo"],
        sus: ["Possível phishing"],
        not_secure: ["Possui malware (!)", creationDate(new Date(2022,7,12)), "Não possui HTTPS (Conexão Particular)"]
    },

    "https://flshopbr.com/": {
        exists: true,
        secure: ["Site ativo"],
        sus: ["Possível phishing"],
        not_secure: ["Possui malware (!)", creationDate(new Date(2022,7,12)), "Não possui HTTPS (Conexão Particular)"]
    }
}

