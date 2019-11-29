import { Component, Input, OnInit } from '@angular/core';

import { TeamsService } from '../../services/teams.service';

@Component({
  selector: 'app-team-events',
  templateUrl: './team-events.component.html',
  styleUrls: ['./team-events.component.css']
})
export class TeamEventsComponent implements OnInit {

  @Input() idTeam: String;
  lastevents: any = [];
  nextevents: any = [];
  allevents: any = [];

  constructor(private teamsService: TeamsService) { }
  ngOnInit() {

    this.teamsService.getLastFiveEventsById(this.idTeam).subscribe(res => {
      this.lastevents = res['results'];
    });
    this.teamsService.getNextFiveEventsById(this.idTeam).subscribe(res => {
      this.nextevents = res['events'];
    });
    this.teamsService.getEventsSeason().subscribe(res => {
      this.allevents = res['events'];
    });
  }

}
