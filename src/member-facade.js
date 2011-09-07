var JZ = this.JZ || {};

(function () {
  
  JZ.memberFacade = JZ.serverFacade.create({
    invite: function (user, message, callbacks) {
      var url = '/members/' + user.id + '/invite';
      callbacks.unknownUser = function () { alert('unknownUser'); };
      this.postJSON(url, { msg: message }, callbacks);
    }
  });
  
}());