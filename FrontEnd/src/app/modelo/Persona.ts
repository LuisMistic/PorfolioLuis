export class Persona {
    id:number;
    nombre: string;
    img: string;
    titulo: string;
    constructor(id:number, nombre:string, img:string, titulo:string){
        this.id = id;
        this.nombre = nombre;
        this.img = img;
        this.titulo = titulo;
    }
}