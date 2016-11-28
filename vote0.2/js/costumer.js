$(function() {
    smoothScroll(750);

    $(".work-container").hide(800);

});

function smoothScroll (duration) {
    $('a[href^="#"]').click('click', function(event) {

        var target = $( $(this).attr('href') );

        if( target.length ) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, duration);
        }
    });
    $('.modal').click('click', function(event) {

        var target = $( $(this).attr('href') );

        if( target.length ) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, duration);
        }
    });
}


// Get the modal login
var modal1 = document.getElementById('id01');

// When the user clicks anywhere outside of the modal1, close it
window.onclick = function(event) {
        if (event.target == modal1) {
            modal1.style.display = "none";
        }
    }


$(function(){
    $(".work-container").hide(1);
    $('.detiles').click(function  () {
        console.log('asdfasdfasdf');
        $('.Collections').css('left','-100%').show(800);
        $(".work-container").show(800);
    });

    $('.work-return').click(function(event) {
        $('.Collections').css('left','0%');
        $(".work-container").hide(800);
    });
});

$(function(){
    var len = 200; // 超過200個字以"..."取代
    $(".work-text").each(function(i){
        if($(this).text().length>len){
            $(this).attr("title",$(this).text());
            var text=$(this).text().substring(0,len-1)+"...";
            $(this).text(text);
        }
    });
});


$('input[type="submit"]').mousedown(function(){
    $(this).css('background', '#2ecc71');
});
$('input[type="submit"]').mouseup(function(){
    $(this).css('background', '#1abc9c');
});

$('#loginform').click(function(){
    $('.login').fadeToggle('slow');
    $(this).toggleClass('green');
});



$(document).mouseup(function (e)
{
    var container = $(".login");

    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        container.hide();
        $('#loginform').removeClass('green');
    }
});

// REQUIRED: "jQuery Query Parser" plugin.
// https://github.com/mattsnider/jquery-plugin-query-parser
// Minified version here:
(function($){var pl=/\+/g,searchStrict=/([^&=]+)=+([^&]*)/g,searchTolerant=/([^&=]+)=?([^&]*)/g,decode=function(s){return decodeURIComponent(s.replace(pl," "));};$.parseQuery=function(query,options){var match,o={},opts=options||{},search=opts.tolerant?searchTolerant:searchStrict;if('?'===query.substring(0,1)){query=query.substring(1);}while(match=search.exec(query)){o[decode(match[1])]=decode(match[2]);}return o;};$.getQuery=function(options){return $.parseQuery(window.location.search,options);};$.fn.parseQuery=function(options){return $.parseQuery($(this).serialize(),options);};}(jQuery));

// YOUTUBE VIDEO CODE
$(document).on('click', '.trigger-link', function (event) {
    event.preventDefault();
    $('#modal-demo').iziModal('open');
});

$(document).ready(function(){




// BOOTSTRAP 3.0 - Open YouTube Video Dynamicaly in Modal Window
// Modal Window for dynamically opening videos
    $('a[href^="http://www.youtube.com"]').on('click', function(e){
        // Store the query string variables and values
        // Uses "jQuery Query Parser" plugin, to allow for various URL formats (could have extra parameters)
        var queryString = $(this).attr('href').slice( $(this).attr('href').indexOf('?') + 1);
        var queryVars = $.parseQuery( queryString );

        // if GET variable "v" exists. This is the Youtube Video ID
        if ( 'v' in queryVars )
        {
            // Prevent opening of external page
            e.preventDefault();

            // Variables for iFrame code. Width and height from data attributes, else use default.
            var vidWidth = '100%'; // default
            var vidHeight = '100%'; // default
            if ( $(this).attr('data-width') ) { vidWidth = parseInt($(this).attr('data-width')); }
            if ( $(this).attr('data-height') ) { vidHeight =  parseInt($(this).attr('data-height')); }
            var iFrameCode = '<h2>'+$(this).parent().children().eq(0).text()+'</h2>'+
                '<iframe width="' + vidWidth + '" height="'+ vidHeight +'" scrolling="no" allowtransparency="true" allowfullscreen="true" src="http://www.youtube.com/embed/'+  queryVars['v'] +'?rel=0&wmode=transparent&showinfo=0" frameborder="0"></iframe>';

            // Replace Modal HTML with iFrame Embed
            $('#mediaModal .modal-body').html(iFrameCode);
            // Set new width of modal window, based on dynamic video content
            $('#mediaModal').on('show.bs.modal', function () {
                // Add video width to left and right padding, to get new width of modal window
                var modalBody = $(this).find('.modal-body');
                var modalDialog = $(this).find('.modal-dialog');
                var newModalWidth = vidWidth + parseInt(modalBody.css("padding-left")) + parseInt(modalBody.css("padding-right"));
                newModalWidth += parseInt(modalDialog.css("padding-left")) + parseInt(modalDialog.css("padding-right"));
                //newModalWidth += 'px';
                // Set width of modal (Bootstrap 3.0)
                $(this).find('.modal-dialog').css('width', '50%');
                $(this).find('.modal-dialog').css('height', '50%');
            });

            // Open Modal
            $('#mediaModal').modal();
        }
    });

// Clear modal contents on close.
// There was mention of videos that kept playing in the background.
    $('#mediaModal').on('hidden.bs.modal', function () {
        $('#mediaModal .modal-body').html('');
    });

});
$(document).ready(function(){

    $('.checkbox').change(function() {
        if($(this).is(":checked")) {

            console.log($("input:checkbox:checked").length);

        }

    });
    $('.checkbox').change(function() {
        if($("input:checkbox:checked").length>6){
            if($(this).is(":checked")) {
                $(this).prop('checked', false);


            }
        }


    });
    $('.comfirm').click(function () {
        if($("input:checkbox:checked").length>6||$("input:checkbox:checked").length<=0){
           alert('請點選正確數目');
            window.location.replace(loc);
            }
    })

});

$(document).ready(function(){
    $("body").transit();
});

$(document).on("click",".transit", function(){
    $("body").transit();
});

$(document).on("click", ".div1", function(){
    $(".transitDiv").transit();
});




