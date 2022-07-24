(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-place-add-place-add-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/place-add/place-add.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/place-add/place-add.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border no-shadow mode=\"ios\">\n  <ion-toolbar color=\"dark\" fixed>\n    <ion-buttons slot=\"start\">\n      <ion-back-button  text=\"{{'BACK'|translate}}\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{ 'ADD_PLACE' | translate }}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button>\n        <ion-icon name=\"\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-grid no-padding fixed>\n    <ion-row justify-content-center>\n      <ion-col size-xs=\"12\" size-lg=\"8\">\n\n        <div class=\"autocomplete\">\n          <ion-list lines=\"none\" class=\"shadow\" *ngIf=\"suggestions.length\" [@staggerIn]=\"suggestions.length\">\n            <ion-item class=\"hover\" button detail=\"false\" *ngFor=\"let suggestion of suggestions\"\n              (click)=\"onSuggestionTouched(suggestion)\">\n              <ion-label>\n                <ion-text color=\"dark\">\n                  <span class=\"link bold text-medium\">\n                    {{ suggestion.description }}\n                  </span>\n                </ion-text>\n              </ion-label>\n            </ion-item>\n          </ion-list>\n        </div>\n\n        <div #map class=\"map\" id=\"map\"></div>\n\n        <ion-text color=\"dark\">\n          <h4 class=\"text-medium\">{{ 'UPLOAD_IMAGES' | translate }}</h4>\n        </ion-text>\n\n        <div class=\"scrollable\">\n          <app-upload-box [text]=\"'FEATURED_IMAGE' | translate\" (onFileUploaded)=\"onMainFileUploaded($event)\">\n          </app-upload-box>\n          <app-upload-box *ngFor=\"let upload of uploads\" (onFileUploaded)=\"onFileUploaded($event, upload)\">\n          </app-upload-box>\n        </div>\n\n        <ion-list padding>\n\n          <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\" #myForm=\"ngForm\" novalidate>\n\n            <ion-label position=\"stacked\" color=\"medium\">\n              <span class=\"bold\">{{ 'NAME' | translate }} *</span>\n            </ion-label>\n            <ion-item margin-vertical lines=\"none\" color=\"light\">\n              <ion-input type=\"text\" formControlName=\"name\"></ion-input>\n            </ion-item>\n\n            <div class=\"hide-sm-up\">\n              <ion-label position=\"stacked\" color=\"medium\">\n                <span class=\"bold\">{{ 'CATEGORY' | translate }} *</span>\n              </ion-label>\n              <ion-item margin-vertical lines=\"none\" color=\"light\">\n                <ion-label></ion-label>\n                <ion-select formControlName=\"category\" [okText]=\"'OK' | translate\"\n                  [cancelText]=\"'CANCEL' | translate\" (ionChange)=\"loadSecondCategories($event)\">\n                  <ion-select-option *ngFor=\"let category of categories\" [value]=\"category\">\n                    <ion-label>\n                      {{ category.title | translate}}\n                    </ion-label>\n                  </ion-select-option>\n                </ion-select>\n              </ion-item>\n            </div>\n\n            <div class=\"hide-sm-up\">\n              <ion-label position=\"stacked\" color=\"medium\">\n                <span class=\"bold\">{{ 'SECOND_CATEGORY' | translate }} *</span>\n              </ion-label>\n              <ion-item margin-vertical lines=\"none\" color=\"light\">\n                <ion-label></ion-label>\n                <ion-select formControlName=\"secondcategory\" [okText]=\"'OK' | translate\"\n                  [cancelText]=\"'CANCEL' | translate\">\n                  <ion-select-option *ngFor=\"let secondcategory of secondcategories\" [value]=\"secondcategory\">\n                    {{ secondcategory.title | translate}}\n                  </ion-select-option>\n                </ion-select>\n              </ion-item>\n            </div>\n\n            <ion-label position=\"stacked\" color=\"medium\">\n              <span class=\"bold\">{{ 'DESCRIPTION' | translate }} *</span>\n            </ion-label>\n            <ion-item margin-vertical lines=\"none\" color=\"light\">\n              <ion-textarea rows=\"4\" formControlName=\"description\"></ion-textarea>\n            </ion-item>\n\n            <ion-label position=\"stacked\" color=\"medium\">\n              <span class=\"bold\">{{ 'WEBSITE' | translate }}</span>\n            </ion-label>\n            <ion-item margin-vertical lines=\"none\" color=\"light\">\n              <ion-input type=\"url\" formControlName=\"website\"></ion-input>\n            </ion-item>\n\n            <ion-label position=\"stacked\" color=\"medium\">\n              <span class=\"bold\">{{ 'ADDRESS' | translate }}</span>\n            </ion-label>\n            <ion-item margin-vertical lines=\"none\" color=\"light\">\n              <ion-input type=\"text\" formControlName=\"address\"></ion-input>\n            </ion-item>\n\n            <ion-label position=\"stacked\" color=\"medium\">\n              <span class=\"bold\">{{ 'PHONE' | translate }}</span>\n            </ion-label>\n            <ion-item margin-vertical lines=\"none\" color=\"light\">\n              <ion-input type=\"text\" formControlName=\"phone\" (keyup.enter)=\"myForm.ngSubmit.emit()\"></ion-input>\n            </ion-item>\n\n            <div text-center style=\"margin-bottom: 60px;\">\n              <ion-button type=\"submit\" strong shape=\"round\" color=\"secondary\" [disabled]=\"isSaving\">\n                <ion-spinner color=\"light\" *ngIf=\"isSaving\"></ion-spinner>\n                <span *ngIf=\"!isSaving\">{{ 'SUBMIT' | translate }}</span>\n              </ion-button>\n            </div>\n\n          </form>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/place-add/place-add.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/place-add/place-add.module.ts ***!
  \*****************************************************/
/*! exports provided: PlaceAddPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaceAddPageModule", function() { return PlaceAddPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _place_add__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./place-add */ "./src/app/pages/place-add/place-add.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");







