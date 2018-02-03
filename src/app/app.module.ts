import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

// Routes
import { AppRoutingModule } from './app-routing.module';

// Services

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/utils/navbar/navbar.component';
import { SidebarComponent } from './components/utils/sidebar/sidebar.component';
import { DashboardPageComponent } from './components/dashboard-page/dashboard-page.component';
import { AnalyticsPageComponent } from './components/analytics-page/analytics-page.component';
import { TrackNewComponent } from './components/track-page/track-new/track-new.component';
import { TrackUpdateComponent } from './components/track-page/track-update/track-update.component';
import { TracksComponent } from './components/track-page/tracks/tracks.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    DashboardPageComponent,
    AnalyticsPageComponent,
    TrackNewComponent,
    TrackUpdateComponent,
    TracksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
