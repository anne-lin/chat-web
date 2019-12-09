let ip="http://localhost:8089/";
$("#changeModel").click(()=>{
    if($(".title").html() == "登录"){
        $(".title").html("注册");
        $("#login-btn").html("注册");
        $("#changeModel").html("登录");
    }else {
        $(".title").html("登录");
        $("#login-btn").html("登录");
        $("#changeModel").html("注册");
    }
});
$("#login-btn").click(async ()=>{
    let url=ip + ($(".title").html() == "登录" ? "loginInfo/login":"loginInfo/reg");
    let data={
        username:$("#box input[name='username']").val(),
        password:$("#box input[name='pwd']").val()
    };
    try {
        let result=await fetch(url,{
            body: JSON.stringify(data),
            credentials:"include",
            method:"POST",
            mode:"cors",
            headers: {
                //'user-agent': 'Mozilla/4.0 MDN Example',
                'content-type': 'application/json'
            }
        });
        let res=await result.json();
        if(result.ok){
            if($(".title").html() == "登录"){
                location.href="http://localhost:8083/chat-web/html/chat.html"
            }else {
                $("#res").html(`<p style="color:red">${res.desc}</p>`);
                $(".title").html("登录");
                $("#login-btn").html("登录");
                $("#changeModel").html("注册");
            }
        }else {
            $("#res").html(`<p style="color:red">${res.msg}</p>`);
        }
    }catch (e) {
       console.log("error:",e);
    }
});
