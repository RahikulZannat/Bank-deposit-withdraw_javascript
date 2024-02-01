document.getElementById('deposit-btn').addEventListener('click',function(){
    const userDeposit = document.getElementById('user-deposit');
    const deposit = userDeposit.value;
    const newDeposit = parseFloat(deposit);
//deposit
    const depositAmount = document.getElementById('deposit-amount');
    const depositNew = depositAmount.innerText;
    const depositTotal = parseFloat(depositNew);
    const total = depositTotal + newDeposit;
    depositAmount.innerText = total;
    userDeposit.value = '';
//update current balance
    const totalAmount = document.getElementById('total-amount');
    const balanceAmount = totalAmount.innerText;
    const newBalance = parseFloat(balanceAmount);
    const updateBalance = newBalance + newDeposit;
    totalAmount.innerText= updateBalance;

})

//withdraw
document.getElementById('withdraw-btn').addEventListener('click',function(){
    const userWithdraw = document.getElementById('user-withdraw');
    const withdraw = userWithdraw.value;
    const previousWithdraw = parseFloat(withdraw);

    //withdraw amount

    const withdrawUser = document.getElementById('withdraw');
    const withdrawTotal = withdrawUser.innerText;
    const newWithdraw = parseFloat(withdrawTotal);

    const newWithdrawTotal = newWithdraw + previousWithdraw;
    withdrawUser.innerText = newWithdrawTotal;



    const totalAmount = document.getElementById('total-amount');
    const withdrawAmount = totalAmount.innerText;
    const amountWithdraw = parseFloat(withdrawAmount);
    const afterWithdraw = amountWithdraw - previousWithdraw;
    totalAmount.innerText = afterWithdraw;
    userWithdraw.value = '';

})

document.getElementById('back').addEventListener('click',function(){
    window.location.href = 'index.html';
})