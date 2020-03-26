export interface IApiResponse {
  hasError: boolean
  data: any
  status: number
  response: any
}

class RepoUtil {
  public isSuccess(responseCode: number): boolean {
    return `${responseCode}`.startsWith('2')
  }

  public toResult(response: any): IApiResponse {
    return {
      hasError: !this.isSuccess(response.status),
      data: response.data || {},
      status: response.status || -1,
      response,
    }
  }
}

export const repoUtil = new RepoUtil()
