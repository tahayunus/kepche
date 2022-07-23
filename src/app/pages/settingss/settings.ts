
import { Component, Injector } from '@angular/core';
import { Language } from '../../services/language';
import { LocalStorage } from '../../services/local-storage';
import { BasePage } from '../base-page/base-page';
import { WalkthroughPage } from '../walkthrough/walkthrough';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
  styleUrls: ['settings.scss']
})
export class SettingsPage extends BasePage {
  public languages: Language[] = [];
  constructor(injector: Injector,
    private storage: LocalStorage,
    private languageService: Language) {

    super(injector);
  }
  ngOnInit() {    
    this.loadLanguage();
    console.log('preference lang',this.preference.lang);
  }
  enableMenuSwipe() {
    return true;
  }

  onDismiss() {
    this.modalCtrl.dismiss();
  }

  onChangeUnit(event: CustomEvent) {

    if (!event) return;

    const unit = event.detail.value;

    this.storage.setUnit(unit);
    this.preference.unit = unit;
  }
  async loadLanguage() {
    this.languages = await this.languageService.load();
    console.log('lang', this.languages);
  }
  onChangeLang(event: CustomEvent) {

    if (!event) return;

    const lang = event.detail.value;

    if (lang === 'ar') {
      document.dir = 'rtl';
    } else {
      document.dir = 'ltr';
    }

    this.storage.setLang(lang);
    this.translate.use(lang);
    this.preference.lang = lang;
  }

  async presentWalkthroughModal() {

    await this.showLoadingView({ showOverlay: true });

    const modal = await this.modalCtrl.create({
      component: WalkthroughPage
    });

    await modal.present();

    this.dismissLoadingView();

  }

}
