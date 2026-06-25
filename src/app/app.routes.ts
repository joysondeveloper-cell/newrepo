import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import {Main} from '../app/components/main/main'
import {roleGuard} from '../app/guard/role-guard'
import {Admin} from '../app/components/admin/admin'

export const routes: Routes = [

    {path: '', component: Home},
    {path:'main',component:Main},
    {path:'dashboard',loadChildren:()=>import('../app/Module/dashboard/dashboard-module')
        .then(m=>m.DashboardModule)
    },
     {path: 'admin', 
        component: Admin,
        canActivate:[roleGuard]
    
    },
    
];
 

