import { Component, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent implements OnInit, OnDestroy{

  /***tipo de obserbable  */
  private debouncer : Subject<string> = new Subject<string>(); /*  waitAndSend */
  private debouncerSuscription?: Subscription;

  @Input()
  public placeholder: string = '';

  @Input()
  public inputSearcInitialValue : string = '';

  @Output()
  public onValue = new EventEmitter<string>()

  emitValue(value : string ){
    this.onValue.emit(value);
    console.log('emitio evento -> ', value)
  }

  ngOnInit(): void {
    this.waitAndSend()
  }

  ngOnDestroy(): void {
    /** cierra el obserbable  */
    this.debouncerSuscription?.unsubscribe()
  }

  onKeyPress( searchTern : string ){
    this.debouncer.next(searchTern)
  }

  waitAndSend(){
    this.debouncerSuscription = this.debouncer
    .pipe(
      debounceTime(500)
    )
    .subscribe(value =>{
        this.onValue.emit(value);
    })
  }

}
