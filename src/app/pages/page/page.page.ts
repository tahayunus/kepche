import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { IonContent } from '@ionic/angular';
import { merge, Observable, Subject } from 'rxjs';
import { StatikPage } from 'src/app/services/statik-page';
import { BasePage } from '../base-page/base-page';

@Component({
  selector: 'app-page',
  templateUrl: './page.page.html',
  styleUrls: ['./page.page.scss'],
})
export class PagePage extends BasePage {

  @ViewChild(IonContent, { static: true }) container: IonContent;

  protected contentLoaded: Subject<any>;
  protected loadAndScroll: Observable<any>;

  public page: StatikPage;
  public htmlBody: any;

  constructor(injector: Injector,
    private sanitizer: DomSanitizer,
    private pageService: StatikPage) {
    super(injector);
    this.contentLoaded = new Subject();
  }

  enableMenuSwipe() {
    return true;
  }

  ngOnInit() {
    this.setupObservable();
  }

  async ionViewDidEnter() {
    await this.showLoadingView({ showOverlay: false });
    this.loadPage();
  }

  setupObservable() {
    this.loadAndScroll = merge(
      this.container.ionScroll,
      this.contentLoaded
    );
  }

  async loadPage() {
    try {
      this.page = await this.pageService.loadOne(this.getParams().slug);
      console.log('page-detail', this.page);

      if (this.page.content) {
        this.htmlBody = this.sanitizer
        .bypassSecurityTrustHtml(this.page.content);
      }

      this.setPageTitle(this.page.title);

      this.setMetaTags({
        title: this.page.title,
        image: this.page.image ? this.page.image.url() : '',
        slug: this.page.getSlug()
      });

      this.showContentView();
      this.onContentLoaded();
      
    } catch (error) {

      if (error.code === 101) {
        this.showEmptyView();
      } else {
        this.showErrorView();
      }

      this.translate.get('ERROR_NETWORK').subscribe(str => this.showToast(str));
    }
  }

  onContentTouched(ev: any = {}) {
    const href = ev.target.getAttribute('href');
    if (href) {
      ev.preventDefault();
      this.openUrl(href);
    }
  }

  onContentLoaded() {
    setTimeout(() => {
      this.contentLoaded.next();
    }, 400);
  }

}
