function hasAccess(userRole) {
    return userRole === "admin";
}

function isNumberValid(input) {
    return !Number.isNaN(input);
}

function calculateAverage(total, count) {
    if (count === 0) {
        return 0;
    }
    return total / count;
}

console.log(hasAccess("guest"));
console.log(isNumberValid(10));
console.log(calculateAverage(100, 0));
