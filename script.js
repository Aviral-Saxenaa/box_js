

(function func1(){
        let btn=document.querySelector(".container");
        btn.addEventListener("submit",function(e){
                e.preventDefault();
                // let output=document.querySelector("#output"); 
                // output.innerHTML="sns";
                // console.log(e.timeStamp());
                
                let text=document.querySelector("#message-user")
                let errormsg=document.querySelector(".error");
                let output=document.querySelector("#output"); //messagecontent
                if(text.value==''){
                        errormsg.classList.add("show");
                        setTimeout(function(){
                                errormsg.classList.remove("show")
                        },4000);
                }
                else{
                        output.innerHTML=text.value;
                        text.value="";
                }
        })
})()