
$("#password01").keypress(
    function check () {
       var value = $(this).val();
       if (value.length < 7) {
         $("#pas").text("密碼太短");
       } else {
         $("#pas").text("密碼");
       }
     }
   );
   
   $("#password02").keyup(
   function check(){
     var value1=$("#password01").val();
      var value2=$("#password02").val();
     if ( value1 === value2) {
      $("#pas2").text("確認密碼"); 
     }
     else{
       $("#pas2").text("密碼不一致")
     }
   }
   );
    
   function f(){
   var name = document.getElementById("name").value;
     
     if(name==null || name==""){
       alert("姓名壓!!記得填");
       return false;
     } 
     var name = document.getElementById("phone").value;
     
     if(name==null || name==""){
       alert("電話!!記得填寫");
       return false;
     } 
     var name = document.getElementById("day").value;
     
     if(name==null || name==""){
       alert("生日日期記得寫");
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
  // //  click
  // $(document).ready(function () {
  //   $("button").click(function () {
  //     $.post("http://140.127.196.92:1234/auth", {
  //       username: $("#number").val(),
  //       password: $("#password01").val()
  //     },
  //       function (data, status) {
  //         $("p").text("資料: \n" + data + "\n狀態: " + status);
  //         $.cookie("authKey", data);
  //         if (data != "wrong password") {
  //           var key = $.cookie("authKey");
  //           console.log(key);
  //           window.location.replace("cart.html");
  //         };
  //       });
  //   });
  // });