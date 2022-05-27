import { Component, OnInit } from '@angular/core';

/* import { Component, HostBinding } from '@angular/core';
  ...
  @HostBinding('class.cds--header') headerClass = true;*/
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
