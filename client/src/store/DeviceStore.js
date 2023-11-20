import { makeAutoObservable } from 'mobx'

export default class DeviceStore {
  constructor() {
    this._types = [
      { id: 1, name: 'Холодильник' },
      { id: 2, name: 'Смартфоны' },
      { id: 3, name: 'Ноутбук' },
      { id: 4, name: 'Телевизоры' },
    ]

    this._brands = [
      { id: 1, name: 'Samsung' },
      { id: 2, name: 'Apple' },
      { id: 3, name: 'Lonovo' },
      { id: 4, name: 'Asus' },
    ]

    this._device = [
      {
        id: 1,
        name: '13 pro',
        price: 10000,
        rating: 0,
        img: 'https://content2.onliner.by/catalog/device/header/b9fefc8c8f96dbc21492792f3a1a502d.jpeg',
        createdAt: '2023-11-12T08:21:57.219Z',
        updatedAt: '2023-11-12T08:21:57.219Z',
        typeId: 4,
        brandId: 1,
      },
      {
        id: 2,
        name: 'Телевизор LG 65NANO766QA',
        price: 600,
        rating: 0,
        img: 'https://content2.onliner.by/catalog/device/header/b9fefc8c8f96dbc21492792f3a1a502d.jpeg',
        createdAt: '2023-11-12T13:32:30.353Z',
        updatedAt: '2023-11-12T13:32:30.353Z',
        typeId: 6,
        brandId: 2,
      },
      {
        id: 3,
        name: 'Холодильник SAMSUNG RS54N3003SA/WT',
        price: 1000,
        rating: 0,
        img: 'https://content2.onliner.by/catalog/device/header/b9fefc8c8f96dbc21492792f3a1a502d.jpeg',
        createdAt: '2023-11-12T13:34:51.277Z',
        updatedAt: '2023-11-12T13:34:51.277Z',
        typeId: 1,
        brandId: 1,
      },
      {
        id: 4,
        name: 'POCO 3X',
        price: 200,
        rating: 0,
        img: 'https://content2.onliner.by/catalog/device/header/b9fefc8c8f96dbc21492792f3a1a502d.jpeg',
        createdAt: '2023-11-15T10:43:16.779Z',
        updatedAt: '2023-11-15T10:43:16.779Z',
        typeId: 4,
        brandId: 4,
      },
      {
        id: 5,
        name: '13 pro',
        price: 10000,
        rating: 0,
        img: 'https://content2.onliner.by/catalog/device/header/b9fefc8c8f96dbc21492792f3a1a502d.jpeg',
        createdAt: '2023-11-12T08:21:57.219Z',
        updatedAt: '2023-11-12T08:21:57.219Z',
        typeId: 4,
        brandId: 1,
      },
      {
        id: 6,
        name: 'Телевизор LG 65NANO766QA',
        price: 600,
        rating: 0,
        img: 'https://content2.onliner.by/catalog/device/header/b9fefc8c8f96dbc21492792f3a1a502d.jpeg',
        createdAt: '2023-11-12T13:32:30.353Z',
        updatedAt: '2023-11-12T13:32:30.353Z',
        typeId: 6,
        brandId: 2,
      },
      {
        id: 7,
        name: 'Холодильник SAMSUNG RS54N3003SA/WT',
        price: 1000,
        rating: 0,
        img: 'https://content2.onliner.by/catalog/device/header/b9fefc8c8f96dbc21492792f3a1a502d.jpeg',
        createdAt: '2023-11-12T13:34:51.277Z',
        updatedAt: '2023-11-12T13:34:51.277Z',
        typeId: 1,
        brandId: 1,
      },
      {
        id: 8,
        name: 'POCO 3X',
        price: 200,
        rating: 0,
        img: 'https://content2.onliner.by/catalog/device/header/b9fefc8c8f96dbc21492792f3a1a502d.jpeg',
        createdAt: '2023-11-15T10:43:16.779Z',
        updatedAt: '2023-11-15T10:43:16.779Z',
        typeId: 4,
        brandId: 4,
      },
    ]

    this._selectedType = {}

    this._selectedBrand = {}

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
    this._selectedType = type
  }

  setSelectedBrand(brand) {
    this._selectedBrand = brand
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
}
