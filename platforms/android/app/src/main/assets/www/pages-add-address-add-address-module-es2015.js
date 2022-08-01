(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-add-address-add-address-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/add-address/add-address.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/add-address/add-address.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border no-shadow mode=\"ios\">\n  <ion-toolbar color=\"danger\" fixed>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon name=\"return-up-back-outline\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>{{ 'ADD_ADDRESS' | translate }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-grid class=\"ion-no-padding ion-margin-bottom\" fixed>\n    <ion-row justify-content-center>\n      <ion-col size-xs=\"12\" size-lg=\"8\">\n\n        <div #map class=\"map\" id=\"map\"></div>\n        <ion-list padding>\n\n          <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\" #myForm=\"ngForm\" novalidate>\n\n            <ion-label position=\"stacked\" color=\"medium\">\n              <span class=\"bold\">{{ 'NAME' | translate }} *</span>\n            </ion-label>\n            <ion-item margin-vertical lines=\"none\" color=\"light\">\n              <ion-input type=\"text\" formControlName=\"name\"></ion-input>\n            </ion-item>\n\n            <div class=\"hide-sm-up\">\n              <ion-label position=\"stacked\" color=\"medium\">\n                <span class=\"bold\">{{ 'ADDRESS_TYPE' | translate }} *</span>\n              </ion-label>\n              <ion-item margin-vertical lines=\"none\" color=\"light\">\n                <ion-label></ion-label>\n                <ion-select formControlName=\"type\" [okText]=\"'OK' | translate\"\n                  [cancelText]=\"'CANCEL' | translate\">\n                  <ion-select-option value=\"home\">\n                    <ion-label>\n                      {{ 'ADDRESS_TYPE_HOME' | translate}}\n                    </ion-label>\n                  </ion-select-option>\n                </ion-select>\n              </ion-item>\n            </div>\n\n\n            <ion-label position=\"stacked\" color=\"medium\">\n              <span class=\"bold\">{{ 'ADDRESS' | translate }}</span>\n            </ion-label>\n            <ion-item margin-vertical lines=\"none\" color=\"light\">\n              <ion-input type=\"text\" formControlName=\"address\"></ion-input>\n            </ion-item>\n\n            <ion-label position=\"stacked\" color=\"medium\">\n              <span class=\"bold\">{{ 'DESCRIPTION' | translate }} *</span>\n            </ion-label>\n            <ion-item margin-vertical lines=\"none\" color=\"light\">\n              <ion-textarea rows=\"4\" formControlName=\"description\"></ion-textarea>\n            </ion-item>\n\n            <div text-center style=\"margin-bottom: 60px;\">\n              <ion-button type=\"submit\" strong shape=\"round\" color=\"secondary\" [disabled]=\"isSaving\">\n                <ion-spinner color=\"light\" *ngIf=\"isSaving\"></ion-spinner>\n                <span *ngIf=\"!isSaving\">{{ 'SUBMIT' | translate }}</span>\n              </ion-button>\n            </div>\n\n          </form>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/add-address/add-address.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/add-address/add-address.module.ts ***!
  \*********************************************************/
/*! exports provided: AddAddressPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAddressPageModule", function() { return AddAddressPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _add_address_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-address.page */ "./src/app/pages/add-address/add-address.page.ts");
/* harmony import */ var src_app_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared.module */ "./src/app/shared.module.ts");








const routes = [
    {
        path: '',
        component: _add_address_page__WEBPACK_IMPORTED_MODULE_6__["AddAddressPage"]
    }
];
let AddAddressPageModule = class AddAddressPageModule {
};
AddAddressPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            src_app_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_add_address_page__WEBPACK_IMPORTED_MODULE_6__["AddAddressPage"]]
    })
], AddAddressPageModule);



/***/ }),

