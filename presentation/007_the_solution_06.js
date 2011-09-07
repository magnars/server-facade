/* En likanes løsning
*/

var url = "/members/" + user.id + "/invite.json";
serverFacade.postJSON(url, {msg: message}, {
  success: function () { ... },
  error: function () { ... }
});

