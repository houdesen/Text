$(function () {
    var fontNode = $(
        "<div class='notepad-dlg-mask notepad-dlg-font'>"+
        "<div class='dialogbox notepad-dlgbox'>"+
            "<div class='notepad-dlg-titlebar'>"+
                "<p class='title'>字体</p><span class='close-btn' title='关闭'>✖</span>"+
            "</div>"+
            "<div class='main notepad-dlg-main'>"+
                "<div class='font-family'>"+
                    "<p>字体(F):</p>"+
                    "<div class='notepad-com-list' style='width: 176px;'><input class='editor' draggable='true' type='text' value='Arial'><br>"+
                        "<ul class='list'>"+
                            "<li class='item' style='font-family: Agency FB;'>Agency FB</li>"+
                            "<li class='item' style='font-family: Algerian;'>Algerian</li>"+
                            "<li class='item selected' style='font-family: Arial;'>Arial</li>"+
                            "<li class='item' style='font-family: Arial Rounded MT;'>Arial Rounded MT</li>"+
                            "<li class='item' style='font-family: Axure Handwriting;'>Axure Handwriting</li>"+
                            "<li class='item' style='font-family: Bahnschrift;'>Bahnschrift</li>"+
                            "<li class='item' style='font-family: Baskerville Old Face;;'>Baskerville Old Face</li>"+
                            "<li class='item'>Bauhaus 93</li>"+
                            "<li class='item' style='font-family: Bell MT;'>Bell MT</li>"+
                            "<li class='item' style='font-family: Berlin Sans FB;'>Berlin Sans FB</li>"+
                            "<li class='item' style='font-family: Bernard MT;'>Bernard MT</li>"+
                            "<li class='item' style='font-family: BlackAdder ITC;'>BlackAdder ITC</li>"+
                        "</ul>"+
                    "</div>"+
                "</div>"+
                "<div class='font-style'>"+
                    "<p>字形(Y):</p>"+
                    "<div class='notepad-com-list' style='width: 132px;'><input class='editor' draggable='true' type='text' value='常规'><br>"+
                        "<ul class='list'>"+
                            "<li class='item selected'>常规</li>"+
                            "<li class='item' style='font-style: italic;'>斜体</li>"+
                            "<li class='item' style='font-weight: bold;'>粗体</li>"+
                            "<li class='item' style='font-weight: bold; font-style: italic;'>粗偏斜体</li>"+
                        "</ul>"+
                    "</div>"+
                "</div>"+
                "<div class='font-size'>"+
                    "<p>大小(S):</p>"+
                    "<div class='notepad-com-list' style='width: 64px;'><input class='editor' draggable='true' type='text' value='16'><br>"+
                        "<ul class='list'>"+
                            "<li class='item'>8</li>"+
                            "<li class='item'>9</li>"+
                            "<li class='item'>10</li>"+
                            "<li class='item'>11</li>"+
                            "<li class='item'>12</li>"+
                            "<li class='item'>14</li>"+
                            "<li class='item selected'>16</li>"+
                            "<li class='item'>18</li>"+
                            "<li class='item'>20</li>"+
                            "<li class='item'>22</li>"+
                            "<li class='item'>24</li>"+
                            "<li class='item'>26</li>"+
                            "<li class='item'>28</li>"+
                            "<li class='item'>36</li>"+
                            "<li class='item'>48</li>"+
                            "<li class='item'>72</li>"+
                        "</ul>"+
                    "</div>"+
                "</div>"+
                "<fieldset class='sample'>"+
                    "<legend>示例</legend>"+
                    "<p class='sample-txt' style='font-family: Arial; font-size: 16px;'>AaBbYyZz</p>"+
                "</fieldset>"+
                "<div class='script'><label>脚本(R):<br><select>"+
                            "<option value='西欧语言'>西欧语言</option>"+
                            "<option value='中文 GB2312'>中文 GB2312</option>"+
                        "</select></label></div><input class='btn-ok btn' type='button' value='确定'>"+
                        "<input class='btn-cancel btn' type='button' value='取消'>"+
            "</div>"+
        "</div>"+
    "</div>"
    )
    for (let m = 0; m < $('.menu-item').length; m++) {
        $('.menu-item').eq(m).click(() => {
            if ($('.menu-item').eq(m).html() == '字体(F)...') {
                show(fontNode);
                $('#lid').css('display','block')
                for (let index = 0; index < $('.title').length; index++) {
                    if ($(".menus").eq(index).hasClass('active')) {
                        $(".menus").eq(index).removeClass('active');
                        $(".title").unbind('mouseover')
                    }
                }
            }
        })
    }
})

