console.log("Scene3.js running...");
;require(['anole', 'zepto', 'TimelineLite'], function (anole) {
    console.log("Scene3 addScene.");
	anole.addScene({
		name: "scene3.js",
		onInit: function (){
			//console.log(">>> scene3.js onInit");
			this.scene = anole.getOrCreate("#part2",'<div id = "part2" class = "scene"></div>',anole.canvas);
			this.subway = anole.getOrCreate("#subway",'<div id = "subway" class = "subway"></div>',this.scene);
			this.subup = anole.getOrCreate("#subway-up","<div id='subway-up' class='subway-up'>",this.subway);
			this.subhead = anole.getOrCreate("#subway-head","<div id='subway-head' class='subway-head'>",this.subup);
			this.subdown = anole.getOrCreate("#subway-down","<div id='subway-down' class='subway-down'>",this.subway);
			this.subway_paperman = anole.getOrCreate("#subway-paperman","<div id = 'subway-paperman' class='subway-paperman'></div>",this.subdown);
			this.subway_paperman.html($("#papermans").html());
			this.marco = anole.getOrCreate("#marco-scene4","<div id='marco-scene4' class='marco tourist center'></div>",this.subdown,{top:"55%",display:"none"});
			this.sublblock = anole.getOrCreate("#subway-left-block","<div id = 'subway-left-block' class='left subway-block'></div>",this.subdown);
			this.subrblock = anole.getOrCreate("#subway-right-block","<div id = 'subway-right-block' class='right subway-block'></div>",this.subdown);
			this.sublgate = anole.getOrCreate("#subway-left","<div id = 'subway-left' class='subway-left'></div>",this.subdown);
			this.subrgate = anole.getOrCreate("#subway-right","<div id = 'subway-right' class='subway-right'></div>",this.subdown);
		},
		onStart: function (finish){
			//console.log(">>> scene3.js onStart");
			this.tl1 = new TimelineLite();
			this.tl1.to($("#subway-left"), 0.5, {x:"100%", ease:Linear.easeNone})
							.call(function(){$("#papermans").css("display","none");})
							.to($("#subway-right"), 0.5, {x:"-100%", ease:Linear.easeNone},"-=0.5")
							.to(this.subway,0.5,{delay:0.2,scaleX:"0.625",scaleY:"0.625",y:"18.75%"});

			if (finish) {
				this.tl1.call(finish);
			}
		},
		onBack: function(finish){
			//console.log(">>> scene3.js onBack");
			this.subway.remove();
			$("#part2 #papermans").remove();
			$("#scene1")[0].className = "scene";
			finish();
		},
		onEnd: function (){
			//console.log(">>> scene3.js onEnd");
		},
	})
});
