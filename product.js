$(document).ready(function () {
    $.get('https://fakestoreapi.com/products',function(data){

        for(let i = 0;i<data.length-1;i++)
        {
            let product=data[i];
        let productimages = `<div class="col-md-4 col-lg-3 col-sm-6 mb-4">
        <a href="#" class="thumbnail">
           <img src="${product.image}" alt="API image" class="image" onclick="
        orderFunc('${product.id}',\`${product.title}\`,\`${product.category}\`,\`${product.description}\`,\`${product.price}\`)">
        <br>
        <p>$${product.price}</p>
        </a></div>`;
        $('#List').append(productimages);     
        }      
    });
   });
 
   function orderFunc(productId,ptitle,pcategory,pdescription,pprice ){
    let pros= JSON.parse(localStorage.getItem('product_Ids'))||[];
    pros.push(productId);
    localStorage.setItem('product_Ids',JSON.stringify(pros));
    let mod = `<div class="modal-header">
                <h4 class="model-title">${ptitle}</h4>
                <button class="btn-close" type="button" data-bs-dismiss="modal"></button>
                </div>
                

                <div class="modal-body">
                <form>
                <div class="form-group">
                <h5 for="des">Description:</h5><p id="dis" class="form-control">${pdescription}</p>
                </div>
                <div class="form-group">
                <h5 for="cat">Category:</h5><p id="cat" class="form-control">${pcategory}</p>
                </div>
                <div class="form-group">
                <h5 for="pp">Price:</h5><p id="pp" class="form-control">${pprice}</p>
                </div>
                </form>
                </div>`;
        $('#content').html(mod);
        $('.modal').modal('show');
   }


   var Subscribe=[];
   function subFunc(){

    var sub=$('#subscribed').val();   
    if(sub)
    {
         Subscribe.push(sub);
        console.log('subscribe : ' , Subscribe);
        document.getElementById('subscribed').value="";
    }
}