let PlaceAddPageModule = class PlaceAddPageModule {
};
PlaceAddPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _place_add__WEBPACK_IMPORTED_MODULE_3__["PlaceAddPage"],
        ],
        imports: [
            _shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                {
                    path: '',
                    component: _place_add__WEBPACK_IMPORTED_MODULE_3__["PlaceAddPage"]
                }
            ])
        ]
    })
], PlaceAddPageModule);



/***/ }),

/***/ "./src/app/pages/place-add/place-add.scss":
/*!************************************************!*\
  !*** ./src/app/pages/place-add/place-add.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".map {\n  margin-bottom: 36px;\n  width: 100%;\n  height: 250px;\n}\n\n.autocomplete {\n  position: relative;\n}\n\n.autocomplete ion-list {\n  max-width: 100%;\n  width: 100%;\n  position: absolute;\n  z-index: 10;\n}\n\nselect {\n  border: none;\n  outline: none;\n  background: transparent;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tZWhtZXRzYWhpbi9Eb2N1bWVudHMvR2l0SHViL2tlcGNoZS9zcmMvYXBwL3BhZ2VzL3BsYWNlLWFkZC9wbGFjZS1hZGQuc2NzcyIsInNyYy9hcHAvcGFnZXMvcGxhY2UtYWRkL3BsYWNlLWFkZC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7QUNDRjs7QURDRTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDQ0o7O0FER0E7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcGxhY2UtYWRkL3BsYWNlLWFkZC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hcCB7XG4gIG1hcmdpbi1ib3R0b206IDM2cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDI1MHB4O1xufVxuXG4uYXV0b2NvbXBsZXRlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gIGlvbi1saXN0IHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IDEwO1xuICB9XG59XG5cbnNlbGVjdCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHdpZHRoOiAxMDAlO1xufSIsIi5tYXAge1xuICBtYXJnaW4tYm90dG9tOiAzNnB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyNTBweDtcbn1cblxuLmF1dG9jb21wbGV0ZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5hdXRvY29tcGxldGUgaW9uLWxpc3Qge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDEwO1xufVxuXG5zZWxlY3Qge1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/place-add/place-add.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/place-add/place-add.ts ***!
  \**********************************************/
/*! exports provided: PlaceAddPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaceAddPage", function() { return PlaceAddPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _base_page_base_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-page/base-page */ "./src/app/pages/base-page/base-page.ts");
/* harmony import */ var _services_place_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/place-service */ "./src/app/services/place-service.ts");
/* harmony import */ var _services_map_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/map-style */ "./src/app/services/map-style.ts");
/* harmony import */ var _services_categories__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/categories */ "./src/app/services/categories.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var src_app_services_geolocation_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/geolocation.service */ "./src/app/services/geolocation.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");

