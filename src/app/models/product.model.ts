export class Product 
{    
    private _$id: number;
    private _statusSucess: boolean;
    private _data: data;
    private  _errorMessage: string;

    constructor(){};

   get $id(): number {return this._$id};
   get statusSucess(): boolean {return this._statusSucess};
   get data(): data {return this._data};
   get errorMessage(): string {return this.errorMessage};

   set $id(value : number){this._$id = value};
   set statusSucess(value : boolean){this._statusSucess = value};
   set data(value : data){this._data = value};
   set errorMessage(value : string){this._errorMessage = value};

}
export class data {
    private _$id: number;
    private _$values : $values[];

    constructor(){};

    get $id(): number {return this._$id};
    get $values(): $values[] {return this._$values};

    set $id(value : number){this._$id = value};
    set $values(value : $values[]){this._$values = value};


}

export class $values {
    private _$id: number;
    private _id: number;
    private _productName : string;
    private _productDescription: string;
    private _productStatus: string;
    private _pricePerUnit: number;

    constructor(){};

    get $id(): number {return this._$id};
    get id(): number {return this._id};
    get productName() : string {return this._productName};
    get productDescription(): string {return this._productDescription};
    get productStatus(): string {return this._productStatus};
    get pricePerUnit(): number {return this._pricePerUnit};

    set $id(value : number){this._$id = value};
    set id(value : number){this._id = value};
    set productName(value : string){this._productName = value};
    set productDescription(value : string){this._productDescription = value};
    set productStatus(value : string){this._productStatus = value};
    set pricePerUnit(value : number){this._pricePerUnit = value};

}