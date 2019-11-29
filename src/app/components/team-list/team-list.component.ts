import { Component, OnInit } from '@angular/core';

import { TeamsService } from '../../services/teams.service';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {

  teams: any = [];
  favorites: any = [];
  cont: number = 0;

  constructor(private teamsService: TeamsService) { }

  ngOnInit() {
    this.teamsService.getTeams().subscribe(
      res => {
        this.teams = res['teams'];
      }
    );  
    this.getFavorites();
    this.cont = JSON.parse(localStorage.getItem('favorites')).length;
  }

  addToFavorite(idTeam: String){
    let done = false;

    this.favorites.forEach(teamFav => {
      if(teamFav.idTeam == idTeam){
        done = true;
        alert(teamFav.strTeam +" is already added to favorites");
      }
      });   
    if(!done){
    this.teams.forEach(team => {
      if(team.idTeam == idTeam){
        this.favorites.push(team);
        localStorage.setItem('favorites',JSON.stringify(this.favorites));
        alert(team.strTeam +" added to favorites sucessfully!");
        this.cont = JSON.parse(localStorage.getItem('favorites')).length;
      }
      });  
    } 
  }

  removeFavorite(idTeam: String){
    for (let i = 0; i < this.favorites.length; i++) {
      if(this.favorites[i].idTeam == idTeam){
        this.favorites.splice(i,1);
        localStorage.setItem('favorites', JSON.stringify(this.favorites));
        this.cont = JSON.parse(localStorage.getItem('favorites')).length;
      } 
    }
  }

  getFavorites(){
    if(localStorage.length != 0){
     this.favorites = JSON.parse(localStorage.getItem('favorites'));
    }else
    this.favorites = [];
 }
}