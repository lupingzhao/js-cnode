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

//标题点击事件 排他事件
let bt = document.getElementsByClassName('bt')
let bts = Array.from(bt)

bts.map(function (a) {
    a.addEventListener('click', () => {

        bts.map(function (a1) {
            a1.classList.remove('bt-dj');
        })
        this.classList.add('bt-dj')
        this.classList.add('shou')
        this.classList.remove('bt1')

    })
})
