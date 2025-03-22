// 1st card start 


function getInputValue(id) {
    const data = document.getElementById(id).value;
    return Number(data);
}

function resetInputValue(id) {
    document.getElementById(id).value = "";
}

const noakhaliDonationBtn = document.getElementById("noakhaliDonation");



noakhaliDonationBtn.addEventListener("click", function () {
    const noakhaliInputValue = getInputValue("noakhaliInput");
    const cashAmount = document.getElementById("totalCashAmount");
    const totalCashAmount = Number(cashAmount.innerText);


    if (noakhaliInputValue > 0) {
        if (totalCashAmount > 0 && totalCashAmount >= noakhaliInputValue) {
            const noakhaliDonationElement = document.getElementById("noakhaliDonationAmount");
            const noakhaliPrevBalance = Number(noakhaliDonationElement.innerText)

            noakhaliDonationElement.innerText = noakhaliInputValue + noakhaliPrevBalance;

            const noakhaliDonationTotalAmount = noakhaliDonationElement.innerText;



            // hard project start


            cashAmount.innerText = totalCashAmount - noakhaliInputValue;

            // hard project end

            resetInputValue("noakhaliInput");
        }
        else {
            alert('Insufficiant balance')
        }



    }
    else {
        alert("Please enter donation amount")
    }

})





// 1st card end 

// 2nd card start 


function getInputValue(id) {
    const data = document.getElementById(id).value;
    return Number(data);
}

function resetInputValue(id) {
    document.getElementById(id).value = "";
}

const feniDonationBtn = document.getElementById("feniDonation");



feniDonationBtn.addEventListener("click", function () {
    const feniInputValue = getInputValue("feniInput");
    const cashAmount = document.getElementById("totalCashAmount");
    const totalCashAmount = Number(cashAmount.innerText)
    if (feniInputValue > 0) {
        if (totalCashAmount > 0 && totalCashAmount >= feniInputValue) {
            const feniDonationElement = document.getElementById("feniDonationAmount");
            const feniPrevBalance = Number(feniDonationElement.innerText)

            feniDonationElement.innerText = feniInputValue + feniPrevBalance;


            cashAmount.innerText = totalCashAmount - feniInputValue;


            resetInputValue("feniInput");
        }
        else {
            alert('Insufficiant balance')
        }

    }
    else {
        alert("Please enter donation amount")
    }

})

// 2nd card end 

// 3rd card start 


function getInputValue(id) {
    const data = document.getElementById(id).value;
    return Number(data);
}

function resetInputValue(id) {
    document.getElementById(id).value = "";
}

const aidDonationBtn = document.getElementById("aidDonation");



aidDonationBtn.addEventListener("click", function () {
    const aidInputValue = getInputValue("aidInput");
    const cashAmount = document.getElementById("totalCashAmount");
    const totalCashAmount = Number(cashAmount.innerText);

    if (aidInputValue > 0) {
        if (totalCashAmount > 0 && totalCashAmount >= aidInputValue) {
            const aidDonationElement = document.getElementById("aidDonationAmount");
            const aidPrevBalance = Number(aidDonationElement.innerText)

            aidDonationElement.innerText = aidInputValue + aidPrevBalance;


            cashAmount.innerText = totalCashAmount - aidInputValue;

            resetInputValue("aidInput");
        }
        else {
            alert("Insufficiant balance")
        }

    }
    else {
        alert("Please enter donation amount")
    }

})

// 3rd card end 
