export class Product {
    id:number;
    name:String;
    price:number;
    qty?:number
    constructor(id,name,price){
        this.id=id;
        this.name=name;
        this.price=price;
    }
}
