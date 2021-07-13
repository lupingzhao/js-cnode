//  head  效果
//   获取input
let ipt = document.getElementById('ipt')
let ss = document.getElementsByClassName('icon-sousuo')[0]
ipt.addEventListener('mouseenter', () => {
    ipt.classList.add('ipt')
    ss.classList.add('sousuo')
})
ipt.addEventListener('mouseleave', () => {
    ipt.classList.remove('ipt')
    ss.classList.remove('sousuo')
})

//标题点击事件 排他事件   箭头函数不用this指代当前的
let bt = document.getElementsByClassName('bt')
let bts = Array.from(bt)

bts.map((a) => {
    a.addEventListener('click', () => {

        bts.map(function (a1) {
            a1.classList.remove('bt-dj');
        })
        a.classList.add('bt-dj')
        a.classList.add('shou')
        a.classList.remove('bt1')

    })
})

    // 获取内容
    // 发送请求
    & ajax({
        url: ' https://cnodejs.org/api/v1/topics',  //请求路径





    })
