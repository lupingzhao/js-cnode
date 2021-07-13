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

// 用户名失去焦点 出现提示
dlipts[0].addEventListener('blur', () => {

    // 简单判断输入的值长度是否2-5  输入框获取到的都是字符串
    // 获取input的值
    let yhz = dlipts[0].value
    console.log(yhz.length);

    let yhmts = document.getElementsByClassName('yhmts')[0];
    if (yhz.length < 2) {

        console.log(11);
        yhmts.innerHTML = '* 用户名在2到5个字符'

    } else if (yhz.length > 5) {

    }


})