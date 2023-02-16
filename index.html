var app = angular.module('DynamicForm',['ngSanitize']);

app.controller('DynamicFormController', function ($scope, $log) {
    

 
    // we would get this from the api
    $scope.entity = {
      name : "Test", 
      label : "<h1>Employee Survey Feedback</h1>"
    +"<p>Thank you for participating in our employee survey. Your feedback is important to us and will help us improve our workplace.</p>",
      fields :
        [ {type: "date", name: "date", label: "Date" , required: true},
          {type: "text", name: "firstname", label: "Name" , required: true, data:""},

          {type: "text", name: "Manager", label: "Manager ID" , required: true, data:""},

          {type: "radio", name: "overallSatisfaction", label: "Overall Satisfaction" , options:[{id: 1, name: "Not at all satisfied"},{id: 2, name: "Somewhat dissatisfied"},{id: 3, name: "Neutral"},{id: 4, name: "Somewhat satisfied"},
          {id: 5, name: "Very satisfied"}
          ], required: true, data:""},
         
          {type: "select", name: "currentWork", label: "how much work you do usually in a day?" , options:[{name: "Too Much"},{name: "good amount of work"},{name: "Just enough"},{name: "not that much"}], required: true, data:""},
           {type: "textarea", name: "workFeedback", label: "work Feedback" , required: false, data:""},
          {type: "checkbox", name: "Work-Life-Balance", label: "Work-Life Balance" , options:[{id: 1, name: "I have enough time for my personal life"},{id: 2, name: "I feel stressed about my workload"},{id: 3, name: "I work long hours"},{id: 4, name: "I feel valued and respected for my contributions regardless of my background"}], required: true, data:""}
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
 $scope.applyChanges
 = function () {
       
    $scope.entity= JSON.parse($scope.editableForm);
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