/// <reference types="@types/googlemaps" />











let PlaceAddPage = class PlaceAddPage extends _base_page_base_page__WEBPACK_IMPORTED_MODULE_2__["BasePage"] {
    constructor(injector, zone, geolocationService, categoryService) {
        super(injector);
        this.zone = zone;
        this.geolocationService = geolocationService;
        this.categoryService = categoryService;
        this.location = {};
        this.mapInitialised = false;
        this.suggestions = [];
        this.categories = [];
        this.secondcategories = [];
        this.slidesConfig = {};
    }
    enableMenuSwipe() {
        return true;
    }
    ionViewDidEnter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const title = yield this.getTrans('ADD_PLACE');
            this.setPageTitle(title);
            this.setMetaTags({
                title: title
            });
        });
    }
    ngOnInit() {
        this.checkedcategory;
        console.log('checked', this.checkedcategory);
        this.setupImages();
        this.setupForm();
        if (typeof google == 'undefined' || typeof google.maps == 'undefined') {
            this.loadGoogleMaps();
        }
        else {
            this.initMap();
        }
        this.loadCategories();
    }
    setupImages() {
        this.uploads = Array
            .from({ length: 9 })
            .map(i => { return { file: null }; });
    }
    setupForm() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            category: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            secondcategory: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            website: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
        });
    }
    onMainFileUploaded(file) {
        this.mainUpload = file;
    }
    onFileUploaded(file, upload) {
        upload.file = file;
    }
    loadCategories() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                this.categories = yield this.categoryService.load();
            }
            catch (error) {
                console.warn(error.message);
            }
        });
    }
    loadSecondCategories(event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                this.checkedcategory = event.target.value.id;
                this.secondcategories = yield this.categoryService.loadSecond(this.checkedcategory);
                console.log('nazmi istedi', this.checkedcategory);
            }
            catch (error) {
                console.warn(error.message);
            }
        });
    }
    compareCategory(category, category1) {
        return category && category1 ? category.id === category1.id : category === category1;
    }
    loadGoogleMaps() {
        window['mapInit'] = () => {
            this.initMap();
        };
        const apiKey = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].googleMapsApiKey;
        let script = document.createElement('script');
        script.id = 'googleMaps';
        script.src = `https://maps.google.com/maps/api/js?key=${apiKey}&callback=mapInit&libraries=places`;
        document.body.appendChild(script);
    }
    initMap() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.geocoder = new google.maps.Geocoder();
            this.mapInitialised = true;
            const mapOptions = {
                styles: _services_map_style__WEBPACK_IMPORTED_MODULE_4__["MapStyle"].light,
                zoom: 2,
                center: { lat: 0, lng: 0 },
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                mapTypeControl: false,
                streetViewControl: false,
                fullscreenControl: false,
            };
            this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
            google.maps.event.addListener(this.map, 'dragend', () => {
                const center = this.map.getCenter();
                this.setMarkerPosition(center);
                this.location.lat = center.lat();
                this.location.lng = center.lng();
                this.geocoder.geocode({ location: center }, (results, status) => {
                    if (status === google.maps.GeocoderStatus.OK) {
                        const target = results[0];
                        this.searchBar.value = target.formatted_address;
                    }
                });
            });
            this.autocompleteService = new google.maps.places.AutocompleteService();
            this.placesService = new google.maps.places.PlacesService(this.map);
            try {
                const coords = yield this.geolocationService.getCurrentPosition();
                if (!coords) {
                    return this.translate.get('ERROR_LOCATION_UNAVAILABLE')
                        .subscribe(str => this.showToast(str));
                }
                this.location.lat = coords.latitude;
                this.location.lng = coords.longitude;
                this.setMarkerPosition(this.location);
                this.map.panTo({
                    lat: coords.latitude,
                    lng: coords.longitude
                });
                this.map.setZoom(15);
            }
            catch (err) {
            }
        });
    }
    setMarkerPosition(position) {
        if (!this.marker) {
            this.marker = new google.maps.Marker({
                icon: {
                    url: './assets/img/pin.png',
                    scaledSize: new google.maps.Size(32, 32),
                    origin: new google.maps.Point(0, 0),
                    anchor: new google.maps.Point(0, 0)
                },
                position: position,
                map: this.map,
            });
        }
        else {
            this.marker.setPosition(position);
        }
    }
    onSuggestionTouched(suggestion) {
        if (!this.mapInitialised)
            return;
        this.suggestions = [];
        this.placesService.getDetails({ placeId: suggestion.place_id }, (details) => {
            this.zone.run(() => {
                const location = details.geometry.location;
                this.searchBar.value = details.formatted_address;
                this.setMarkerPosition(location);
                this.map.panTo(location);
                this.map.setZoom(15);
                this.location.lat = location.lat();
                this.location.lng = location.lng();
            });
        });
    }
    onSearchAddress(event = {}) {
        if (!this.mapInitialised)
            return;
        const query = event.target.value;
        if (query && query.length >= 3) {
            const config = {
                input: query,
                types: ['geocode'],
            };
            this.autocompleteService.getPlacePredictions(config, (predictions) => {
                this.zone.run(() => {
                    if (predictions)
                        this.suggestions = predictions;
                });
            });
        }
    }
    preparePlaceData() {
        let place = new _services_place_service__WEBPACK_IMPORTED_MODULE_3__["Place"];
        place.title = this.form.value.name;
        place.category = this.form.value.category;
        place.secondcategory = this.form.value.secondcategory;
        place.description = this.form.value.description;
        place.address = this.form.value.address;
        place.website = this.form.value.website;
        place.phone = this.form.value.phone;
        place.image = this.mainUpload;
        place.imageThumb = this.mainUpload;
        console.log('nazmi istedi 2', place);
        place.images = this.uploads
            .filter(item => item.file)
            .map(item => item.file);
        if (this.location) {
            let position = {
                lat: this.location.lat,
                lng: this.location.lng
            };
            place.location = position;
        }
        return place;
    }
    onSubmit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.form.invalid) {
                const trans = yield this.getTrans('INVALID_FORM');
                return this.showToast(trans);
            }
            if (!this.location) {
                const trans = yield this.getTrans('INVALID_LOCATION');
                return this.showToast(trans);
            }
            if (!this.mainUpload) {
                const trans = yield this.getTrans('INVALID_PHOTO');
                return this.showToast(trans);
            }
            try {
                this.isSaving = true;
                const place = this.preparePlaceData();
                yield place.save();
                this.events.publish('place:add');
                this.form.reset();
                this.isSaving = false;
                const trans = yield this.getTrans(['GOOD_JOB', 'PLACE_ADDED', 'OK']);
                yield sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
                    title: trans.GOOD_JOB,
                    text: trans.PLACE_ADDED,
                    confirmButtonText: trans.OK,
                    type: 'success',
                    animation: false,
                    heightAuto: false,
                    customClass: {
                        popup: 'fade-in'
                    },
                });
                this.goBack();
            }
            catch (err) {
                this.isSaving = false;
                this.translate.get('ERROR_NETWORK').subscribe(str => this.showToast(str));
            }
        });
    }
};
PlaceAddPage.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: src_app_services_geolocation_service__WEBPACK_IMPORTED_MODULE_9__["GeolocationService"] },
    { type: _services_categories__WEBPACK_IMPORTED_MODULE_5__["Category"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('map', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], PlaceAddPage.prototype, "mapElement", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonSearchbar"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonSearchbar"])
], PlaceAddPage.prototype, "searchBar", void 0);
PlaceAddPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-place-add',
        template: __webpack_require__(/*! raw-loader!./place-add.html */ "./node_modules/raw-loader/index.js!./src/app/pages/place-add/place-add.html"),
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["trigger"])('staggerIn', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["transition"])('* => *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["style"])({ opacity: 0, transform: `translate3d(0,10px,0)` }), { optional: true }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["stagger"])('100ms', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["style"])({ opacity: 1, transform: `translate3d(0,0,0)` }))]), { optional: true })
                ])
            ])
        ],
        styles: [__webpack_require__(/*! ./place-add.scss */ "./src/app/pages/place-add/place-add.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
        src_app_services_geolocation_service__WEBPACK_IMPORTED_MODULE_9__["GeolocationService"],
        _services_categories__WEBPACK_IMPORTED_MODULE_5__["Category"]])
], PlaceAddPage);



/***/ })

}]);
//# sourceMappingURL=pages-place-add-place-add-module-es2015.js.map