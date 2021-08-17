import { UsersModule } from './features/users/users.module';
import { PlacesModule } from './features/places/places.module';
import { HelpModule } from './features/help/help.module';
import { SportsModule } from './features/sports/sports.module';
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
    SportsModule,
    HelpModule,
    PlacesModule,
    UsersModule
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
