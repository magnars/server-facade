/* En likanes løsning
*/

var memberFacade = serverFacade.create({
  invite: function (user, message, callbacks) {
    var url = "/members/" + user.id + "/invite";
    this.postJSON(url, {msg: message}, callbacks);
  }
});
