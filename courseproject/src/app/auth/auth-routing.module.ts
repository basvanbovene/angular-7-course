import {NgModule} from '@angular/core';
import {SignupComponent} from './signup/signup.component';
import {SigninComponent} from './signin/signin.component';
import {RouterModule, Routes} from '@angular/router';

const authRoutes: Routes = [
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'signin',
    component: SigninComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(authRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AuthRoutingModule {}
