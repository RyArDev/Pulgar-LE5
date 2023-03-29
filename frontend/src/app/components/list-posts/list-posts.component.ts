import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.scss']
})
export class ListPostsComponent implements OnInit {

  posts?: Post[] = [];

  userKey: string | null = window.sessionStorage.getItem('USER_KEY');
  tokenKey: string | null = window.sessionStorage.getItem('TOKEN_KEY');

  constructor(private http: HttpClient, private route: Router, private tokenStorage: TokenStorageService) {}

  ngOnInit(): void {
      this.initData();
  }

  initData(): void {
    this.http.get<Post[]>("https://localhost:7176/api/post/all").subscribe({
      next: (data: Post[]) => {
        this.posts = data;
        console.log(this.posts);
      }
    })
  }

  login(): void {
    this.route.navigate(['login']);
  }

  register(): void {
    this.route.navigate(['register']);
  }

  logout(): void {
    this.tokenStorage.signOut();
  }

}
