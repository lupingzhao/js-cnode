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

let logo = document.getElementsByClassName
    ('logo')[0];
logo.addEventListener('click', () => {
    window.open('../首页/index.html', '_self')
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
            let fbsj = document.getElementsByClassName('fbsj')[0];
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
            // let fbsjgs = (dayjs().valueOf() - dayjs(res.data.author.create_at).valueOf()) /

            // 创建时间差的函数 a当前时间的时间戳 传入时间的时间戳
            function getTimeDifference(a, b) {

                let sjcz = (a - b) / 1000;
                // console.log(sjcz);
                if (sjcz < 1) {
                    return `刚刚`
                } else if (sjcz < 60) {
                    return `${sjcz}秒之前`
                } else if (sjcz / 60 < 60) {  //分钟数
                    return `${parseInt(sjcz / 60)
                        }分钟之前`
                } else if (sjcz / 3600 < 24) {
                    return `${parseInt(sjcz / 3600)
                        }个小时之前`
                } else if (sjcz / 3600 / 24 < 30) {
                    return `${parseInt(sjcz / 3600 / 24)
                        } 天之前`
                } else if (sjcz / 3600 / 24 / 30 < 12) {
                    return `${parseInt(sjcz / 3600 / 24 / 30)} 个月之前`
                } else if (sjcz / 3600 / 24 / 30 / 12 >= 1) {
                    return `${parseInt(sjcz / 3600 / 24 / 30 / 12)} 年之前`
                }

            }
            let fbsjc = getTimeDifference(dayjs().valueOf(), dayjs(res.data.author.create_at).valueOf())
            console.log((dayjs().valueOf() - dayjs(res.data.author.create_at).valueOf()) / 1000);

            fbsj.innerHTML = `${fbsjc}`

            bt2.innerHTML = `<h1>${res.data.title}</h1>`;
            zzm.innerHTML = `${res.data.author.loginname}`;
            llan.innerHTML = `${res.data.visit_count}次浏览`

            let zhycsj = getTimeDifference(dayjs().valueOf(), dayjs(res.data.author.last_reply_at).valueOf())
            ltime.innerHTML = `${zhycsj}`

            if (res.data.replies.tab === 'share') {
                fx.innerHTML = '来自分享'
            } else {
                fx.innerHTML = '来自问答'
            }

            // youbian
            let zzimg = document.getElementsByClassName('zzimg')[0];
            let zzm1 = document.getElementsByClassName('zzm1')[0];

            zzimg.src = `${res.data.author.avatar_url}`
            zzm1.innerHTML = `${res.data.author.loginname}`
            let nr = res.data.content;
            // console.log(nr);

            left.innerHTML = `${nr} `

            if (fx.innerHTML === '来自问答') {
                let pl = document.getElementById('pl');
                let hf = document.getElementsByClassName('hf');
                let a = res.data.replies.length
                // console.log(a);
                // hf.innerHTML = `${res.data.replies.length}`
                // res.data.replies.map()


            }











        }



    },
    error: (err) => {
        console.log('请求失败', err);
    }

})