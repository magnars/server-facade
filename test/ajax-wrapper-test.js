(function () {
  var assert = buster.assert;

  buster.testCase('AjaxWrapper', {
  
    setUp: function () {
      this.stub(jQuery, 'ajax');
      this.getAjaxOptions = function () {
        return jQuery.ajax.getCall(0).args[0];
      };
    },
  
    "should delegate to jQuery.ajax": function () {
      JZ.ajax.postJSON();
      assert.called(jQuery.ajax);
    },
    
    "should expand options with type and dataType": function () {
      JZ.ajax.postJSON();
      assert.match(this.getAjaxOptions(), { type: 'POST', dataType: 'json' });
    },
    
    "should pass on given options": function () {
      JZ.ajax.postJSON({ url: 'url' })
      assert.match(this.getAjaxOptions(), { url: 'url' });
    },
    
    "shouldn't overwrite given options": function () {
      JZ.ajax.postJSON({ type: 'GET' })
      assert.match(this.getAjaxOptions(), { type: 'GET' });
    },
    
    "200 OK": {
      "should call registered callback matching result": function () {
        var u = this.stub();
        JZ.ajax.postJSON({}, { unknownUser: u });
        this.getAjaxOptions().success({ result: 'unknownUser' });
        assert.called(u);
      },

      "given no specified result should call success-callback": function () {
        var s = this.stub(), response = {};
        JZ.ajax.postJSON({}, { success: s });
        this.getAjaxOptions().success(response);
        assert.called(s);
        assert.calledWith(s, response);
      },

      "given unknown result should call error-callback": function () {
        var e = this.stub();
        JZ.ajax.postJSON({}, { error: e });
        this.getAjaxOptions().success({ result: 'unknownError' });
        assert.called(e);
      },
      
      "timeout should trigger with null response": function () {
        var t = this.stub();
        JZ.ajax.postJSON({}, { timeout: t });
        this.getAjaxOptions().success(null);
        assert.called(t);
      }
    },
    
    "should call timeout with error status:timeout": function () {
      var t = this.stub(), xhr = {};
      JZ.ajax.postJSON({}, { timeout: t });
      this.getAjaxOptions().error(xhr, 'timeout');
      assert.called(t);
    },
    
    "should call accessDenied with error code:400": function () {
      var s = this.stub(), xhr = { status: 400 };
      JZ.ajax.postJSON({}, { accessDenied: s });
      this.getAjaxOptions().error(xhr, 'error');
      assert.called(s);
    },
    
    "should call internalServerError with error code:500": function () {
      var s = this.stub(), xhr = { status: 500 };
      JZ.ajax.postJSON({}, { internalServerError: s });
      this.getAjaxOptions().error(xhr, 'error');
      assert.called(s);
    }
    
  });
}());