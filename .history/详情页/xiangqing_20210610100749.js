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
// let id1 = location.search  //获取本地id
// console.log(id);
let id = location.search.split('=')[1];  //取数组下标为1的元素，及id的值
$.ajax({
    url: `https://cnodejs.org/api/v1/topic/${id}`,
    method: 'GET',
    success: (res) => {
        console.log(res);

        if (res.success) {
            //   获取标题行内容
            // 创建元素并附样式
            let bth = document.createElement('div')


            let left = document.getElementById('left');
            let nr = res.data.content;
            // console.log(nr);

            left.innerHTML = `${nr}`









        }



    },
    error: (err) => {
        console.log('请求失败', err);
    }

})