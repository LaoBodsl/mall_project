app.controller('baseController',function($scope){
	//重新加载列表数据
	$scope.reloadList=function(){
		//切换页码
		$scope.search($scope.paginationConf.currentPage,
		$scope.paginationConf.itemsPerPage);
	}
	$scope.paginationConf = {
		currentPage:1,
		totalItem:10,
		itemsPerPage:10,
		perPageOptions:[10,20,30,40,50],
		onChange: function(){
			$scope.reloadList();
		}
	};
	$scope.selectIds=[];//选中的ID集合
	$scope.updateSelection = function($event, id){
		if($event.target.checked){
			$scope.selectIds.push(id);
		}else{
			var idx = $scope.selectIds.indexOf(id);
			$scope.selectIds.splice(idx,1);//删除
		}
	}
	$scope.jsonToString=function(jsonString,key){
		
		var json= JSON.parse(jsonString);
		var value="";
		
		for(var i=0;i<json.length;i++){
			if(i>0){
				value+=",";
			}			
			value +=json[i][key];			
		}
				
		return value;
	}
});