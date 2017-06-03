var newPost = {
  title: titleInput
    .val()
    .trim(),
  body: bodyInput
    .val()
    .trim(),
  AuthorId: authorSelect.val()
};



function submitNewUser(user) {
  $.post("/signup", post, function() {

  });
}
