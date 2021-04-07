// import {theatre} from '../data/chairs.js'
// import {storageService} from '.async-storage-service.js'

export const theatreService={
    createTheater,
getTheatre
}

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

// export const theatreService = {
//   getTheatre,
// }

function getTheatre() {
    return gTheatre
}

// createTheater(2, 3 ,2, 12)

function createTheater (rows,columns,middleSection,generalPrice){
    let middleSit=parseInt(columns.length/2)
    let passColumn=[middleSit-parseInt(middleSection/2),middleSit+parseInt(middleSection/2)]
    let theatre=[]
    for (var i=0 ;i<=rows.length;i++){
        for(var j=0;j<=columns.length;j++){
            const chair=createChair(i,j,generalPrice,passColumn)
            theatre.push(chair)
        }
    }
    gTheatre=theatre
    // storageService.save('THEATRE',theatre)
    return theatre
}

function createChair(line,chairNum,price,passColumn){
    if (chairNum===passColumn[0]||chairNum===passColumn[1]){ 
        return  {
            _id: _makeId(),
            isChair: true,
            status: 'available',
            pos: {
                line,
                chairNum
            },
            price
        }
    }else{
        return  {
            _id: _makeId(),
            isChair: false,
            status: null,
            pos: {
                line,
                chairNum
            },
            price:null
        }
    }
}

function _makeId(length = 5) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}
