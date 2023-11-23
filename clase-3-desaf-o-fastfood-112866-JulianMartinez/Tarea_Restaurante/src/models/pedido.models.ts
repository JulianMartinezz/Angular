export class Pedido{
    numero:number;
    nombre: string;
    descripcion: string;
    

    constructor(num:number,nom:string,desc:string){
        this.numero=num;
        this.nombre=nom;
        this.descripcion=desc;
    }
}