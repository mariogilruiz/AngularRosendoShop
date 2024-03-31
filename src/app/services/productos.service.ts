import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Producto } from '../interfaces/producto.interface';

type Getresponse = [{
    id:number,
    name:string,
    price:number,
    description:string,
    stars:number,
    image:string
}]


@Injectable({
  providedIn: 'root'
})

export class ProductosService {

  httpClient = inject(HttpClient);


  // getAllObs() { 
  //  return this.httpClient.get("https://my-json-server.typicode.com/franlindebl/shopeame-api-v2/products")
  // }

  getAllProm():Promise<Getresponse> { 
    return firstValueFrom(
     this.httpClient.get<Getresponse>("https://my-json-server.typicode.com/franlindebl/shopeame-api-v2/products")
   ) 
  }

  create(producto:Producto) {
    console.log(producto);
    
    return firstValueFrom(

      this.httpClient.post<Producto>("https://my-json-server.typicode.com/franlindebl/shopeame-api-v2/products", producto)
     
    )
  }
}

