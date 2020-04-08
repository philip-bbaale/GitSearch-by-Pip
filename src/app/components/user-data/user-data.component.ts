import { Component, OnInit } from '@angular/core';
import { GitUser } from '../../classses/git-user';
import { GetUserService } from '..//../services/get-user.service'

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {

user: GitUser[];
particlesJS: any;

constructor(private service: GetUserService) {
}

/*getSearchedUser(searchTerm) {
  this.service.searchMyUser(searchTerm).then(
  (success) => {
  this.user = this.service.user;
  console.log(this.user);
  },
  (error) => {
  console.log(error);
  }
  );
}

ngOnInit(): void {
  this.getSearchedUser('scrupycoco');
  // tslint:disable-next-line:prefer-const
  let particlesJS;
  particlesJS.load('particles-js', 'particles.json', null);
}

}
