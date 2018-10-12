HomeApp.controller('ActivityController', ['$scope', '$window', '$location', 'AjsFactory', function ($scope, $window, $location, AjsFactory) {


    $scope.addActivity = function () {
        debugger;

        var Data = {
            
            activity_name: $scope.form.activityname,
            branch_name: $scope.form.Branchname,
            city_name: $scope.form.City,
            state_name: $scope.form.State,

            Type: 1,
            UserID: 0,
            is_delete: 0
        }
        alert(JSON.stringify(Data));
        AjsFactory.AddActivityDetail(Data)
            .then(function (response) {
                 alert(response.data.length);
                if (response.data.length != 0) {
                    debugger;
                    alert('Request has been saved successfully.');
                }
            });

    };
    $scope.GetBranchData = function () {
        //debugger;

        AjsFactory.getBranchDetailsData()
            .then(function (resopnse) {
                if (reponse.data.length != 0) {
                    debugger;
                    $scope.BranchLst = resopnse.data[0];

                }
            });

    };

    $scope.GetBranchData();
}]);