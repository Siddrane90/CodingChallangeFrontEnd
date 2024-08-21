export class OrderInformationdto {
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
    private _$values : $values[];

    constructor(){};

    get $id(): number {return this._$id};
    get $values(): $values[] {return this._$values};

}

export class $values {
    private _$id: number;
    private _id: number;
    private _orderStatus : string;
    private _paymentValuePreComission: number;
    private _paymentValuePostComission: number;
    private _paymentProviderSelected: number;
    private _optimalPaymentMethodSelected: number;
    private _providerOrderId: string;
    private _providerOrderCreationDate: string;

    constructor(){};

    get $id(): number {return this._$id};
    get id(): number {return this._id};
    get orderStatus() : string {return this._orderStatus};
    get paymentValuePreComission(): number {return this._paymentValuePreComission};
    get paymentValuePostComission(): number {return this._paymentValuePostComission};
    get paymentProviderSelected(): number {return this._paymentProviderSelected};
    get optimalPaymentMethodSelected(): number {return this._optimalPaymentMethodSelected};
    get providerOrderId(): string {return this._providerOrderId};
    get providerOrderCreationDate(): string {return this._providerOrderCreationDate};
}
