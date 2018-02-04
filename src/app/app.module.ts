import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

// Routes
import { AppRoutingModule } from './app-routing.module';

// Services
import { TrackService } from './services/track.service';

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/utils/navbar/navbar.component';
import { SidebarComponent } from './components/utils/sidebar/sidebar.component';
import { DashboardPageComponent } from './components/dashboard-page/dashboard-page.component';
import { AnalyticsPageComponent } from './components/analytics-page/analytics-page.component';
import { TrackNewComponent } from './components/track-page/track-new/track-new.component';
import { TrackUpdateComponent } from './components/track-page/track-update/track-update.component';
import { TracksComponent } from './components/track-page/tracks/tracks.component';
import { HttpClientModule } from '@angular/common/http';
import { KeysFirebasePipe } from './pipes/keys-firebase.pipe';
import { LineChartComponent } from './components/utils/line-chart/line-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    DashboardPageComponent,
    AnalyticsPageComponent,
    TrackNewComponent,
    TrackUpdateComponent,
    TracksComponent,
    KeysFirebasePipe,
    LineChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [ TrackService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
