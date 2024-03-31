import { Component, inject } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto.interface';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-galeria-productos',
  templateUrl: './galeria-productos.component.html',
  styleUrls: ['./galeria-productos.component.scss']
})
  
export class GaleriaProductosComponent {

 
  arrProductos: Producto[] = [];
  //arrNuevosProductos: Producto[] = [];
  totalProductos: number = 0;
  tipoGaleria: string = "galeria";

 

  pruductosService = inject(ProductosService);

   async ngOnInit() {
    // this.pruductosService.getAllObs().subscribe(response => {
    //   this.arrProductos = response;
    // });

     const response = await this.pruductosService.getAllProm();
     this.arrProductos = response;

     const numeroProducto = response.length;
     this.totalProductos = numeroProducto;     
    }
  
  mostrar(paramBttn:string) {
    
    this.tipoGaleria = paramBttn;

  }
  
}
    
     
 


