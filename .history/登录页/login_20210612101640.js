//  head  效果
//   获取input
let ipt = document.getElementById('ipt')
let ss = document.getElementsByClassName('icon-sousuo')[0]
ipt.addEventListener('mouseenter', function () {
    ipt.classList.add('ipt')
    ss.classList.add('sousuo')
})
ipt.addEventListener('mouseleave', function () {
    ipt.classList.remove('ipt')
    ss.classList.remove('sousuo')
})

// 跳转首页
let sy = Array.from(document.getElementsByClassName('sy'))
sy.map((a) => {
    a.addEventListener('click', () => {
        window.open('../首页/index.html', '_self')
    })
})



//密码框与用话框聚焦效果

let dlipt = document.getElementsByClassName('dl-ipt');
let dlipts = Array.from(dlipt)
//注册事件

dlipts.map((a) => {
    a.addEventListener('focus', (item) => {

        dlipts.map((a1) => {
            a1.classList.remove('jj')
        })
        a.classList.add('jj')
    })
})


// 获取提示数组
let ts = Array.from(document.getElementsByClassName('ts'));

// 用户名判断函数
function yhM(a) {
    // 简单判断输入的值长度是否2-5  输入框获取到的都是字符串
    if (a.length >= 2 && a.length <= 5) {
        ts[0].innerHTML = ''
    } else {
        ts[0].innerHTML = '* 用户名在2到5个字符'
    }
}

//密码判断函数
function mM(a) {
    // 密码判断6-10
    if (a.length >= 6 && a.length <= 10) {
        ts[1].innerHTML = ''
    } else {
        ts[1].innerHTML = '* 密码在6到10个字符'
    }
}
// 创建确认密码函数
function qrmm(a, c) {
    a.classList.remove('jj')
    // 与密码的值是否一致
    console.log(ts[2] + 111);
    if (a.value === c.value) {

        ts[2].innerHTML = ''
    } else if (a.value === '' || a.value !== c.value) {

        ts[2].innerHTML = '* 密码不一致'
    }
}


// 用户名失去焦点 出现提示
dlipts[0].addEventListener('blur', () => {
    //    调用用户名判断函数
    let yhm = dlipts[0].value
    yhM(yhm)

})

// 密码失去焦点 出现提示
dlipts[1].addEventListener('blur', () => {

    let mmz = dlipts[1].value
    mM(mmz)
})
// 确认密码失去焦点 出现提示
dlipts[2].addEventListener('blur', () => {
    qrmm(dlipts[2], dlipts[1])
})





// 获取按钮 禁用与不禁用 有一个触发事件之后获取输入框的值

let btn = document.getElementsByClassName('jy'); //w伪数组
let btns = Array.from(btn);


// 发请求 当登录按钮点击时

btns[0].addEventListener('click', () => {
    // qrmm(dlipts[2], ts[2], dlipts[1]);
    // 判断提示语是否全部为空 必须使用参数
    let tsy = ts.every((a, b) => {
        return a.innerHTML === ''
    })
    // console.log(tsy);
    // 判断输入框是否全部不为空 必须使用参数
    let srz = dlipts.every((a) => {
        // console.log(11);
        return a.value !== ''
    })
    // console.log(srz);



    // 当两项都满足时点击才能发出请求
    if (tsy && srz) {

        // 获取用户输入的名字与密码
        let u = dlipts[0].value
        // console.log(u);
        let p = dlipts[1].value
        $.ajax({
            url: 'https://www.liulongbin.top:8888/api/private/v1/login',
            method: 'POST',
            data: {
                username: u,
                password: p,
            },
            success: (res) => {
                console.log(res)
                if (res.data === null) {
                    alert('请输入正确用户名与密码')
                } else {
                    // 用户名密码正确之后储存用户名，到首页获取用户名
                    localStorage.setItem('username', u)
                    window.open('../首页/index.html', '_self')
                }
            },
            error: (err) => {
                console.log('请求失败', err.responseJSON)
            }
        })


    }














})









