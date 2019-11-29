import { Component, Input, OnInit } from '@angular/core';

import { TeamsService } from '../../services/teams.service';

import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-team-player',
  templateUrl: './team-player.component.html',
  styleUrls: ['./team-player.component.css']
})
export class TeamPlayerComponent implements OnInit {

  idTeam: String;
  idPlayer: String;
  players: any = [];
  player: any = [];

  constructor(private teamsService: TeamsService, private activatedRoute: ActivatedRoute) { }
  ngOnInit() {

    const params = this.activatedRoute.snapshot.params;
    this.idTeam = params.idTeam;
    this.idPlayer = params.idPlayer;


    this.teamsService.getPlayersById(this.idTeam).subscribe(res => {
      this.players = res['player'];
      this.players.forEach(player => {
        if(player.idPlayer == this.idPlayer){
          this.player = player;
        }
      })
    });
    
  }
}