/***/ "./src/app/pages/add-address/add-address.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/add-address/add-address.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".map {\n  margin-bottom: 36px;\n  width: 100%;\n  height: 250px;\n}\n\n.autocomplete {\n  position: relative;\n}\n\n.autocomplete ion-list {\n  max-width: 100%;\n  width: 100%;\n  position: absolute;\n  z-index: 10;\n}\n\nselect {\n  border: none;\n  outline: none;\n  background: transparent;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWRkLWFkZHJlc3MvQzpcXFVzZXJzXFxWb2NhbEVhc3RcXERvY3VtZW50c1xcR2l0SHViXFxrZXBjaGUvc3JjXFxhcHBcXHBhZ2VzXFxhZGQtYWRkcmVzc1xcYWRkLWFkZHJlc3MucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9hZGQtYWRkcmVzcy9hZGQtYWRkcmVzcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FDQ0o7O0FERUU7RUFDRSxrQkFBQTtBQ0NKOztBRENJO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNDTjs7QURHRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hZGQtYWRkcmVzcy9hZGQtYWRkcmVzcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFwIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDM2cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMjUwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5hdXRvY29tcGxldGUge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIFxyXG4gICAgaW9uLWxpc3Qge1xyXG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHotaW5kZXg6IDEwO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBzZWxlY3Qge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfSIsIi5tYXAge1xuICBtYXJnaW4tYm90dG9tOiAzNnB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyNTBweDtcbn1cblxuLmF1dG9jb21wbGV0ZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5hdXRvY29tcGxldGUgaW9uLWxpc3Qge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDEwO1xufVxuXG5zZWxlY3Qge1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/add-address/add-address.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/add-address/add-address.page.ts ***!
  \*******************************************************/
/*! exports provided: AddAddressPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAddressPage", function() { return AddAddressPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _base_page_base_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-page/base-page */ "./src/app/pages/base-page/base-page.ts");
/* harmony import */ var _services_address__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/address */ "./src/app/services/address.ts");
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











let AddAddressPage = class AddAddressPage extends _base_page_base_page__WEBPACK_IMPORTED_MODULE_2__["BasePage"] {
    constructor(injector, zone, geolocationService, categoryService) {
        super(injector);
        this.zone = zone;
        this.geolocationService = geolocationService;
        this.categoryService = categoryService;
        this.location = {};
        this.mapInitialised = false;
        this.suggestions = [];
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
        this.setupImages();
        this.setupForm();
        if (typeof google == 'undefined' || typeof google.maps == 'undefined') {
            this.loadGoogleMaps();
        }
        else {
            this.initMap();
        }
    }
    setupImages() {
        this.uploads = Array
            .from({ length: 9 })
            .map(i => { return { file: null }; });
    }
    setupForm() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
        });
    }
    onMainFileUploaded(file) {
        this.mainUpload = file;
    }
    onFileUploaded(file, upload) {
        upload.file = file;
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
    prepareAddressData() {
        let address = new _services_address__WEBPACK_IMPORTED_MODULE_3__["Address"];
        address.name = this.form.value.name;
        address.type = this.form.value.type;
        address.description = this.form.value.description;
        address.address = this.form.value.address;
        address.phone = this.form.value.phone;
        if (this.location) {
            let position = {
                lat: this.location.lat,
                lng: this.location.lng
            };
            address.location = position;
        }
        return address;
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
            try {
                this.isSaving = true;
                const address = this.prepareAddressData();
                yield address.save();
                this.events.publish('address:add');
                this.form.reset();
                this.isSaving = false;
                const trans = yield this.getTrans(['GOOD_JOB', 'ADDRESS_ADDED', 'OK']);
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
AddAddressPage.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: src_app_services_geolocation_service__WEBPACK_IMPORTED_MODULE_9__["GeolocationService"] },
    { type: _services_categories__WEBPACK_IMPORTED_MODULE_5__["Category"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('map', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], AddAddressPage.prototype, "mapElement", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonSearchbar"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonSearchbar"])
], AddAddressPage.prototype, "searchBar", void 0);
AddAddressPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-address',
        template: __webpack_require__(/*! raw-loader!./add-address.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/add-address/add-address.page.html"),
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["trigger"])('staggerIn', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["transition"])('* => *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["style"])({ opacity: 0, transform: `translate3d(0,10px,0)` }), { optional: true }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["stagger"])('100ms', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["style"])({ opacity: 1, transform: `translate3d(0,0,0)` }))]), { optional: true })
                ])
            ])
        ],
        styles: [__webpack_require__(/*! ./add-address.page.scss */ "./src/app/pages/add-address/add-address.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
        src_app_services_geolocation_service__WEBPACK_IMPORTED_MODULE_9__["GeolocationService"],
        _services_categories__WEBPACK_IMPORTED_MODULE_5__["Category"]])
], AddAddressPage);



/***/ })

}]);
//# sourceMappingURL=pages-add-address-add-address-module-es2015.js.map