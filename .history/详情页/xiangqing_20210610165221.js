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
// console.log(location);

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
            let fbsjc = getTimeDifference(dayjs().valueOf(), dayjs(res.data.create_at).valueOf())
            // console.log(dayjs(new Date()).valueOf());
            // console.log(dayjs(res.data.create_at).valueOf());

            fbsj.innerHTML = `发布时间：${fbsjc}`

            bt2.innerHTML = `<h1>${res.data.title}</h1>`;
            zzm.innerHTML = `${res.data.author.loginname}`;
            llan.innerHTML = `${res.data.visit_count}次浏览`

            let zhycsj = getTimeDifference(dayjs().valueOf(), dayjs(res.data.last_reply_at).valueOf())
            ltime.innerHTML = `最后回复于${zhycsj}`

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


            let pl = document.getElementById('pl');
            let hf = document.getElementsByClassName('hf')[0];
            if (fx.innerHTML === '来自问答') {
                let plsz = res.data.replies
                // let a = res.data.replies.length
                hf.innerHTML = `${res.data.replies.length}&nbsp; 回复`
                plsz.map((a, b) => {
                    // console.log(a);
                    // 创建元素
                    let pl1 = document.createElement('div');
                    pl1.classList.add('pl1')
                    let plyh = document.createElement('div');
                    plyh.classList.add('plyh')
                    let plimg = document.createElement('img');
                    plimg.classList.add('pl-img')
                    let plm = document.createElement('div');
                    plm.classList.add('plm')
                    let lc = document.createElement('div');

                    lc.classList.add('lc')
                    let plz1 = document.createElement('div');
                    let plz2 = document.createElement('div');
                    let dot = document.createElement('div');
                    dot.classList.add('dot')
                    let plnr = document.createElement('div');
                    plnr.classList.add('plnr')


                    // 组装盒子
                    plyh.appendChild(plimg);
                    plyh.appendChild(plm);
                    plyh.appendChild(lc);
                    lc.appendChild(plz1);
                    lc.appendChild(dot);
                    lc.appendChild(plz2);
                    pl1.appendChild(plyh)
                    pl1.appendChild(plnr)
                    pl.appendChild(pl1)

                    // 赋值
                    plimg.src = `${a.author.avatar_url}`
                    console.log(a.author.avatar_url);
                    plm.innerHTML = `${a.author.loginname}`
                    let n = 1
                    plz1.innerHTML = `${b + 1}楼`

                    // 评论时间
                    let plsj = getTimeDifference(dayjs().valueOf(), dayjs(a.create_at).valueOf())

                    plz2.innerHTML = `${plsj}发布`

                    plnr.innerHTML = `${a.content}`




                })


            }











        }



    },
    error: (err) => {
        console.log('请求失败', err);
    }

})