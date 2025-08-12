$(document).ready(function () {
    let productId = JSON.parse(localStorage.getItem('product_Ids')) ||[];
    $('#things').empty();
    for(let i=0;i<productId.length-1;i++){
        $.get(`https://fakestoreapi.com/products/${productId[i]}`,function(data){
            let labelid=`updatedprice${i}`;
            let bill = `<div class="bill row mt-3">
            <div class="col-sm-4">
            <label id="tt"><b>${data.title}</b></label>
            </div>
            
            <div class="col-sm-4">
            <input type="number" min="1" max="5" value="0" onchange= "pprice(this,${data.price},${i})">
            </div>

            <div class="col-sm-4">
            <h4  class="updateprice" id="updatedprice${i}">0.00 </h4>
            </div>
            </div>`;
            $('#things').append(bill);
            });   
    }
    localStorage.removeItem('product_Ids');
});

let total = 0;
function pprice(quantity,price,index)
{
    let num=quantity.value;
    let pp=num*Number(price);
    total+=Number(price);
   document.getElementById('subtotal').textContent=total;
}
function submitbtn(){
    event.preventDefault();
    let invalid=false;
    var phonePattern = /^\92[0-9]{10}$/;
    let name=$("#inputName").val();
    let sname=$("#inputSName").val();
    let add=$("#inputAddress").val();
    let phone=$("#inputPhone").val();


    if (!name)
    {
        alert('First Name is required');
        invalid=true;
    }
    if (!sname)
        {
           alert('Second Name is required');
            invalid=true;
        }
        if (!add)
            {
                alert('Address is required');
                invalid=true;
            }
            if (!phonePattern.test(phone))
                {
                    alert('Phone No. should be in 92XXXXXXXXXX syntax');
                    invalid=true;
                }
        if(invalid==false)
        {
            let invoice = `<div class="row mt-5 invoice">
              <div class="col-sm-4 ">
                <div class="card cc">
                  <div class="card-body">
                  <h3 class="card-text ct" id="invoiceName">Order Confirmed</h3>
                  <p class="card-text ct" id="invoiceName">${name}</p>
                  <p class="card-text ct" id="invoiceSname">${sname}</p>
                    <p class="card-text ct" id="invoiceAddress">${add}</p>
                    <p class="card-text ct" id="invoiceNumber">${phone}</p>;
                  </div>
                </div>
              </div>
            `
            $('#invoiceid').append(invoice);
        
                    
        } 
}