(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.cjs005_balloon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.cjs005_balloon.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(15));

	// mc
	this.cjs005_balloon = new lib.cjs005_balloon_1();
	this.cjs005_balloon.setTransform(320,60.6,1,1,0,0,0,0,-55.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.cjs005_balloon}]}).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(688,32,1291,202);


// symbols:
(lib.large_base = function() {
	this.sourceRect=new cjs.Rectangle(8,8,624,180);
    this.initialize(img.cjs005_balloon_a);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,624,180);


(lib.large_long = function() {
	this.sourceRect=new cjs.Rectangle(624,196,72,140);
    this.initialize(img.cjs005_balloon_a);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,72,140);


(lib.large_mc = function() {
	this.sourceRect=new cjs.Rectangle(640,8,72,140);
    this.initialize(img.cjs005_balloon_a);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,72,140);


(lib.large_middle = function() {
	this.sourceRect=new cjs.Rectangle(624,344,72,80);
    this.initialize(img.cjs005_balloon_a);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,72,80);


(lib.large_short = function() {
	this.sourceRect=new cjs.Rectangle(196,372,72,60);
    this.initialize(img.cjs005_balloon_a);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,72,60);


(lib.large_short_ = function() {
	this.sourceRect=new cjs.Rectangle(116,372,72,60);
    this.initialize(img.cjs005_balloon_a);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,72,60);


(lib.normal_base = function() {
	this.sourceRect=new cjs.Rectangle(8,196,608,168);
    this.initialize(img.cjs005_balloon_a);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,608,168);


(lib.normal_long = function() {
	this.sourceRect=new cjs.Rectangle(62,372,46,120);
    this.initialize(img.cjs005_balloon_a);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,46,120);


(lib.normal_mc = function() {
	this.sourceRect=new cjs.Rectangle(8,372,46,120);
    this.initialize(img.cjs005_balloon_a);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,46,120);


(lib.normal_middle = function() {
	this.sourceRect=new cjs.Rectangle(276,372,46,60);
    this.initialize(img.cjs005_balloon_a);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,46,60);


(lib.normal_short = function() {
	this.sourceRect=new cjs.Rectangle(330,420,46,40);
    this.initialize(img.cjs005_balloon_a);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,46,40);


(lib.normal_short_ = function() {
	this.sourceRect=new cjs.Rectangle(330,372,46,40);
    this.initialize(img.cjs005_balloon_a);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,46,40);


(lib.marker2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9));

	// レイヤー 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhlAbIASg1ICfAAIAbA1g");
	this.shape.setTransform(0.3,1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},4).to({state:[]},1).wait(5));

	// img
	this.instance = new lib.normal_short();
	this.instance.setTransform(-22.9,0);

	this.instance_1 = new lib.normal_middle();
	this.instance_1.setTransform(-22.9,0);

	this.instance_2 = new lib.normal_long();
	this.instance_2.setTransform(-22.9,0);

	this.instance_3 = new lib.normal_mc();
	this.instance_3.setTransform(-22.9,0);

	this.instance_4 = new lib.normal_short_();
	this.instance_4.setTransform(-22.9,-39.9);

	this.instance_5 = new lib.large_short();
	this.instance_5.setTransform(-36.9,-20.9);

	this.instance_6 = new lib.large_middle();
	this.instance_6.setTransform(-35.9,-18.9);

	this.instance_7 = new lib.large_long();
	this.instance_7.setTransform(-35.9,-20.9);

	this.instance_8 = new lib.large_mc();
	this.instance_8.setTransform(-35.9,-20.9);

	this.instance_9 = new lib.large_short_();
	this.instance_9.setTransform(-36.9,-40.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.9,0,46,40);


(lib.fkds_broad2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// fkds
	this.instance = new lib.normal_base();
	this.instance.setTransform(-303.9,-83.9);

	this.instance_1 = new lib.large_base();
	this.instance_1.setTransform(-311.9,-95.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-303.9,-83.9,608,168);


(lib.fkds_inner2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// cursor8
	this.cursor8 = new lib.marker2();
	this.cursor8.setTransform(964,78.4,1,1,0,0,0,0,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.cursor8}]}).wait(3));

	// cursor7
	this.cursor7 = new lib.marker2();
	this.cursor7.setTransform(964,78.4,1,1,0,0,0,0,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.cursor7}]}).wait(3));

	// cursor6
	this.cursor6 = new lib.marker2();
	this.cursor6.setTransform(964,78.4,1,1,0,0,0,0,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.cursor6}]}).wait(3));

	// cursor5
	this.cursor5 = new lib.marker2();
	this.cursor5.setTransform(964,78.4,1,1,0,0,0,0,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.cursor5}]}).wait(3));

	// cursor4
	this.cursor4 = new lib.marker2();
	this.cursor4.setTransform(964,78.4,1,1,0,0,0,0,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.cursor4}]}).wait(3));

	// cursor3
	this.cursor3 = new lib.marker2();
	this.cursor3.setTransform(964,78.4,1,1,0,0,0,0,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.cursor3}]}).wait(3));

	// cursor2
	this.cursor2 = new lib.marker2();
	this.cursor2.setTransform(964,78.4,1,1,0,0,0,0,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.cursor2}]}).wait(3));

	// cursor1
	this.cursor1 = new lib.marker2();
	this.cursor1.setTransform(-228.9,78.4,1,1,0,0,0,0,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.cursor1}]}).wait(3));

	// cursor0
	this.cursor0 = new lib.marker2();
	this.cursor0.setTransform(964,78.4,1,1,0,0,0,0,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.cursor0}]}).wait(3));

	// base
	this.base = new lib.fkds_broad2();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.base}]}).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-303.9,-83.9,1291,202);


