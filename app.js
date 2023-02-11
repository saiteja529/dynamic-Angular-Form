var app = angular.module('DynamicForm',[]);

app.controller('DynamicFormController', function ($scope, $log) {
    

 
    // we would get this from the api
    $scope.entity = {
      name : "Test", 
      label : "Employee satisfaction form",
      fields :
        [ {type: "date", name: "date", label: "Date" , required: true},
          {type: "text", name: "firstname", label: "Name" , required: true, data:""},
          
          // {type: "email", name: "emailUser", label: "Email" , required: true, data:""},

          {type: "text", name: "Manager", label: "Manager ID" , required: true, data:""},

          {type: "radio", name: "MentalHealth", label: "how Healty are you mentally?" , options:[{id: 1, name: "excellent"},{id: 2, name: "good"},{id: 3, name: "fine"},{id: 4, name: "not fine"}], required: true, data:""},

          //  {type: "password", name: "pass", label: "Password" , min: 6, max:20, required: true, data:""},
         
          {type: "select", name: "currentWork", label: "how much work you do usually in a day?" , options:[{name: "Too Much"},{name: "good amount of work"},{name: "Just enough"},{name: "not that much"}], required: true, data:""},
           {type: "textarea", name: "workFeedback", label: "work Feedback" , required: false, data:""},
          {type: "checkbox", name: "physicalActivities", label: "Mention all you do frequenty" , options:[{id: 1, name: "Physical Workout/ walking daily"},{id: 2, name: "driving for long hours daily"},{id: 3, name: "Food is enoughly nutrient in office"},{id: 4, name: "not willing to mention this"}], required: true, data:""}
        ]
      };

      $scope.submitForm = function(){
        $log.debug($scope.entity);
      }
      $scope.openEditPanel = function () {
       
    $scope.editableForm = angular.toJson($scope.entity, 4);


        $scope.showEditPanel=true;
};

 $scope.updateform
 = function () {
       
    $scope.entity= JSON.parse($scope.editableForm);
    $scope.showEditPanel=false;
};

$scope.cancelUpdate
 = function () {
       
    $scope.showEditPanel=false;
};
})

  .directive("dynamicName",function($compile){
    return {
        restrict:"A",
        terminal:true,
        priority:1000,
        link:function(scope,element,attrs){
            element.attr('name', scope.$eval(attrs.dynamicName));
            element.removeAttr("dynamic-name");
            $compile(element)(scope);
        }
    }
})
