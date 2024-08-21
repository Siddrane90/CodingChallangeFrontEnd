export class OrderDetailResponseDTO 
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
}

export class data {
    private _$id: number;
    private _id: number;
    private _providerOrderId: string;
    private _totalAmount: number;
    private _orderStatus: string;
    private _paymentProvider: string;
    private _paymentType: string;
    private _orderProductItems:orderProductItems[];

    constructor(){};

    get $id(): number {return this._$id};

}

export class orderProductItems {
    private _$id: number;
    private _$values : $values[];

}
export class $values {
    private _$id: number;
   private _productName:string;
   private _productDescription:string;

    constructor(){};

    get $id(): number {return this._$id};
    get productName() : string {return this._productName};
    get productDescription(): string {return this._productDescription};
    
}

