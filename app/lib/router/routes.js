Router.route('/', {
  name: 'home',
  controller: 'PublicController',
  where: 'client',
  action: 'action'
});

Router.plugin('ensureSignedIn', {
  except: ['home', 'atSignIn']
});
Router.plugin('dataNotFound', {dataNotFoundTemplate: 'notFound'});