import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  time = new Date();
  currentTime = this.time.toLocaleString('en-US', { hour: 'numeric', hour12: true })


  constructor() { }

  ngOnInit(): void { }

}
