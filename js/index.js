$(function(){
  $('ul li').click(function(){
      // 頁面平滑滾動到相對應位置
      scrollToTop($("."+$(this).attr("id")).offset().top)
  })
  /* 监听滚动 */
  $(document).scroll(function() {
    if ($(document).height() <= (parseInt($(document).scrollTop() + 1) + $(window).height())){  //滚动条滑到底部啦
      $("ul li").removeClass('active')
      $("ul li:last").addClass('active')
      return;
    }
    var top = $(document).scrollTop();  //滚动条距离顶部的高度
    $(".text").each(function (i,item) {
        if($(this).offset().top <= top){
            $("ul li").removeClass('active')
            $("#"+item.classList[1]).addClass('active');
        }
    })
  });
})
/** 将滚动轴滚到相应位置 */
function scrollToTop(number) {
  window.scrollTo({
      top: number,
      behavior: "smooth"
  });
}