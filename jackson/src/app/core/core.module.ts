import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [FooterComponent, SidebarComponent, HeaderComponent],
  imports: [CommonModule],
  exports: [FooterComponent, SidebarComponent, HeaderComponent],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parent: CoreModule) {
    if (parent) {
      throw new Error('The CoreModule has already been loaded in pargram!');
    }
  }
}
