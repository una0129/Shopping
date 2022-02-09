
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
  //  click
  $(document).ready(function () {
    $("button").click(function () {
      $.post("https://www.townway.com.tw/auth", {
        username: $("#number").val(),
        password: $("#password01").val()
      },
        function (data, status) {
          $("p").text("資料: \n" + data + "\n狀態: " + status);
          $.cookie("authKey", data);
          if (data != "wrong password") {
            var key = $.cookie("authKey");
            console.log(key);
            window.location.replace("cart.html");
          };
        });
    });
  });