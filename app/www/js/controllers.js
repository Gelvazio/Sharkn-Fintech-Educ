var app = angular.module('sharkapp.controllers', []);

app.controller("IntroCtrl", function($scope, $location, $ionicSlideBoxDelegate) {
    // Called to navigate to the main app
    $scope.myTabs = [0,1];
    $scope.slideIndex = 0;  
    $scope.startApp = function() {
        $ionicHistory.nextViewOptions({
            disableBack: true
        });
        $state.go('app.dash');
    };

    // Called each time the slide changes
    $scope.slideChanged = function(index) {
        $scope.slideIndex = index;
    };

    $scope.login = function() {
        /* Descomentar em produção */
        //$cordovaOauth.facebook("593921090779069", ["email", "read_stream", "user_website", "user_location", "user_relationships"]).then(function(result) {
            //$localStorage.accessToken = result.access_token;
            $location.path("#/app/dash");
        //}, function(error) {
        //    alert(error);
        //});
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

app.controller("ChatCtrl", function($scope, $timeout, $ionicScrollDelegate){
    $scope.inputText = "";
    $scope.canShowMe = false;
    $scope.canShowHim = false;
    $timeout(function() {
        $ionicScrollDelegate.scrollBottom();
    }, 100);
    $scope.sendMsg = function() {
        $scope.inputText = "";
        $scope.canShowMe = true;
        $ionicScrollDelegate.scrollBottom();
        $timeout(function(){
            $scope.canShowHim = true;
            $ionicScrollDelegate.scrollBottom();
        }, 5000);
    }
});

app.controller('AulaCtrl', function($scope, $stateParams) {
    
});

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
