export class IdentityReducer implements IReducer<number> {
  invoke(state: number, action: IAction): number {
    switch (action.type) {
      case 'INCREMENT' : {
        return state + (action.payload || 1);
      }

      case 'DECREMENT' : {
        return state - (action.payload || 1);
      }
      default : {
        return state;
      }
    }
  }
}
