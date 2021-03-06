import { Component, OnInit } from '@angular/core';
import {Leader} from '../shared/leader';
import {LeaderService} from '../services/leader.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
     
  leaders:Leader[];
  constructor(private leaderService:LeaderService) { }

  ngOnInit(): void {
    this.leaderService.getLeader() 
         .subscribe(leaders=>this.leaders=leaders);
  }

}
