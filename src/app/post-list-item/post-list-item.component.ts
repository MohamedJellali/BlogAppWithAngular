import { Component, OnInit, Input } from '@angular/core';
import { textChangeRangeIsUnchanged } from 'typescript';

@Component({
  selector: 'app-postlistitem',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
  @Input() title!: string;
  @Input() content!: string;
  @Input() loveIts!: number;
  @Input() created_at!: Date;

  constructor() { }

  ngOnInit(): void {
  }

  onDontLoveIt(){
    this.loveIts--;
    alert('Not Love ' + this.loveIts);
  }

  onLoveIt(){
    this.loveIts++;
    alert('Love '+ this.loveIts)
  }

}
