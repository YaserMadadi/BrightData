import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-team-member',
  imports: [],
  templateUrl: './team-member.html',
  styleUrl: './team-member.scss',
})
export class TeamMember {

  @Input()
  fullname: string = '';

  @Input()
  position: string = '';

  @Input()
  description: string = '';

  @Input()
  profileImage: string = '';


}
