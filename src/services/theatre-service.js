// import {theatre} from '../data/chairs.js'
import {storageService} from '.async-storage-service.js'

const gTheatre = [

    {

        "_id": "c1",
        "isChair": true,
        "status": "available",
        "pos": {
            "line": 1,
            "chairNum": 5
        },
        "price": 35

    },
    {

        "_id": "c2",
        "isChair": true,
        "status": "reserved",
        "pos": {
            "line": 2,
            "chairNum": 5
        },
        "price": 45

    },
    {

        "_id": "c3",
        "isChair": true,
        "status": "reserved",
        "pos": {
            "line": 3,
            "chairNum": 5
        },
        "price": 45

    },
    {

        "_id": "c4",
        "isChair": true,
        "status": "available",
        "pos": {
            "line": 3,
            "chairNum": 2
        },
        "price": 35

    },

]

export const theatreService = {
    getTheatre
}

function getTheatre() {
    return gTheatre
}

function createTheater (rows,columns,middleSection,generalPrice){
    const middleSit=parseInt(columns.length/2)
    const passColumn=[middleSit-parseInt(middleSection/2),middleSit+parseInt(middleSection/2)]
    const theatre=[]
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