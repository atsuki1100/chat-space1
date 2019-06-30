$(function() {
  $(document).on("click", ".user-search-add.chat-group-user__btn.chat-group-user__btn--add", function (e) {
    
    var chat_group_list = $("#chat-group-users");

    function appendUser(result) {
      var html = `<div class="chat-group-user clearfix">
                    <p class="chat-group-user__name">${result.userName}</p>
                    <div class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${ result.userId }" data-user-name="${result.userName}">削除</div>
                  </div>`
      chat_group_list.append(html);
    }


    var user = e.target
    const result = $(user).data();
 
      appendUser(result)
  });
})