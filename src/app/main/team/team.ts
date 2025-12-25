import { Component } from '@angular/core';
import { TeamMember } from './team-member/team-member';


@Component({
  selector: 'app-team',
  imports: [
    TeamMember

  ],
  templateUrl: './team.html',
  styleUrl: './team.scss',
})
export class Team {

}
