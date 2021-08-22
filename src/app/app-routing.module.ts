import { SenseiPageComponent } from './features/sensei/pages/sensei-page/sensei-page.component';
import { ClassPageComponent } from './features/class/pages/class-page/class-page.component';
import { SignupPageComponent } from './features/users/pages/signup-page/signup-page.component';
import { SigninPageComponent } from './features/users/pages/signin-page/signin-page.component';
import { StudentDetailPageComponent } from './features/students/pages/student-detail-page/student-detail-page.component';
import { RegisterStudentsPageComponent } from './features/students/pages/register-students-page/register-students-page.component';
import { HelpPageComponent } from './features/help/pages/help-page/help-page.component';
import { StudentsPageComponent } from './features/students/pages/students-page/students-page.component';
import { AuthGuard } from './shared/guard/auth/auth.guard';
import { HomePageComponent } from './features/home/pages/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DojoPageComponent } from './features/dojo/pages/dojo-page/dojo-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: SigninPageComponent },
  { path: 'register', component: SignupPageComponent },
  { path: 'home', component: HomePageComponent, canActivate: [AuthGuard] },
  //inicio das rotas relacionadas a estudantes
  {
    path: 'students',
    component: StudentsPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'students/create',
    component: RegisterStudentsPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'student/:id',
    component: StudentDetailPageComponent,
    canActivate: [AuthGuard],
  },
  // fim das rotas relacionadas a estudante
  {
    path: 'turmas',
    component: ClassPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'dojo',
    component: DojoPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'sensei',
    component: SenseiPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'help',
    component: HelpPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
