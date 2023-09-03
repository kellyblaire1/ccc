import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../shared/services/common.service';
import { BlogService } from '../shared/services/blog.service';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.scss']
})
export class CreateBlogComponent {

  form!:FormGroup;
  loading = false;
  showPreview = false;

  constructor(
    private fb: FormBuilder,
    private common: CommonService,
    private blogServ: BlogService,
  )
  {
    this.form = fb.group({
      slug: ['',[Validators.required]],
      title: ['',[Validators.required]],
      intro: ['',[Validators.required]],
      category: ['',[Validators.required]],
      content: ['',[Validators.required]],
      poster: ['',[Validators.required]],
      image: ['',[Validators.required]],
    })
  }
  
  createSlug() {
    const title = this.form.get('title')?.value;
    var str = title.toLowerCase().trim();
  
    // Remove accents, swap ñ for n, etc.
    const from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
    const to = "aaaaeeeeiiiioooouuuunc------";
  
    for (let i = 0, l = from.length; i < l; i++) {
      str = str.replace(new RegExp(from.charAt(i), "g"), to.charAt(i));
    }
  
    // Remove invalid characters
    str = str
      .replace(/[^a-z0-9 -]/g, "") // Remove invalid characters
      .replace(/\s+/g, "-") // Replace spaces with a hyphen
      .replace(/-+/g, "-"); // Replace multiple hyphens with a single hyphen
  
    // return str;
    this.form.patchValue({
      slug: str
    })
  }

  previewImg(e:any) {
    const inpFile:any = document.querySelector('#file');
    const previewImage:any = document.querySelector('#photo');
    const file = e.target.files[0];
    
    if(file) {
      const src= URL.createObjectURL(file);
      // previewImage.setAttribute("src", src);
            
        var reader = new FileReader();
        reader.onload = (event: any) => {
          var imageData = reader.result;
          // let imageData = encodeURI(event.target.result);
          this.form.get('image')?.setValue(imageData);
          previewImage.setAttribute("src", imageData);
          previewImage.src = imageData;
        };
        this.showPreview = true;

        reader.readAsDataURL(file);
    } else {
        // previewImage.setAttribute('src',"../assets/svgs/products.svg");
        this.showPreview = false;
    } 
  }

  removePreview()
  {
    const previewImage:any = document.querySelector('#photo');
    previewImage.removeAttribute('src');
    this.form.get('image')?.setValue('');
    this.showPreview = false;
  }

  post()
  {
    if(this.form.valid)
    {
      this.loading = true;
      this.blogServ.add(this.form.value).subscribe((res:any)=>{
        if(res.response==="success") {
          this.common.showAlert('Success','Blog posted successfully!','success');
          this.common.route('blog');
          this.form.reset();
        } else {
          this.common.showToast(res.message,'danger');
        }
      },
      (err:any)=>{
        this.common.showToast('Something went wrong.','danger');
      },
      ()=>{
        this.loading = false;
      })

    } else {

      this.common.showToast('Fill all required fields to continue.','danger');
    }
  }
}
