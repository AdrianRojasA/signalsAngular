import { Component, computed, input, InputSignal, output, OutputEmitterRef } from '@angular/core';

@Component({
  selector: 'app-examples-child',
  imports: [],
  templateUrl: './examples-child.component.html',
})
export class ExamplesChildComponent {
    count = input<number>(1);
    butter = computed(() => this.count() * 0.1);
    sugar = computed(() => this.count() * 0.05);
    flour = computed(() => this.count() * 0.2);

    readonly childEmitter = output<number>();

    sendData(): void{
        console.log("Add more butter!");
        this.childEmitter.emit(this.butter() + 0.1);
    }
}
