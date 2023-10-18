function calculateARR() {
    var monthlyMembers = parseInt(document.getElementById('monthly-members').value);
    var monthlyPrice = parseFloat(document.getElementById('monthly-price').value);
    var yearlyMembers = parseInt(document.getElementById('yearly-members').value);
    var yearlyPrice = parseFloat(document.getElementById('yearly-price').value);

    var monthlyARR = monthlyMembers * monthlyPrice * 12;
    var yearlyARR = yearlyMembers * yearlyPrice;
    var totalARR = monthlyARR + yearlyARR;

    var resultElement = document.getElementById('result');
    resultElement.innerHTML = "Annual Recurring Revenue (ARR): $" + totalARR.toFixed(2);
}
