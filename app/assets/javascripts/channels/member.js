$(function() {
  $(document).on("click", ".user-search-add.chat-group-user__btn.chat-group-user__btn--add", function (e) {
    
    var chat_group_list = $("#chat-group-users");

    function appendUser(result) {
      var html = `<div class='chat-group-user clearfix js-chat-member' id='chat-group-user-8'>
                    <input name='group[user_ids][]' type='hidden' value= '${result.userId}' id= 'group_user_ids' >
                    <p class='chat-group-user__name'>${result.userName}</p>
                    <div class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</div>
                  </div>`
      chat_group_list.append(html);
    }


    var user = e.target
    const result = $(user).data();
 
      appendUser(result)
  });
});