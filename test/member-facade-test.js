(function () {
  var assert = buster.assert;

  buster.testCase('MemberFacade', {
    
    setUp: function () {
      this.stub(JZ.serverFacade, 'postJSON');
      this.user = { id: 17 };
    },
    
    "should POST and get json back": function () {
      JZ.memberFacade.invite(this.user, '', {});
      assert.called(JZ.serverFacade.postJSON);
    },
    
    "should build invite URL": function () {
      JZ.memberFacade.invite(this.user, '', {});
      assert.calledWith(JZ.serverFacade.postJSON, "/members/17/invite");
    },
    
    "should send message as 'msg'": function () {
      JZ.memberFacade.invite(this.user, 'plz join', {});
      var params = JZ.serverFacade.postJSON.getCall(0).args[1];
      assert.match(params, { msg: 'plz join' });
    },
    
    "should pass on callbacks": function () {
      var func = function () {};
      JZ.memberFacade.invite(this.user, 'plz join', {
        success: func
      })
      var callbacks = JZ.serverFacade.postJSON.getCall(0).args[2];
      assert.equals(callbacks.success, func);
    },
    
    "should define handler for unknownUser": function () {
      JZ.memberFacade.invite(this.user, 'plz join', {})
      var callbacks = JZ.serverFacade.postJSON.getCall(0).args[2];
      assert.isFunction(callbacks.unknownUser);
    }
    
  });
  
}());