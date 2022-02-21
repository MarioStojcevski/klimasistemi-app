import { Component, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public mediaSub!: Subscription;
  public deviceXs: boolean = false;

  constructor(
    private translate: TranslateService,
    private mediaObserver: MediaObserver) {
  }

  ngOnInit(): void {
    this.mediaSub = this.mediaObserver.media$.subscribe(
      ((result) => {
        this.deviceXs = result.mqAlias === 'xs' ? true : false;
    }));
  }

  changeLanguage(language: string): void {
    this.translate.use(language);
  }

}
