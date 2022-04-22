const isOnlyEngLetters = (str) => {

    if(str === undefined || str === null){
        return false;
    }

    return !/^[a-zA-Z]+$/.test(str);
}

export default isOnlyEngLetters;