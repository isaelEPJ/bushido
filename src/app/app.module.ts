import { SenseiModule } from './features/sensei/sensei.module';
import { DojoModule } from './features/dojo/dojo.module';
import { ClassModule } from './features/class/class.module';
import { UsersModule } from './features/users/users.module';
import { HelpModule } from './features/help/help.module';
import { StudentsModule } from './features/students/students.module';
import { HomeModule } from './features/home/home.module';
import { SharedModule } from './shared/shared.module';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    HomeModule,
    StudentsModule,
    HelpModule,
    UsersModule,
    ClassModule,
    DojoModule,
    SenseiModule,
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
