import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';
import { AuthGuard } from '../services/auth-guard/auth.guard';

const routes: Routes = [
  {
    path: 'index',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () => import('../pages/home/home.module').then(m => m.HomePageModule)
          },
          {
            path: 'address',
            loadChildren: () => import('../pages/address/address.module').then(m => m.AddressPageModule)
          },
          {
            path: 'address/add',
            loadChildren: () => import('../pages/add-address/add-address.module').then(m => m.AddAddressPageModule)
          },
          {
            path: 'search',
            loadChildren: () => import('../pages/search/search.module').then(m => m.SearchPageModule)
          },
          {
            path: 'properties',
            loadChildren: () => import('../pages/properties/properties.module').then(m => m.PropertiesPageModule)
          },
          {
            path: 'user/:id',
            loadChildren: () => import('../pages/user-detail/user-detail.module').then(m => m.UserDetailPageModule)
          },
          {
            path: 'pages/:slug',
            loadChildren: () => import('../pages/page/page.module').then(m => m.PagePageModule)
          },
          {
            path: 'help',
            loadChildren: () => import('../pages/help/help.module').then(m => m.HelpPageModule)
          },
          {
            path: 'help/pharmacy-duty',
            loadChildren: () => import('../pages/pharmacy-duty/pharmacy-duty.module').then(m => m.PharmacyDutyPageModule)
          },
          {
            path: 'help/call-taxi',
            loadChildren: () => import('../pages/call-taxi/call-taxi.module').then(m => m.CallTaxiPageModule)
          },
          {
            path: 'help/bus-time',
            loadChildren: () => import('../pages/bus-time/bus-time.module').then(m => m.BusTimePageModule)
          },
          {
            path: 'help/emergency',
            loadChildren: () => import('../pages/emergency/emergency.module').then(m => m.EmergencyPageModule)
          },
          {
            path: 'categories',
            loadChildren: () => import('../pages/category-list/category-list.module').then(m => m.CategoryListPageModule)
          },
          {
            path: 'places',
            loadChildren: () => import('../pages/place-list/place-list.module').then(m => m.PlaceListPageModule)
          },
          {
            path: 'places/map',
            loadChildren: () => import('../pages/map-mapbox/map-mapbox.module').then(m => m.MapMapboxPageModule)
          },
          {
            path: 'places/:id/:slug/reviews',
            loadChildren: () => import('../pages/review-list/review-list.module').then(m => m.ReviewListPageModule)
          },
          {
            path: 'places/:id/reviews',
            loadChildren: () => import('../pages/review-list/review-list.module').then(m => m.ReviewListPageModule)
          },
          {
            path: 'places/:id',
            loadChildren: () => import('../pages/place-detail/place-detail.module').then(m => m.PlaceDetailPageModule)
          },
          {
            path: 'places/:id/menu',
            loadChildren: () => import('../pages/place-menu/place-menu.module').then(m => m.PlaceMenuPageModule)
          },
          {
            path: 'places/:id/menu/:product/edit',
            loadChildren: () => import('../pages/product-edit/product-edit.module').then(m => m.ProductEditPageModule)
          },
        ]
      },
      {
        path: 'places',
        children: [
          {
            path: '',
            loadChildren: () => import('../pages/place-list/place-list.module').then(m => m.PlaceListPageModule)
          },
          {
            path: 'map',
            loadChildren: () => import('../pages/map-mapbox/map-mapbox.module').then(m => m.MapMapboxPageModule)
          },
          {
            path: ':id/:slug/reviews',
            loadChildren: () => import('../pages/review-list/review-list.module').then(m => m.ReviewListPageModule)
          },
          {
            path: ':id/reviews',
            loadChildren: () => import('../pages/review-list/review-list.module').then(m => m.ReviewListPageModule)
          },
          {
            path: ':id',
            loadChildren: () => import('../pages/place-detail/place-detail.module').then(m => m.PlaceDetailPageModule)
          },
          {
            path: ':id/menu',
            loadChildren: () => import('../pages/place-menu/place-menu.module').then(m => m.PlaceMenuPageModule)
          },
          {
            path: ':id/menu/:product/edit',
            loadChildren: () => import('../pages/product-edit/product-edit.module').then(m => m.ProductEditPageModule)
          },
        ]
      },
      {
        path: 'map',
        children: [
          {
            path: '',
            loadChildren: () => import('../pages/map-mapbox/map-mapbox.module').then(m => m.MapMapboxPageModule)
          },
          {
            path: ':id/:slug/reviews',
            loadChildren: () => import('../pages/review-list/review-list.module').then(m => m.ReviewListPageModule)
          },
          {
            path: ':id/reviews',
            loadChildren: () => import('../pages/review-list/review-list.module').then(m => m.ReviewListPageModule)
          },
          {
            path: ':id',
            loadChildren: () => import('../pages/place-detail/place-detail.module').then(m => m.PlaceDetailPageModule)
          },
          {
            path: ':id/:slug',
            loadChildren: () => import('../pages/place-detail/place-detail.module').then(m => m.PlaceDetailPageModule)
          },
          {
            path: ':id/menu',
            loadChildren: () => import('../pages/place-menu/place-menu.module').then(m => m.PlaceMenuPageModule)
          },
        ]
      },
      {
        path: 'posts',
        children: [
          {
            path: '',
            loadChildren: () => import('../pages/post-list/post-list.module').then(m => m.PostListPageModule)
          },
          {
            path: 'places/:id/reviews',
            loadChildren: () => import('../pages/review-list/review-list.module').then(m => m.ReviewListPageModule)
          },
          {
            path: 'places/:id/:slug/reviews',
            loadChildren: () => import('../pages/review-list/review-list.module').then(m => m.ReviewListPageModule)
          },
          {
            path: 'places/:id',
            loadChildren: () => import('../pages/place-detail/place-detail.module').then(m => m.PlaceDetailPageModule)
          },
          {
            path: 'places/:id/:slug',
            loadChildren: () => import('../pages/place-detail/place-detail.module').then(m => m.PlaceDetailPageModule)
          },
          {
            path: ':id',
            loadChildren: () => import('../pages/post-detail/post-detail.module').then(m => m.PostDetailPageModule)
          },
          {
            path: ':id/:slug',
            loadChildren: () => import('../pages/post-detail/post-detail.module').then(m => m.PostDetailPageModule)
          },
        ]
      },
      {
        path: 'profile',
        children: [
          {
            path: '',
            loadChildren: () => import('../pages/profile/profile.module').then(m => m.ProfilePageModule)
          },
          {
            path: 'reviews',
            canActivate: [AuthGuard],
            loadChildren: () => import('../pages/review-user-list/review-user-list.module').then(m => m.ReviewUserListPageModule)
          },
          {
            path: 'likes',
            canActivate: [AuthGuard],
            loadChildren: () => import('../pages/favorite-list/favorite-list.module').then(m => m.FavoriteListPageModule)
          },
          {
            path: 'likes/:id',
            canActivate: [AuthGuard],
            loadChildren: () => import('../pages/place-detail/place-detail.module').then(m => m.PlaceDetailPageModule)
          },
          {
            path: 'likes/:id/reviews',
            canActivate: [AuthGuard],
            loadChildren: () => import('../pages/review-list/review-list.module').then(m => m.ReviewListPageModule)
          },
          {
            path: 'places',
            canActivate: [AuthGuard],
            loadChildren: () => import('../pages/place-user-list/place-user-list.module').then(m => m.PlaceUserListPageModule)
          },
          {
            path: 'places/add',
            canActivate: [AuthGuard],
            loadChildren: () => import('../pages/place-add/place-add.module').then(m => m.PlaceAddPageModule)
          },
          {
            path: 'places/:id/reviews',
            loadChildren: () => import('../pages/review-list/review-list.module').then(m => m.ReviewListPageModule)
          },
          {
            path: 'places/:id/:slug/reviews',
            loadChildren: () => import('../pages/review-list/review-list.module').then(m => m.ReviewListPageModule)
          },
          {
            path: 'places/:id',
            loadChildren: () => import('../pages/place-detail/place-detail.module').then(m => m.PlaceDetailPageModule)
          },
          {
            path: 'places/:id/menu',
            loadChildren: () => import('../pages/place-menu/place-menu.module').then(m => m.PlaceMenuPageModule)
          },
          {
            path: 'places/:id/menu/:product/edit',
            loadChildren: () => import('../pages/product-edit/product-edit.module').then(m => m.ProductEditPageModule)
          },
          {
            path: 'places/:id/:slug',
            loadChildren: () => import('../pages/place-detail/place-detail.module').then(m => m.PlaceDetailPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/index/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/index/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
