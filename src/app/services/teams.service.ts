import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  constructor(private http: HttpClient) { }

  getTeams(){
    return this.http.get('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League');
  }

  getPlayersById(idTeam: String){
    return this.http.get('https://www.thesportsdb.com/api/v1/json/1/lookup_all_players.php?id='+idTeam);
  }

  getLastFiveEventsById(idTeam: String){
    return this.http.get('https://www.thesportsdb.com/api/v1/json/1/eventslast.php?id='+idTeam);
  }
  
  getNextFiveEventsById(idTeam: String){
    return this.http.get('https://www.thesportsdb.com/api/v1/json/1/eventsnext.php?id='+idTeam);
  }

  getEventsSeason(){
    return this.http.get('https://www.thesportsdb.com/api/v1/json/1/eventsseason.php?id=4328&s=1920');
  }

  getEventById(idEvent: String){
    return this.http.get('https://www.thesportsdb.com/api/v1/json/1/lookupevent.php?id='+idEvent);
  }

  getPosicionsTable(){
    return this.http.get('https://www.thesportsdb.com/api/v1/json/1/lookuptable.php?l=4328&s=1920');
  }


}
