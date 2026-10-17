    window.onload=function(){
        console.log("页面加载完成");
    };

const backTotopBtn = document.getElementById('back-top');

    window.addEventListener("scroll",function(){
        if(window.scrollY>200){
            backTotopBtn.style.display = "block";
        }else{
            backTotopBtn.style.display = "none";
        }
    });

    backTotopBtn.addEventListener("click",function(){
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    });

const backGroundBtn = document.getElementById('type');
const bgClass = ["bg1","bg2"];
    let bgIndex = 0;

    backGroundBtn.addEventListener("click",function(){
        document.body.classList.remove(bgClass[bgIndex]);
        bgIndex = (bgIndex+1)%bgClass.length;
        document.body.classList.add(bgClass[bgIndex]);
        localStorage.setItem("bgIndex",bgIndex);
    })