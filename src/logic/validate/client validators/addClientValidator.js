import isOnlyEngLetters from "../general validators/isOnlyEngLetters";

export const isOnlyEngNotEmpty = (str) => {

    if(str === undefined || str === null){
        return [false, 'str === undefined || str === null'];
    }

    if(str === ''){
        return [false, 'field is required'];
    }

    if(isOnlyEngLetters(str)){
        return [false, 'only english letters are allowed'];
    }

    return [true, ''];
}

export const isNotEmpty = (str) => {

    if(str === undefined || str === null){
        return [false, 'str === undefined || str === null'];
    }

    if(str === ''){
        return [false, 'field is required'];
    }

    return [true, ''];
}