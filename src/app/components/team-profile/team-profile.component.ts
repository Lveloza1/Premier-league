import { Component, OnInit } from '@angular/core';

import { TeamsService } from '../../services/teams.service';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-team-profile',
  templateUrl: './team-profile.component.html',
  styleUrls: ['./team-profile.component.css']
})
export class TeamProfileComponent implements OnInit {

  idTeam: String;

  constructor(private teamsService: TeamsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    this.idTeam = params.id;
  }

}
