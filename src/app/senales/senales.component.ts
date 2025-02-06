import { Component, input, signal, output } from '@angular/core';

@Component({
  selector: 'app-senales',
  imports: [],
  templateUrl: './senales.component.html',
})
export class SenalesComponent {
    //input signal to receive data from parent
    public fromParent = input<string>();
    //output signal to emit data back to parent
    readonly childEmitter = output<string>({
        alias: "buttonEmitter"
    });
    sendData(): void {
        this.childEmitter.emit("Senales information");
    }

}
