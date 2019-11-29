import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NavigationComponent } from './components/navigation/navigation.component';

import { TeamsService } from './services/teams.service';

import { TeamListComponent } from './components/team-list/team-list.component';
import { TeamProfileComponent } from './components/team-profile/team-profile.component';
import { TeamDetailComponent } from './components/team-detail/team-detail.component';
import { TeamSquadComponent } from './components/team-squad/team-squad.component';
import { TeamPlayerComponent } from './components/team-player/team-player.component';
import { TeamEventsComponent } from './components/team-events/team-events.component';
import { TeamPositionComponent } from './components/team-position/team-position.component';
import { TeamEventComponent } from './components/team-event/team-event.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    TeamListComponent,
    TeamProfileComponent,
    TeamDetailComponent,
    TeamSquadComponent,
    TeamPlayerComponent,
    TeamEventsComponent,
    TeamPositionComponent,
    TeamEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTabsModule,
    BrowserAnimationsModule
  ],
  providers: [
    TeamsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
