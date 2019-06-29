$(function() {
  function buildHTML(message) {
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
                       ${message.content}
                     </p>
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
      $('.form-message').val('')
    })
    .fail(function(data) {
      alert('エラーが発生しました。')
    })
  })
});