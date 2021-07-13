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
let q = 0
let ts = Array.from(document.getElementsByClassName('ts'));
ts.map((a) => {

    // 用户名失去焦点 出现提示
    dlipts[0].addEventListener('blur', () => {

        // 简单判断输入的值长度是否2-5  输入框获取到的都是字符串
        // 获取input的值
        let yhz = dlipts[0].value
        q = 1
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


})

if



// 输入框失去焦点时判断当密码与用户名的长度都满足基础判断时（及内容为空） 取消按钮的禁用属性
// 获取按钮

// let btn = document.getElementsByClassName('btn'); //w伪数组
// let btns = Array.from(btn);
// if (mmts.innerHTML === '' && yhmts.innerHTML === '') {
    // btns.map((a) => {
        // console.log(12345);
        // 给btns的每一个创建属性
// 
        // a.setAttribute('disabled', false);
// 
        // 给每个btns传入创建的属性
        // a.getAttribute('disabled')
    // })
// }