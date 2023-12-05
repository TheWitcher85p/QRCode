let imageBox = document.getElementById("imgGenBox");
let img = document.getElementById("qrGen")
let inputText = document.getElementById("inputValue");

function qrCode(){
    
    if(inputText.value.length>0){

    
    img.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+inputText.value;
    imageBox.classList.add('show-img');
    }
    else{
        img.src="https://previews.123rf.com/images/arcady31/arcady311303/arcady31130300032/18519959-vector-oops-symbol.jpg";
        imageBox.classList.add('show-img');
    }
}