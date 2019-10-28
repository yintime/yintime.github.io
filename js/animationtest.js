$(document).ready(function(){
    console.log("jq脚本已加载");
    $("#test").click(function(){
        classname=$("select").val();
        console.log(classname);
        console.log((classname != undefined)&&!($(this).hasClass(classname)));
        // 检查需要添加的类名不是未定义的且动画类执行完成后会自动移除类，在还有类名时，就是未执行完之前再点击不响应
        if ((classname != undefined)&&!($(this).hasClass(classname)))
        {$(this).addClass(classname);
            setTimeout(() => {
                $(this).removeClass() 
            }, 2000);
        }
    })

});