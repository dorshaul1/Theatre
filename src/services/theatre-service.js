// import {theatre} from '../data/chairs.js'

const gTheatre = [
  {
    _id: 'c1',
    isChair: true,
    status: 'available',
    pos: {
      line: 1,
      chairNum: 1,
    },
    price: 35,
  },
  {
    _id: 'c2',
    isChair: true,
    status: 'available',
    pos: {
      line: 1,
      chairNum: 2,
    },
    price: 35,
  },
  {
    _id: 'c3',
    isChair: true,
    status: 'available',
    pos: {
      line: 1,
      chairNum: 3,
    },
    price: 35,
  },
  {
    _id: 'c4',
    isChair: true,
    status: 'available',
    pos: {
      line: 1,
      chairNum: 4,
    },
    price: 35,
  },
  {
    _id: 'c5',
    isChair: true,
    status: 'available',
    pos: {
      line: 1,
      chairNum: 5,
    },
    price: 35,
  },
  {
    _id: 'c6',
    isChair: true,
    status: 'reserved',
    pos: {
      line: 2,
      chairNum: 1,
    },
    price: 45,
  },
  {
    _id: 'c7',
    isChair: true,
    status: 'reserved',
    pos: {
      line: 2,
      chairNum: 2,
    },
    price: 45,
  },
  {
    _id: 'c8',
    isChair: true,
    status: 'available',
    pos: {
      line: 2,
      chairNum: 3,
    },
    price: 35,
  },
  {
    _id: 'c9',
    isChair: true,
    status: 'available',
    pos: {
      line: 2,
      chairNum: 4,
    },
    price: 35,
  },
  {
    _id: 'c10',
    isChair: true,
    status: 'available',
    pos: {
      line: 2,
      chairNum: 5,
    },
    price: 35,
  },
]

export const theatreService = {
  getTheatre,
}

function getTheatre() {
  return gTheatre
}

function getTheatres() {}
