
$(document).ready(function(){
    $slide = $("#slider ul li.item");
    let curIndex =1;
    let imgCount=$slide.length;
    setInterval(function(){
        if(curIndex>=imgCount)
            curIndex=0;
    
        $slide.removeClass('active');
        $slide.eq(curIndex++).addClass('active');
    },1000);
});
// $(document).ready(function () {
//     // 모든 이미지 아이템을 선택
//     $imgItems = $("#slider ul .item");
    
//     /* 변수의 선언
//         let = 변수 선언
//         const = 상수 선언
//     */ 
//     // 시작할 때의 index
//     let currentIndex = 1;
//     // 이미지 아이템의 개수
//     let imgCount = $imgItems.length; // 3
    

//     // 1초간격으로 Interval 을 실행 (1000ms = 1s)
//     // setInterval(function() { ... })
//     setInterval(() => {
//         if (currentIndex > (imgCount - 1)) {
//             currentIndex = 0;
//         }
//         $imgItems.removeClass('active')
//         $imgItems.eq(currentIndex++).addClass('active');
//         // currentIndex = currentIndex + 1;
//     }, 1000);
// });