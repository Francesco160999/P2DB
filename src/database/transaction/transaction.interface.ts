/**
 * A transaction is a data block to push in the network
 * @param timestamp  long format of the date time of the transaction.
 * @param body the json data of the transaction
 * @param owner transaction owner public key
 * @param recepient if null to the network
 * @param protocol an identifier to describe the kind of transaction
 * @param signature signature of the the owner  
 */
export interface ITransaction {
    timestamp: number;
    owner: string;
    recepient: string;
    protocol: any;
    body: any;
    signature: string;
}