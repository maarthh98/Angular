import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from './models/User';
import {Post} from './models/Post';
import {Comment} from './models/Comment';


@Component({
  selector: 'app-root',

  template: '<h1>HELLO</h1> ' +
    '<app-user *ngFor="let u of users"[userX]="u"></app-user>' +
    '<div><app-post *ngFor="let p of posts" [post]="p"></app-post></div>'+
    '<div><app-comments *ngFor="let c of comments"[comments]></app-comments></div>',

  styles: ['h1{background-color: cadetblue}', 'div{margin-bottom: 10px; border: 1px solid black}']
})
export class AppComponent {

  users: User[];
  posts: Post[];
  comments: Comment[];

 constructor(private httpClient: HttpClient) {
    this.httpClient
      .get<User[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe(data => this.users = data)
    ;
   this.httpClient
     .get<Post[]>('https://jsonplaceholder.typicode.com/posts')
     .subscribe(data => this.posts = data)
   ;
   this.httpClient
     .get<any[]>('https://jsonplaceholder.typicode.com/comments')
     .subscribe(data => this.comments = data)
   ;
 }
}
