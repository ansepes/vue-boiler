export default class PromiseUtillity {
  public static createDifferd() {
    let _resolve: Function = () => {}
    let _reject: Function = () => {}

    const promise = new Promise((resolve, reject) => {
      _resolve = resolve
      _reject = reject
    })

    return {
      promise,
      resolve: _resolve,
      reject: _reject,
    }
  }
}

export const PromiseUtil = new PromiseUtillity()
