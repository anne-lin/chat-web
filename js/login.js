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
        console.log("res:",res);
        if(res.code == "0"){
                if($(".title").html() == "登录"){
                    console.log(res);
                    //location.href="http://localhost:8083/node2/chat-system/static/chat.html"
                }else {
                    alert(res.desc);
                    $(".title").html("登录");
                    $("#login-btn").html("登录");
                    $("#changeModel").html("注册");
                }
            }else {
                alert(res.desc);
            }
    }catch (e) {
       console.log("error:",e);
    }
   /* $.ajax({
        url: url,
        method:"post",
        data: data,
        dataType: 'json'
    }).then(res=>{
        console.log("res:",res);
        if(res.code == "0"){
            if($(".title").html() == "登录"){
                // location.href="http://localhost:8083/node2/chat-system/static/chat.html"
            }else {
                alert(res.desc);
                $(".title").html("登录");
                $("#login-btn").html("登录");
                $("#changeModel").html("注册");
            }
        }else {
            alert(res.desc);
        }
    },err=>{
        console.log("获取数据出错");
    })*/
});
