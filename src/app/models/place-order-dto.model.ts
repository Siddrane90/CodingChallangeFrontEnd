export class PlaceOrderDTO 
{
    private paymentMethod: string;
    private userId: number;
    private products:products[];

    constructor(){};

    get _paymentMethod() :string {return this.paymentMethod};
    get _userId() :number {return this.userId};
    get _products():products[] {return this.products};

    set _paymentMethod(value : string){this.paymentMethod = value};
    set _userId(value : number){this.userId = value};
    set _products(value : products[]){this.products = value};
}

export class products
{
    private productName: string;
    private pricePerUnit: number;
    private OrderQuantity: number;

    constructor(){};

    get _productName(): string {return this.productName};
    get _pricePerUnit(): number {return this.pricePerUnit};
    get _OrderQuantity(): number {return this.OrderQuantity};

    set _productName(value : string){this.productName = value};
    set _pricePerUnit(value : number){this.pricePerUnit = value}
    set _OrderQuantity(value : number){this.OrderQuantity = value}

}
