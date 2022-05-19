import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent} from './login/login.component';
import { RegisterComponent} from './register/register.component';
import { AdminAddjobComponent} from './admin-addjob/admin-addjob.component';
import { AdminEditjobComponent} from'./admin-editjob/admin-editjob.component';
import { AdminJoblistComponent } from './admin-joblist/admin-joblist.component';


const routes: Routes = [
  {
    path:'',
    redirectTo:'/login',
    pathMatch:'full'
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'addjob',
    component:AdminAddjobComponent
  },
  {
    path:'editjob/:id',
    component:AdminEditjobComponent
  },
  {
    path:'joblist',
    component:AdminJoblistComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
