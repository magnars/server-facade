/* En likanes løsning
*/

var serverFacade = {
  postJSON: function (url, params, callbacks) {
    $.ajax({
      url: url,
      params: params,
      type: "POST",
      dataType: "json",
      contentType: "application/x-www-form-urlencoded;charset=UTF-8",
      timeout: 10000,
      success: function () { ... },
      error: function () { ... }
    });
  }
}
