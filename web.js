
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




    