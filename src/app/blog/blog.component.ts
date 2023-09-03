import { Component } from '@angular/core';
import { CommonService } from '../shared/services/common.service';
import { BlogService } from '../shared/services/blog.service';
import { StorageService } from '../shared/services/storage.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {

  blogs:any[] = [];

  imgFolderURL = environment.blogPhotosURL; 

  loading = false;

  constructor(    
    private common: CommonService,
    private blogServ: BlogService,
    private storage: StorageService,
  )
  {}

  ngAfterViewInit()
  {
    try {
      const blogs = this.storage.get('blogs');
      
      if(blogs)
      {
        this.blogs = blogs;
      }

      this.fetchBlogs();
    } catch (error) {
      
    }
  }

  fetchBlogs()
  {
    this.loading = true;

    this.blogServ.blogs().subscribe((res:any)=>{
      if(res.count > 0) {
        this.blogs = res.data;
        this.blogServ.saveBlogs(res.data);
      }
    },
    (err:any)=>{},
    ()=>{
      this.loading = false;
    })
  }
}
