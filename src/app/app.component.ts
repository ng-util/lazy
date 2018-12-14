import { Component } from '@angular/core';
import { LazyService } from 'nu-lazy';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(private srv: LazyService) { }

  async loadBS() {
    const res = await this.srv.load(`https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css`);
    console.log(`bootstrap`, res);
  }

  async loadZepto() {
    const res = await this.srv.load(`https://cdnjs.cloudflare.com/ajax/libs/zepto/1.2.0/zepto.min.js`);
    alert(`get html by $('#zepto').html() => ${$('#zepto').html()}`);
    console.log(`zepto`, res);
  }
}
