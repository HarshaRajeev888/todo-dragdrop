import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop'; 

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  items = [
    {value: 'Goog Morning', disabled: false},
    {value: 'Good Afternoon', disabled: false},
    {value: 'Good Evening',disabled: false},
    {value: 'Good Night', disabled: false}
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.items, event.previousIndex, event.currentIndex);
  }



  constructor() { }

  ngOnInit(): void {
  }
  

}
