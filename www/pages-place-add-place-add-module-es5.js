(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-place-add-place-add-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/place-add/place-add.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/place-add/place-add.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border no-shadow mode=\"ios\">\r\n  <ion-toolbar color=\"danger\" fixed>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button  text=\"{{'BACK'|translate}}\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>{{ 'ADD_PLACE' | translate }}</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button>\r\n        <ion-icon name=\"\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-grid no-padding fixed>\r\n    <ion-row justify-content-center>\r\n      <ion-col size-xs=\"12\" size-lg=\"8\">\r\n\r\n        <div class=\"autocomplete\">\r\n          <ion-list lines=\"none\" class=\"shadow\" *ngIf=\"suggestions.length\" [@staggerIn]=\"suggestions.length\">\r\n            <ion-item class=\"hover\" button detail=\"false\" *ngFor=\"let suggestion of suggestions\"\r\n              (click)=\"onSuggestionTouched(suggestion)\">\r\n              <ion-label>\r\n                <ion-text color=\"danger\">\r\n                  <span class=\"link bold text-medium\">\r\n                    {{ suggestion.description }}\r\n                  </span>\r\n                </ion-text>\r\n              </ion-label>\r\n            </ion-item>\r\n          </ion-list>\r\n        </div>\r\n\r\n        <div #map class=\"map\" id=\"map\"></div>\r\n\r\n        <ion-text color=\"danger\">\r\n          <h4 class=\"text-medium\">{{ 'UPLOAD_IMAGES' | translate }}</h4>\r\n        </ion-text>\r\n\r\n        <div class=\"scrollable\">\r\n          <app-upload-box [text]=\"'FEATURED_IMAGE' | translate\" (onFileUploaded)=\"onMainFileUploaded($event)\">\r\n          </app-upload-box>\r\n          <app-upload-box *ngFor=\"let upload of uploads\" (onFileUploaded)=\"onFileUploaded($event, upload)\">\r\n          </app-upload-box>\r\n        </div>\r\n\r\n        <ion-list padding>\r\n\r\n          <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\" #myForm=\"ngForm\" novalidate>\r\n\r\n            <ion-label position=\"stacked\" color=\"medium\">\r\n              <span class=\"bold\">{{ 'NAME' | translate }} *</span>\r\n            </ion-label>\r\n            <ion-item margin-vertical lines=\"none\" color=\"light\">\r\n              <ion-input type=\"text\" formControlName=\"name\"></ion-input>\r\n            </ion-item>\r\n\r\n            <div class=\"hide-sm-up\">\r\n              <ion-label position=\"stacked\" color=\"medium\">\r\n                <span class=\"bold\">{{ 'CATEGORY' | translate }} *</span>\r\n              </ion-label>\r\n              <ion-item margin-vertical lines=\"none\" color=\"light\">\r\n                <ion-label></ion-label>\r\n                <ion-select formControlName=\"category\" [okText]=\"'OK' | translate\"\r\n                  [cancelText]=\"'CANCEL' | translate\">\r\n                  <ion-select-option *ngFor=\"let category of categories\" [value]=\"category\">\r\n                    <ion-label>\r\n                      {{ category.title | translate}}\r\n                    </ion-label>\r\n                  </ion-select-option>\r\n                </ion-select>\r\n              </ion-item>\r\n            </div>\r\n\r\n            <ion-label position=\"stacked\" color=\"medium\">\r\n              <span class=\"bold\">{{ 'DESCRIPTION' | translate }} *</span>\r\n            </ion-label>\r\n            <ion-item margin-vertical lines=\"none\" color=\"light\">\r\n              <ion-textarea rows=\"4\" formControlName=\"description\"></ion-textarea>\r\n            </ion-item>\r\n\r\n            <ion-label position=\"stacked\" color=\"medium\">\r\n              <span class=\"bold\">{{ 'WEBSITE' | translate }}</span>\r\n            </ion-label>\r\n            <ion-item margin-vertical lines=\"none\" color=\"light\">\r\n              <ion-input type=\"url\" formControlName=\"website\"></ion-input>\r\n            </ion-item>\r\n\r\n            <ion-label position=\"stacked\" color=\"medium\">\r\n              <span class=\"bold\">{{ 'ADDRESS' | translate }}</span>\r\n            </ion-label>\r\n            <ion-item margin-vertical lines=\"none\" color=\"light\">\r\n              <ion-input type=\"text\" formControlName=\"address\"></ion-input>\r\n            </ion-item>\r\n\r\n            <ion-label position=\"stacked\" color=\"medium\">\r\n              <span class=\"bold\">{{ 'PHONE' | translate }}</span>\r\n            </ion-label>\r\n            <ion-item margin-vertical lines=\"none\" color=\"light\">\r\n              <ion-input type=\"text\" formControlName=\"phone\" (keyup.enter)=\"myForm.ngSubmit.emit()\"></ion-input>\r\n            </ion-item>\r\n\r\n            <div text-center style=\"margin-bottom: 60px;\">\r\n              <ion-button type=\"submit\" strong shape=\"round\" color=\"secondary\" [disabled]=\"isSaving\">\r\n                <ion-spinner color=\"light\" *ngIf=\"isSaving\"></ion-spinner>\r\n                <span *ngIf=\"!isSaving\">{{ 'SUBMIT' | translate }}</span>\r\n              </ion-button>\r\n            </div>\r\n\r\n          </form>\r\n        </ion-list>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n</ion-content>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _place_add__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./place-add */ "./src/app/pages/place-add/place-add.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







var PlaceAddPageModule = /** @class */ (function () {
    function PlaceAddPageModule() {
    }
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
    return PlaceAddPageModule;
}());



/***/ }),

