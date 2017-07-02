import { CadastroConclusaoComponent } from './views/cadastro-conclusao/cadastro-conclusao.component';
import { CadastroDocumentosComponent } from './views/cadastro-documentos/cadastro-documentos.component';
import { CadastroFinanceiroComponent } from './views/cadastro-financeiro/cadastro-financeiro.component';
import { CadastroEnderecoComponent } from './views/cadastro-endereco/cadastro-endereco.component';
import { CadastroProfissionalComponent } from './views/cadastro-profissional/cadastro-profissional.component';
import { CadastroSobreVoceComponent } from './views/cadastro-sobre-voce/cadastro-sobre-voce.component';
import { LoginComponent } from './views/login/login.component';
import { NovoCadastroComponent } from './views/novo-cadastro/novo-cadastro.component';
import { AuthGuard } from './guards/index';
import {Routes,RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

export const routes: Routes = [
    {path: 'novo-cadastro', component: NovoCadastroComponent},
    {path: 'cadastroSobreVoce', component: CadastroSobreVoceComponent, canActivate: [AuthGuard]},
    {path: 'cadastroProfissional', component: CadastroProfissionalComponent, canActivate: [AuthGuard]},
    {path: 'cadastroEndereco', component: CadastroEnderecoComponent, canActivate: [AuthGuard]},
    {path: 'cadastroFinanceiro', component: CadastroFinanceiroComponent, canActivate: [AuthGuard]},
    {path: 'cadastroDocumentos', component: CadastroDocumentosComponent, canActivate: [AuthGuard]},
    {path: 'cadastroConclusao', component: CadastroConclusaoComponent, canActivate: [AuthGuard]},
    {path: 'login', component: LoginComponent, outlet: 'login', pathMatch: 'full'}
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
