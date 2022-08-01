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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _add_address_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-address.page */ "./src/app/pages/add-address/add-address.page.ts");
/* harmony import */ var src_app_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared.module */ "./src/app/shared.module.ts");








var routes = [
    {
        path: '',
        component: _add_address_page__WEBPACK_IMPORTED_MODULE_6__["AddAddressPage"]
    }
];
var AddAddressPageModule = /** @class */ (function () {
    function AddAddressPageModule() {
    }
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
    return AddAddressPageModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_page_base_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-page/base-page */ "./src/app/pages/base-page/base-page.ts");
/* harmony import */ var _services_address__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/address */ "./src/app/services/address.ts");
/* harmony import */ var _services_map_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/map-style */ "./src/app/services/map-style.ts");
/* harmony import */ var _services_categories__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/categories */ "./src/app/services/categories.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var src_app_services_geolocation_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/geolocation.service */ "./src/app/services/geolocation.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

/// <reference types="@types/googlemaps" />











var AddAddressPage = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AddAddressPage, _super);
    function AddAddressPage(injector, zone, geolocationService, categoryService) {
        var _this = _super.call(this, injector) || this;
        _this.zone = zone;
        _this.geolocationService = geolocationService;
        _this.categoryService = categoryService;
        _this.location = {};
        _this.mapInitialised = false;
        _this.suggestions = [];
        _this.slidesConfig = {};
        return _this;
    }
    AddAddressPage.prototype.enableMenuSwipe = function () {
        return true;
    };
    AddAddressPage.prototype.ionViewDidEnter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var title;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getTrans('ADD_PLACE')];
                    case 1:
                        title = _a.sent();
                        this.setPageTitle(title);
                        this.setMetaTags({
                            title: title
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    AddAddressPage.prototype.ngOnInit = function () {
        this.setupImages();
        this.setupForm();
        if (typeof google == 'undefined' || typeof google.maps == 'undefined') {
            this.loadGoogleMaps();
        }
        else {
            this.initMap();
        }
    };
    AddAddressPage.prototype.setupImages = function () {
        this.uploads = Array
            .from({ length: 9 })
            .map(function (i) { return { file: null }; });
    };
    AddAddressPage.prototype.setupForm = function () {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
        });
    };
    AddAddressPage.prototype.onMainFileUploaded = function (file) {
        this.mainUpload = file;
    };
    AddAddressPage.prototype.onFileUploaded = function (file, upload) {
        upload.file = file;
    };
    AddAddressPage.prototype.compareCategory = function (category, category1) {
        return category && category1 ? category.id === category1.id : category === category1;
    };
    AddAddressPage.prototype.loadGoogleMaps = function () {
        var _this = this;
        window['mapInit'] = function () {
            _this.initMap();
        };
        var apiKey = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].googleMapsApiKey;
        var script = document.createElement('script');
        script.id = 'googleMaps';
        script.src = "https://maps.google.com/maps/api/js?key=" + apiKey + "&callback=mapInit&libraries=places";
        document.body.appendChild(script);
    };
    AddAddressPage.prototype.initMap = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var mapOptions, coords, err_1;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.geocoder = new google.maps.Geocoder();
                        this.mapInitialised = true;
                        mapOptions = {
                            styles: _services_map_style__WEBPACK_IMPORTED_MODULE_4__["MapStyle"].light,
                            zoom: 2,
                            center: { lat: 0, lng: 0 },
                            mapTypeId: google.maps.MapTypeId.ROADMAP,
                            mapTypeControl: false,
                            streetViewControl: false,
                            fullscreenControl: false,
                        };
                        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
                        google.maps.event.addListener(this.map, 'dragend', function () {
                            var center = _this.map.getCenter();
                            _this.setMarkerPosition(center);
                            _this.location.lat = center.lat();
                            _this.location.lng = center.lng();
                            _this.geocoder.geocode({ location: center }, function (results, status) {
                                if (status === google.maps.GeocoderStatus.OK) {
                                    var target = results[0];
                                    _this.searchBar.value = target.formatted_address;
                                }
                            });
                        });
                        this.placesService = new google.maps.places.PlacesService(this.map);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.geolocationService.getCurrentPosition()];
                    case 2:
                        coords = _a.sent();
                        if (!coords) {
                            return [2 /*return*/, this.translate.get('ERROR_LOCATION_UNAVAILABLE')
                                    .subscribe(function (str) { return _this.showToast(str); })];
                        }
                        this.location.lat = coords.latitude;
                        this.location.lng = coords.longitude;
                        this.setMarkerPosition(this.location);
                        this.map.panTo({
                            lat: coords.latitude,
                            lng: coords.longitude
                        });
                        this.map.setZoom(15);
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AddAddressPage.prototype.setMarkerPosition = function (position) {
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
    };
    AddAddressPage.prototype.onSuggestionTouched = function (suggestion) {
        var _this = this;
        if (!this.mapInitialised)
            return;
        this.suggestions = [];
        this.placesService.getDetails({ placeId: suggestion.place_id }, function (details) {
            _this.zone.run(function () {
                var location = details.geometry.location;
                _this.searchBar.value = details.formatted_address;
                _this.setMarkerPosition(location);
                _this.map.panTo(location);
                _this.map.setZoom(15);
                _this.location.lat = location.lat();
                _this.location.lng = location.lng();
            });
        });
    };
    AddAddressPage.prototype.prepareAddressData = function () {
        var address = new _services_address__WEBPACK_IMPORTED_MODULE_3__["Address"];
        address.name = this.form.value.name;
        address.type = this.form.value.type;
        address.description = this.form.value.description;
        address.address = this.form.value.address;
        address.phone = this.form.value.phone;
        if (this.location) {
            var position = {
                lat: this.location.lat,
                lng: this.location.lng
            };
            address.location = position;
        }
        return address;
    };
    AddAddressPage.prototype.onSubmit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var trans, trans, address, trans, err_2;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.form.invalid) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.getTrans('INVALID_FORM')];
                    case 1:
                        trans = _a.sent();
                        return [2 /*return*/, this.showToast(trans)];
                    case 2:
                        if (!!this.location) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.getTrans('INVALID_LOCATION')];
                    case 3:
                        trans = _a.sent();
                        return [2 /*return*/, this.showToast(trans)];
                    case 4:
                        _a.trys.push([4, 8, , 9]);
                        this.isSaving = true;
                        address = this.prepareAddressData();
                        return [4 /*yield*/, address.save()];
                    case 5:
                        _a.sent();
                        this.events.publish('address:add');
                        this.form.reset();
                        this.isSaving = false;
                        return [4 /*yield*/, this.getTrans(['GOOD_JOB', 'ADDRESS_ADDED', 'OK'])];
                    case 6:
                        trans = _a.sent();
                        return [4 /*yield*/, sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
                                title: trans.GOOD_JOB,
                                text: trans.PLACE_ADDED,
                                confirmButtonText: trans.OK,
                                type: 'success',
                                animation: false,
                                heightAuto: false,
                                customClass: {
                                    popup: 'fade-in'
                                },
                            })];
                    case 7:
                        _a.sent();
                        this.goBack();
                        return [3 /*break*/, 9];
                    case 8:
                        err_2 = _a.sent();
                        this.isSaving = false;
                        this.translate.get('ERROR_NETWORK').subscribe(function (str) { return _this.showToast(str); });
                        return [3 /*break*/, 9];
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    AddAddressPage.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
        { type: src_app_services_geolocation_service__WEBPACK_IMPORTED_MODULE_9__["GeolocationService"] },
        { type: _services_categories__WEBPACK_IMPORTED_MODULE_5__["Category"] }
    ]; };
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
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["style"])({ opacity: 0, transform: "translate3d(0,10px,0)" }), { optional: true }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["stagger"])('100ms', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["style"])({ opacity: 1, transform: "translate3d(0,0,0)" }))]), { optional: true })
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
    return AddAddressPage;
}(_base_page_base_page__WEBPACK_IMPORTED_MODULE_2__["BasePage"]));



/***/ })

}]);
//# sourceMappingURL=pages-add-address-add-address-module-es5.js.map