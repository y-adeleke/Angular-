import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
})
export class ServerElementComponent implements OnInit {
  @Input('srvElement') element: { name: string; content: string; type: string };
  constructor() {}

  ngOnInit(): void {}
}
