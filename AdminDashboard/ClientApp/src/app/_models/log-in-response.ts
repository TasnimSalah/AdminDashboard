export class LogInResponse {
    token:string;
    isAuthSuccessful:boolean;
    errorMessage:string;
    constructor(IsAuthSuccessful:boolean , ErrorMessage:string , Token:string){
        this.token = Token;
        this.isAuthSuccessful =IsAuthSuccessful;
        this.errorMessage = ErrorMessage;
    }
}
