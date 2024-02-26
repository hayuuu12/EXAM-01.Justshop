$(function(){
    
    $('.gnb').hover(function(){
        $('.lnb').fadeToggle();
    });

    $('.tabnav>li').click(function(e){
        e.preventDefault();
        $('.tabnav>li').removeClass('active');
        const href = $(this).find('a').attr('href');
        $(this).addClass('active');
        $('.tab').removeClass('active');
        $(href).addClass('active');
     });
     setInterval(slideUpDown, 3000); //slideUpDown 함수를 3초간 무제한 반복

     $('.pop').click(function(e){
        e.preventDefault();
        $('.popup').fadeIn();
     });

     $('.close').click(function(){
        $('.popup').fadeOut();
     });


});//JQ


//JQ안에 만들어도 되고 밖에 만들어도 됨
function slideUpDown(){
    $('.heroin').animate({  //첫 번째 이미지를 위로 -300px만큼 애니메이션 한다.
        top: '-300px'
     }, 300, function(){
        //애니 \메이션이 끝나면 두 번째 이미지가 보이게 된다. 
        //이때 첫 번째 이미지를 마지막에 복제(clone)하여 넣고 첫 번째에 있는 이미지는 삭제하여
        //그 다움 이미지가 첫 번째 이미지가 되도록 한다. 그리고 top을 초기화 해놓는다.
        $('.heroin img:eq(0)').clone().appendTo('.heroin');
        $('.heroin img:eq(0)').remove();
        $('.heroin').css("top", 0);
     });
}