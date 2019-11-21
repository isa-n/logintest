import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopComponent } from './top/top.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { MyPageComponent } from './my-page/my-page.component';
import { RegisterComponent } from './register/register.component';
import { UnregisterComponent } from './unregister/unregister.component';
import { IsSignedInGuard, IsSignedOutGuard,  } from './utility/guards'; 

const routes: Routes = [
  //トップページ　ガードなし
  {
    path: '',
    component:TopComponent,
    canActivate:[]
  },

  //マイページ　サインインしているガード
  {
    path: 'my-page',
    component:MyPageComponent,
    canActivate:[IsSignedInGuard]
  },

  //ログインページ　サインインしていないガード
  {
    path: 'signin',
    component:SignInComponent,
    canActivate:[IsSignedOutGuard]
  },

  //登録ページ　サインインしていないガード
  {
    path: 'register',
    component:RegisterComponent,
    canActivate:[IsSignedOutGuard]
  },

  //退会ページ　サインインしていないガード
  {
    path: 'unregister',
    component:UnregisterComponent,
    canActivate:[IsSignedInGuard]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
