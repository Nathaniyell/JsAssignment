const currentAge = parseInt(prompt("Please enter your age"));
function lifeInWeeks (age){
    let finalAge = 90;
    let difference = finalAge - currentAge;
    let monthsLeft = difference * 12;
    let weeksLeft = difference * 54;
    let daysLeft = difference * 365;
    let output = `You have ${daysLeft} days, ${weeksLeft} weeks and ${monthsLeft} months left on earth`;
    alert(output);
}
lifeInWeeks(currentAge);