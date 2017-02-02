interface IReducer<T>{
  invoke(state:T,action:IAction):T
}
