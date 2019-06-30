$(function() {
  $(document).on("click", ".user-search-add.chat-group-user__btn.chat-group-user__btn--add", function (e) {
    
    var chat_group_list = $("#chat-group-users");

    function appendUser(user) {
      var html = `<div class="chat-group-user clearfix">
                    <p class="chat-group-user__name">${user.name}</p>
                    <div class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="${user.name}">追加</div>
                  </div>`
      chat_group_list.append(html);
    }


    var user = e.target
      appendUser(user)
  });
})