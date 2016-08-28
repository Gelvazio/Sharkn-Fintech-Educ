var app = angular.module('sharkapp.controllers', []);

app.controller("IntroCtrl", function($scope) {
    // Called to navigate to the main app
    $scope.startApp = function() {
        $ionicHistory.nextViewOptions({
            disableBack: true
        });
        $state.go('app.dash');
    };


});

app.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    // Form data for the login modal
    $scope.loginData = {};

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/login.html', {
        scope: $scope
    }).then(function(modal) {
        $scope.modal = modal;
    });

    // Triggered in the login modal to close it
    $scope.closeLogin = function() {
        $scope.modal.hide();
    };

    // Open the login modal
    $scope.login = function() {
        $scope.modal.show();
    };

    // Perform the login action when the user submits the login form
    $scope.doLogin = function() {
        console.log('Doing login', $scope.loginData);

        // Simulate a login delay. Remove this and replace with your login
        // code if using a login system
        $timeout(function() {
            $scope.closeLogin();
        }, 1000);
    };
})

app.controller("ChatCtrl", function($scope){

});

app.controller('PlaylistCtrl', function($scope, $stateParams) {});

app.controller('ForumCtrl', function($scope, $stateParams) {});

app.controller('ForumexemCtrl', function($scope, $stateParams) {});

app.controller('HistoryCtrl', function($scope){
    
});

app.controller("DashCtrl", function($scope){
    $scope.linedata = [
        [500, 550, 470, 600, 700, 800],
    ];
    $scope.linecolor = ['#5e35b1'];
    $scope.linelabels = ["Mar", "Abr", "Mai", "Jun", "Jul", "Ago"];

    $scope.piedata = [
        40, 35, 10, 10, 5
    ];
    $scope.piecolors = ['#5e35b1', '#2E7D32', '#FF5722', '#D32F2F', '#AAAAAA'];
    $scope.pielabels = ["Contas", "Vestuário", "Alimentação", "Transporte", "Outros"];

    $scope.newlinedata = [
        [100, 150, 150, 100, 250, 350],
    ];
    $scope.newlinecolor = ['#2E7D32'];
    $scope.newlinelabels = ["Mar", "Abr", "Mai", "Jun", "Jul", "Ago"];

    $scope.linedata3 = [
        [50, 75, 100, 100, 125, 150],
    ];
    $scope.linecolor3 = ['#3F51B5'];
    $scope.linelabels3 = ["Mar", "Abr", "Mai", "Jun", "Jul", "Ago"];

});
