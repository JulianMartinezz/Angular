import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { Product, Stock } from 'src/app/model/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'rfc-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  formProduct: FormGroup;
  stock:Stock= new Stock();
  product : Product = new Product();

  constructor(private productService: ProductsService, private formBuilder: FormBuilder){
    this.formProduct= this.formBuilder.group({
      controlName: ['', {
        validators: [Validators.required, Validators.minLength(5)],
        asyncValidators: [this.productNameValidator.bind(this)],
        updateOn: 'blur'
      }], 
      controlDescription: ['', [Validators.required, Validators.minLength(10)]],
      controlPrice: ['', [Validators.required, Validators.min(1)]],
      controlType: ['Producto'],
      controlLocationName: ['', [Validators.required, Validators.minLength(5)]],
      controlLocationCount: ['', {
        validators: [Validators.required, Validators.min(1), Validators.max(100)],
        updateOn: 'blur'
      }],
      controlTime: [{ value: '', disabled: true },
      [Validators.required, Validators.min(10), Validators.max(60)]],
    });
    this.formProduct.get('controlType')!.valueChanges.subscribe(value => {
      if (value === 'Producto') {
        this.formProduct.controls['controlLocationCount'].setValidators([Validators.required, Validators.min(1), Validators.max(100)]);
        this.formProduct.controls['controlLocationName'].setValidators([Validators.required, Validators.minLength(5)]);
        this.formProduct.controls['controlTime'].clearValidators();
        this.formProduct.controls['controlTime'].disable();
        this.formProduct.controls['controlLocationCount'].enable();
        this.formProduct.controls['controlLocationName'].enable();
      } else {
        this.formProduct.controls['controlTime'].setValidators([Validators.required, Validators.min(10), Validators.max(60)]);
        this.formProduct.controls['controlLocationCount'].clearValidators();
        this.formProduct.controls['controlLocationName'].clearValidators();
        this.formProduct.controls['controlLocationCount'].disable();
        this.formProduct.controls['controlLocationName'].disable();
        this.formProduct.controls['controlTime'].enable();
      }
      this.formProduct.get('controlLocationCount')?.reset();
      this.formProduct.get('controlTime')?.reset();
      this.formProduct.get('controlLocationName')?.reset();
    });
  }

  productNameValidator(control: AbstractControl): Observable<ValidationErrors | null> {
    return this.productService.getOneByName(control.value.toLowerCase()).pipe(
      tap(response => console.log(response)),
      map(product => (product && Object.keys(product).length !== 0 && product.name.toLowerCase() === control.value.toLowerCase()) ? { productNameExists: true } : null),
      catchError(() => of({ productNameExists: false }))
    );
  }
  onSubmit(){
    if (this.formProduct.invalid) {
      this.formProduct.markAllAsTouched();
      return;
    }
    else{
      const product: Product = {
        id: 0,
        name: this.formProduct.get('controlName')?.value,
        nameEncoded: this.formProduct.get('controlName')?.value,
        description: this.formProduct.get('controlDescription')?.value,
        price: this.formProduct.get('controlPrice')?.value,
        productType: this.formProduct.get('controlType')?.value,
        timeFraction: this.formProduct.get('controlTime')?.value,
        inventories: [{
          id: 0,
          location: this.formProduct.get('controlLocationName')?.value,
          count: this.formProduct.get('controlLocationCount')?.value
        }]
      }
      this.productService.add(product).subscribe({
        next: (product) => {
          console.log(product);
          alert('Producto guardado con éxito');
          this.formProduct.reset();
          // this.router.navigate(['/list-product']); // Redirect to the product list
        },
        error: (err) => {
          console.log(err);
          alert('Error al guardar el producto');
          this.formProduct.reset();
        }
      });
    }
  }
}
