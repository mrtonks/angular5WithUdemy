import { 
  Component, 
  OnInit, 
  Input, 
  ViewEncapsulation, 
  OnChanges, 
  DoCheck,
  OnDestroy,
  ViewChild,
  ElementRef,
  AfterViewInit,
  ContentChild,
  AfterContentInit
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent 
  implements OnInit, OnChanges, DoCheck, OnDestroy, AfterViewInit, AfterContentInit {
  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef;

  constructor() { }

  ngOnChanges(changes) {
    console.log('ngOnChange called!');
  }

  ngOnInit() {
    console.log('ngOnInit Called!');
    console.log('Text Content:', this.header.nativeElement.textContent);
    console.log('Text Content of paragraph:', this.paragraph.nativeElement.textContent);
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called!');
    console.log('Text Content:', this.header.nativeElement.textContent);
  }

  ngDoCheck() {
    console.log('ngDoChecked Called!');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called!');
    console.log('Text Content of paragraph:', this.paragraph.nativeElement.textContent);
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called!');
  }
}
