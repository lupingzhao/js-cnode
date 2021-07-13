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


// 获取提示，并循环


let ts = Array.from(document.getElementsByClassName('ts'));


// 用户名失去焦点 出现提示
dlipts[0].addEventListener('blur', () => {

    // 简单判断输入的值长度是否2-5  输入框获取到的都是字符串
    // 获取input的值
    let yhz = dlipts[0].value

    if (yhz.length >= 2 && yhz.length <= 5) {

        ts[0].innerHTML = ''

    } else {

        ts[0].innerHTML = '* 用户名在2到5个字符'
    }

})

// 密码失去焦点 出现提示
dlipts[1].addEventListener('blur', () => {

    let mmz = dlipts[1].value
    // 密码判断6-10
    if (mmz.length >= 6 && mmz.length <= 10) {

        ts[1].innerHTML = ''
    } else {

        ts[1].innerHTML = '* 密码在6到10个字符'
    }
})

// 确认密码失去焦点 出现提示
dlipts[2].addEventListener('blur', () => {
    // 与密码的值是否一致
    if (dlipts[2].value === dlipts[1].value) {

        ts[2].innerHTML = ''
    } else {

        ts[2].innerHTML = '* 密码不一致'
    }

})



// 所有输入框在失去焦点时 每一个ts都为空


// 获取按钮

let btn = document.getElementsByClassName('jy'); //w伪数组
let btns = Array.from(btn);
ts.map((b) => {

    if (b.innerHTML === '') {
        dlipts.map((c) => {
            console.log(123);
        })

        // console.log(123);
        btns.map((a) => {
            // a.classList.replace('jy', 'btn')
            // a.classList.add('btn')
        })
    }
})






