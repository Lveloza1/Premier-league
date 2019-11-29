import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeamListComponent } from './components/team-list/team-list.component';
import { TeamProfileComponent } from './components/team-profile/team-profile.component'
import { TeamPlayerComponent } from './components/team-player/team-player.component'
import { TeamEventComponent } from './components/team-event/team-event.component'


const routes: Routes = [
  {
    path: '',
    component: TeamListComponent
  },
  {
    path: 'profile/:id',
    component: TeamProfileComponent
  },
  {
    path: 'profile/:idTeam/player/:idPlayer',
    component: TeamPlayerComponent
  },
  {
    path: 'profile/:idTeam/event/:idEvent',
    component: TeamEventComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
