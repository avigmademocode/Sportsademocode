HomeApp.factory('AjsFactory', ['$http', '$q', function ($http, $q) {


    var dataFactory = {};

    dataFactory.AddNewBranch = function (data) {
      //debugger;
        return $http.post('/Branch/AddNewBrach', data);
    };

    dataFactory.AddMember = function (data) {
       //debugger;
        return $http.post('/Member/AddMemberData', data);
    };
    //get member data
    //dataFactory.getMemberDetailsData = function ()
    //{
    //    debugger;
    //    return $http.post('/Member/GetMemberDatas');
            
    //};
    dataFactory.AddReceiptData = function (data) {
      //  debugger;
        return $http.post('/ActivityReceipt/AddReceiptData',data);
    }

    //add activity
    dataFactory.AddActivityDetail = function (data) {
      //  debugger;
        return $http.post('/Activity/AddActivityData', data);
    };

    //add renewal membership data
    dataFactory.AddActivitydata = function (data) {
        //debugger;
        return $http.post('/MembershipRenewal/AddMembershipRenewalDataDetail', data);
    };

    //datafactory.getMemberReceiptData = function (data) {
    //    debugger;
    //    return $http.post('/Member/GetMemberReceiptData',data);
    //}




    //get branch data
    dataFactory.getBranchDetailsData = function () {
        return $http.post('/Branch/GetBranch');

    };

    //get member data
    dataFactory.getMemberDetailsData = function () {
        return $http.post('/Member/GetMemberData');

    };
    //get Activity data
    dataFactory.getActivityDetailsData = function () {
        return $http.post('/Activity/GetActivity');

    };

    //Get Member By Id
    dataFactory.GetMemberDataID = function (data) {
          debugger;
        return $http.post('/Member/GetMemberDataId', data);
    };




    
    return dataFactory;
}]);


    