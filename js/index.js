var todo=angular.module('todolist',[]);
todo.controller('mainCtrl',['$scope',function($scope){
	$scope.qingdan = [
        {
        	id:1001,
        	name:'购物',
        	theme:'blue',
        	pic:'blues',
        	da:'blues3',
        	shi:'blues2',
        	shixiang:[
        		{name:'maiche',state:true},
        		{name:'maifang',state:true},
        		{name:'maifeiji',state:false},
        		{name:'maichuan',state:false}
        	]
    
        	
        },
        {
        	id:1001,
        	name:'学习',
        	theme:'green',
        	pic:'greens',
        	da:'green3',
        	shi:'green2',
        	shixiang:[
        		{name:'语文',state:false},
        		{name:'数学',state:false},
        		{name:'英语',state:true},
        		{name:'历史',state:true}
        	]

        	
        }
	]
	$scope.currentQingdan=null;
	var colors=['blue','yellow','green','orange','pink','purple','zong'];
	var xiaoyuan=['blues','yellows','greens','oranges','pinks','purples','zongs'];
	var dayuan=['blues3','yellow3','green3','orange3','pink3','purple3','zong3'];
	var shiyuan=['blues2','yellow2','green2','orange2','pink2','purple2','zong2'];
	$scope.addqingdan=function(){
		var len=$scope.qingdan.length;
		var id=(len===0)?1001:(Math.max.apply(null,$scope.qingdan.map(function(v,i){
			return v.id;
		}))+1);
		var qingdan={
				id: id,
       			name: '新清单 ' + (len + 1),
        		theme: colors[len%7],
        		pic:xiaoyuan[len%7],
        		da:dayuan[len%7],
        		shi:shiyuan[len%7],
        	}
		 $scope.currentQingdan=qingdan;
         $scope.qingdan.push(qingdan);
	}
 		$scope.setCurrent = function(index){
      		$scope.currentQingdan = $scope.qingdan[index];
             $scope.currentIndex = index;
     }

       $scope.addxiangmu=function(index){
        var evenlist=$scope.qingdan[$scope.currentIndex];
        var data={name:'新条目',state:false};
        evenlist.shixiang.push(data);
        $scope.qingdan[$scope.currentIndex]=evenlist;
     

 }



}])
