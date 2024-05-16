import { Routes } from '@angular/router';
import { AllArticlesComponent } from './pages/articles/all-articles/all-articles.component';
import { CreateArticleComponent } from './pages/articles/create-article/create-article.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'create-article', component: CreateArticleComponent },
  { path: 'articles', component: AllArticlesComponent },
  { path: '**', redirectTo: 'login' },
];
