import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { StartComponent } from './start/start.component';
import { FinishComponent } from './finish/finish.component';
const routes: Routes = [
  { path: '',redirectTo: '/welcome', pathMatch: "full"},
  { path: 'welcome', component: WelcomeComponent },
  { path: 'start/:', component: StartComponent },
  { path: 'finish', component: FinishComponent },


 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [WelcomeComponent,StartComponent,FinishComponent ]