const options = { weekday: 'long', month: 'long', day: 'numeric' }
exports.getDate = () =>{
    const today = new Date();
    return today.toLocaleDateString('en-us', options);
}

const options2 = {hour: '2-digit', minute:'2-digit'}
exports.getTime = () =>{
    const today = new Date();
    return today.toLocaleTimeString('en-us', options2);
}

