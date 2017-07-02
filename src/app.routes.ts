import { CadastroConclusaoComponent } from './views/cadastro-conclusao/cadastro-conclusao.component';
import { CadastroDocumentosComponent } from './views/cadastro-documentos/cadastro-documentos.component';
import { CadastroFinanceiroComponent } from './views/cadastro-financeiro/cadastro-financeiro.component';
import { CadastroEnderecoComponent } from './views/cadastro-endereco/cadastro-endereco.component';
import { CadastroProfissionalComponent } from './views/cadastro-profissional/cadastro-profissional.component';
import { CadastroSobreVoceComponent } from './views/cadastro-sobre-voce/cadastro-sobre-voce.component';
import { MainComponent } from './views/main/main.component';
import { LoginComponent } from './views/login/login.component';
import { NovoCadastroComponent } from './views/novo-cadastro/novo-cadastro.component';
import { AuthGuard } from './guards/auth.guard';
import {Routes,RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

export const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'novo-cadastro', component: NovoCadastroComponent},
    {
        path: '',
        component: MainComponent,
        canActivate: [AuthGuard],
        children: [
            {path: 'cadastroSobreVoce', component: CadastroSobreVoceComponent},
            {path: 'cadastroProfissional', component: CadastroProfissionalComponent},
            {path: 'cadastroEndereco', component: CadastroEnderecoComponent},
            {path: 'cadastroFinanceiro', component: CadastroFinanceiroComponent},
            {path: 'cadastroDocumentos', component: CadastroDocumentosComponent},
            {path: 'cadastroConclusao', component: CadastroConclusaoComponent}
        ]
    }
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
