import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{
    name: string;
    content: string;
  }>();
  @Output() bluePrintCreated = new EventEmitter<{
    name: string;
    content: string;
  }>();
  // newServerName = '';
  newServerContent = '';
  constructor() {}

  ngOnInit(): void {}

  onAddServer(severName: HTMLInputElement) {
    this.serverCreated.emit({
      name: severName.value,
      content: this.newServerContent,
    });
  }

  onAddBlueprint(serverName: HTMLInputElement) {
    this.bluePrintCreated.emit({
      name: serverName.value,
      content: this.newServerContent,
    });
  }
}
