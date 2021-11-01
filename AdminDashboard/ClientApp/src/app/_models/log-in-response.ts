export class LogInResponse {
    token:string;
    constructor(IsAuthSuccessful:boolean , ErrorMessage:string , Token:string){
        this.token = Token;
    }
}
