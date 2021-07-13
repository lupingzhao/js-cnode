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
        // console.log(res)


        if (res.success) {

            //循环数组
            res.data.map((item) => {
                //创建元素
                // 一行的父元素 里面有两个子元素
                let hq = document.getElementById('hq');
                let hqf = document.createElement('div');
                let hqzl = document.createElement('div');
                let hqzr = document.createElement('div');
                //给每一个元素赋属性
                hqf.classList.add('hqnr');
                hqzl.classList.add('flex');
                hqzr.classList.add('flex');
                hq.appendChild(hqf);

                // 创建左边元素装获取到的东西
                // 第一张图片
                let img1 = document.createElement('img')

                let dv = document.createElement('div')
                let z1 = document.createElement('div')
                let xx = document.createElement('div')
                let z2 = document.createElement('div')

                let zd = document.createElement('div')
                let hqbt = document.createElement('div')
                let sjc = document.createElement('div')


                xx.innerText = ('/')
                xx.classList.add('p-2')
                img1.classList.add('hq-img1');
                z1.classList.add('hq-z-1');
                z2.classList.add('hq-z-2');
                sjc.classList.add('hq-sjc')
                hqbt.classList.add('hq-bt')
                dv.classList.add('flex');
                dv.classList.add('zzdhz');
                // 每一个元素赋值

                img1.src = item.author.avatar_url;
                z1.innerText = item.reply_count;
                z2.innerText = item.visit_count;

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

                hqbt.innerText = item.title;
                // 添加事件
                hqbt.addEventListener('click', () => {
                    window.open(`../详情页/xiangqing.html?id=${item.id}`, '_self')
                })
                //这时候就需要传入参数，即传入当前点击标题的id（后端写数据请求方式时已经写好的，不是前端想象的）

                // 组装左边盒子
                hqzl.appendChild(img1);
                dv.appendChild(z1);
                dv.appendChild(xx);
                dv.appendChild(z2);
                hqzl.appendChild(dv);
                hqzl.appendChild(zd);
                hqzl.appendChild(hqbt);
                hqf.appendChild(hqzl)

                //赋值右边盒子
                // 转换时间格式
                // sjc = item.last_reply_at
                // 判断时间
                //格式化发布时间
                // dayjs(item.last_reply_at).valueOf('YYYY年MM-DD hh:mm:ss')格式化时间
                // let fbsj = dayjs(item.last_reply_at).format('YYYY年MM-DD hh:mm:ss');
                // console.log(fbsj);
                // 发布时间的时间戳 计算差值
                let fbsj = dayjs(item.last_reply_at).valueOf();
                // 当前时间的时间戳 数字类型
                let dqsj = new Date().getTime()


                let sjcz = (dqsj - fbsj) / 1000;
                // console.log(sjcz);
                if (sjcz < 60) {
                    sjc.innerText = `${sjcz}秒之前`
                } else if (sjcz / 60 < 60) {  //分钟数
                    sjc.innerText = `${parseInt(sjcz / 60)
                        }分钟之前`
                } else if (sjcz / 3600 < 24) {
                    sjc.innerText = `${parseInt(sjcz / 3600)
                        }个小时之前`
                } else if (sjcz / 3600 / 24 < 30) {
                    sjc.innerText = `${parseInt(sjcz / 3600 / 24)
                        } 天之前`
                } else if (sjcz / 3600 / 24 / 30 < 12) {
                    sjc.innerText = `${parseInt(sjcz / 3600 / 24 / 30)} 个月之前`
                } else if (sjcz / 3600 / 24 / 30 / 12 >= 1) {
                    sjc.innerText = `${parseInt(sjcz / 3600 / 24 / 30 / 12)} 年之前`
                }

                // 组装右边盒子
                hqzr.appendChild(sjc);

                hqf.appendChild(hqzr);



            })

        }

    }, error: (err) => {
        console.log('请求失败', err)
    }

})



// 登录后页面 获取后台数据
let yhm = localStorage.getItem(' username')


