export class GenericResponseDTO {
    private _$id: number;
    private _statusSucess: boolean;
    private  _errorMessage: string;

    constructor(){};

   get $id(): number {return this._$id};
   get statusSucess(): boolean {return this._statusSucess};
   get errorMessage(): string {return this.errorMessage};

}
