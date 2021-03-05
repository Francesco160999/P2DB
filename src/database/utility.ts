import { fstat } from "fs";
import { ITransaction } from "./transaction/transaction.interface";
import { writeFile } from 'fs';
import { createHash } from 'crypto';

/*
* 04/03/2021 the Utility class is an agglomerate of concepts that has to be separated
*/
var config = require("./config.json");

export class Utilty {
    
    public static TRANSACTIONS_PATH = (): string => {
        return config.paths.transactionsPath;
    }

    public static DATA_PATH = (): string => {
        return config.paths.data;
    }

    public static NODES_LIST = (): string => {
        return config.paths.nodesList;
    }

    public static MD5Hash(str: string): string {
        return createHash('md5').update(str).digest("hex");
    }

    public static InterfacePropertyToString = ( property: (object: any) => void ) => {
        var chaine = property.toString();
        var arr = chaine.match( /[\s\S]*{[\s\S]*\.([^\.; ]*)[ ;\n]*}/ );
        return arr[1];
    };
    
    public static fetchTransaction(transaction: ITransaction){
        writeFile(this.TRANSACTIONS_PATH + this.MD5Hash(JSON.stringify(transaction)), JSON.stringify(transaction), () => { });
    }
}