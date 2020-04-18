import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'navigation-side',
  templateUrl: './navigation-side.component.html',
  styleUrls: ['./navigation-side.component.scss']
})
export class NavigationSideComponent implements OnInit {
  @Output() sidenavClose = new EventEmitter();
  @Input() public user:any;

  constructor() { }

  ngOnInit(): void {
  }
  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }
}