function show(fontNode) {
    var f = [];
    var y = [];
    var s = [];
    $('body').append(fontNode);
    $('.notepad-dlg-titlebar').mousedown(()=>{
        $('.notepad-dlg-mask').draggable();
        $('.notepad-dlg-main').mousedown(()=>{
            event.stopPropagation();
        });
        console.log(111);
    });
    $('.close-btn,.btn-cancel').click(()=>{
        $('.notepad-dlg-mask').remove();
        $('#lid').css('display','none')
    });
    $('.btn-ok').click(()=>{
        if($('.editor').eq(1).val() == '常规'){
            $('textarea').css({
                'font-family':$('.editor').eq(0).val(),
                'font-size':$('.editor').eq(2).val()+'px',
                'font-style': '',
                'font-weight':'',
            })
        }else if($('.editor').eq(1).val() == '斜体'){
            $('textarea').css({
                'font-family':$('.editor').eq(0).val(),
                'font-size':$('.editor').eq(2).val()+'px',
                'font-style': 'italic',
                'font-weight':'',
            })
        }else if($('.editor').eq(1).val() == '粗体'){
            $('textarea').css({
                'font-family':$('.editor').eq(0).val(),
                'font-size':$('.editor').eq(2).val()+'px',
                'font-style': '',
                'font-weight':'bold',
            })
        }else{
            $('textarea').css({
                'font-family':$('.editor').eq(0).val(),
                'font-size':$('.editor').eq(2).val()+'px',
                'font-style': 'italic',
                'font-weight':'bold',
            })
        }
        $('.notepad-dlg-mask').remove();
        $('#lid').css('display','none')
    })



    for(let a = 0; a < $('.list').eq(0).children().length;a++){
        f.push($('.item').eq(a).html());
        $('.item').eq(a).click(()=>{
            $('.item').eq(a).addClass('selected');
            $('.editor').eq(0).val($('.item').eq(a).html())
            for(let b = 0; b < $('.list').eq(0).children().length;b++){
                if(a!=b &&  $('.item').eq(b).hasClass('selected')){
                    $('.item').eq(b).removeClass('selected');
                }
            }
        })
    }
    for(let a = $('.list').eq(0).children().length; a < $('.list').eq(0).children().length+$('.list').eq(1).children().length;a++){
        y.push($('.item').eq(a).html())
        $('.item').eq(a).click(()=>{
            $('.item').eq(a).addClass('selected');
            $('.editor').eq(1).val($('.item').eq(a).html())
            for(let b = $('.list').eq(0).children().length; b < $('.list').eq(0).children().length+$('.list').eq(1).children().length;b++){
                if(a!=b &&  $('.item').eq(b).hasClass('selected')){
                    $('.item').eq(b).removeClass('selected');
                }
            }
        })
    }
    for(let a = $('.list').eq(0).children().length+$('.list').eq(1).children().length; a < $('.list').eq(0).children().length+$('.list').eq(1).children().length+$('.list').eq(2).children().length;a++){
        s.push($('.item').eq(a).html())
        $('.item').eq(a).click(()=>{
            $('.item').eq(a).addClass('selected');
            $('.editor').eq(2).val($('.item').eq(a).html())
            for(let b = $('.list').eq(0).children().length+$('.list').eq(1).children().length; b < $('.list').eq(0).children().length+$('.list').eq(1).children().length+$('.list').eq(2).children().length;b++){
                if(a!=b &&  $('.item').eq(b).hasClass('selected')){
                    $('.item').eq(b).removeClass('selected');
                }
            }
        })
    }

    //输入框验证
    $('.editor').eq(0).focusout(()=>{
        // console.log($.inArray($('.editor').eq(0).val(),f)<0)
        if($('.editor').eq(0).val() == '' || $.inArray($('.editor').eq(0).val(),f)<0){
            alert('字体格式输入有误');
            $('.notepad-dlg-mask').removeClass('ui-widget-content');
            
        }
    })
    $('.editor').eq(1).focusout(()=>{
        if($('.editor').eq(1).val() == '' || $.inArray($('.editor').eq(1).val(),y)<0){
            alert('字形格式输入有误');
            $('.notepad-dlg-mask').removeClass('ui-widget-content');
        }
    })
    $('.editor').eq(2).focusout(()=>{
        if($('.editor').eq(2).val() == '' || $.inArray($('.editor').eq(2).val(),s)<0){
            alert('字型大小输入有误');
            $('.notepad-dlg-mask').removeClass('ui-widget-content');
        }
    })

}
