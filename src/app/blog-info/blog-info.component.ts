import { Component } from '@angular/core';
import { CommonService } from '../shared/services/common.service';
import { BlogService } from '../shared/services/blog.service';
import { StorageService } from '../shared/services/storage.service';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-blog-info',
  templateUrl: './blog-info.component.html',
  styleUrls: ['./blog-info.component.scss']
})
export class BlogInfoComponent {

  blog!:any;
  blogs:any[] = [];
  imgFolderURL = environment.blogPhotosURL; 

  currentUrl: string = window.location.href;

  constructor(
    private common: CommonService,
    private blogServ: BlogService,
    private storage: StorageService,
    private ar: ActivatedRoute,
  ){}

  ngAfterViewInit()
  {
    try {
      const blogs = this.storage.get('blogs');

      const slug = this.ar.snapshot.paramMap.get('slug');
      
      if(blogs)
      {
        this.blogs = blogs;
        this.blog = this.blogs.filter(obj=>obj.slug===slug)[0];

      }

      this.fetchBlogs();
    } catch (error) {
      
    }
  }
  

  fetchBlogs()
  {
    this.blogServ.blogs().subscribe((res:any)=>{
      if(res.count > 0) {
        this.blogs = res.data;
        this.blogServ.saveBlogs(res.data);
      }
    },
    (err:any)=>{},
    ()=>{
    })
  }

  async decodeHTML(string:any)
  {
    return await this.common.decodeHtml(string);
  }

  share(content:any,social:any)
  {
    const currentUrl: string = window.location.href;
    const facebookShareUrl: string = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
    const twitterShareUrl: string = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('Hi, check out this blog post...')}`;
    const linkedinShareUrl: string = `https://www.linkedin.com/shareArticle?url=${encodeURIComponent(currentUrl)}`;

    if(social==='facebook')
    {
      window.open(facebookShareUrl,"_blank");
    }
    if(social==='twitter')
    {
      window.open(twitterShareUrl,"_blank");
    }
    if(social==='linkedin')
    {
      window.open(linkedinShareUrl,"_blank");
    }
  }
}
