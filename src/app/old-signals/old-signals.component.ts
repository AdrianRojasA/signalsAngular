import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-old-signals',
  imports: [],
  templateUrl: './old-signals.component.html',
})
export class OldSignalsComponent {
    //output signal to emit data back to parent
    readonly childEmitter = output<string>({ alias: 'buttonEmitter' });
    sendData(): void {
        this.childEmitter.emit("Senales information");
    }
}
