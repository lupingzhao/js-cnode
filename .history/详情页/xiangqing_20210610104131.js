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
            // 创建元素并附样式 一般只在循环里面创建元素 因为不知到有好多数据
            let zd = document.getElementsByClassName('zd')[0];

            let bt2 = document.getElementsByClassName('bt2')[0];

            let zzm = document.getElementsByClassName('zzm')[0];
            let llan = document.getElementsByClassName('llan')[0];
            let ltime = document.getElementsByClassName('ltime')[0];
            let fx = document.getElementsByClassName('fx-wd')[0];


            // 赋值
            if (res.top) {
                zd.innerHTML = '置顶';
                zd.style.background = 'rgb(128, 189, 1)'
            } else {
                zd.innerHTML = ''
            }

            bt2.innerHTML = `<h1>${res.data.title}</h1>`;
            zzm.innerHTML = `${res.data.author.loginname}`;
            llan.innerHTML = `${res.data.visit_count}`


            let nr = res.data.content;
            // console.log(nr);

            left.innerHTML = `${nr} `









        }



    },
    error: (err) => {
        console.log('请求失败', err);
    }

})