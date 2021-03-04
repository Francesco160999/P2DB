/**
 * @description Transaction interface
 * @param timestamp  long format of the date time of the transaction.
 * @param body the json data of the transaction
 * @param owner transaction owner public key
 * @param protocol an identifier to describe the type of transaction
 * @param signatures list of signatures of the history of the content form the owner  
 */
export interface ITransaction {
    timestamp: number;
    body: any;
    owner: string;
    protocol: any;
    signatures: ISignature;
}

export interface ISignature {
    previusHashes: string[];
    signature: string;
}