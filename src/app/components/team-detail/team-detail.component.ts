import {  Component, Input, OnInit } from '@angular/core';

import { TeamsService } from '../../services/teams.service';


@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.css']
})

export class TeamDetailComponent implements OnInit {

  @Input() idTeam: String;
  teams: any = [];
  team : any = [];

  constructor(private teamsService: TeamsService) { }
  ngOnInit() {

    this.teamsService.getTeams().subscribe(res => {
      this.teams = res['teams'];
      this.teams.forEach(team => {
        if(team.idTeam == this.idTeam){
          this.team = team;
        }
      })
    });

  }

}
