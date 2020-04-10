import { Component, OnInit, Input } from '@angular/core';
import { GitUser } from '../../classses/git-user';
import { GetUserService } from '..//../services/get-user.service'
import { Repo } from '../../classses/repo';


@Component({
  selector: 'app-user-repo',
  templateUrl: './user-repo.component.html',
  styleUrls: ['./user-repo.component.css']
})
export class UserRepoComponent implements OnInit {

  @Input() u: GitUser;
  repo: Repo[];
  particlesJS: any;

constructor(private repoService: GetUserService) {
}

getSearchedRepo(repoLink) {
  this.repoService.searchMyRepo(repoLink).then(
  (success) => {
  this.repo = this.repoService.repo;
  console.log(this.repo);
  },
  (error) => {
  console.log(error);
  }
  );
  console.log(repoLink)
}

ngOnInit(): void {
  //this.getSearchedRepo('scrupycoco');
  // tslint:disable-next-line:prefer-const
  let particlesJS;
  particlesJS.load('particles-js', 'particles.json', null);
  console.log(this.u)
  
}

}
