$("#password01").keypress(
    function check () {
       var value = $(this).val();
       if (value.length < 8) {
         $("p").text("密碼太短");
       } else {
         $("p").text("");
       }
     }
   );
   
   $("#password02").keyup(
   function check(){
     var value1=$("#password01").val();
      var value2=$("#password02").val();
     if ( value1 === value2) {
      $("p").text("正確"); 
     }
     else{
       $("P").text("錯誤")
     }
   }
   );
   
   function f(){
   var name = document.getElementById("name").value;
     // console.log(x)
     
     if(name==null || name==""){
       alert("姓名壓!!記得填");
       return false;
     } 
     var addres = document.getElementById("addres").value;
     
     if(addres==null || addres==""){
       alert("地址你地址沒寫");
       return false;
     } 
     var email = document.getElementById("e-mail").value;
     if(email==null || email==""){
       alert("信箱你忘記填寫");
       return false;
     }   
     var number = document.getElementById("number").value;
     if(number==null || number==""){
       alert("帳號記得打");
       return false;
     }    
     var password = document.getElementById("password01").value;
     if(password==null || password==""){
       alert("密碼沒有打");
       return false;
     }    
     var password = document.getElementById("password02").value;
     if(password==null || password==""){
       alert("在確認一次你的密碼");
       return false;
     }    
     
   }