let token = ''

function clearMessag(){
  message1.innerText = ""
  message2.innerText = ""
  message3.innerText = ""
}
function login() {
  axios.post('http://admin.ry.zolysoft.com/login',{
    username: "zhoubin", password: "123456", rememberMe: true
  })
  .then(function (response) {
    token = "Bearer " + response.data.data.token
    //alert("已登录")
  })
  .catch(function (error) {
    console.log(error);
  });
}

function clearBind(staffId){
  axios.post('http://admin.ry.zolysoft.com/admin/sysStaff/clearBind',
    "staffId="+staffId,
    {headers:{
    zolysoft: token
    }})
  .then(function (response) {
    if(response.data.code===0){
      message3.innerText = "操作成功。已清除设备绑定。" 
    }
    else
    {
      message3.innerText = "操作异常。"
    }
  })
  .catch(function (error) {
    console.log(error);
  });
}

function getUserData(){
  axios.get('http://admin.ry.zolysoft.com/admin/sysStaff/list')
  .then(function (response) {
    //console.log(response.data.data)
    let item 
    let id = -1
    
    for (item of response.data.data){
      //console.log(item)
      console.log(item.username,username.value)
      if (item.username === username.value){
        console.log(item.nickname)
        console.log(item.id)
        id = item.id
        name = item.nickname
        break
      }
    }
    console.log("已全部遍历用户信息")
    if (id === -1){
      message2.innerText = "未找到对应用户"
    }
    else
    {
      message2.innerText = "找到对应的用户为：" + name
      clearBind(id)
    }
    
  })
  .catch(function (error) {
    console.log(error);
  });
}

function clearBindBtn(){
  clearMessag()
  let username = document.getElementById("username").value
  
  if (username === "") {
    message1.innerText = "登录名不能为空"
  }
  if (username !== "") {
    message1.innerText = "您输入需要查找的用户名为"+username
    //获取用户信息
    getUserData()
    //确认输入的登录名存在对应用户
    //获取token
    //解绑操作
  }
}
//创建工单需要传入一个json对象
function saveOder(json){
  json = {
          "id":null,
          "jobId":24606,
          "jobCode":"临时工单",
          "orderCode":null,
          "title":"临时工单test",
          "typeId":8,
          "orderDescribe":"临时工单描述",
          "executorBy":118,
          "superviseBy":"",
          "coordination":false,
          "workingHours":0,
          "orderStartTime":"2022-06-01T02:00:00.000Z",
          "customerId":3999
        }
  axios.post('http://admin.ry.zolysoft.com/admin/workOrder/save',
    json,
    {headers:{
    zolysoft: token
    }})
  .then(function (response) {
    console.log(response)
  })
  .catch(function (error) {
    console.log(error);
  });
}

function saveOderBtn(){
  console.log("clicked")
  saveOder()
}

//这里是起点
console.log("start")
login()
let message1 = document.getElementById("message1")
let message2 = document.getElementById("message2")
let message3 = document.getElementById("message3")
document.getElementById("clearBindBtn").addEventListener('click',clearBindBtn,false)
document.getElementById("createOrderBtn").addEventListener('click',saveOderBtn,false)
let name = ""
