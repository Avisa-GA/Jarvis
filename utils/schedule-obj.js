module.exports = function(hour, minute, second, dayOfWeek) {
    return {
        hour: hour || null,
        minute: minute || null,
        second: second || null,
        dayOfWeek: dayOfWeek || null
    };
};