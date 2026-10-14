import { Routes } from '@angular/router';
import { Cadastro } from './cadastro/cadastro';
import { Home } from './home/home';
import { Login } from './login/login';



export const routes: Routes = [
    {path:"Cadastro", component:Cadastro},
    {path:"Home", component:Home},
    {path:"Login", component:Login},
    {path: '**', redirectTo: 'Home'}
];
