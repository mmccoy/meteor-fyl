Router.route('/', {
  name: 'home',
  data: {
    'page_title': 'Homepagerz!',
    'posts': function() {
      return Posts.find();
    }
  }
});

Router.route('/dashboard', {
  name: 'dashboard'
});

Router.plugin('ensureSignedIn', {
  only: ['dashboard']
});
