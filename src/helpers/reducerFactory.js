export function reducerFactory(initialState, handlers) {
  return function(action, state = initialState) {
    const handler = handlers[action.type]

    if (handler) {
      return handler(state, action)
    }

    return state
  }
}
