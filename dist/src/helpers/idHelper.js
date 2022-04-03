export var createRandomId = function () {
    var randomNumber = (Math.random() * 1000000).toString();
    var now = new Date().getTime().toString();
    return (randomNumber + now)
        .split('')
        .map(function (char) {
        return Math.random() > 0.5
            ? String.fromCharCode(char.charCodeAt(0) ^ Math.round(Math.random() * 100))
            : '';
    })
        .join('');
};
//# sourceMappingURL=idHelper.js.map