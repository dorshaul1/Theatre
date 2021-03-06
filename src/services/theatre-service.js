// import {theatre} from '../data/chairs.js'
// import {storageService} from '.async-storage-service.js'

export const theatreService={
    createTheatre,
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

function createTheatre (rows,columns,middleSection,generalPrice){
    const middleSit=parseInt(columns/2)
    console.log(middleSit);
    const pathway=[middleSit-parseInt(middleSection/2),middleSit+parseInt(middleSection/2)]
    console.log(pathway);
    const theatre=[]
    for (var i=0 ;i<=rows;i++){
        for (var j=0;j<=columns;j++){
            const chair=createChair(i,j,generalPrice,pathway)
            // console.log(chair)
            theatre.push(chair)
        }
    }
    // storageService.save('THEATRE',theatre)
    return theatre
}

function createChair(line,chairNum,price,pathway){
    if (chairNum!==pathway[0] && chairNum!==pathway[1]){ 
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
