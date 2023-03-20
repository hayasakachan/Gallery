(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.cjs003_audience = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.cjs003_audience.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(15));

	// cjs003_audience
	this.cjs003_audience = new lib.cjs003_audience_1();
	this.cjs003_audience.setTransform(320,784.6,1,1,0,0,0,0,-55.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.cjs003_audience}]}).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.1,637.7,610.9,202.3);


// symbols:
(lib.mob1 = function() {
	this.sourceRect=new cjs.Rectangle(8,520,640,120);
    this.initialize(img.cjs003_audience);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,120);


(lib.mob2 = function() {
	this.sourceRect=new cjs.Rectangle(8,392,640,120);
    this.initialize(img.cjs003_audience);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,120);


(lib.mob3 = function() {
	this.sourceRect=new cjs.Rectangle(8,264,640,120);
    this.initialize(img.cjs003_audience);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,120);


(lib.mob4 = function() {
	this.sourceRect=new cjs.Rectangle(8,136,640,120);
    this.initialize(img.cjs003_audience);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,120);


(lib.mob5 = function() {
	this.sourceRect=new cjs.Rectangle(8,8,640,120);
    this.initialize(img.cjs003_audience);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,120);


(lib.mc_audience = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5));

	// mob
	this.instance = new lib.mob1();
	this.instance.setTransform(-319.9,-119.9);

	this.instance_1 = new lib.mob2();
	this.instance_1.setTransform(-319.9,-119.9);

	this.instance_2 = new lib.mob3();
	this.instance_2.setTransform(-319.9,-119.9);

	this.instance_3 = new lib.mob4();
	this.instance_3.setTransform(-319.9,-119.9);

	this.instance_4 = new lib.mob5();
	this.instance_4.setTransform(-319.9,-119.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.notice_yellow_inner = function() {
	this.initialize();

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFF900").ss(1,1,1).p("ABoAJIgIArIjHgCIAAhlg");
	this.shape.setTransform(5.7,-0.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(255,238,0,0.502)","#FFF78E","#98EBFF"],[0,1,1],-10.3,0,10.5,0).s().p("AhnAxIAAhkIDPA7IgIAsg");
	this.shape_1.setTransform(5.7,-0.9);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-4.7,-6.1,21,10.5);


(lib.notice_passion_inner = function() {
	this.initialize();

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF9966").ss(1,1,1).p("ABgA0IjHgCIAAhlIDPA8g");
	this.shape.setTransform(5.7,-0.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFDF91","#FF8627","#98EBFF"],[0,1,1],-10.3,0,10.5,0).s().p("AhnAxIAAhkIDPA7IgIAsg");
	this.shape_1.setTransform(5.7,-0.9);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-4.7,-6.1,21,10.5);


(lib.notice_cute_inner = function() {
	this.initialize();

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF66CC").ss(1,1,1).p("ABoAJIgIArIjHgCIAAhlg");
	this.shape.setTransform(5.7,-0.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(243,145,255,0.302)","#FF27A9","#98EBFF"],[0,1,1],-10.3,0,10.5,0).s().p("AhnAxIAAhkIDPA7IgIAsg");
	this.shape_1.setTransform(5.7,-0.9);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-4.7,-6.1,21,10.5);


(lib.notice_cool_inner = function() {
	this.initialize();

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#33CCFF").ss(2,1,1).p("ABoAJIgIArIjHgCIAAhlg");
	this.shape.setTransform(5.7,-0.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#91F5FF","#27BDFF","#98EBFF"],[0,1,1],-10.3,0,10.5,0).s().p("AhnAxIAAhkIDPA7IgIAsg");
	this.shape_1.setTransform(5.7,-0.9);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-4.7,-6.1,21,10.5);


(lib.audience_yellow_container = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.notice_yellow_inner();
	this.instance.setTransform(18.6,-13.6,1,1,-51.6,0,0,48.5,0.1);

	this.instance_1 = new lib.notice_yellow_inner();
	this.instance_1.setTransform(24.5,-10.3,1,1,-18.1,0,0,48.5,0.1);

	this.instance_2 = new lib.notice_yellow_inner();
	this.instance_2.setTransform(26.2,-10.9,1,1,5.5,0,0,48.5,0);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-28,-22.1,30,52.9);


(lib.audience_passion_container = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.notice_passion_inner();
	this.instance.setTransform(14.4,-12.8,1,1,-51.6,0,0,48.5,0.1);

	this.instance_1 = new lib.notice_passion_inner();
	this.instance_1.setTransform(20.3,-9.5,1,1,-18.1,0,0,48.5,0.1);

	this.instance_2 = new lib.notice_passion_inner();
	this.instance_2.setTransform(22,-10.1,1,1,5.5,0,0,48.5,0);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-32.2,-21.3,29.9,52.9);


(lib.audience_cool_container = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.notice_cool_inner();
	this.instance.setTransform(16.4,-12.5,1,1,-51.6,0,0,48.5,0.1);

	this.instance_1 = new lib.notice_cool_inner();
	this.instance_1.setTransform(22.3,-9.2,1,1,-18.1,0,0,48.5,0.1);

	this.instance_2 = new lib.notice_cool_inner();
	this.instance_2.setTransform(24,-9.8,1,1,5.5,0,0,48.5,0);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-30.2,-21,30,52.9);


(lib.notice_yellow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{run:1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.visible=false;
	}
	this.frame_1 = function() {
		this.visible=true;
	}
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(18).call(this.frame_19));

	// mark
	this.instance = new lib.audience_yellow_container("synched",0);
	this.instance.setTransform(-14.4,4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:0.012},0).to({alpha:1},4,cjs.Ease.get(1)).to({alpha:0.012},4,cjs.Ease.get(-0.99)).wait(2).to({startPosition:0},0).to({alpha:1},4,cjs.Ease.get(1)).to({alpha:0.012},4,cjs.Ease.get(-0.99)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.4,-18.2,30,52.9);


(lib.notice_passion = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"run":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.visible=false;
	}
	this.frame_1 = function() {
		this.visible=true;
	}
	this.frame_20 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(19).call(this.frame_20));

	// mark1
	this.instance = new lib.audience_passion_container();
	this.instance.setTransform(-10.6,19.1,1,1,0,0,0,11.8,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:0.012},0).to({alpha:1},4,cjs.Ease.get(1)).to({alpha:0.012},4,cjs.Ease.get(-0.99)).wait(3).to({alpha:1},4,cjs.Ease.get(1)).to({alpha:0.012},4,cjs.Ease.get(-0.99)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54.8,-2.3,30,52.9);


(lib.notice_cute = function() {
	this.initialize();

	// mark1
	this.instance = new lib.notice_cute_inner();
	this.instance.setTransform(15.2,-12.7,1,1,-51.6,0,0,48.5,0.1);

	this.instance_1 = new lib.notice_cute_inner();
	this.instance_1.setTransform(21.1,-9.4,1,1,-18.1,0,0,48.5,0.1);

	this.instance_2 = new lib.notice_cute_inner();
	this.instance_2.setTransform(22.8,-9.9,1,1,5.5,0,0,48.5,0);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-31.4,-21.2,30,52.9);


(lib.notice_cool = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"run":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.visible=false;
	}
	this.frame_1 = function() {
		this.visible=true;
	}
	this.frame_20 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(19).call(this.frame_20));

	// mark1
	this.instance = new lib.audience_cool_container();
	this.instance.setTransform(-22.5,19);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:0.012},0).to({alpha:1},4,cjs.Ease.get(1)).to({alpha:0.012},4,cjs.Ease.get(-0.99)).wait(3).to({alpha:1},4,cjs.Ease.get(1)).to({alpha:0.012},4,cjs.Ease.get(-0.99)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52.8,-2,30,52.9);


(lib.audience_cute_container = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"run":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.visible=false;
	}
	this.frame_1 = function() {
		this.visible=true;
	}
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(18).call(this.frame_19));

	// mc
	this.instance = new lib.notice_cute();
	this.instance.setTransform(0,0,0.613,0.613,116.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:0.012},0).to({alpha:1},4,cjs.Ease.get(1)).to({alpha:0.012},4,cjs.Ease.get(-0.99)).wait(2).to({alpha:1},4,cjs.Ease.get(1)).to({alpha:0.012},4,cjs.Ease.get(-0.99)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.9,-25.9,37.3,31);


(lib.mc_effect = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{run1:4,run2:9,run3:14,run4:19,run5:24});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.effect2.gotoAndPlay("run");
	}
	this.frame_5 = function() {
		this.effect4.gotoAndPlay("run");
	}
	this.frame_6 = function() {
		this.effect3.gotoAndPlay("run");
	}
	this.frame_7 = function() {
		this.effect1.gotoAndPlay("run");
	}
	this.frame_8 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.effect2.gotoAndPlay("run");
	}
	this.frame_10 = function() {
		this.effect4.gotoAndPlay("run");
	}
	this.frame_11 = function() {
		this.effect3.gotoAndPlay("run");
	}
	this.frame_12 = function() {
		this.effect1.gotoAndPlay("run");
	}
	this.frame_13 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.effect2.gotoAndPlay("run");
	}
	this.frame_15 = function() {
		this.effect4.gotoAndPlay("run");
	}
	this.frame_16 = function() {
		this.effect3.gotoAndPlay("run");
	}
	this.frame_17 = function() {
		this.effect1.gotoAndPlay("run");
	}
	this.frame_18 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.effect2.gotoAndPlay("run");
	}
	this.frame_20 = function() {
		this.effect4.gotoAndPlay("run");
	}
	this.frame_21 = function() {
		this.effect3.gotoAndPlay("run");
	}
	this.frame_22 = function() {
		this.effect1.gotoAndPlay("run");
	}
	this.frame_23 = function() {
		this.stop();
	}
	this.frame_24 = function() {
		this.effect2.gotoAndPlay("run");
	}
	this.frame_25 = function() {
		this.effect4.gotoAndPlay("run");
	}
	this.frame_26 = function() {
		this.effect3.gotoAndPlay("run");
	}
	this.frame_27 = function() {
		this.effect1.gotoAndPlay("run");
	}
	this.frame_28 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1).call(this.frame_7).wait(1).call(this.frame_8).wait(1).call(this.frame_9).wait(1).call(this.frame_10).wait(1).call(this.frame_11).wait(1).call(this.frame_12).wait(1).call(this.frame_13).wait(1).call(this.frame_14).wait(1).call(this.frame_15).wait(1).call(this.frame_16).wait(1).call(this.frame_17).wait(1).call(this.frame_18).wait(1).call(this.frame_19).wait(1).call(this.frame_20).wait(1).call(this.frame_21).wait(1).call(this.frame_22).wait(1).call(this.frame_23).wait(1).call(this.frame_24).wait(1).call(this.frame_25).wait(1).call(this.frame_26).wait(1).call(this.frame_27).wait(1).call(this.frame_28).wait(15));

	// effect4
	this.effect4 = new lib.audience_cute_container();
	this.effect4.setTransform(-259.9,-90.9,4.229,4.229,1.3);
	this.effect4.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.effect4).wait(4).to({rotation:-23.5,x:-240.8,y:-44.8,alpha:1},0).wait(5).to({x:-230.8,y:-65.8},0).wait(5).to({rotation:-6.7,x:-253.8,y:-71.8},0).wait(5).to({rotation:-13.5,x:-242.8,y:-56.8},0).wait(5).to({x:-238.8,y:-83.8},0).wait(20));

	// effect3
	this.effect3 = new lib.notice_cool();
	this.effect3.setTransform(-92.9,-10.9,2.407,2.407,101.6);
	this.effect3.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.effect3).wait(4).to({x:-71.3,y:21,alpha:1},0).wait(5).to({x:-61.3,y:0},0).wait(5).to({rotation:93.4,x:-29.3,y:-16.8},0).wait(5).to({rotation:92.7,x:-44.3,y:-10.8},0).wait(5).to({x:-36.3,y:-43.8},0).wait(20));

	// effect2
	this.effect2 = new lib.notice_passion();
	this.effect2.setTransform(75,-0.9,2.628,2.628,102.1);
	this.effect2.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.effect2).wait(4).to({rotation:113.6,x:63,y:25.5,alpha:1},0).wait(5).to({x:73,y:4.5},0).wait(5).to({rotation:90.8,x:150.3,y:-13.2},0).wait(5).to({rotation:101.2,x:102.3,y:9.5},0).wait(5).to({x:110.3,y:-17.3},0).wait(20));

	// effect1
	this.effect1 = new lib.notice_yellow();
	this.effect1.setTransform(206,-55.9,2.525,2.525,105.3);
	this.effect1.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.effect1).wait(4).to({x:220,y:-13.4,alpha:1},0).wait(5).to({x:230,y:-34.4},0).wait(5).to({rotation:78.9,x:268,y:-48.6},0).wait(5).to({rotation:84.4,x:254},0).wait(5).to({rotation:116.8,x:227.7,y:-66.2},0).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-332.1,-202.2,610.9,138.7);


(lib.cjs003_audience_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{stay1:8,out:13});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		//初期化
		this.param={};
		
		this.param.chara_num=0;//話している人数 : 1~5人
		this.param.mode=1;//1:通常, 2:モニターアップ(非表示)
		
		this.init = function(param){
			this.param = param;
			
			
			if(this.param.mode == 1){
				//表示
				//this.gotoAndStop("stay");
				this.visible=true;
				this.audience.gotoAndStop(this.param.chara_num);
			}
			else{
				//非表示
				this.visible=false;
				//this.gotoAndStop("out");
			}
			
			
		}
		
		//歓声の動き
		this.run_effect = function(){
			
			this.mc_effect.gotoAndPlay("run" + this.param.chara_num);
			
		}
	}
	this.frame_8 = function() {
		this.stop();
	}
	this.frame_13 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8).call(this.frame_8).wait(5).call(this.frame_13).wait(4));

	// mc_effect
	this.mc_effect = new lib.mc_effect();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mc_effect}]}).wait(18));

	// audience
	this.audience = new lib.mc_audience();
	this.audience.setTransform(0,-55.3,1,1,0,0,0,0,-55.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.audience}]}).wait(18));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-332.1,-202.2,610.9,138.7);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;