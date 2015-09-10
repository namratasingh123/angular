function WatchController($scope) {
    $scope.form = {
        name: 'Anurag Verma',
    }

    $scope.changeCount = 0;
    $scope.$watch('form.name', function(newVal, oldVal){
        console.log('changed');
        $scope.changeCount++;
    });
}
