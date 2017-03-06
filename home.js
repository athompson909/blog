// Initialize Firebase
var config = {
  apiKey: "AIzaSyDcBCn_9Ad-TXJBPTgO0dyeZWOGUof129U",
  authDomain: "misviajecitos-3d2e6.firebaseapp.com",
  databaseURL: "https://misviajecitos-3d2e6.firebaseio.com",
  storageBucket: "misviajecitos-3d2e6.appspot.com",
  messagingSenderId: "261169410390"
};
firebase.initializeApp(config);

var app = angular.module('Blog', ['ui.router', 'ngSanitize'])
.factory('factory', [function() {
    var o = {
        displayvalue: []
    };
    return o;
}]);

app.config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: '/home.html',
                controller: 'HomeCtrl'
            })
            .state('blog', {
              url: '/blog',
              templateUrl: '/blog.html',
              controller: 'BlogCtrl'
            })
        $urlRouterProvider.otherwise('home');
    }]);