(lib.mc_fkds_set = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{start:1,stay:7,start_up:12});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_6 = function() {
		this.stop();
		this.parent.callback_set();
	}
	this.frame_10 = function() {
		this.stop();
	}
	this.frame_17 = function() {
		this.stop();
		this.parent.callback_set();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6).call(this.frame_6).wait(4).call(this.frame_10).wait(7).call(this.frame_17).wait(3));

	// core
	this.core = new lib.fkds_inner2();

	this.timeline.addTween(cjs.Tween.get(this.core).wait(1).to({scaleX:0.5,scaleY:0.2,y:56},0).to({scaleX:1.02,scaleY:1.02,y:-1.8},3,cjs.Ease.get(-0.99)).to({scaleX:1,scaleY:1,y:0},2).wait(6).to({scaleX:0.5,scaleY:0.2,y:-55.8},0).to({scaleX:1.02,scaleY:1.02,y:2},3,cjs.Ease.get(-0.99)).to({scaleX:1,scaleY:1,y:0},2).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-303.9,-83.9,1291,202);


(lib.cjs005_balloon_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.visible=false;
		
		//初期化
		this.param={};
		
		this.param.chara_num=1;//ゲストの人数 : 1~5人
		this.param.mode=1;//1:通常, 2:モニターアップ
		this.param.speak_type=1;//1:通常, 2:ぎざぎざ
		
		//左から1~5番目の人がしゃべっているかどうか(1:しゃべる)
		this.param.position1_talk = 0;
		this.param.position2_talk = 0;
		this.param.position3_talk = 0;
		this.param.position4_talk = 0;
		this.param.position5_talk = 0;
		//MC
		this.param.position0_talk = 0;
		//モニターアップ時モニターのぷちがしゃべる場合(上向き)
		this.param.position6_talk = 0;
		this.param.position7_talk = 0;
		this.param.position8_talk = 0;
		
		this.speak_type_num=0;//吹き出しのタイプを変えるための固定値 0 or 5
		this.speak_foward=0;//0:デフォルト  1:モニター時に上にいるキャラ用
		
		
		//モーション終わりに返すcallbackの受け皿
		this.param.motion_finish_callback=function(){};
		
		
		this.init = function(param){
			this.param = param;
			this.visible=false;//一旦非表示
			
			//y座標固定
			this.mc.core.cursor0.y = 78;
			this.mc.core.cursor1.y = 78;
			this.mc.core.cursor2.y = 78;
			this.mc.core.cursor3.y = 78;
			this.mc.core.cursor4.y = 78;
			this.mc.core.cursor5.y = 78;
			this.mc.core.cursor6.y = -78;
			this.mc.core.cursor7.y = -78;
			this.mc.core.cursor8.y = -78;
			
			if(this.param.mode == 1){
				this.gotoAndStop(1);
				
				//座標設定
				switch(this.param.chara_num){
					case 1:
						this.mc.core.cursor0.x = -171;
						this.mc.core.cursor1.x = 171;
						break;
					case 2:
						this.mc.core.cursor0.x = -161;
						this.mc.core.cursor1.x = 12;
						this.mc.core.cursor2.x = 192;
						break;
					case 3:
						this.mc.core.cursor0.x = -161;
						this.mc.core.cursor1.x = -8;
						this.mc.core.cursor2.x = 212;
						this.mc.core.cursor3.x = 101;
						break;
					case 4:
						this.mc.core.cursor0.x = -161;
						this.mc.core.cursor1.x = -38;
						this.mc.core.cursor2.x = 132;
						this.mc.core.cursor3.x = 31;
						this.mc.core.cursor4.x = 201;
						break;
					case 5:
						this.mc.core.cursor0.x = -171;
						this.mc.core.cursor1.x = -78;
						this.mc.core.cursor2.x = 82;
						this.mc.core.cursor3.x = 232;
						this.mc.core.cursor4.x = -1;
						this.mc.core.cursor5.x = 165;
						break;
					default:
						break;
				}
			}
			else if(this.param.mode == 2){
				this.gotoAndStop(2);
				//座標設定
				
				this.mc.core.cursor0.x = -230;
				this.mc.core.cursor1.x = -70;
				this.mc.core.cursor2.x = 85;
				this.mc.core.cursor3.x = 238;
				this.mc.core.cursor6.x = 0;
				this.mc.core.cursor7.x = -120;
				this.mc.core.cursor8.x = 120;
					
			}
			
			//表示設定
			//this.type_change();
			
			//動き実行
			//this.run_talk(param);
		}
		
		this.type_change = function(){
			this.temp_foward=0;
		
			//表示,非表示
			for(var i=0; i<9; i++){
					if(this.param["position" + i + "_talk"] == 1){
						this.mc.core["cursor" + i].visible=true;
						if(i>=6){
							this.temp_foward=1;
						}
					}
					else{
						this.mc.core["cursor" + i].visible=false;
					}
			}
			
		
			
			//表示タイプ
			if(this.param.speak_type == 2){
				this.speak_type_num = 5;
				this.mc.core.base.gotoAndStop(1);
			}
			else{
				this.speak_type_num = 0;
				this.mc.core.base.gotoAndStop(0);
			}
			
			
			
			if(this.param.mode == 1){
				switch(this.param.chara_num){
					case 1:
						this.mc.core.cursor0.gotoAndStop((1 + this.speak_type_num));
						this.mc.core.cursor1.gotoAndStop((1 + this.speak_type_num));
						break;
					case 2:
						this.mc.core.cursor0.gotoAndStop((3 + this.speak_type_num));
						this.mc.core.cursor1.gotoAndStop((1 + this.speak_type_num));
						this.mc.core.cursor2.gotoAndStop((1 + this.speak_type_num));
						break;
					case 3:
						this.mc.core.cursor0.gotoAndStop((3 + this.speak_type_num));
						this.mc.core.cursor1.gotoAndStop((2 + this.speak_type_num));
						this.mc.core.cursor2.gotoAndStop((2 + this.speak_type_num));
						this.mc.core.cursor3.gotoAndStop((0 + this.speak_type_num));
						break;
					case 4:
						this.mc.core.cursor0.gotoAndStop((3 + this.speak_type_num));
						this.mc.core.cursor1.gotoAndStop((2 + this.speak_type_num));
						this.mc.core.cursor2.gotoAndStop((2 + this.speak_type_num));
						this.mc.core.cursor3.gotoAndStop((0 + this.speak_type_num));
						this.mc.core.cursor4.gotoAndStop((0 + this.speak_type_num));
						break;
					case 5:
						this.mc.core.cursor0.gotoAndStop((3 + this.speak_type_num));
						this.mc.core.cursor1.gotoAndStop((2 + this.speak_type_num));
						this.mc.core.cursor2.gotoAndStop((2 + this.speak_type_num));
						this.mc.core.cursor3.gotoAndStop((2 + this.speak_type_num));
						this.mc.core.cursor4.gotoAndStop((0 + this.speak_type_num));
						this.mc.core.cursor5.gotoAndStop((0 + this.speak_type_num));
						break;
					default:
						break;
				}
			}
			else if(this.param.mode == 2){
				//座標設定
				this.mc.core.cursor0.gotoAndStop((0 + this.speak_type_num));
				this.mc.core.cursor1.gotoAndStop((0 + this.speak_type_num));
				this.mc.core.cursor2.gotoAndStop((0 + this.speak_type_num));
				this.mc.core.cursor3.gotoAndStop((0 + this.speak_type_num));
				this.mc.core.cursor6.gotoAndStop((4 + this.speak_type_num));
				this.mc.core.cursor7.gotoAndStop((4 + this.speak_type_num));
				this.mc.core.cursor8.gotoAndStop((4 + this.speak_type_num));
				
			}
			
			
			return this.temp_foward;
		}
		
		this.run_talk = function(param){
			this.param=param;
			
			this.visible=true;
			this.speak_foward=0;
			
			//表示設定
			this.speak_foward = this.type_change();
			
			//実行
			if(this.speak_foward == 1){
				this.mc.gotoAndPlay("start_up");
			}
			else{
				this.mc.gotoAndPlay("start");
			}
		}
		
		this.finish_talk = function(){
			this.mc.gotoAndPlay("stay");
		}
		
		
		//内部からコールバックを呼び出して引数を埋め込む
		this.callback_set = function(){
			this.param.motion_finish_callback();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// mc
	this.mc = new lib.mc_fkds_set();
	this.mc.setTransform(672,0);

	this.timeline.addTween(cjs.Tween.get(this.mc).wait(1).to({x:0},0).wait(1).to({y:399},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(368,-83.9,1291,202);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;