import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

searchTerm: string;

/*@Output() searchEmmiter = new EventEmitter<any>();  

emmitUser() {
  this.searchEmmiter.emit(this.searchTerm);
  console.log(this.searchTerm)
}*/

  constructor() { }

  ngOnInit(): void {
  }

}
