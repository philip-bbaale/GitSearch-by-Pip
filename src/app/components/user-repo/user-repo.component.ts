import { Component, OnInit, Input } from '@angular/core';
import { GitUser } from '../../classses/git-user';
import { GetUserService } from '..//../services/get-user.service'

@Component({
  selector: 'app-user-repo',
  templateUrl: './user-repo.component.html',
  styleUrls: ['./user-repo.component.css']
})
export class UserRepoComponent implements OnInit {

  @Input() user: GitUser[];
  
  ngOnInit(): void {
  }

}
