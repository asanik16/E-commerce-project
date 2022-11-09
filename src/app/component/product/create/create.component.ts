import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  productForm !: FormGroup;
  actionBtn : string = "Save";
  constructor(private fromBuilder:FormBuilder, 
  private api : ApiService,
  @Inject(MAT_DIALOG_DATA) public editData : any,
  private dialogRef : MatDialogRef<CreateComponent>) { }

  ngOnInit(): void {
    this.productForm = this.fromBuilder.group({
      productName : ['',Validators.required],
      productCode : ['',Validators.required],
      category : ['',Validators.required],
      price : ['',Validators.required],
      description : ['',Validators.required],
    })

    if(this.editData) {
      this.actionBtn = "Update";
      this.productForm.controls['productName'].setValue(this.editData.productName);
      this.productForm.controls['productCode'].setValue(this.editData.productCode);
      this.productForm.controls['category'].setValue(this.editData.category);
      this.productForm.controls['price'].setValue(this.editData.price);
      this.productForm.controls['description'].setValue(this.editData.description);
    }
  }

  addProduct() {
    if(!this.editData) {
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
    else {
      this.updateProduct()
    }
  }
  updateProduct() {
    this.api.putProduct(this.productForm.value, this.editData.id).subscribe({
      next:(res) => {
        alert("Product updated successfully");
        this.productForm.reset();
        this.dialogRef.close('update');
      },
      error:(err) => {
        alert("Error while updating the record");
      }
    })
  }

}
