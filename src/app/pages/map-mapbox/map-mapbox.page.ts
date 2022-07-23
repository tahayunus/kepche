
/// <reference types="@types/googlemaps" />
import { Component, Injector, ViewChild, ElementRef, ComponentFactoryResolver, NgZone, EventEmitter, Output } from '@angular/core';
import { Place } from '../../services/place-service';
import { MapStyle } from '../../services/map-style';
import { BasePage } from '../base-page/base-page';
import { LocalStorage } from '../../services/local-storage';
import { InfoWindowComponent } from '../../components/info-window/info-window';
import { environment } from '../../../environments/environment';
import {
  trigger,
  style,
  animate,
  transition,
  query,
  stagger
} from '@angular/animations';
import { IonSearchbar } from '@ionic/angular';
import { Category } from 'src/app/services/categories';
import { GeolocationService } from 'src/app/services/geolocation.service';
import { DrawerState } from 'ion-bottom-drawer';
import { DomSanitizer } from '@angular/platform-browser';
import mapboxgl from 'mapbox-gl';
import { User } from 'src/app/services/user-service';
import { MapModalPage } from '../map-modal/map-modal';

@Component({
  selector: 'app-map-mapbox',
  templateUrl: './map-mapbox.page.html',
  styleUrls: ['./map-mapbox.page.scss'],
})
export class MapMapboxPage extends BasePage {
  enableMenuSwipe(): boolean {
    return false;
  }

  public lat: any;
  public lng: any;
  protected params: any = {};

  public isActive: boolean = false;

  public places: Place[] = [];
  public layerSetting: any = {
    'id': 'places',
    'type': 'symbol',
    'source': 'places',
    'layout': {
      'text-size': 12,
      'text-field': ['get', 'title'],
      'text-variable-anchor': ['top', 'bottom', 'left', 'right'],
      'text-radial-offset': 2,
      'text-justify': 'auto',
      'icon-image': '{icon}',
      'icon-size': 0.05,
      'icon-allow-overlap': true
    }
  }
  public placeJson: any = {
    // This GeoJSON contains features that include an "icon"
    // property. The value of the "icon" property corresponds
    // to an image in the Mapbox Streets style's sprite.
    'type': 'geojson',
    'data': {
      'type': 'FeatureCollection',
      'features': [
      ]
    }
  };

  public place: Place;
  public user: User

  map: mapboxgl.Map;
  constructor(private injector: Injector,
    private placeService: Place,
    private geolocationService: GeolocationService,
    private categoryService: Category,
    private storage: LocalStorage
  ) {
    super(injector);
  }

  ngOnInit() {

    this.user = User.getCurrent();

    this.events.subscribe('user:login', () => {
      this.user = User.getCurrent();
    });

    this.events.subscribe('user:loggedOut', () => {
      this.user = null;
    });
    mapboxgl.accessToken = "pk.eyJ1IjoibmF6bWlhcmFzIiwiYSI6ImNrc3I4bmZmaTA4d20zMnVtdmRnOGowZ2IifQ.xADuop9VB6C_9wj3jRwGaQ";
  }

  ionViewDidEnter() {
    this.loadMap(null, null);
  }

  async openMapModal(event) {

    const modal = await this.modalCtrl.create({
      component: MapModalPage,
      cssClass: 'mapModal',
      componentProps: { place: event }
    });

    await modal.present();

    await this.dismissLoadingView();
  }
  async onSearchButtonTapped() {

    this.isActive = false;

    let bounds = this.map.getBounds();

    this.params.bounds = [{
      latitude: bounds._sw.lat,
      longitude: bounds._sw.lng,
    }, {
      latitude: bounds._ne.lat,
      longitude: bounds._ne.lng
    }];

    console.log("bounds", bounds._ne.lat, bounds._ne.lng);

    await this.showLoadingView({ showOverlay: false });
    this.loadMap(((bounds._ne.lat + bounds._sw.lat) / 2), ((bounds._ne.lng + bounds._sw.lng) / 2));
  }

  async loadMap(lat, lng) {
    const categories = await this.categoryService.load();
    try {
      const pos = await this.geolocationService.getCurrentPosition();
      this.params.location = pos;
      if (lat && lng) {
        this.lat = lat;
        this.lng = lng;
      } else {
        this.lat = pos.latitude;
        this.lng = pos.longitude;
      }
      this.params.unit = await this.storage.getUnit();

      const marker = [];
      console.log("paramsssss", this.params);
      this.places = await this.placeService.load(this.params);

      this.places.forEach(function (data) {

        marker.push({
          'type': 'Feature',
          'properties': {
            'description': data.id,
            'title': data.title,
            'icon': data.category.id
          },
          'geometry': {
            'type': 'Point',
            'coordinates': [data.location.longitude, data.location.latitude]
          }
        });
      });
      this.placeJson['data']['features'] = marker;
      this.map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: [this.lng, this.lat], // starting position [lng, lat]
        //center: [27.2556627,37.8540957],
        zoom: 15 // starting zoom
      });

      this.map.on('load', () => {


        this.map.addSource('places', this.placeJson);
        // Add a layer showing the places.
        this.map.addLayer(this.layerSetting);

        // When a click event occurs on a feature in the places layer, open a popup at the
        // location of the feature, with description HTML from its properties.
        this.map.on('click', 'places', (e) => {
          // Copy coordinates array.
          const coordinates = e.features[0].geometry.coordinates.slice();
          const description = e.features[0].properties.description;

          // Ensure that if the map is zoomed out such that multiple
          // copies of the feature are visible, the popup appears
          // over the copy being pointed to.
          while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
          }
          let newPlace = new Place;
          this.places.forEach(function (data) {
            if (data.id === description) {
              newPlace = data;
            }
          });
          this.place = newPlace;
          console.log("idss", this.place);

          this.isActive = true;
          this.openMapModal(this.place);


        });



        this.map.loadImage(
          'assets/map/user/'+this.user.mapIcon+'.png',
          (error, image) => {
            if (error) throw error;

            // Add the image to the map style.
            this.map.addImage('cat', image);

            // Add a data source containing one point feature.
            this.map.addSource('deneme', {
              'type': 'geojson',
              'data': {
                'type': 'FeatureCollection',
                'features': [
                  {
                    'type': 'Feature',
                    'geometry': {
                      'type': 'Point',
                      'coordinates': [pos.longitude, pos.latitude]
                      //'coordinates': [27.2556627,37.8540957]
                    }
                  }
                ]
              }
            });

            // Add a layer to use the image to represent the data.
            this.map.addLayer({
              'id': 'points',
              'type': 'symbol',
              'source': 'deneme', // reference the data source
              'layout': {
                'icon-image': 'cat', // reference the image
                'icon-size': 0.20
              }
            });
          }
        );

        categories.forEach((category) => {
          if (category.parentId === "0") {
            this.map.loadImage(
              category.iconMap._url,
              (error, image) => {
                if (error) throw error;
                this.map.addImage(category.id, image);
              }
            );
          }
        });
      });
    } catch (err) {
      console.log("err", err);
      this.translate.get('ERROR_LOCATION_UNAVAILABLE').subscribe(str => this.showToast(str));
    }


  }


}
