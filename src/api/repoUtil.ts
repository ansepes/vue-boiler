export interface IApiResponse {
  hasError: boolean
  response: any
}

class RepoUtil {
  public isSuccess(responseCode: number): boolean {
    return `${responseCode}`.startsWith('2')
  }

  public toResult(response: any): IApiResponse {
    return {
      hasError: !this.isSuccess(response.status),
      response,
    }
  }
}

export const repoUtil = new RepoUtil()
