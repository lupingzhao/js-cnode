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


//发送请求
//前面发送点击事件的售后路径的？问号后面就是获取到的形式是字符串形势的，需要将其转换为数组形式的
let id = location.search
$.ajax({
    url: `https://cnodejs.org/api/v1/topic/`,
    method: 'GET',
    success: (res) => {
        console.log(res)
    },
    error: (err) => {
        console.log('请求失败', err);
    }

})