import { Component } from '@angular/core';

@Component({
  selector: 'app-events-list',
  template: `
    <div>
      <h1>Upcoming Angular Events</h1>
      <hr>
      <h2>{{event.name}}</h2>
    </div>
  `
})

export class EventListComponent {

  event = {
    id: 1,
    name: 'Angular Connect',
    date: '01/04/2019'
  };
}
