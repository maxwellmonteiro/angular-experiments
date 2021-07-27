import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter } from '@angular/core';
import { BehaviorSubject, combineLatest, forkJoin, from, merge, Observable, of, Subject, zip } from 'rxjs';
import { map, mergeMap, switchMap, concatMap, delay, debounceTime, takeUntil, skip, exhaustMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-experiments';

  obs1 = from([1, 2, 3]);
  obs2 = from(['a', 'b', 'c']);

  jsonUrls: string[] = [
    "https://jsonplaceholder.typicode.com/users/1",
    "https://jsonplaceholder.typicode.com/posts/1",
    "https://jsonplaceholder.typicode.com/comments/1"
  ];

  jsonRequest: Observable<any>[] = [
    this.httpClient.get(this.jsonUrls[0]),
    this.httpClient.get(this.jsonUrls[1]),
    this.httpClient.get(this.jsonUrls[2])
  ]; 

  constructor(private httpClient: HttpClient) {
    this.testNgTypeahead(this.ngTypeahead2);
  }

  getCurrentTime(): string {
    const now: Date = new Date();
    return `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}.${now.getMilliseconds()}`;
  }

  getData(param: any) {
    return of(`retrieved new data with param ${param} at ${this.getCurrentTime()}`).pipe(
      delay(1000)
    );
  }

  public testSubscribe() {
    this.jsonRequest[0].subscribe(r => {
      console.log(r);
    })
  }

  public testJoin() {    
    zip([
      this.obs1, 
      this.obs2
    ]).subscribe(x => {
      console.log(x[0]);
    });
  }

  public testJsonPlaceholder() {
    
  }

  public example(operator: any) {    
    console.log(`${operator.name} start at ${this.getCurrentTime()}`);
    from([1, 2, 3, 4, 5]).pipe(
      operator((x: any) => this.getData(x))
    ).subscribe(
      console.log,
      () => {},
      () => { console.log(`${operator.name} completed at ${this.getCurrentTime()}`) }
    );  
  }  

  public mm() {
    this.example(mergeMap);
  }

  public cm() {
    this.example(concatMap);
  }

  public sm() {
    this.example(switchMap);
  }

  public em() {
    this.example(exhaustMap);
  }


/*   autocomplete(time: number, selector: (t: string) => Observable<string>): MonoTypeOperatorFunction<string> {

    const operatorOperator: MonoTypeOperatorFunction<string> = (source: Observable<string>) => {
      return source.pipe(
          debounceTime(time),
          switchMap(term => {
            console.log("request: ", term);
            return selector(term).pipe(
              takeUntil(
                source.pipe(skip(1))
              )
            );
          })
        )
    };
    return operatorOperator;
  }   */   

  ngTypeahead: EventEmitter<string> = new EventEmitter<string>();
  ngTypeahead2: BehaviorSubject<string> = new BehaviorSubject<string>("");
  
  testNgTypeahead(subject: Subject<string>) {
    /* subject.pipe(
        this.autocomplete(1000, (term: string) => this.getData(term))
      ).subscribe(
        r => console.log(r)
      ); */
    subject.pipe(
      debounceTime(1000),
      switchMap(term => {
        console.log("request: ", term);
        return this.getData(term).pipe(
          takeUntil(
            subject.pipe(skip(1))
          )
        ); 
      })
    ).subscribe(r => console.log(r));
  }
  
  onTextChange(event: any) {    
    //this.ngTypeahead.emit(event.target.value);
    this.ngTypeahead2.next(event.target.value);    
  }

}


