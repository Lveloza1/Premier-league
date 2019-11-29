import { Component, Input, OnInit } from '@angular/core';

import { TeamsService } from '../../services/teams.service';

@Component({
  selector: 'app-team-squad',
  templateUrl: './team-squad.component.html',
  styleUrls: ['./team-squad.component.css']
})
export class TeamSquadComponent implements OnInit {

  @Input() idTeam: String;
  players: any = [];

  constructor(private teamsService: TeamsService) { }
  ngOnInit() {
 
  this.teamsService.getPlayersById(this.idTeam).subscribe(res => {
    this.players = res['player'];
    });
  }
}
