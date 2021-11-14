//calculation of tip calculator
document.querySelector('#form').onchange = function calculate()
{
  var tip = document.getElementById('tip_Input'.value);
  var totalBill = Number(document.getElementById('amt').value);
  var tipResult = totalBill * (tip/100)
  console.log(tipResult)

  var tipstogive = document.querySelector('#tip_to_give')
  tip_to_give.value = tipResult.toFixed(2);
  //display
  document.getElementById('tiptogive').style.display='block'
)
}
