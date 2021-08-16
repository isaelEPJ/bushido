import { StudentDetailPageComponent } from './features/students/pages/student-detail-page/student-detail-page.component';
import { RegisterStudentsPageComponent } from './features/students/pages/register-students-page/register-students-page.component';
import { PlacesTrainingPageComponent } from './features/places/pages/places-training-page/places-training-page.component';
import { HelpPageComponent } from './features/help/pages/help-page/help-page.component';
import { SportsPageComponent } from './features/sports/pages/sports-page/sports-page.component';
import { StudentsPageComponent } from './features/students/pages/students-page/students-page.component';
import { AuthGuard } from './shared/guard/auth/auth.guard';
import { HomePageComponent } from './features/home/pages/home-page/home-page.component';
import { LoginPageComponent } from './features/auth/pages/login-page/login-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterPageComponent } from './features/auth/pages/register-page/register-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegisterPageComponent },
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
    path: 'sports',
    component: SportsPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'training_places',
    component: PlacesTrainingPageComponent,
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
