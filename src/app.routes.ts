import { CadastroSobreVoceComponent } from './views/cadastro-sobre-voce/cadastro-sobre-voce.component';
import { LoginComponent } from './views/login/login.component';
import { NovoCadastroComponent } from './views/novo-cadastro/novo-cadastro.component';
import { AuthGuard } from './guards/index';
import {Routes,RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

export const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'novo-cadastro', component: NovoCadastroComponent},
    {path: '', component: CadastroSobreVoceComponent, canActivate: [AuthGuard]},
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
