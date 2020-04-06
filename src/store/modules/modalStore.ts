import { VuexModule, getModule, Module, Mutation, Action } from 'vuex-module-decorators'
import PromiseUtil from '@/basic/utils/promiseUtil'
import store from '@/store'

// import types
import { IModalState, IModalViewState } from '@/store/types'

const createInitState = () => {
  return {
    isShow: false,
    title: '',
    message: '',
  }
}

@Module({ dynamic: true, store, name: 'modalStr', namespaced: true })
class ModalStore extends VuexModule implements IModalState {
  info: IModalViewState = createInitState()
  warn: IModalViewState = createInitState()
  confirm: IModalViewState = createInitState()

  get getInfoState() {
    return this.info
  }

  get getWarnState() {
    return this.warn
  }

  get getConfirmState() {
    return this.confirm
  }

  @Mutation
  SET_INFO({ isShow, title, message, okBtnDifferd }: IModalViewState) {
    this.info.isShow = isShow
    this.info.title = title
    this.info.message = message
    this.info.okBtnDifferd = okBtnDifferd
  }

  @Mutation
  SET_WARN({ isShow, title, message, okBtnDifferd }: IModalViewState) {
    this.warn.isShow = isShow
    this.warn.title = title
    this.warn.message = message
    this.warn.okBtnDifferd = okBtnDifferd
  }

  @Mutation
  SET_CONFIRM({ isShow, title, message, okBtnDifferd, canselBtnDifferd }: IModalViewState) {
    this.confirm.isShow = isShow
    this.confirm.title = title
    this.confirm.message = message
    this.confirm.okBtnDifferd = okBtnDifferd
    this.confirm.canselBtnDifferd = canselBtnDifferd
  }

  @Action({})
  openInfoModal({ title = 'Infomation', message }: { title?: string; message: string }) {
    const { promise, resolve, reject } = PromiseUtil.createDifferd()

    this.SET_INFO({
      isShow: true,
      title,
      message,
      okBtnDifferd: { resolve, reject },
    })

    return promise
  }

  @Action
  closeInfoModal() {
    const { resolve } = this.info.okBtnDifferd || {}

    this.SET_INFO({
      isShow: false,
      title: '',
      message: '',
    })

    if (resolve) resolve()
  }

  @Action({})
  openWarnModal({ title = 'Error', message }: { title?: string; message: string }) {
    // const title = ttl || 'Error'
    const { promise, resolve, reject } = PromiseUtil.createDifferd()

    this.SET_WARN({
      isShow: true,
      title,
      message,
      okBtnDifferd: { resolve, reject },
    })

    return promise
  }

  @Action
  closeWarnModal() {
    const { resolve } = this.warn.okBtnDifferd || {}

    this.SET_WARN({
      isShow: false,
      title: '',
      message: '',
    })

    if (resolve) resolve()
  }

  @Action({})
  openConfirmModal({ title = 'Confirm', message }: { title?: string; message: string }) {
    const okPromise = PromiseUtil.createDifferd()
    const cancelPromise = PromiseUtil.createDifferd()

    this.SET_CONFIRM({
      isShow: true,
      title,
      message,
      okBtnDifferd: { resolve: okPromise.resolve, reject: okPromise.reject },
      canselBtnDifferd: { resolve: cancelPromise.resolve, reject: cancelPromise.reject },
    })

    return {
      okPromise: okPromise.promise,
      cancelPromise: cancelPromise.promise,
    }
  }

  @Action
  closeConfirmOK() {
    const { resolve } = this.confirm.okBtnDifferd || {}

    this.SET_CONFIRM({
      isShow: false,
      title: '',
      message: '',
    })

    if (resolve) resolve()
  }

  @Action
  closeConfirmCancel() {
    const { resolve } = this.confirm.canselBtnDifferd || {}

    this.SET_CONFIRM({
      isShow: false,
      title: '',
      message: '',
    })

    if (resolve) resolve()
  }
}

export const ModalModule = getModule(ModalStore)
