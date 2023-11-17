import { makeAutoObservable } from 'mobx'

export default class DeviceStore {
  constructor() {
    this._types = [
      { id: 1, name: 'Холодильник' },
      { id: 2, name: 'Смартфоны' },
    ]

    this._brands = [
      { id: 1, name: 'Samsung' },
      { id: 2, name: 'Apple' },
    ]

    this._device = [
      {
        id: 1,
        name: '13 pro',
        price: 10000,
        rating: 0,
        img: '31469896-8d32-4eb7-8132-8e387c962070.jpg',
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
        img: '6f86df90-d620-4d52-9a06-756b510eccae.jpg',
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
        img: '4ad33488-97f2-4b24-b797-0c1e4ff98018.jpg',
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
        img: '494d902c-0611-4fba-b9e1-0792590d339e.jpg',
        createdAt: '2023-11-15T10:43:16.779Z',
        updatedAt: '2023-11-15T10:43:16.779Z',
        typeId: 4,
        brandId: 4,
      },
    ]

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

  get types() {
    return this._types
  }

  get brands() {
    return this._brands
  }

  get devices() {
    return this._device
  }
}

const isAuth = false
