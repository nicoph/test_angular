import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  nombregral="Lista de Tareas"
  pruebainnertxt=12312
  hidealgo=false
  // desues lo llamo con {{}}
  constructor() { }

  ngOnInit(): void {
  }
  toggleAddTask(){
    console.log("boton apretado")
  }
  toggle(){
    this.hidealgo = !this.hidealgo;
  }

}
