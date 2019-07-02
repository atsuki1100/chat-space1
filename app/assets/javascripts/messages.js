$(function() {
  function buildHTML(message) {
    var content = message.content ? `${ message.content }` : " ";
    var img = message.image.url ? `<img class="lower-message__image" src= ${ message.image }>` : " ";
    var html =  `<div class="chat-main__contents--message" data-id= '${message.id}' >
                   <div class="nickname">
                     <div class="nickname__user">
                       ${ message.user_name }
                     </div>
                     <div class="nickname__time">
                       ${message.created_at}
                     </div>
                   </div>
                   <div class="comment">
                     <p class="lower-message__content">
                       ${content}
                     </p>
                     ${img}
                   </div>
                 </div>`
  return html;
  }
  $('#new_message').on('submit', function(e) {
    e.preventDefault();
    var message = new FormData(this);
    var url = $(this).attr('action');
    $.ajax( {
      url: url,
      type: 'POST',
      data: message,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data) {
      var html = buildHTML(data);
      $('.chat-main__contents').append(html)
      $('form')[0].reset();
      $('.chat-main__contents').animate({ scrollTop: $('.chat-main__contents')[0].scrollHeight});
    })
    .fail(function(data) {
      alert('エラーが発生しました。')
    })
    .always(function(data){
      $('.form-submit').prop('disabled', false);
    })
  })
  var reloadMessages = function() {
    if (window.location.href.match(/\/groups\/\d+\/messages/)){
    //カスタムデータ属性を利用し、ブラウザに表示されている最新メッセージのidを取得
    var last_message_id = $('.chat-main__contents--message').last('').data('id');
      $.ajax({
        //ルーティングで設定した通りのURLを指定
        url: 'api/messages',
        //ルーティングで設定した通りhttpメソッドをgetに指定
        type: 'get',
        dataType: 'json',
        //dataオプションでリクエストに値を含める
        data: {id: last_message_id}
      })
      .done(function(messages) {
        var insertHTML = '';
        messages.forEach(function(message){
          var insertHTML = buildHTML(message)
          $('.chat-main__contents').append(insertHTML)
        });
        $('.chat-main__contents').animate({scrollTop: $('.chat-main__contents')[0].scrollHeight}, 'fast');
      })
      .fail(function() {
        alert('エラーが発生しました。')
      });
    }
  };
  setInterval(reloadMessages, 5000);
});