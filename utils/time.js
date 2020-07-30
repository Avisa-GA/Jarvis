module.exports = function() {
    let time, meridiem; 
    
    time = new Date().toLocaleTimeString();
    time = time.split(":");

    meridiem = time.pop().split(" ")[1];

    return `${time.join(":")} ${meridiem}`;
}