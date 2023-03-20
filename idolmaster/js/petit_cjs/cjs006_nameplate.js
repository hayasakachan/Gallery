(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.cjs006_nameplate = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.cjs006_nameplate.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(15));

	// cjs006_nameplate
	this.cjs006_nameplate = new lib.cjs006_nameplate_1();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.cjs006_nameplate}]}).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(11,438,755,56);


// symbols:
(lib.guest_name_cover = function() {
	this.initialize(img.guest_name_cover);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,92,42);


(lib.mc_name_cover = function() {
	this.initialize(img.mc_name_cover);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,92,56);


(lib.replace_guest_name1 = function() {
	this.initialize(img.replace_guest_name1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,92,42);


(lib.replace_guest_name2 = function() {
	this.initialize(img.replace_guest_name2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,92,42);


(lib.replace_guest_name3 = function() {
	this.initialize(img.replace_guest_name3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,92,42);


(lib.replace_guest_name4 = function() {
	this.initialize(img.replace_guest_name4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,92,42);


(lib.replace_guest_name5 = function() {
	this.initialize(img.replace_guest_name5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,92,42);


(lib.replace_mc_name = function() {
	this.initialize(img.replace_mc_name);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,92,56);


(lib.replace_mc_name_1 = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.replace_mc_name();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,92,56);


(lib.replace_guest_name = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5));

	// img
	this.instance = new lib.replace_guest_name1();
	this.instance.setTransform(-45.9,-20.9);

	this.instance_1 = new lib.replace_guest_name2();
	this.instance_1.setTransform(-45.9,-20.9);

	this.instance_2 = new lib.replace_guest_name3();
	this.instance_2.setTransform(-45.9,-20.9);

	this.instance_3 = new lib.replace_guest_name4();
	this.instance_3.setTransform(-45.9,-20.9);

	this.instance_4 = new lib.replace_guest_name5();
	this.instance_4.setTransform(-45.9,-20.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.9,-20.9,92,42);


(lib.mc_name_cover_1 = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.mc_name_cover();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,92,56);


(lib.guest_name_cover_1 = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.guest_name_cover();
	this.instance.setTransform(-45.9,-20.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-45.9,-20.9,92,42);


(lib.mc_mc_name = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// cover
	this.cover = new lib.mc_name_cover_1();
	this.cover.setTransform(-45.9,-27.9);
	this.cover.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.cover}]}).wait(5));

	// core
	this.replace_mc_name = new lib.replace_mc_name_1();
	this.replace_mc_name.setTransform(-45.9,-27.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.replace_mc_name}]}).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.9,-27.9,92,56);


(lib.mc_guest = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// cover
	this.cover = new lib.guest_name_cover_1();
	this.cover.alpha = 0.398;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.cover}]}).wait(2));

	// core
	this.core = new lib.replace_guest_name();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.core}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.9,-20.9,92,42);


