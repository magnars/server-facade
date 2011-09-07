/* En likanes løsning
*/

var memberFacade = serverFacade.create({
  invite: function (user, message) {
    var url = "/members/" + user.id + "/invite.json";
    this.postJSON(url, {msg: message}, {
      success: function () { ... },
      error: function () { ... }
    });
  }
});
