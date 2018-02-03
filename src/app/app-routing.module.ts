import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { DashboardPageComponent } from './components/dashboard-page/dashboard-page.component';
import { AnalyticsPageComponent } from './components/analytics-page/analytics-page.component';
import { TrackNewComponent } from './components/track-page/track-new/track-new.component';
import { TrackUpdateComponent } from './components/track-page/track-update/track-update.component';
import { TracksComponent } from './components/track-page/tracks/tracks.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardPageComponent,
    children: [
      { path: 'tracks', component: TracksComponent },
      { path: 'tracks/new', component: TrackNewComponent },
      { path: 'tracks/:id/update', component: TrackUpdateComponent },
      { path: '**', pathMatch: 'full', redirectTo: 'tracks' },
    ]
  },
  { path: 'analytics', component: AnalyticsPageComponent },
  { path: '**', pathMatch: 'full',  redirectTo: 'dashboard' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
