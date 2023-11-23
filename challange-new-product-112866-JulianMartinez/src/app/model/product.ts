export class Product {
    id: number = 0;
    name: string = '';
    description: string = '';
    productType: string = '';
    price: number = 0;
    inventories: Stock[] = [];
  }

  export class Stock {
    id: number = 0;
    location: string = '';
    count: number = 0;
  }