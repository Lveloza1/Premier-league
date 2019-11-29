import { Component, OnInit } from '@angular/core';

import { TeamsService } from '../../services/teams.service';


import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-team-event',
  templateUrl: './team-event.component.html',
  styleUrls: ['./team-event.component.css']
})
export class TeamEventComponent implements OnInit {

  idTeam: String;
  idEvent: String;
  eventArray: any = [];

  constructor(private teamsService: TeamsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    this.idTeam = params.idTeam;
    this.idEvent = params.idEvent;

    this.teamsService.getEventById(this.idEvent).subscribe(res => {
      this.eventArray = res['events'];
  });

}

}