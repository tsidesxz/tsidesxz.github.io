$(document).ready(function(){

  // var x = readCookie('seen');
  // console.log(x);
  // if (x == null || x == undefined){
  //   bannerad();
  //   createCookie('seen','true',1);
  // } else {
  //   $('#bannerad').toggleClass('displaynone');
  // };
  //$('#bannerad, #bannerad-bar').toggleClass('displaynone');
  bannerad();

  //get download
  //displayDlBtn(getMobileOS(),lang,countryCode,$('.addownload'));

  //remove fb if china
  /*if (countryCode == 'CN'){
    $('#fbsharebtn').css('display','none');
  };*/
  //remove whatssap if not android or ios
  /*if (getMobileOS() == 'unknown'){
    $('#washarebtn').css('display','none');
  };

  $('#closelink').on('click',function(){
    $('.getlink-display').addClass('displaynone');
  })*/

  /*$('#getlink').on('click',function(){
    clipboard.copy("http://www.geteasiway.com?ref=link").then(
      function(){
        $('.getlink-notice').removeClass('displaynone');
        var showNotice = setTimeout(function(){$('.getlink-notice').addClass('displaynone')},1200);
        console.log("success");
      },
      function(err){
        console.log("cant copy, fallback init");
        $('.getlink-display').removeClass('displaynone');
      }
    );
  });*/

  /*$('#howtoapply').on('click',function(){
    $('.how').toggleClass('displaynone')
  });*/

  $('#bannerad-bar').click(function(){
    var bannerad_height = $('#bannerad').outerHeight();
    $('#bannerad, #bannerad-bar').toggleClass('displaynone');
    bannerad();
    $(document).scrollTop(bannerad_height-100);
    $('html, body').animate({scrollTop:0},500);
  });

  /*$('#adlang').change(function(){
    var lang = $("#adlang").val();
    i18n_banner(lang);
    change_lang(lang);
    displayDlBtn(getMobileOS(),lang,countryCode,$('.addownload'));
  });*/
});

function bannerad() {
  $(document).on("scroll",function(){
    if ($(document).scrollTop() > $('#bannerad').outerHeight()){
      //$('#banner').css('display','none');
        $('#bannerad, #bannerad-bar').toggleClass('displaynone');
        $(document).scrollTop($('#bannerad-bar').height());
        $(document).off('scroll');
    }
  });
}

var urlParams;
(window.onpopstate = function () {
    var match,
        pl     = /\+/g,  // Regex for replacing addition symbol with a space
        search = /([^&=]+)=?([^&]*)/g,
        decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
        query  = window.location.search.substring(1);

    urlParams = {};
    while (match = search.exec(query))
       urlParams[decode(match[1])] = decode(match[2]);
})();
