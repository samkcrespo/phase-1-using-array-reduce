const batteryBatches = [4, 5, 3, 4, 4, 6, 5]


//const totalBatteries = batteryBatches.reduce(function (accumulator, batteries){return batteries});



const totalBatteries = batteryBatches.reduce((accumulator, total ) => {
    return accumulator + total;
}, 0);