/***/ "./src/app/pages/place-add/place-add.scss":
/*!************************************************!*\
  !*** ./src/app/pages/place-add/place-add.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".map {\n  margin-bottom: 36px;\n  width: 100%;\n  height: 250px;\n}\n\n.autocomplete {\n  position: relative;\n}\n\n.autocomplete ion-list {\n  max-width: 100%;\n  width: 100%;\n  position: absolute;\n  z-index: 10;\n}\n\nselect {\n  border: none;\n  outline: none;\n  background: transparent;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGxhY2UtYWRkL0M6XFxVc2Vyc1xcVm9jYWxFYXN0XFxEb2N1bWVudHNcXEdpdEh1Ylxca2VwY2hlL3NyY1xcYXBwXFxwYWdlc1xccGxhY2UtYWRkXFxwbGFjZS1hZGQuc2NzcyIsInNyYy9hcHAvcGFnZXMvcGxhY2UtYWRkL3BsYWNlLWFkZC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7QUNDRjs7QURDRTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDQ0o7O0FER0E7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcGxhY2UtYWRkL3BsYWNlLWFkZC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hcCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzZweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDI1MHB4O1xyXG59XHJcblxyXG4uYXV0b2NvbXBsZXRlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gIGlvbi1saXN0IHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMTA7XHJcbiAgfVxyXG59XHJcblxyXG5zZWxlY3Qge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59IiwiLm1hcCB7XG4gIG1hcmdpbi1ib3R0b206IDM2cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDI1MHB4O1xufVxuXG4uYXV0b2NvbXBsZXRlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmF1dG9jb21wbGV0ZSBpb24tbGlzdCB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTA7XG59XG5cbnNlbGVjdCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_page_base_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-page/base-page */ "./src/app/pages/base-page/base-page.ts");
/* harmony import */ var _services_place_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/place-service */ "./src/app/services/place-service.ts");
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











