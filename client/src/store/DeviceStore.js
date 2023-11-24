import { makeAutoObservable } from 'mobx'

export default class DeviceStore {
  constructor() {
    this._types = []

    this._brands = []

    this._device = []

    this._selectedType = {}

    this._selectedBrand = {}

    this._page = {}

    this._totalCount = 0

    this._limit = 3

    makeAutoObservable(this)
  }

  setTypes(types) {
    this._types = types
  }

  setBrands(brands) {
    this._brands = brands
  }

  setDevices(device) {
    this._device = device
  }

  setSelectedType(type) {
    this.setPage(1)
    this._selectedType = type
  }

  setSelectedBrand(brand) {
    this.setPage(1)
    this._selectedBrand = brand
  }

  setTotalCount(count) {
    this._totalCount = count
  }

  setPage(page) {
    this._page = page
  }

  get types() {
    return this._types
  }

  get brands() {
    return this._brands
  }

  get devices() {
    return this._device
  }

  get selectedType() {
    return this._selectedType
  }

  get selectedBrand() {
    return this._selectedBrand
  }

  get totalCount() {
    return this._totalCount
  }

  get page() {
    return this._page
  }

  get limit() {
    return this._limit
  }
}
