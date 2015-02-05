/**
 * Created by fangminglu on 15-2-5.
 */
$(function(){
    $(".add").click(function(){
        var t=$(this).parent().find('input[class*=text_box]');
        t.val(parseInt(t.val())+1)
        setTotal();
        // missing();
    })
    $(".min").click(function(){
        var t=$(this).parent().find('input[class*=text_box]');
        t.val(parseInt(t.val())-1)
        if(parseInt(t.val())<0){
            t.val(0);
        }
        setTotal();
        //missing();
    })
    function setTotal(){
        var s=0;
        $("#tab td").each(function(){
            s+=parseInt($(this).find('input[class*=text_box]').val())
            *parseFloat($(this).find('span[class*=price]').text());
        });
        $("#total").html(s.toFixed(2));
    }
    setTotal();
    function missing(){
        var m=0;
        $("#tab td").each(function(){
            m=parseInt($(this).find('input[class*=text_box]').val())
            *parseFloat($(this).find('span[class*=price]').text());
        });
        $("#little").html(m.toFixed(2));
    }
    missing();
})