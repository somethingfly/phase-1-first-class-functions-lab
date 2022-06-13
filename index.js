// Code your solution in this file!

const returnFirstTwoDrivers = function (array) {
    const newArray = array.slice(0,2);
    return newArray;
}

const returnLastTwoDrivers = function (array) {
    const newArray = array.slice(-2);
    return newArray;    
}

const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(integer) {
    function fareMultiplier(fare) {
        return fare * integer;
    }
    return fareMultiplier;
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers,returnFunction) {
    return returnFunction(drivers);
}