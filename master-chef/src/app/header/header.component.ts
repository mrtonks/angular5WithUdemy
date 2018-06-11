import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    @Output() menuOptionSelected = new EventEmitter<Number>();

    onSelect(optionSelected : number) {
        this.menuOptionSelected.emit(optionSelected);
    }
}