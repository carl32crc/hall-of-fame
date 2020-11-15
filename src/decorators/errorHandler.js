
const isPromise = obj =>
  typeof obj !== 'undefined' && typeof obj.then === 'function'

export function errorHandler(target, fnName, descriptor) {
  const original = descriptor.value

  descriptor.value = function(...args) {
    const response = []

    try {
      const returns = original.apply(this, args)
      if (isPromise(returns)) {
        return returns
          .then((data) => {
            response[0] = null
            response[1] = data
            return response
          })
          .catch(e => {
            response[0] = e
            response[1] = null
            return Promise.resolve(response)
          })
      } else {
        response[0] = null
        response[1] = returns
        return response
      }
    } catch (error) {
      response[0] = error
      response[1] = null
      return response
    }
  }
  return descriptor
}