var PlaceAddPage = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PlaceAddPage, _super);
    function PlaceAddPage(injector, zone, geolocationService, categoryService) {
        var _this = _super.call(this, injector) || this;
        _this.zone = zone;
        _this.geolocationService = geolocationService;
        _this.categoryService = categoryService;
        _this.location = {};
        _this.mapInitialised = false;
        _this.suggestions = [];
        _this.categories = [];
        _this.secondcategories = [];
        _this.slidesConfig = {};
        return _this;
    }
    PlaceAddPage.prototype.enableMenuSwipe = function () {
        return true;
    };
    PlaceAddPage.prototype.ionViewDidEnter = function () {
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
    PlaceAddPage.prototype.ngOnInit = function () {
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
    };
    PlaceAddPage.prototype.setupImages = function () {
        this.uploads = Array
            .from({ length: 9 })
            .map(function (i) { return { file: null }; });
    };
    PlaceAddPage.prototype.setupForm = function () {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            category: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            website: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
        });
    };
    PlaceAddPage.prototype.onMainFileUploaded = function (file) {
        this.mainUpload = file;
    };
    PlaceAddPage.prototype.onFileUploaded = function (file, upload) {
        upload.file = file;
    };
    PlaceAddPage.prototype.loadCategories = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, error_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = this;
                        return [4 /*yield*/, this.categoryService.load()];
                    case 1:
                        _a.categories = _b.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _b.sent();
                        console.warn(error_1.message);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    PlaceAddPage.prototype.compareCategory = function (category, category1) {
        return category && category1 ? category.id === category1.id : category === category1;
    };
    PlaceAddPage.prototype.loadGoogleMaps = function () {
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
    PlaceAddPage.prototype.initMap = function () {
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
                        this.autocompleteService = new google.maps.places.AutocompleteService();
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
    PlaceAddPage.prototype.setMarkerPosition = function (position) {
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
    PlaceAddPage.prototype.onSuggestionTouched = function (suggestion) {
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
    PlaceAddPage.prototype.onSearchAddress = function (event) {
        var _this = this;
        if (event === void 0) { event = {}; }
        if (!this.mapInitialised)
            return;
        var query = event.target.value;
        if (query && query.length >= 3) {
            var config = {
                input: query,
                types: ['geocode'],
            };
            this.autocompleteService.getPlacePredictions(config, function (predictions) {
                _this.zone.run(function () {
                    if (predictions)
                        _this.suggestions = predictions;
                });
            });
        }
    };
    PlaceAddPage.prototype.preparePlaceData = function () {
        var place = new _services_place_service__WEBPACK_IMPORTED_MODULE_3__["Place"];
        place.title = this.form.value.name;
        place.category = this.form.value.category;
        place.description = this.form.value.description;
        place.address = this.form.value.address;
        place.website = this.form.value.website;
        place.phone = this.form.value.phone;
        place.image = this.mainUpload;
        place.imageThumb = this.mainUpload;
        place.images = this.uploads
            .filter(function (item) { return item.file; })
            .map(function (item) { return item.file; });
        if (this.location) {
            var position = {
                lat: this.location.lat,
                lng: this.location.lng
            };
            place.location = position;
        }
        return place;
    };
    PlaceAddPage.prototype.onSubmit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var trans, trans, trans, place, trans, err_2;
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
                        if (!!this.mainUpload) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.getTrans('INVALID_PHOTO')];
                    case 5:
                        trans = _a.sent();
                        return [2 /*return*/, this.showToast(trans)];
                    case 6:
                        _a.trys.push([6, 10, , 11]);
                        this.isSaving = true;
                        place = this.preparePlaceData();
                        return [4 /*yield*/, place.save()];
                    case 7:
                        _a.sent();
                        this.events.publish('place:add');
                        this.form.reset();
                        this.isSaving = false;
                        return [4 /*yield*/, this.getTrans(['GOOD_JOB', 'PLACE_ADDED', 'OK'])];
                    case 8:
                        trans = _a.sent();
                        return [4 /*yield*/, sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
                                title: trans.GOOD_JOB,
                                text: trans.PLACE_ADDED,
                                confirmButtonText: trans.OK,
                                type: 'success',
                                animation: true,
                                heightAuto: false,
                                customClass: {
                                    popup: 'fade-in'
                                },
                            })];
                    case 9:
                        _a.sent();
                        this.goBack();
                        return [3 /*break*/, 11];
                    case 10:
                        err_2 = _a.sent();
                        this.isSaving = false;
                        this.translate.get('ERROR_NETWORK').subscribe(function (str) { return _this.showToast(str); });
                        return [3 /*break*/, 11];
                    case 11: return [2 /*return*/];
                }
            });
        });
    };
    PlaceAddPage.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
        { type: src_app_services_geolocation_service__WEBPACK_IMPORTED_MODULE_9__["GeolocationService"] },
        { type: _services_categories__WEBPACK_IMPORTED_MODULE_5__["Category"] }
    ]; };
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
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["style"])({ opacity: 0, transform: "translate3d(0,10px,0)" }), { optional: true }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["stagger"])('100ms', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["style"])({ opacity: 1, transform: "translate3d(0,0,0)" }))]), { optional: true })
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
    return PlaceAddPage;
}(_base_page_base_page__WEBPACK_IMPORTED_MODULE_2__["BasePage"]));



/***/ })

}]);
//# sourceMappingURL=pages-place-add-place-add-module-es5.js.map