(lib.cjs006_nameplate_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.visible=false;
		
		//初期化
		this.param={};
		
		this.param.chara_num=1;//ゲストの人数 : 1~5人
		this.param.mode=1;//1:通常, 2:モニターアップ
		
		//左から1~5番目の人がしゃべっているかどうか(1:しゃべる)
		//モニターアップ時は1~3のみ使用
		this.param.position1_talk = 0;
		this.param.position2_talk = 0;
		this.param.position3_talk = 0;
		this.param.position4_talk = 0;
		this.param.position5_talk = 0;
		//MC
		this.param.position0_talk = 0;
		//モニターアップ時モニターのぷちがしゃべる場合(上向き)
		this.param.position9_talk = 0;
		
		
		//そのポジションにいるキャラのID(モニター時用)
		this.param.position1_charaid=1;
		this.param.position2_charaid=2;
		this.param.position3_charaid=3;
		
		//非表示フラグ(1: 非表示)
		this.param.position1_hide=0;
		this.param.position2_hide=0;
		this.param.position3_hide=0;
		this.param.position4_hide=0;
		this.param.position5_hide=0;
		this.param.position0_hide=0;
		this.param.position9_hide=0;
		
		
		this.init = function(param){
			this.param = param;
			this.visible=false;
			
			//モード指定
			if(this.param.mode == 1){
				this.guest1.core.gotoAndStop(1);
				this.guest2.core.gotoAndStop(2);
				this.guest3.core.gotoAndStop(3);
				this.guest4.core.gotoAndStop(4);
				this.guest5.core.gotoAndStop(5);
				
				//配置指定
				this.gotoAndStop(this.param.chara_num);
			}
			else{
				this.guest1.core.gotoAndStop(this.param.position1_charaid);
				this.guest2.core.gotoAndStop(this.param.position2_charaid);
				this.guest3.core.gotoAndStop(this.param.position3_charaid);
				
				//配置指定
				this.gotoAndStop(6);
			}
			
			//最初は全部暗く
			this.guest1.cover.visible=true;
			this.guest2.cover.visible=true;
			this.guest3.cover.visible=true;
			this.guest4.cover.visible=true;
			this.guest5.cover.visible=true;
			this.mc_name.cover.visible=true;
			//(ToDo)もにたー9は未実装
			
			this.visible=true;
			//非表示のネームプレート設定
			this.hide_manage(this.param);
		}
		
		
		this.run_talk = function(param){
			this.param = param;
			
			
			//モード指定
			if(this.param.mode == 2){
				//モード2
				//ポジション3枠に対してキャラが入れ替わる
				
				this.guest1.core.gotoAndStop(this.param.position1_charaid);
				this.guest2.core.gotoAndStop(this.param.position2_charaid);
				this.guest3.core.gotoAndStop(this.param.position3_charaid);
			}
			
			//喋っているキャラのプレートを明るくする
			if(this.param.position1_talk == 1){
				this.guest1.cover.visible=false;
			}
			else{
				this.guest1.cover.visible=true;
			}
			
			if(this.param.position2_talk == 1){
				this.guest2.cover.visible=false;
			}
			else{
				this.guest2.cover.visible=true;
			}
			
			if(this.param.position3_talk == 1){
				this.guest3.cover.visible=false;
			}
			else{
				this.guest3.cover.visible=true;
			}
			
			if(this.param.position4_talk == 1){
				this.guest4.cover.visible=false;
			}
			else{
				this.guest4.cover.visible=true;
			}
			
			if(this.param.position5_talk == 1){
				this.guest5.cover.visible=false;
			}
			else{
				this.guest5.cover.visible=true;
			}
			
			if(this.param.position0_talk == 1){
				this.mc_name.cover.visible=false;
			}
			else{
				this.mc_name.cover.visible=true;
			}
			
			//(ToDo)もにたー9は未実装
			if(this.param.position9_talk == 1){
				
			}
			else{
				
			}
		}
		
		//非表示だけの管理
		this.hide_manage=function(param2){
			
			this.param.position1_hide=param2.position1_hide;
			this.param.position2_hide=param2.position2_hide;
			this.param.position3_hide=param2.position3_hide;
			this.param.position4_hide=param2.position4_hide;
			this.param.position5_hide=param2.position5_hide;
			this.param.position0_hide=param2.position0_hide;
			this.param.position9_hide=param2.position9_hide;
			
			if(this.param.position1_hide == 1){
				this.guest1.visible=false;
			}
			else{
				this.guest1.visible=true;
			}
			
			if(this.param.position2_hide == 1){
				this.guest2.visible=false;
			}
			else{
				this.guest2.visible=true;
			}
			
			if(this.param.position3_hide == 1){
				this.guest3.visible=false;
			}
			else{
				this.guest3.visible=true;
			}
			
			if(this.param.position4_hide == 1){
				this.guest4.visible=false;
			}
			else{
				this.guest4.visible=true;
			}
			
			if(this.param.position5_hide == 1){
				this.guest5.visible=false;
			}
			else{
				this.guest5.visible=true;
			}
			
			if(this.param.position0_hide == 1){
				this.mc_name.visible=false;
			}
			else{
				this.mc_name.visible=true;
			}
			
			//(ToDo)もにたー9は未実装
			if(this.param.position9_hide == 1){
				
			}
			else{
				
			}
			
			
			
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6));

	// mc_name
	this.mc_name = new lib.mc_mc_name();
	this.mc_name.setTransform(57,466);
	this.mc_name.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.mc_name).wait(1).to({alpha:1},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:47,y:556.5},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:46.5,y:570.5},0).wait(1).to({x:47.5,y:577.5},0).wait(1).to({x:38.5,y:566.5},0).wait(1).to({x:51.5,y:810},0).wait(1));

	// guest5
	this.guest5 = new lib.mc_guest();
	this.guest5.setTransform(720,473);

	this.timeline.addTween(cjs.Tween.get(this.guest5).wait(1).wait(1).to({x:750},0).wait(2).wait(1).to({scaleX:0.77,scaleY:0.77,x:546,y:350},0).wait(1).to({x:697,y:574},0).wait(1));

	// guest4
	this.guest4 = new lib.mc_guest();
	this.guest4.setTransform(720,473);

	this.timeline.addTween(cjs.Tween.get(this.guest4).wait(1).wait(1).to({x:750},0).wait(1).wait(1).to({scaleX:0.77,scaleY:0.77,x:594.3,y:355},0).wait(1).to({x:371.5,y:350},0).wait(1).to({x:697,y:615.3},0).wait(1));

	// guest3
	this.guest3 = new lib.mc_guest();
	this.guest3.setTransform(720,473);

	this.timeline.addTween(cjs.Tween.get(this.guest3).wait(1).wait(1).to({x:750},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:504.5,y:334},0).wait(1).to({x:420.3,y:355},0).wait(1).to({x:602.5,y:501},0).wait(1).to({x:560,y:815},0).wait(1));

	// guest2
	this.guest2 = new lib.mc_guest();
	this.guest2.setTransform(720,473);

	this.timeline.addTween(cjs.Tween.get(this.guest2).wait(1).wait(1).to({scaleX:0.84,scaleY:0.84,x:594,y:451},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:590,y:502},0).wait(1).to({x:523.5,y:514},0).wait(1).to({x:459.5,y:501},0).wait(1).to({x:421.5,y:815},0).wait(1));

	// guest1
	this.guest1 = new lib.mc_guest();
	this.guest1.setTransform(580,473);
	this.guest1.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.guest1).wait(1).to({alpha:1},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:413,y:451},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:380,y:502},0).wait(1).to({x:349.5,y:514},0).wait(1).to({x:315.5,y:501},0).wait(1).to({x:282,y:815},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(11,438,755,56);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;