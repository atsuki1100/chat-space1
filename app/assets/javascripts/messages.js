$(function() {
  function buildHTML(message) {
    var content = message.content ? `${ message.content }` : " ";
    var img = message.image.url ? `<img class="lower-message__image" src= ${ message.image }>` : " ";
    var html =  `<div class="chat-main__contents--message">
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
});