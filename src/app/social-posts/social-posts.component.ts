import { Component, OnInit } from '@angular/core';
import { Post } from '../interfaces/post';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css'],
})
export class SocialPostsComponent implements OnInit {
  posts: Post[] = [
    {
      title: 'Angular got me',
      thought: 'Angular makes my head hurt',
    },
    {
      title: 'Whaa whaaaaaaaat',
      thought: 'Whaa whaaaa whaaaaaaaat!',
    },
    {
      title: 'I like Mt. Dew',
      thought: 'Mt. Dew is my coffee',
    },
    {
      title: 'I am hungry',
      thought: 'Its taco Tuesday!',
    },
    {
      title: 'Angular....',
      thought: 'Angular still makes my head hurt',
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  onSubmit = (post: Post): void => {
    this.posts.unshift(post);
  };

  deletePost = (index: number): void => {
    this.posts.splice(index, 1);
  };
}
