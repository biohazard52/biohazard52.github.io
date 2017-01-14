app.controller('AppController', ['$scope', '$http', function AppController($scope, $http){
    $scope.test = 'testing this';
    
    $http.get('js/app/data/characters.json')
       .then(function(res){
          $scope.characters = res.data;
          $scope.char1 = $scope.characters[0];
          $scope.char2 = $scope.characters[1];
          //char1Interval = setInterval(char1IntervalFunct, 200);
          //char2Interval = setInterval(char2IntervalFunct, 200);
        });
    $http.get('js/app/data/stages.json')
       .then(function(res){
          $scope.stages = res.data;
          $scope.stage = $scope.stages[0];
        });
        
    $scope.dlcChars = false;
    $scope.dlcMaps = false;
    $scope.compOnly = false;
    $scope.rollChar1 = function(update){
        var minimum = 0;
        var maximum = $scope.characters.length-1;
        var rng = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
        $scope.char1 = $scope.characters[rng];
        if($scope.dlcChars === false){
            while(!$scope.char1.legal){
                rng = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
                $scope.char1 = $scope.characters[rng];
            }
        }
        if(update){
            $scope.$apply();
        }
    };
    $scope.rollChar2 = function(update){
        var minimum = 0;
        var maximum = $scope.characters.length-1;
        var rng = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
        $scope.char2 = $scope.characters[rng];
        if($scope.dlcChars === false){
            while(!$scope.char2.legal){
                rng = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
                $scope.char2 = $scope.characters[rng];
            }
        }
        if(update){
            $scope.$apply();
        }
    };
    $scope.rollStage = function(update){
        var minimum = 0;
        var maximum = $scope.stages.length-1;
        var rng = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
        $scope.stage = $scope.stages[rng];
        if($scope.compOnly === true){
            while(!$scope.stage.legal ){
                rng = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
                $scope.stage = $scope.stages[rng];
            }
        }
        else if($scope.dlcMaps === false){
            while($scope.stage.dlc ){
                rng = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
                $scope.stage = $scope.stages[rng];
            }
        }
        if(update){
            $scope.$apply();
        }
    };
    $scope.rollAll = function(){
        $scope.rollChar1(false);
        $scope.rollChar2(false);
        $scope.rollStage(false);
        $scope.$apply();
    };
    function rndAllNoUpdate(){
        char1IntervalFunct(false);
        char2IntervalFunct(false);
        stageIntervalFunct(false);
        $scope.$apply();
    }
    var char1Interval = 0;
    var char1IntervalFunct = function(update){
        var minimum = 0;
        var maximum = $scope.characters.length-1;
        var rng = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
        $scope.char1 = $scope.characters[rng];
        if($scope.dlcChars === false){
            while(!$scope.char1.legal){
                rng = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
                $scope.char1 = $scope.characters[rng];
            }
        }
        if(update){
            $scope.$apply();
        }
    };
    var char2Interval = 0;
    var char2IntervalFunct = function(update){
        var minimum = 0;
        var maximum = $scope.characters.length-1;
        var rng = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
        $scope.char2 = $scope.characters[rng];
        if($scope.dlcChars === false){
            while(!$scope.char2.legal){
                rng = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
                $scope.char2 = $scope.characters[rng];
            }
        }
        if(update){
            $scope.$apply();
        }
    };
    var stageInterval = 0;
    var stageIntervalFunct = function(update){
        var minimum = 0;
        var maximum = $scope.stages.length-1;
        var rng = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
        $scope.stage = $scope.stages[rng];
        if($scope.compOnly === true){
            while(!$scope.stage.legal ){
                rng = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
                $scope.stage = $scope.stages[rng];
            }
        }
        else if($scope.dlcMaps === false){
            while(!$scope.stage.dlc ){
                rng = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
                $scope.stage = $scope.stages[rng];
            }
        }
        if(update){
            $scope.$apply();
        }
    };
}]);