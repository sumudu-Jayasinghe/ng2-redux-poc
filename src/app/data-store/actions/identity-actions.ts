export class IncrementAction implements IAction{
  constructor(payload?: number) {
    this.payload = payload;
  }

  type: string = 'INCREMENT' ;
  payload: number;
}

export class DecrementAction implements IAction{

  constructor(payload?: number) {
    this.payload = payload;
  }

  type: string = 'DECREMENT' ;
  payload: number;
}
