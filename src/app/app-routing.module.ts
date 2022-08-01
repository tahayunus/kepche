import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule) },
  { path: 'search', loadChildren: './pages/search/search.module#SearchPageModule' },
  { path: 'pharmacy-duty', loadChildren: './pages/pharmacy-duty/pharmacy-duty.module#PharmacyDutyPageModule' },
  { path: 'call-taxi', loadChildren: './pages/call-taxi/call-taxi.module#CallTaxiPageModule' },
  { path: 'bus-time', loadChildren: './pages/bus-time/bus-time.module#BusTimePageModule' },
  { path: 'emergency', loadChildren: './pages/emergency/emergency.module#EmergencyPageModule' },
  { path: 'live-tv', loadChildren: './pages/live-tv/live-tv.module#LiveTvPageModule' },
  { path: 'help', loadChildren: './pages/help/help.module#HelpPageModule' },
  { path: 'map-mapbox', loadChildren: './pages/map-mapbox/map-mapbox.module#MapMapboxPageModule' },
  { path: 'map-directions', loadChildren: './pages/map-directions/map-directions.module#MapDirectionsPageModule' },
  { path: 'product-edit', loadChildren: './pages/product-edit/product-edit.module#ProductEditPageModule' },




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      relativeLinkResolution: 'corrected'
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
