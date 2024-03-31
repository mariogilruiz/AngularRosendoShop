import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
//import { Producto } from 'src/app/interfaces/producto.interface';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.scss']
})
export class GestionComponent {


  pruductosService = inject(ProductosService);

  errorRequired: string = "El campoe es requerido";

  valuePrecio: string = "";
  valueInfo: string = "";
  valueImage: string = "";
  valueNombre: string = "";
  valueClickCreate: string = "";
  valueChange: string = "5";
  labelPrecio: string = "";
  labelInfo: string = "";
  labelNombre: string = "";
  labelImage: string = "";



  // Producto = {
    
  //   id:87678,
  //   name:this.createProducto.nombre ,
  //   price:0,
  //   description:"",
  //   stars:0,
  //   image:""
    
  // };

  formulario: FormGroup = new FormGroup({

    nombre: new FormControl(null, [
      Validators.required
    ]),

    precio: new FormControl(null, [
      Validators.required,Validators.max(300)
    ]),

    info: new FormControl(null, [
      Validators.required
    ]),

    imagen: new FormControl(null, [
      Validators.required, Validators.pattern(/\/+\.|(svg|pdf|jpeg|jpg|png)$/)
    ]),

    valoracion: new FormControl(5, [
      Validators.required
    ]),

  })

  
  checkError(fieldName: string, error: string) {
      
    return this.formulario.get(fieldName)?.hasError(error)
      && this.formulario.get(fieldName)?.touched;
  }
  
  async onSubmit() {
    
    const newProducto = this.formulario.value;
    //this.createProducto = newProducto;
    
    await this.pruductosService.create(newProducto);

    //console.log(this.createProducto);
    
  }

  onInput(event: any,labelInput:string) {

    const responseEvent = event.target.value;
    if (labelInput === 'precio') {
      this.valuePrecio = responseEvent;
      this.labelPrecio = labelInput;
    } else if (labelInput=='imagen') {
      this.valueImage = responseEvent;
      this.labelImage = labelInput;
    }else if (labelInput=='info') {
      this.valueInfo = responseEvent;
      this.labelInfo = labelInput;
    } else if (labelInput=='nombre') {
      this.valueNombre = responseEvent;
      this.labelNombre = labelInput;
    } 
  }

  onClick(){
    console.log("hola");
      this.valueClickCreate="Producto Creado con exito!!"
  }

  onChange(event: any) { 

    const eventCahenge = event.target.value;

    this.valueChange = eventCahenge;

  }


}

  


   // async ngOnInit() {

  //   await this.pruductosService.create(this.createProducto);
  // //console.log("soycreate",responseCreate);

  // }

