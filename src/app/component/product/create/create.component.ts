import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  productForm !: FormGroup;

  constructor(private fromBuilder:FormBuilder, private api : ApiService, private dialogRef : MatDialogRef<CreateComponent>) { }

  ngOnInit(): void {
    this.productForm = this.fromBuilder.group({
      productName : ['',Validators.required],
      productCode : ['',Validators.required],
      category : ['',Validators.required],
      price : ['',Validators.required],
      description : ['',Validators.required],
    })
  }
  addProduct() {
    if(this.productForm.valid) {
      this.api.postProduct(this.productForm.value).subscribe({
        next:(res) =>{
          alert("Product added successfully");
          this.productForm.reset();
          this.dialogRef.close('save');
        },
        error:()=>{
          alert("Error while adding the product")
        }
      })
    }
  }

}
