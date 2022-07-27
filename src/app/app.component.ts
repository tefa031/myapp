import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  //tipos de datos
    //Nombre:tipo=contenido
    title = 'Nuevo Proyecto';
    name:string = 'Jennyfer Estefania Oliva C';
    age: number = 23
    phone: null = null;
    otrotipo: undefined = undefined; 
    cualquierdato: any;
    variostipos: string | number = 'ejemplo';



    //lista
    listCars:Array<any>=[1,'cadena',null,false,true,2.4];
    
    listcars2:Array<carmode>=[
      {
        marca:'for',
        modelo:'range',
        year:2021
      },
      {
        marca:'chebrolet',
        modelo: 'spark',
        year:2000
      }
    ];

    //ejercicio
      listProducto1: Array<Productos> = [
        {
          codigo: 2121,
          name: 'Pad Mause',
          valor: 5000.00,
          cant:10,
          tipoEnvar: 'Unidad',
          precioCosto:3000.00
        },

        {
          codigo: 2121,
          name: 'Portatil Acer',
          valor: 2000000.00,
          cant:2,
          tipoEnvar: 'Unidad',
          precioCosto:1000000.00,
        },

      ];

      //Definicion de Objetos

      car: any ={
        marca:'chebrolet',
        modelo: 'spark',
        year:2000
      }
      car2: carmode={
        marca:'bmw',
        modelo:'porche',
        year:2022
      }
      cat: catModelo={
        nombre:'Milo',
        raza:'Angora',
        edad:1,
        vacunas:'todasXD',
        skick:false
      }

}
  //interfaces : contrato de operaccion
  //que condiciona la las variables a 
  //comportace de una manera determinada
  interface carmode{
    marca: string;
    modelo:string;
    year:number; 
  }

  interface catModelo{
    nombre:string;
    raza:string;
    edad:number|string;
    vacunas:any;
    skick:boolean;
  }

  interface Productos{
    codigo:number|string;
    name:string;
    valor:number;
    cant:number;
    tipoEnvar:string;
    precioCosto:number;
  }
  //Definir 3 listas que dependad de datos de una interface
  //denominada productos en cada lista definir 2 objetos
  //dependiendo de la interfas
  //codigo Inter, name , valor, cantidad, tipo de envarque,pecio de costo

