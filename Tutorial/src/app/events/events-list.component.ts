import { Component } from '@angular/core';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html'
})

export class EventListComponent {

  event = {
    id: 1,
    name: 'Angular Connect',
    date: '01/04/2019'
  };
}
