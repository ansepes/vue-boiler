import axios from 'axios'

// const isDebug = process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test'

const repo = axios.create({
  baseURL: process.env.VUE_APP_API_ORIGIN,
})

repo.interceptors.request.use(request => {
  //   if (isDebug) performance.mark('start')
  return request
})

repo.interceptors.response.use(
  // 2XX範囲内のステータスコード
  response => {
    // if (isDebug) {
    //   performance.mark('finish')
    //   performance.measure('request-to-response', 'start', 'finish')
    //   //   const message = `${performance.getEntriesByName('request-to-response')[0].duration}`
    //   //   console.log(message)
    //   // Sentryでログを残すもよし
    //   // Sentry.captureMessage(message, Sentry.Severity.Debug);
    // }

    return response
  },
  // 2XX範囲外のステータスコード
  error => {
    if (!error.response) {
      console.error(error)
      return error
    }

    if (error.response.status === 400) {
      console.error(`error: ${error.response.status}`)
    } else if (error.response.status === 401) {
      console.error(`error: ${error.response.status}`)
    } else if (error.response.status === 500) {
      console.error(`error: ${error.response.status}`)
    } else {
      console.error(`error: ${error.response.status}`)
    }
    return error.response
  }
)

export const repository = repo
