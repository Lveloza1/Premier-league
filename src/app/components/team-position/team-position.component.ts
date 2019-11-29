import { Component, Input, OnInit } from '@angular/core';

import { TeamsService } from '../../services/teams.service';

@Component({
  selector: 'app-team-position',
  templateUrl: './team-position.component.html',
  styleUrls: ['./team-position.component.css']
})
export class TeamPositionComponent implements OnInit {

  @Input() idTeam: String;
  positions: any = [];

  constructor(private teamsService: TeamsService) { }
  ngOnInit() {
    this.teamsService.getPosicionsTable().subscribe(res => {
      this.positions = res['table'];
      });
  }
}
