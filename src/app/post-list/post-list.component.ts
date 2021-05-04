import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-postlist',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

@Input() title!: string;
@Input() content!: string;
@Input() loveIts!: number;
@Input() created_at!: Date;
@Input() posts : any;

  constructor() { }

  ngOnInit(): void {
  }

}
