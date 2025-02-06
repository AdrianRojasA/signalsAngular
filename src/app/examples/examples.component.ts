import { Component, computed, output, signal, ViewContainerRef } from '@angular/core';
import { ExamplesChildComponent } from "../examples-child/examples-child.component";

@Component({
  selector: 'app-examples',
  imports: [ExamplesChildComponent],
  templateUrl: './examples.component.html',
})
export class ExamplesComponent {

    // constructor(private viewContainerRef: ViewContainerRef) {
    //     const childComponentRef = this.viewContainerRef.createComponent(ExamplesChildComponent);
    //     // Subscribe to the chooseCar output signal
    //     childComponentRef.instance.chooseCar.subscribe(eventData => {
    //       console.log('Chosen Car:', eventData);
    //     });
    //   }

    count = signal(10);

    emitterData(event: number) {
        this.count.set(event / 0.1);
    }
}
