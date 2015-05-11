AppController = RouteController.extend({
  layoutTemplate: 'app'
});

AppController.events({
  'click [data-action=logout]' : function() {
    AccountsTemplates.logout();
  }
});
