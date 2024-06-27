import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, reset } from '../../counter-ngrx/counter.actions';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  count$: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.select('count');
    console.log(this.count$)
  }
  increment() {
    this.store.dispatch(increment())
  }
  decrement() {
    this.store.dispatch(decrement())
  }
  reset() {
    this.store.dispatch(reset())
  }
}
