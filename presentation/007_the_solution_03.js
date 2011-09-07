/* En likanes løsning
*/

var serverFacade = {
  postJSON: function () {
    $.ajax({
      url: "/members/" + user.id + "/invite.json",
      params: {
        msg: message
      },
      type: "POST",
      dataType: "json",
      contentType: "application/x-www-form-urlencoded;charset=UTF-8",
      timeout: 10000,
      success: function () { ... },
      error: function () { ... }
    });
  }
}
