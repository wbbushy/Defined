angular.module('Defined')
  .directive('showonhoverparent',
    function() {
      return {
        link : function(scope, element, attrs) {
          $("#modal").parent().bind('mouseenter', function() {
              $("#modal").show();
          });
          element.parent().bind('mouseleave', function() {
              element.hide();
          });
        }
      };
    });
