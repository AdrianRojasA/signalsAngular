import { HttpClient } from '@angular/common/http';
import { Component, effect, inject, resource, ResourceStatus } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';

import { SenalesComponent } from "./senales/senales.component";
import { OldSignalsComponent } from "./old-signals/old-signals.component";
import { ExamplesComponent } from "./examples/examples.component";

@Component({
  selector: 'app-root',
  imports: [SenalesComponent, OldSignalsComponent, ExamplesComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Please advice';
  http = inject(HttpClient);
  public parentData = 'Initial Data from Parent';
  advice = '';
  adviceResource
  adviceRxResource
  emitterData(event: string){
    console.log(event);
    this.title = event;
  }
  constructor() {

    this.http.get('https://api.adviceslip.com/advice')
    .subscribe(
        (value: any) => {
            console.log(value);
            this.advice = value.slip.advice;
            this.parentData = "Received from subscribe";
        }
    );

    this.adviceRxResource = rxResource({
        loader: () => this.http.get<any>('https://api.adviceslip.com/advice')
    });
    effect(() => {
        console.log('RxResource code: ', ResourceStatus[this.adviceRxResource.status()]),
        console.log('RxResource value', this.adviceRxResource.value()?.slip?.advice)
        this.parentData = "Received from rxjs";
    });

    this.adviceResource = resource({
        loader: () => fetch('https://api.adviceslip.com/advice')
        .then(res => res.json())
    });
    effect(() => {
        console.log('Resource code: ', ResourceStatus[this.adviceResource.status()]),
        console.log('Resource value: ', this.adviceResource.value()?.slip?.advice);
        this.parentData = "Received from fetch";
    });
  }
}
