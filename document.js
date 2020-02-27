var $section = $('.js-section'); // 各スライド
var $pager = $('#js-pager'); // ページャー枠

// scrollifyのオプション設定
var option = {
  section : '.js-section',
  easing: "swing",
  scrollSpeed: 600,
  scrollbars: true,
  before:function(index) {
    pagerCurrent(index); // ページャーに対応する順番にクラス名を付与
  },
  afterRender:function() {
    createPager(); // ページャーの作成
  }
};

$(function() {
  $('.portfolio_section').hide();
  console.log("aa")
  $('#portfolio1').fadeToggle(1000);
  
  $('.click_portfolio').on('click',function(){
    
    $('.portfolio_section').not($($(this).attr('href'))).hide();
      $.scrollify.disable();
      // フェードイン・アウトのアニメーション付で、表示・非表示を交互に実行する
      $($(this).attr('href')).fadeToggle(1000);
      console.log($(this).attr('href'))
      //$(this).css('color','purple');
      $(this).css('text-decoration','underline');
      $('.click_portfolio').not($(this)).css('text-decoration','none')
      // show を使うと、表示するだけ （ 同じボタンを何回押しても変わらない ）
      //$($(this).attr('href')).show();
      $.scrollify.enable();
  });

  $.scrollify(option); // scrollifyの実行
});



// ==============================
// functions
// ------------------------------

// ページャーに対応する順番にクラス名を付与
function pagerCurrent(index = 0) {
  var $li = $('#js-pager').find('li');
  $li.removeClass('is-current');
  $li.eq(index).addClass('is-current');
}


// ページャーの作成
function createPager() {
  
  $('.js-section').each(function(i, e){
    
    // ページ内リンク先の作成
    var sectionName = $(e).attr('data-section-name');
    console.log(sectionName)
    // 最初のliにはクラスを付与
    var addClass = '';
    if (i === 0) {
        addClass = 'is-current';
    }
    // liのHTML作成
    var html = '';
    html += '<li class="' + addClass + '">';
    html += '<a href="#' + sectionName + '"></a>';
    html += '</li>';
    $('#js-pager').append(html);
  });
  
  pagerLink();
}

// ページャーでaタグをクリックされたらスクロールする
function pagerLink () {
  
  $('#header1').find('a').on('click', function() {
    console.log($(this).attr("href"))
    $.scrollify.move($(this).attr("href"));
    $(this).toggleClass('active');

  });

  $('#js-pager').find('a').on('click', function() {
    $.scrollify.move($(this).attr("href"));
  });
}