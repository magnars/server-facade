(function () {
  var assert = buster.assert;

  buster.testCase('ServerFacade', {

    "should create serverFacades": function () {
      assert.hasPrototype(JZ.serverFacade.create(), JZ.serverFacade);
    },

    "should extend with given methods": function () {
      var func = function () {};
      var facade = JZ.serverFacade.create({ method: func });
      assert.equals(facade.method, func);
    },

    "should define some default options": function () {
      var defaults = JZ.serverFacade.getDefaultOptions();
      assert.equals(defaults.timeout, 10000);
      assert.equals(defaults.contentType, 'application/x-www-form-urlencoded;charset=UTF-8');
    },

    "shouldn't be able to alter default options directly": function () {
      JZ.serverFacade.getDefaultOptions().timeout = 'wtf';
      assert.equals(JZ.serverFacade.getDefaultOptions().timeout, 10000);
    },

    "postJSON": {
      setUp: function () {
        this.stub(JZ.ajax, 'postJSON');
      },

      "should delegate to ajax-wrapper": function () {
        JZ.serverFacade.postJSON();
        assert.called(JZ.ajax.postJSON);
      },

      "should use default options": function () {
        var facade = JZ.serverFacade.create({
          getDefaultOptions: function () { return { timeout: 1337 }; }
        });
        facade.postJSON();
        var options = JZ.ajax.postJSON.getCall(0).args[0];
        assert.equals(options.timeout, 1337);
      },

      "should pass on url and params": function () {
        JZ.serverFacade.postJSON('url', 'params');
        var options = JZ.ajax.postJSON.getCall(0).args[0];
        assert.match(options, { url: 'url', params: 'params' });
      },

      "should pass on callbacks": function () {
        var func = function () {};
        JZ.serverFacade.postJSON('url', 'params', { success: func });
        var callbacks = JZ.ajax.postJSON.getCall(0).args[1];
        assert.equals(callbacks.success, func);
      },

      "should add global error handlers": function () {
        JZ.serverFacade.postJSON();
        var callbacks = JZ.ajax.postJSON.getCall(0).args[1];
        assert.isFunction(callbacks.loginRequired);
        assert.isFunction(callbacks.accessDenied);
        assert.isFunction(callbacks.timeout);
        assert.isFunction(callbacks.error);
      },

      "shouldn't overwrite given callbacks": function () {
        var func = function () {};
        JZ.serverFacade.postJSON('url', 'params', { error: func });
        var callbacks = JZ.ajax.postJSON.getCall(0).args[1];
        assert.equals(callbacks.error, func);
      }
    }

  });
  
}());
