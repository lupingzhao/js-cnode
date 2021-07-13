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
$.ajax({
    url: ' https://cnodejs.org/api/v1/topics',  //请求路径
    method: 'GET',
    success: (res) => {
        console.log(res)
        if (res.success) {

            //创建元素
            // 一行的父元素 里面有两个子元素
            let hq = document.getElementById('hq');
            let hqf = document.createElement('div');
            let hqzl = document.createElement('div');
            let hqzr = document.createElement('div');

            hqzl.classList.add('flex');
            hqzr.classList.add('flex');
            //循环数组
            res.data.map((item) => {

                // 创建左边元素装获取到的东西
                // 第一张图片
                let img1 = document.createElement('img')
                let z1 = document.createElement('div')
                let z2 = document.createElement('div')
                let zd = document.createElement('div')
                let hqbt = document.createElement('div')

                let img2 = document.createElement('img')
                let sjc = document.createElement('div')

                // 每一个元素赋值

                img1.src = item.author.avatar_url;
                z1 = item.reply_count;
                z2 = item.visit_count;
                // zd = item.top;   //zhenjia
                // 判断置顶
                if (item.top) {
                    zd.innerText = '置顶'
                    zd.classList.add('hq-zd')
                } else {
                    if (item.tab === "share") {
                        zd.innerText = '分享'
                        zd.classList.add('hq-f-zd')
                    } else if (item.tab === "ask") {
                        zd.innerText = '问答'
                        zd.classList.add('hq-f-zd')
                    }
                }

                hqbt = item.title;

                // 组装盒子
                hqzl.appendChild(img1);
                hqzl.appendChild(z1);
                hqzl.innerText = '/';
                hqzl.appendChild(z2);
                hqzl.appendChild(zd);
                hqzl.appendChild(hqbt);
                hq.appendChild(hqzl);



            })



        }




    }




})
