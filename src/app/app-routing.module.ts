import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserRepoComponent } from '../app/components/user-repo/user-repo.component'


const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
