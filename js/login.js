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
$("#login-btn").click(()=>{
    let url=ip + ($(".title").html() == "登录" ? "login":"reg");
    $.ajax({
        url: url,
        method:"post",
        data: {
            username:$("#box input[name='username']").val(),
            password:$("#box input[name='pwd']").val()
        },
        dataType: 'json'
    }).then(res=>{
        if(res.code == "0"){
            if($(".title").html() == "登录"){
                location.href="http://localhost:8083/node2/chat-system/static/chat.html"
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
    })
});
