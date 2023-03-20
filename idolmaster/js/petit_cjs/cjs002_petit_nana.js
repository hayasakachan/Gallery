(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.cjs002_petit_nana = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.cjs002_petit_nana.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14));

	// base
	this.cjs002_petit_nana = new lib.character_container();
	this.cjs002_petit_nana.setTransform(0,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.cjs002_petit_nana}]}).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


// symbols:
(lib.replace_arm_L = function() {
	this.initialize(img.replace_arm_L);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,90,90);


(lib.replace_arm_R = function() {
	this.initialize(img.replace_arm_R);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,90,90);


(lib.replace_body = function() {
	this.initialize(img.replace_body);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,180,200);


(lib.replace_breast_L = function() {
	this.initialize(img.replace_breast_L);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,120,120);


(lib.replace_breast_S = function() {
	this.initialize(img.replace_breast_S);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,120,120);


(lib.replace_cheek = function() {
	this.initialize(img.replace_cheek);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,96,42);


(lib.replace_cheek_flush = function() {
	this.initialize(img.replace_cheek_flush);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,38);


(lib.replace_cheek_flush_small = function() {
	this.initialize(img.replace_cheek_flush_small);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,94,36);


(lib.replace_cheek_small = function() {
	this.initialize(img.replace_cheek_small);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,92,39);


(lib.replace_face_base = function() {
	this.initialize(img.replace_face_base);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,200);


(lib.replace_face1 = function() {
	this.initialize(img.replace_face1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,140,140);


(lib.replace_face10 = function() {
	this.initialize(img.replace_face10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,140,140);


(lib.replace_face11 = function() {
	this.initialize(img.replace_face11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,140,140);


(lib.replace_face12 = function() {
	this.initialize(img.replace_face12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,140,140);


(lib.replace_face13 = function() {
	this.initialize(img.replace_face13);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,140,140);


(lib.replace_face14 = function() {
	this.initialize(img.replace_face14);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,140,140);


(lib.replace_face15 = function() {
	this.initialize(img.replace_face15);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,140,140);


(lib.replace_face16 = function() {
	this.initialize(img.replace_face16);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,140,140);


(lib.replace_face2 = function() {
	this.initialize(img.replace_face2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,140,140);


(lib.replace_face3 = function() {
	this.initialize(img.replace_face3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,140,140);


(lib.replace_face4 = function() {
	this.initialize(img.replace_face4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,140,140);


(lib.replace_face5 = function() {
	this.initialize(img.replace_face5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,140,140);


(lib.replace_face6 = function() {
	this.initialize(img.replace_face6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,140,140);


(lib.replace_face7 = function() {
	this.initialize(img.replace_face7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,140,140);


(lib.replace_face8 = function() {
	this.initialize(img.replace_face8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,140,140);


(lib.replace_face9 = function() {
	this.initialize(img.replace_face9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,140,140);


(lib.replace_foot_L_back = function() {
	this.initialize(img.replace_foot_L_back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,70,90);


(lib.replace_foot_L_front = function() {
	this.initialize(img.replace_foot_L_front);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,70,90);


(lib.replace_foot_R = function() {
	this.initialize(img.replace_foot_R);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,70,90);


(lib.replace_hair_back = function() {
	this.initialize(img.replace_hair_back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,230,310);


(lib.replace_hair_cue_center = function() {
	this.initialize(img.replace_hair_cue_center);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,240,350);


(lib.replace_hair_cue_left = function() {
	this.initialize(img.replace_hair_cue_left);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,240,350);


(lib.replace_hair_cue_right = function() {
	this.initialize(img.replace_hair_cue_right);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,240,350);


(lib.replace_hair_front = function() {
	this.initialize(img.replace_hair_front);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,240,320);


(lib.replace_hair_middle_L = function() {
	this.initialize(img.replace_hair_middle_L);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,240,300);


(lib.replace_hair_middle_R = function() {
	this.initialize(img.replace_hair_middle_R);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,240,300);


(lib.replace_hair_tail_center = function() {
	this.initialize(img.replace_hair_tail_center);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,240,350);


(lib.replace_hair_tail_left = function() {
	this.initialize(img.replace_hair_tail_left);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,240,350);


(lib.replace_hair_tail_right = function() {
	this.initialize(img.replace_hair_tail_right);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,240,350);


(lib.replace_hand_L_close = function() {
	this.initialize(img.replace_hand_L_close);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,90,90);


(lib.replace_hand_L_open = function() {
	this.initialize(img.replace_hand_L_open);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,90,90);


(lib.replace_hand_L_piece = function() {
	this.initialize(img.replace_hand_L_piece);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,90,90);


(lib.replace_hand_R_close = function() {
	this.initialize(img.replace_hand_R_close);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,90,90);


(lib.replace_hand_R_open = function() {
	this.initialize(img.replace_hand_R_open);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,90,90);


(lib.replace_hand_R_piece = function() {
	this.initialize(img.replace_hand_R_piece);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,90,90);


(lib.replace_head_back = function() {
	this.initialize(img.replace_head_back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,240,300);


(lib.replace_item_arm_L = function() {
	this.initialize(img.replace_item_arm_L);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,200);


(lib.replace_item_back_lower = function() {
	this.initialize(img.replace_item_back_lower);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,240,120);


(lib.replace_item_back_upper = function() {
	this.initialize(img.replace_item_back_upper);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,200);


(lib.replace_item_face_under = function() {
	this.initialize(img.replace_item_face_under);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,150,150);


(lib.replace_item_face1 = function() {
	this.initialize(img.replace_item_face1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,150,150);


(lib.replace_item_face2 = function() {
	this.initialize(img.replace_item_face2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,150,150);


(lib.replace_item_face3 = function() {
	this.initialize(img.replace_item_face3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,150,150);


(lib.replace_item_foot_L_back = function() {
	this.initialize(img.replace_item_foot_L_back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,70,80);


(lib.replace_item_foot_L_front = function() {
	this.initialize(img.replace_item_foot_L_front);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,70,80);


(lib.replace_item_foot_R = function() {
	this.initialize(img.replace_item_foot_R);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,70,80);


(lib.replace_item_hair_back = function() {
	this.initialize(img.replace_item_hair_back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,200);


(lib.replace_item_hand_inner = function() {
	this.initialize(img.replace_item_hand_inner);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,200);


(lib.replace_item_hand_L = function() {
	this.initialize(img.replace_item_hand_L);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,200);


(lib.replace_item_hand_R = function() {
	this.initialize(img.replace_item_hand_R);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,200);


(lib.replace_item_head = function() {
	this.initialize(img.replace_item_head);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,220,250);


(lib.replace_item_head_back = function() {
	this.initialize(img.replace_item_head_back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,300);


(lib.replace_item_head_middle = function() {
	this.initialize(img.replace_item_head_middle);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,300);


(lib.replace_leg_L_back = function() {
	this.initialize(img.replace_leg_L_back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,70,90);


(lib.replace_leg_L_front = function() {
	this.initialize(img.replace_leg_L_front);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,70,90);


(lib.replace_leg_R = function() {
	this.initialize(img.replace_leg_R);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,70,90);


(lib.cheek_small_1 = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.replace_cheek_small();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,92,39);


(lib.cheek_flush_small_1 = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.replace_cheek_flush_small();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,94,36);


(lib.hair_tail_left_small = function() {
	this.initialize();

}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.grip = function() {
	this.initialize();

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,102,0,0.498)").s().p("AjvCLIAAkWIHeAAIAAEWg");
	this.shape.setTransform(24,14);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,48,28);


(lib.cheek_normal_1 = function() {
	this.initialize();

	// cheek
	this.instance = new lib.replace_cheek();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,96,42);


(lib.cheek_flush_normal_1 = function() {
	this.initialize();

	// cheek
	this.instance = new lib.replace_cheek_flush();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,100,38);


(lib.shadow = function() {
	this.initialize();

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,51,0,0.847)").s().p("AixA5QhJgXAAgiQAAghBJgXQBLgYBmAAQBnAABLAYQBJAXAAAhQAAAihJAXQhLAYhnAAQhmAAhLgYg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-25.1,-8.1,50.3,16.3);


(lib.question = function() {
	this.initialize();

	// レイヤー 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#FFDDB6"],[0.463,1],0.1,-17.6,-0.1,17.7).s().p("Ag6CqIABgLIABgMQAAgPgIgJQgHgLgLgIIgcgTQgjgXgQgdQgPgeAAgoQABgoAWgdQAWgeAngRQAogRA0AAQAxAAApASQAoATAXAiQAXAiABAxIh5AQQABgggOgQQgNgRgXAAQgVABgNAKQgNALAAARQgBARAJAKQAJAMAUALQAhAYAQAaQARAbgBAlIAAAQIgDARg");
	this.shape.setTransform(-0.2,-7.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFE1BF").s().p("AhBA8IABh4ICCABIgBB4g");
	this.shape_1.setTransform(-0.3,19.2);

	// レイヤー 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FF8C00").ss(3,1,1).p("ABRjIQgigOgtgBQgrAAgiAPQgkAQgUAeQgTAdgBAqIBnAPQAAgcAMgOQALgOAUAAQASABALAJQALAJAAAPQAAAPgHAKQgIAKgRAKQgdATgNAXQgPAVAAAgQAAAHAAAHQABAHABAIIBlAAQAAgFAAgFQgBgFAAgFQAAgNAHgIQAFgKALgGQAKgHAOgJQAegSAOgZQANgZAAgkQAAgjgTgaQgTgaghgPgAA3BvIhwAAIAABoIBwAAg");
	this.shape_2.setTransform(-0.3,0.2,1.161,1.161,0,0.5,-179.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag5DYIAAhpIBwAAIAABpgAg0BPIgCgPIAAgOQAAggAPgVQANgXAdgTQARgKAIgKQAHgKAAgPQAAgPgLgJQgLgJgSgBQgUAAgLAOQgMAOAAAdIhngQQABgqATgdQAUgeAkgQQAigOArAAQAtAAAiAOQAhAPATAbQATAZAAAjQAAAkgNAZQgOAZgeASIgYAQQgLAHgFAJQgHAJAAAMIABAKIAAAKg");
	this.shape_3.setTransform(-0.3,0.2,1.161,1.161,0,0.5,-179.4);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-18,-24.8,35.5,50.2);


(lib.pin = function() {
	this.initialize();

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F96A05").s().p("ALvXfQgcgQgQgcIiXkCIAFAoQAEApgVAjQgWAkgnAOQgTAHgXAAQgdAAgagNQgbgOgRgZInKqoQicCTi/AAQiCAAh5hFQh5hGhZiAQhXh8gUiBQgTiCAzhwQAdg+AygxQhqg/hKhZQhLhagnhvQhBi3AtjOQAtjOCPi0QBviLCuhUQCuhTC1AAQBwAABjAiQBiAiBOBCQA8AzAwBIQBQhlB1g0QBpguB1AAQCXAACLBIQCLBIBRB4QCtEBg5DrQgXBhg9BUQBlAvA2BeQAzBXgDBoQgDBog4BgQg0BahPAwQhQAvhiAAQguAAgwgKICLSxQAFAqgXAkQgXAkgpANQgSAHgUAAQgfAAgcgQgAMqV3Iii17IBJAmQBYAoBMAAQCFAABHh7QBTiQhDh7Qgeg4g4ggQg6gihJAAQhWAAheAwQDtiBA+iyQBFjGiejqQhBhhhxg5Qhvg5h5AAQibAAhvBeQh+BpgjDJQgljpiMh3Qh9hqi5AAQiZAAiWBIQiWBIhdB0Qh1CUgqClQgqCjAoCUQAqCYB5BsQCBBzDKAtQhmAKhKAzQhGAugfBOQgeBOAQBcQARBhBDBfQBHBkBdA5QBhA7BmAAQBgAABXg0QBgg6BOhzIIjMqIhDpbg");
	this.shape.setTransform(18.6,28.5,0.175,0.175,30);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AF2KLIBDJbIojsqQilDxjagRQhggHhZg7QhWg4hChdQhDhfgRhhQgQhcAehOQAfhOBGguQBKgzBmgKQjKgtiBhzQh5hsgqiYQgoiUAqijQAqilB1iUQBih6CfhIQChhJCgAIQCtAKB1BpQCCB3AjDfQAgi5BuhpQBhhdCNgOQCDgOB+A6QCAA5BIBrQChDuhKDIQhACujpB/QBmg0BeAFQBdAFA/A6QA9A5AKBWQALBbg1BbQhaCci4gpQg6gMg8gfIgxgbICiV7g");
	this.shape_1.setTransform(18.6,28.5,0.175,0.175,30);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,44.6,58.9);


(lib.drop2 = function() {
	this.initialize();

	// レイヤー 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#71DCFF").ss(0.5,1,1).p("AhLgEQgLAeAnALQAKABAlgIQAhgHAtALIgagiQgigkghAAQgxAAgLAgg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["rgba(173,242,255,0)","#95EEFF"],[0,0.569],0,0,0,0,0,8.9).s().p("AgvAlQgngLALgeQALggAxAAQAhAAAiAkIAaAiQgtgLghAHQghAHgLAAIgDAAg");

	// レイヤー 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgxA5IgDgBIAAAAQgcgIgKgQQgNgSAJgYIAAAAQAOguBBAAIAAAAQAqAAAoAqIAAAAIABACIAbAiIAAAAQAEAFAAAHQAAAGgEAFQgDAFgGADIAAAAQgGACgGgCIAAAAQgogJgfAGQgiAHgNAAIgFAAgAhIgDQgFANAGAJQAGAKASAFIAAAAQAKABAlgHQAfgHAqAJIgWgeIgBAAIAAAAQggghghgBQguAAgLAfgABPAgIAAgBIAAAAIAAABg");

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9.8,-5.7,19.8,11.5);


(lib.drop1 = function() {
	this.initialize();

	// レイヤー 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#71DCFF").ss(0.8,1,1).p("AA3hCQAhAYgfAlQgJAGgrATQglAQgmApQgCgYAEgdQAJg5AjgYQAugiAhAZg");
	this.shape.setTransform(1.2,1.8,1,1,0,0,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["rgba(173,242,255,0)","#95EEFF"],[0,0.569],-0.5,-1.9,0,-0.5,-1.9,10.4).s().p("AhEAYQAJg5AjgYQAugiAhAZQAhAYgfAlQgJAGgrATQglAQgmApQgCgYAEgdg");
	this.shape_1.setTransform(1.2,1.8,1,1,0,0,180);

	// レイヤー 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABFBiQgIgBgFgGQgjglghgPQgvgVgKgJIgCgCQgVgYABgWQAAgYAZgTQArgiA7ArQAqAcAKBCQAFAggCAbQgBAIgGAFQgGAFgHAAIgCAAgAg5hFQgRANgBASQAAAQAQAUIABABQAJAGAsATQAkAPAlApIACACIADgBIABgDQADgZgFgdQgJg7gkgZQgbgUgYAAQgSAAgPALg");
	this.shape_2.setTransform(1.2,1.7);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-7.9,-8.1,18.5,19.7);


(lib.notice_passion_inner = function() {
	this.initialize();

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF9966").ss(2,1,1).p("ABoAJIgIArIjHgCIAAhlg");
	this.shape.setTransform(5.7,-0.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFDF91","#FF8627","#98EBFF"],[0,1,1],-10.3,0,10.5,0).s().p("AhnAxIAAhkIDPA7IgIAsg");
	this.shape_1.setTransform(5.7,-0.9);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-4.7,-6.1,21,10.5);


(lib.replace_leg_R_1 = function() {
	this.initialize();

	// transparent
	this.instance = new lib.replace_leg_R();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,70,90);


(lib.replace_leg_L_front_1 = function() {
	this.initialize();

	// transparent
	this.instance = new lib.replace_leg_L_front();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,70,90);


(lib.replace_leg_L_back_1 = function() {
	this.initialize();

	// transparent
	this.instance = new lib.replace_leg_L_back();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,70,90);


(lib.replace_item_head_middle_1 = function() {
	this.initialize();

	// transparent
	this.instance = new lib.replace_item_head_middle();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,320,300);


(lib.replace_item_head_back_1 = function() {
	this.initialize();

	// transparent
	this.instance = new lib.replace_item_head_back();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,300);


(lib.replace_item_head_1 = function() {
	this.initialize();

	// transparent
	this.instance = new lib.replace_item_head();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,220,250);


(lib.replace_item_hand_R_1 = function() {
	this.initialize();

	// transparent
	this.instance = new lib.replace_item_hand_R();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,200,200);


(lib.replace_item_hand_L_1 = function() {
	this.initialize();

	// transparent
	this.instance = new lib.replace_item_hand_L();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,200,200);


(lib.replace_item_hand_inner_1 = function() {
	this.initialize();

	// transparent
	this.instance = new lib.replace_item_hand_inner();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,200,200);


(lib.replace_item_hair_back_1 = function() {
	this.initialize();

	// transparent
	this.instance = new lib.replace_item_hair_back();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,200,200);


(lib.replace_item_foot_R_1 = function() {
	this.initialize();

	// transparent
	this.instance = new lib.replace_item_foot_R();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,70,80);


(lib.replace_item_foot_L_front_1 = function() {
	this.initialize();

	// transparent
	this.instance = new lib.replace_item_foot_L_front();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,70,80);


(lib.replace_item_foot_L_back_1 = function() {
	this.initialize();

	// transparent
	this.instance = new lib.replace_item_foot_L_back();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,70,80);


(lib.replace_item_face3_1 = function() {
	this.initialize();

	// transparent
	this.instance = new lib.replace_item_face3();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,150,150);


(lib.replace_item_face2_1 = function() {
	this.initialize();

	// transparent
	this.instance = new lib.replace_item_face2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,150,150);


(lib.replace_item_face1_1 = function() {
	this.initialize();

	// transparent
	this.instance = new lib.replace_item_face1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,150,150);


(lib.replace_item_face_under_1 = function() {
	this.initialize();

	// transparent
	this.instance = new lib.replace_item_face_under();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,150,150);


(lib.replace_item_back_upper_1 = function() {
	this.initialize();

	// transparent
	this.instance = new lib.replace_item_back_upper();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,200);


(lib.replace_item_back_lower_1 = function() {
	this.initialize();

	// transparent
	this.instance = new lib.replace_item_back_lower();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,240,120);


(lib.replace_item_arm_L_1 = function() {
	this.initialize();

	// transparent
	this.instance = new lib.replace_item_arm_L();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,200,200);


(lib.replace_head_back_1 = function() {
	this.initialize();

	// transparent
	this.instance = new lib.replace_head_back();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,240,300);


(lib.replace_hand_R_piece_1 = function() {
	this.initialize();

	// transparent
	this.instance = new lib.replace_hand_R_piece();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,90,90);


(lib.replace_hand_R_open_1 = function() {
	this.initialize();

	// transparent
	this.instance = new lib.replace_hand_R_open();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,90,90);


(lib.replace_hand_R_close_1 = function() {
	this.initialize();

	// transparent
	this.instance = new lib.replace_hand_R_close();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,90,90);


(lib.replace_hand_L_piece_1 = function() {
	this.initialize();

	// transparent
	this.instance = new lib.replace_hand_L_piece();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,90,90);


(lib.replace_hand_L_open_1 = function() {
	this.initialize();

	// transparent
	this.instance = new lib.replace_hand_L_open();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,90,90);


(lib.replace_hand_L_close_1 = function() {
	this.initialize();

	// transparent
	this.instance = new lib.replace_hand_L_close();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,90,90);


(lib.replace_hair_tail_right_1 = function() {
	this.initialize();

	// transparent
	this.instance = new lib.replace_hair_tail_right();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,240,350);


(lib.replace_hair_tail_left_1 = function() {
	this.initialize();

	// transparent
	this.instance = new lib.replace_hair_tail_left();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,240,350);


(lib.replace_hair_tail_center_1 = function() {
	this.initialize();

	// transparent
	this.instance = new lib.replace_hair_tail_center();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,240,350);


(lib.replace_hair_middle_R_1 = function() {
	this.initialize();

	// transparent
	this.instance = new lib.replace_hair_middle_R();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,240,300);


(lib.replace_hair_middle_L_1 = function() {
	this.initialize();

	// transparent
	this.instance = new lib.replace_hair_middle_L();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,240,300);


(lib.replace_hair_front_1 = function() {
	this.initialize();

	// transparent
	this.instance = new lib.replace_hair_front();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,240,320);


(lib.replace_hair_cue_right_1 = function() {
	this.initialize();

	// transparent
	this.instance = new lib.replace_hair_cue_right();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,240,350);


(lib.replace_hair_cue_left_1 = function() {
	this.initialize();

	// transparent
	this.instance = new lib.replace_hair_cue_left();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,240,350);


(lib.replace_hair_cue_center_1 = function() {
	this.initialize();

	// transparent
	this.instance = new lib.replace_hair_cue_center();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,240,350);


(lib.replace_hair_back_1 = function() {
	this.initialize();

	// transparent
	this.instance = new lib.replace_hair_back();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,230,310);


(lib.replace_foot_R_1 = function() {
	this.initialize();

	// transparent
	this.instance = new lib.replace_foot_R();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,70,90);


(lib.replace_foot_L_front_1 = function() {
	this.initialize();

	// transparent
	this.instance = new lib.replace_foot_L_front();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,70,90);


(lib.replace_foot_L_back_1 = function() {
	this.initialize();

	// transparent
	this.instance = new lib.replace_foot_L_back();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,70,90);


(lib.replace_face16_1 = function() {
	this.initialize();

	// transparent
	this.instance = new lib.replace_face16();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,140,140);


(lib.replace_face15_1 = function() {
	this.initialize();

	// transparent
	this.instance = new lib.replace_face15();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,140,140);


(lib.replace_face14_1 = function() {
	this.initialize();

	// transparent
	this.instance = new lib.replace_face14();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,140,140);


(lib.replace_face13_1 = function() {
	this.initialize();

	// transparent
	this.instance = new lib.replace_face13();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,140,140);


(lib.replace_face12_1 = function() {
	this.initialize();

	// transparent
	this.instance = new lib.replace_face12();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,140,140);


(lib.replace_face11_1 = function() {
	this.initialize();

	// transparent
	this.instance = new lib.replace_face11();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,140,140);


(lib.replace_face10_1 = function() {
	this.initialize();

	// transparent
	this.instance = new lib.replace_face10();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,140,140);


(lib.replace_face09 = function() {
	this.initialize();

	// transparent
	this.instance = new lib.replace_face9();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,140,140);


(lib.replace_face08 = function() {
	this.initialize();

	// transparent
	this.instance = new lib.replace_face8();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,140,140);


(lib.replace_face07 = function() {
	this.initialize();

	// transparent
	this.instance = new lib.replace_face7();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,140,140);


(lib.replace_face06 = function() {
	this.initialize();

	// transparent
	this.instance = new lib.replace_face6();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,140,140);


(lib.replace_face05 = function() {
	this.initialize();

	// transparent
	this.instance = new lib.replace_face5();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,140,140);


(lib.replace_face04 = function() {
	this.initialize();

	// transparent
	this.instance = new lib.replace_face4();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,140,140);


(lib.replace_face03 = function() {
	this.initialize();

	// transparent
	this.instance = new lib.replace_face3();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,140,140);


(lib.replace_face02 = function() {
	this.initialize();

	// transparent
	this.instance = new lib.replace_face2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,140,140);


(lib.replace_face01 = function() {
	this.initialize();

	// transparent
	this.instance = new lib.replace_face1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,140,140);


(lib.replace_face_base_1 = function() {
	this.initialize();

	// transparent
	this.instance = new lib.replace_face_base();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,200,200);


(lib.replace_breast_S_1 = function() {
	this.initialize();

	// transparent
	this.instance = new lib.replace_breast_S();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,120,120);


(lib.replace_breast_L_1 = function() {
	this.initialize();

	// transparent
	this.instance = new lib.replace_breast_L();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,120,120);


(lib.replace_body_1 = function() {
	this.initialize();

	// transparent
	this.instance = new lib.replace_body();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,180,200);


(lib.replace_arm_R_1 = function() {
	this.initialize();

	// transparent
	this.instance = new lib.replace_arm_R();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,90,90);


(lib.replace_arm_L_1 = function() {
	this.initialize();

	// transparent
	this.instance = new lib.replace_arm_L();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,90,90);


(lib.spread_flower_circle = function() {
	this.initialize();

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,79,156,0.2)","#FF4194"],[0,1],0,0,0,0,0,47.8).s().p("AlOFPQiMiKAAjFQAAjECMiKQCKiMDEAAQDFAACKCMQCMCKAADEQAADFiMCKQiKCMjFAAQjEAAiKiMg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-47.4,-47.4,95,95);


(lib.flower2 = function() {
	this.initialize();

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF74BA").s().p("AgXA2QgNgFAIgTQAGgPAMgLQgNABgSgGQgTgIAHgOQAFgNATAIQARAIAJALQgBgOAGgSQAIgSAOAGQANAGgIASQgHARgMAJQAOgBASAGQASAIgGAOQgFAOgTgJQgQgGgKgMQABAOgGARQgGAOgJAAIgHgCg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-5.5,-5.5,11.3,11.3);


(lib.flower1 = function() {
	this.initialize();

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFA9E9").s().p("AgBBGQgKgcAEgZQgTASgbAJQghALgHgYQgJgYAhgIQAcgKAZAEQgSgSgJgcQgLggAYgIQAYgIAIAgQAKAcgEAZQARgRAdgKQAggLAIAYQAIAYggAIQgcAKgZgEQARASAKAcQALAhgYAHQgFACgEAAQgRAAgGgag");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9.5,-9.6,19.3,19.3);


(lib.hair_tail_right_small = function() {
	this.initialize();

	// replace_hair_tail_right
	this.replace_hair_tail_right = new lib.replace_hair_tail_right_1();
	this.replace_hair_tail_right.setTransform(-52.3,-60.3,0.5,0.5,0,0,0,-0.4,0.5);

	this.addChild(this.replace_hair_tail_right);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-52.1,-60.6,120,175);


(lib.blink = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8));

	// close
	this.replace_face10 = new lib.replace_face10_1();
	this.replace_face10.setTransform(0,0,0.5,0.5);
	this.replace_face10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.replace_face10).wait(4).to({_off:false},0).to({_off:true},1).wait(4));

	// normal
	this.replace_face1 = new lib.replace_face01();
	this.replace_face1.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.replace_face1).to({_off:true},4).wait(1).to({_off:false},0).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,70,70);


(lib.leg_R_4 = function() {
	this.initialize();

	// replace_leg_R
	this.replace_leg_R = new lib.replace_leg_R_1();
	this.replace_leg_R.setTransform(-16,-9.9,0.5,0.5,0,0,0,-0.4,-0.9);

	this.addChild(this.replace_leg_R);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-15.8,-9.5,35,45);


(lib.leg_L_front_4 = function() {
	this.initialize();

	// replace_leg_L
	this.replace_leg_L_front = new lib.replace_leg_L_front_1();
	this.replace_leg_L_front.setTransform(-18,-10.4,0.5,0.5);

	this.addChild(this.replace_leg_L_front);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-18,-10.4,35,45);


(lib.leg_L_back_3 = function() {
	this.initialize();

	// replace_leg_L
	this.replace_leg_L_back = new lib.replace_leg_L_back_1();
	this.replace_leg_L_back.setTransform(-18,-10.5,0.5,0.5);

	this.addChild(this.replace_leg_L_back);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-18,-10.5,35,45);


(lib.item_face_under_2 = function() {
	this.initialize();

	// replace_item_face_under
	this.replace_item_face_under = new lib.replace_item_face_under_1();
	this.replace_item_face_under.setTransform(-36.1,-36.1,0.5,0.5,0,0,0,-0.4,1.1);

	this.addChild(this.replace_item_face_under);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-35.9,-36.7,75,75);


(lib.item_back_upper_3 = function() {
	this.initialize();

	// replace_item_back_upper
	this.replace_item_back_upper = new lib.replace_item_back_upper_1();
	this.replace_item_back_upper.setTransform(-77.3,-75.9,0.5,0.5,0,0,0,-0.9,0);

	this.addChild(this.replace_item_back_upper);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-76.9,-75.9,150,100);


(lib.item_back_lower_3 = function() {
	this.initialize();

	// replace
	this.replace_item_back_lower = new lib.replace_item_back_lower_1();
	this.replace_item_back_lower.setTransform(-62,-13.2,0.5,0.5);

	this.addChild(this.replace_item_back_lower);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-62,-13.2,120,60);


(lib.head_back_4 = function() {
	this.initialize();

	// replace_head_back
	this.replace_head_back = new lib.replace_head_back_1();
	this.replace_head_back.setTransform(-55.9,-66.4,0.5,0.5);

	// replace_item_hair_back
	this.replace_item_hair_back = new lib.replace_item_hair_back_1();
	this.replace_item_hair_back.setTransform(-46.8,-101.3,0.5,0.5);

	this.addChild(this.replace_item_hair_back,this.replace_head_back);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-55.9,-101.3,120,184.9);


(lib.hand_R_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// replace_item_hand_R
	this.replace_item_hand_R = new lib.replace_item_hand_R_1();
	this.replace_item_hand_R.setTransform(-71.2,-25.3,0.5,0.5,0,0,0,0.8,-0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.replace_item_hand_R}]}).wait(3));

	// replace_hand_R
	this.replace_hand_R_close = new lib.replace_hand_R_close_1();
	this.replace_hand_R_close.setTransform(-27.4,-6.8,0.496,0.5,0,0,0,0.5,0);

	this.replace_hand_R_open = new lib.replace_hand_R_open_1();
	this.replace_hand_R_open.setTransform(-27.4,-6.8,0.496,0.5,0,0,0,0.5,0);

	this.replace_hand_R_piece = new lib.replace_hand_R_piece_1();
	this.replace_hand_R_piece.setTransform(-27.4,-6.8,0.496,0.5,0,0,0,0.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.replace_hand_R_close}]}).to({state:[{t:this.replace_hand_R_open}]},1).to({state:[{t:this.replace_hand_R_piece}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71.7,-24.9,100,100);


(lib.hand_L_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// replace_item_hand_L
	this.replace_item_hand_L = new lib.replace_item_hand_L_1();
	this.replace_item_hand_L.setTransform(-34.9,-22.8,0.5,0.5,0,0,0,0,-0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.replace_item_hand_L}]}).wait(3));

	// replace_item_hand_inner
	this.replace_item_hand_inner = new lib.replace_item_hand_inner_1();
	this.replace_item_hand_inner.setTransform(-49.5,-35.7,0.5,0.5,0,0,0,0.7,0.4);
	this.replace_item_hand_inner._off = true;

	this.timeline.addTween(cjs.Tween.get(this.replace_item_hand_inner).wait(2).to({_off:false},0).wait(1));

	// replace_hand_L
	this.replace_hand_L_close = new lib.replace_hand_L_close_1();
	this.replace_hand_L_close.setTransform(-16.5,-6.7,0.5,0.5,0,0,0,-0.7,0.2);

	this.replace_hand_L_open = new lib.replace_hand_L_open_1();
	this.replace_hand_L_open.setTransform(-16.5,-6.7,0.5,0.5,0,0,0,-0.7,0.2);

	this.replace_hand_L_piece = new lib.replace_hand_L_piece_1();
	this.replace_hand_L_piece.setTransform(-16.5,-6.7,0.5,0.5,0,0,0,-0.7,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.replace_hand_L_close}]}).to({state:[{t:this.replace_hand_L_open}]},1).to({state:[{t:this.replace_hand_L_piece}]},1).wait(1));

	// replace_item_hand_inner
	this.replace_item_hand_inner_1 = new lib.replace_item_hand_inner_1();
	this.replace_item_hand_inner_1.setTransform(-49.5,-35.7,0.5,0.5,0,0,0,0.7,0.4);

	this.timeline.addTween(cjs.Tween.get(this.replace_item_hand_inner_1).to({_off:true},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.9,-35.9,115,113.5);


(lib.hair_tail_right_3 = function() {
	this.initialize();

	// replace_hair_tail_right
	this.replace_hair_tail_right = new lib.replace_hair_tail_right_1();
	this.replace_hair_tail_right.setTransform(-62.2,-41.7,0.5,0.5);

	this.addChild(this.replace_hair_tail_right);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-62.2,-41.7,120,175);


(lib.hair_tail_left_3 = function() {
	this.initialize();

	// replace_hair_tail_left
	this.replace_hair_tail_left = new lib.replace_hair_tail_left_1();
	this.replace_hair_tail_left.setTransform(-52.5,-37.2,0.5,0.5,0,0,0,-0.8,0.9);

	this.addChild(this.replace_hair_tail_left);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-52.1,-37.7,120,175);


(lib.hair_tail_center_3 = function() {
	this.initialize();

	// replace_hair_tail_center
	this.replace_hair_tail_center = new lib.replace_hair_tail_center_1();
	this.replace_hair_tail_center.setTransform(-61.9,-32.4,0.5,0.5);

	this.addChild(this.replace_hair_tail_center);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-61.9,-32.4,120,175);


(lib.hair_middle_R_3 = function() {
	this.initialize();

	// replace_hair_tail_left
	this.replace_hair_middle_R = new lib.replace_hair_middle_R_1();
	this.replace_hair_middle_R.setTransform(-65.9,-38.9,0.5,0.5);

	this.addChild(this.replace_hair_middle_R);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-65.9,-38.9,120,150);


(lib.hair_middle_L_3 = function() {
	this.initialize();

	// replace_hair_tail_left
	this.replace_hair_middle_L = new lib.replace_hair_middle_L_1();
	this.replace_hair_middle_L.setTransform(-52.6,-37.9,0.5,0.5,0,0,0,0.5,0);

	this.addChild(this.replace_hair_middle_L);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-52.9,-37.9,120,150);


(lib.hair_front_2 = function() {
	this.initialize();

	// replace_item_head
	this.replace_item_head = new lib.replace_item_head_1();
	this.replace_item_head.setTransform(-43.5,-55,0.5,0.5,0,0,0,0.2,-0.7);

	// replace_hair_front
	this.replace_hair_front = new lib.replace_hair_front_1();
	this.replace_hair_front.setTransform(-58.4,-45.2,0.5,0.5,0,0,0,-0.5,0.9);

	// replace_item_head_middle
	this.replace_item_head_middle = new lib.replace_item_head_middle_1();
	this.replace_item_head_middle.setTransform(-77.1,-68.6,0.5,0.5,0,0,0,-0.9,-0.9);

	this.addChild(this.replace_item_head_middle,this.replace_hair_front,this.replace_item_head);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-76.7,-68.2,160,182.5);


(lib.hair_cue_right_3 = function() {
	this.initialize();

	// replace_hair_cue_right
	this.replace_hair_cue_right = new lib.replace_hair_cue_right_1();
	this.replace_hair_cue_right.setTransform(-69.9,-44.9,0.5,0.5);

	this.addChild(this.replace_hair_cue_right);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-69.9,-44.9,120,175);


(lib.hair_cue_left_3 = function() {
	this.initialize();

	// replace_hair_cue_left
	this.replace_hair_cue_left = new lib.replace_hair_cue_left_1();
	this.replace_hair_cue_left.setTransform(-55.3,-45.3,0.5,0.5,0,0,0,-0.9,-0.9);

	this.addChild(this.replace_hair_cue_left);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-54.9,-44.9,120,175);


(lib.hair_cue_center_1 = function() {
	this.initialize();

	// replace_hair_cue_center
	this.replace_hair_cue_center = new lib.replace_hair_cue_center_1();
	this.replace_hair_cue_center.setTransform(-60.9,-31.4,0.5,0.5);

	this.addChild(this.replace_hair_cue_center);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-60.9,-31.4,120,175);


(lib.hair_back_3 = function() {
	this.initialize();

	// replace_hair_back
	this.replace_hair_back = new lib.replace_hair_back_1();
	this.replace_hair_back.setTransform(-50.6,-4.9,0.5,0.5,0,0,0,0.5,0);

	// replace_item_head_back
	this.replace_item_head_back = new lib.replace_item_head_back_1();
	this.replace_item_head_back.setTransform(-76.3,-74.2,0.499,0.5,0,0,0,-0.9,-1.6);

	this.addChild(this.replace_item_head_back,this.replace_hair_back);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-75.9,-73.4,149.8,223.5);


(lib.foot_R_4 = function() {
	this.initialize();

	// replace_item_foot_R
	this.replace_item_foot_R = new lib.replace_item_foot_R_1();
	this.replace_item_foot_R.setTransform(-17,-8.2,0.5,0.496);

	// replace_foot_R
	this.replace_foot_R = new lib.replace_foot_R_1();
	this.replace_foot_R.setTransform(-16,-11.3,0.5,0.5);

	this.addChild(this.replace_foot_R,this.replace_item_foot_R);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-17,-11.3,36,45);


(lib.foot_L_front_4 = function() {
	this.initialize();

	// replace_item_foot_L_front
	this.replace_item_foot_L_front = new lib.replace_item_foot_L_front_1();
	this.replace_item_foot_L_front.setTransform(-17.7,-7.5,0.5,0.5,0,0,0,0,0.4);

	// replace_foot_L_front
	this.replace_foot_L_front = new lib.replace_foot_L_front_1();
	this.replace_foot_L_front.setTransform(-17.2,-10.8,0.5,0.5);

	this.addChild(this.replace_foot_L_front,this.replace_item_foot_L_front);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-17.7,-10.8,35.5,45);


(lib.foot_L_back_4 = function() {
	this.initialize();

	// replace_item_foot_L
	this.replace_item_foot_L_back = new lib.replace_item_foot_L_back_1();
	this.replace_item_foot_L_back.setTransform(-17.7,-8.1,0.5,0.5);

	// replace_foot_L
	this.replace_foot_L_back = new lib.replace_foot_L_back_1();
	this.replace_foot_L_back.setTransform(-17.4,-10.8,0.5,0.5);

	this.addChild(this.replace_foot_L_back,this.replace_item_foot_L_back);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-17.7,-10.8,35.3,45);


(lib.face_expression = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19));

	// grip
	this.instance = new lib.grip();
	this.instance.setTransform(-23.9,-13.9);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).wait(20));

	// replace_item_face3
	this.replace_item_face3 = new lib.replace_item_face3_1();
	this.replace_item_face3.setTransform(-70.6,-95.6,0.5,0.5,0,0,0,-0.4,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.replace_item_face3}]}).wait(20));

	// replace_item_face2
	this.replace_item_face2 = new lib.replace_item_face2_1();
	this.replace_item_face2.setTransform(1,0.3,0.5,0.5,0,0,0,74,74.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.replace_item_face2}]}).wait(20));

	// replace_item_face1
	this.replace_item_face1 = new lib.replace_item_face1_1();
	this.replace_item_face1.setTransform(-35.9,-36.9,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.replace_item_face1}]}).wait(20));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AiUCVIAAkqIEqAAIAAEqg");
	var mask_graphics_16 = new cjs.Graphics().p("AiUCVIAAkqIEqAAIAAEqg");
	var mask_graphics_17 = new cjs.Graphics().p("AiVCWIAAkqIEqAAIAAEqg");
	var mask_graphics_18 = new cjs.Graphics().p("AiUCVIAAkqIEpAAIAAEqg");
	var mask_graphics_19 = new cjs.Graphics().p("AiLCVIAAkqIErAAIAAEqg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-14.9,y:-5.2}).wait(16).to({graphics:mask_graphics_16,x:-14.9,y:-5.2}).wait(1).to({graphics:mask_graphics_17,x:15,y:-5.9}).wait(1).to({graphics:mask_graphics_18,x:-12.9,y:6}).wait(1).to({graphics:mask_graphics_19,x:16,y:6}).wait(1));

	// close
	this.replace_face10 = new lib.replace_face10_1();
	this.replace_face10.setTransform(-34.4,-36.4,0.5,0.5);
	this.replace_face10.alpha = 0;

	this.replace_face10.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.replace_face10).wait(16).to({alpha:1},0).wait(4));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("AkqDeIAAm7IJVAAIAAG7g");
	var mask_1_graphics_16 = new cjs.Graphics().p("AkqDhIAAiXIEqAAIAAkqIErAAIAAHBg");
	var mask_1_graphics_17 = new cjs.Graphics().p("AkqDhIAAnAIEqAAIAAEqIErAAIAACWg");
	var mask_1_graphics_18 = new cjs.Graphics().p("AkqDhIAAiXIEqAAIAAkqIEsAAIAAHBg");
	var mask_1_graphics_19 = new cjs.Graphics().p("AkqDhIAAnBIEqAAIAAEqIEsAAIAACXg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:0,y:2.3}).wait(16).to({graphics:mask_1_graphics_16,x:0,y:2.3}).wait(1).to({graphics:mask_1_graphics_17,x:0,y:1.5}).wait(1).to({graphics:mask_1_graphics_18,x:2,y:13.5}).wait(1).to({graphics:mask_1_graphics_19,x:2,y:13.5}).wait(1));

	// faces
	this.instance_1 = new lib.blink();
	this.instance_1.setTransform(-34.4,-36.4);

	this.replace_face2 = new lib.replace_face02();
	this.replace_face2.setTransform(-34.4,-36.4,0.5,0.5);

	this.replace_face3 = new lib.replace_face03();
	this.replace_face3.setTransform(-34.4,-36.4,0.5,0.5);

	this.replace_face4 = new lib.replace_face04();
	this.replace_face4.setTransform(-34.4,-36.4,0.5,0.5);

	this.replace_face5 = new lib.replace_face05();
	this.replace_face5.setTransform(-34.4,-36.4,0.5,0.5);

	this.replace_face6 = new lib.replace_face06();
	this.replace_face6.setTransform(-34.4,-36.4,0.5,0.5);

	this.replace_face7 = new lib.replace_face07();
	this.replace_face7.setTransform(-34.4,-36.4,0.5,0.5);

	this.replace_face8 = new lib.replace_face08();
	this.replace_face8.setTransform(-34.4,-36.4,0.5,0.5);

	this.replace_face9 = new lib.replace_face09();
	this.replace_face9.setTransform(-34.4,-36.4,0.5,0.5);

	this.replace_face10_1 = new lib.replace_face10_1();
	this.replace_face10_1.setTransform(-34.4,-36.4,0.5,0.5);

	this.replace_face11 = new lib.replace_face11_1();
	this.replace_face11.setTransform(-34.4,-36.4,0.5,0.5);

	this.replace_face12 = new lib.replace_face12_1();
	this.replace_face12.setTransform(-34.4,-36.4,0.5,0.5);

	this.replace_face13 = new lib.replace_face13_1();
	this.replace_face13.setTransform(-34.4,-36.4,0.5,0.5);

	this.replace_face14 = new lib.replace_face14_1();
	this.replace_face14.setTransform(-34.4,-36.4,0.5,0.5);

	this.replace_face15 = new lib.replace_face15_1();
	this.replace_face15.setTransform(-34.4,-36.4,0.5,0.5);

	this.replace_face16 = new lib.replace_face16_1();
	this.replace_face16.setTransform(-34.4,-36.4,0.5,0.5);

	this.replace_face1 = new lib.replace_face01();
	this.replace_face1.setTransform(-34.4,-36.4,0.5,0.5);

	this.instance_1.mask = this.replace_face2.mask = this.replace_face3.mask = this.replace_face4.mask = this.replace_face5.mask = this.replace_face6.mask = this.replace_face7.mask = this.replace_face8.mask = this.replace_face9.mask = this.replace_face10_1.mask = this.replace_face11.mask = this.replace_face12.mask = this.replace_face13.mask = this.replace_face14.mask = this.replace_face15.mask = this.replace_face16.mask = this.replace_face1.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.replace_face2}]},1).to({state:[{t:this.replace_face3}]},1).to({state:[{t:this.replace_face4}]},1).to({state:[{t:this.replace_face5}]},1).to({state:[{t:this.replace_face6}]},1).to({state:[{t:this.replace_face7}]},1).to({state:[{t:this.replace_face8}]},1).to({state:[{t:this.replace_face9}]},1).to({state:[{t:this.replace_face10_1}]},1).to({state:[{t:this.replace_face11}]},1).to({state:[{t:this.replace_face12}]},1).to({state:[{t:this.replace_face13}]},1).to({state:[{t:this.replace_face14}]},1).to({state:[{t:this.replace_face15}]},1).to({state:[{t:this.replace_face16}]},1).to({state:[{t:this.replace_face1}]},1).to({state:[{t:this.replace_face1}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.4,-95.7,109.5,133.8);


(lib.face_base_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// replace_cheek
	this.replace_cheek = new lib.cheek_normal_1();
	this.replace_cheek.setTransform(-23.9,-22.9,0.5,0.5);

	this.replace_cheek_flush = new lib.cheek_flush_normal_1();
	this.replace_cheek_flush.setTransform(-24.9,-23.9,0.5,0.5);

	this.replace_cheek_small = new lib.cheek_small_1();
	this.replace_cheek_small.setTransform(-21.9,-11.9,0.5,0.5);

	this.replace_cheek_flush_small = new lib.cheek_flush_small_1();
	this.replace_cheek_flush_small.setTransform(-22.9,-13.9,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.replace_cheek}]}).to({state:[{t:this.replace_cheek_flush}]},1).to({state:[{t:this.replace_cheek_small}]},1).to({state:[{t:this.replace_cheek_flush_small}]},1).to({state:[]},1).wait(1));

	// replace_face_base
	this.replace_face_base = new lib.replace_face_base_1();
	this.replace_face_base.setTransform(-48.1,-82.8,0.499,0.5,0,0,0,-0.4,-0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.replace_face_base}]}).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.9,-82.4,99.8,100);


(lib.breast_L_1 = function() {
	this.initialize();

	// replace_breast_L
	this.replace_breast_L = new lib.replace_breast_L_1();
	this.replace_breast_L.setTransform(-30.1,-29.6,0.498,0.5,0,0,0,-0.4,0.5);

	this.addChild(this.replace_breast_L);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-29.9,-29.9,59.8,60);


(lib.body_4 = function() {
	this.initialize();

	// replace_breast_S
	this.replace_breast_S = new lib.replace_breast_S_1();
	this.replace_breast_S.setTransform(-32.9,-30.4,0.5,0.5);

	// replace_body
	this.replace_body = new lib.replace_body_1();
	this.replace_body.setTransform(-45.9,-40.4,0.5,0.5);

	this.addChild(this.replace_body,this.replace_breast_S);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-45.9,-40.4,90,100);


(lib.arm_R_4 = function() {
	this.initialize();

	// replace_arm_R
	this.replace_arm_R = new lib.replace_arm_R_1();
	this.replace_arm_R.setTransform(-27.5,-7.8,0.5,0.498);

	this.addChild(this.replace_arm_R);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27.5,-7.8,45,44.9);


(lib.arm_L_4 = function() {
	this.initialize();

	// replace_item_arm_L
	this.replace_item_arm_L = new lib.replace_item_arm_L_1();
	this.replace_item_arm_L.setTransform(-20,-48.5,0.5,0.5,0,0,0,0.2,0.5);

	// replace_arm_L
	this.replace_arm_L = new lib.replace_arm_L_1();
	this.replace_arm_L.setTransform(-15.5,-5.9,0.496,0.497);

	this.addChild(this.replace_arm_L,this.replace_item_arm_L);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-20.2,-48.8,100,100);


(lib.sweat_fly = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_7 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(7).call(this.frame_7));

	// drop1
	this.instance = new lib.drop1("synched",0);
	this.instance.setTransform(3.3,-10,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({skewX:45,skewY:225.1,x:35.3,y:-21.3,alpha:0.219},2,cjs.Ease.get(1)).to({_off:true},1).wait(1).to({skewX:0,skewY:180,x:3.3,y:-9.9,alpha:1,_off:false},0).to({skewX:45,skewY:225.1,x:35.3,y:-21.3,alpha:0.219},2,cjs.Ease.get(1)).to({_off:true},1).wait(1));

	// drop2
	this.instance_1 = new lib.drop2("synched",0);
	this.instance_1.setTransform(4.8,-1.6,0.848,0.848,0,-14.9,165);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,scaleY:1,skewX:30,skewY:210.1,x:40.8,y:3.6,alpha:0.219},2,cjs.Ease.get(1)).to({_off:true},1).wait(1).to({scaleX:0.85,scaleY:0.85,skewX:-14.8,skewY:165,x:4.8,y:-1.5,alpha:1,_off:false},0).to({scaleX:1,scaleY:1,skewX:30,skewY:210.1,x:40.8,y:-1.3,alpha:0.219},2,cjs.Ease.get(1)).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.1,-18.2,21.3,23.4);


(lib.punpun = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// sigh
	this.instance = new lib.pin();
	this.instance.setTransform(48.9,-1.9,1,1,0,0,0,22.3,29.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:53.5,y:-28.1,alpha:0},4,cjs.Ease.get(-0.99)).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(26.6,-31.4,44.6,58.9);


(lib.mc_punpun = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_18 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(18).call(this.frame_18));

	// レイヤー 3
	this.instance = new lib.punpun("synched",0);
	this.instance.setTransform(96.9,5,0.735,0.735,45.5,0,0,48.8,-1.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({startPosition:0,_off:false},0).to({_off:true},5).wait(3).to({startPosition:0,_off:false},0).to({_off:true},4).wait(2));

	// レイヤー 1
	this.instance_1 = new lib.punpun("synched",0);
	this.instance_1.setTransform(0.1,0.1,1,1,-42.1,0,0,48.9,-1.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},6).wait(3).to({startPosition:0,_off:false},0).to({_off:true},5).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53.8,-59.3,93.7,96.2);


(lib.notice = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_7 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(7).call(this.frame_7));

	// mark1
	this.instance = new lib.notice_passion_inner();
	this.instance.setTransform(4.5,-12.6,1,1,-51.6,0,0,48.5,0.1);

	this.instance_1 = new lib.notice_passion_inner();
	this.instance_1.setTransform(10.4,-9.3,1,1,-18.1,0,0,48.5,0.1);

	this.instance_2 = new lib.notice_passion_inner();
	this.instance_2.setTransform(12.1,-9.9,1,1,5.5,0,0,48.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).to({state:[]},1).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},2).to({state:[]},1).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},2).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.1,-21.1,30,52.9);


(lib.spread_flower = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// flower3
	this.instance = new lib.flower2("synched",0);
	this.instance.setTransform(21.4,5.2,0.715,0.715);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.41,scaleY:1.41,rotation:-359.9,x:76.1,y:1.7,alpha:0.219},6).to({_off:true},1).wait(1));

	// flower2
	this.instance_1 = new lib.flower2("synched",0);
	this.instance_1.setTransform(-13.9,-10.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.54,scaleY:1.54,rotation:-359.9,x:-39.2,y:-44.5,alpha:0.219},6).to({_off:true},1).wait(1));

	// flower1
	this.instance_2 = new lib.flower1("synched",0);
	this.instance_2.setTransform(15.8,-6.4,0.793,0.793);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1.11,scaleY:1.11,rotation:-359.9,x:58.8,y:-51.5,alpha:0.219},6).to({_off:true},1).wait(1));

	// flower3
	this.instance_3 = new lib.flower2("synched",0);
	this.instance_3.setTransform(-14.4,14.3,0.715,0.715);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:1.41,scaleY:1.41,rotation:-359.9,x:-48.1,y:59.8,alpha:0.219},6).to({_off:true},1).wait(1));

	// flower3
	this.instance_4 = new lib.flower2("synched",0);
	this.instance_4.setTransform(5.6,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:1.49,scaleY:1.49,rotation:-359.9,x:25.7,y:70.8,alpha:0.219},6).to({_off:true},1).wait(1));

	// flower2
	this.instance_5 = new lib.flower2("synched",0);
	this.instance_5.setTransform(-20.8,2.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleX:1.89,scaleY:1.89,rotation:-359.9,x:-73.7,y:6.7,alpha:0.219},6).to({_off:true},1).wait(1));

	// flower1
	this.instance_6 = new lib.flower1("synched",0);
	this.instance_6.setTransform(0.3,-12.1,0.781,0.781,-44.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({scaleX:1.36,scaleY:1.36,rotation:-719.9,x:-3,y:-76.3,alpha:0.219},6).to({_off:true},1).wait(1));

	// レイヤー 1
	this.instance_7 = new lib.spread_flower_circle();
	this.instance_7.setTransform(0,0,0.558,0.558);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({scaleX:1.09,scaleY:1.09,alpha:0.398},1,cjs.Ease.get(1)).to({scaleX:1.72,scaleY:1.72,alpha:0.102},5,cjs.Ease.get(-0.99)).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.4,-26.4,53,53);


(lib.character_motion_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{stay:10,nod:28,nod_smile:46,happy:63,joy:89,light_joy:107,smile_right:125,smile_left:145,question_right:165,question_left:185,notice:205,shout:221,shock:245,amazement:269,angry:293,trouble:311,deny:324,shy:357,smug:377,panic:400,hail:414,greet:456,sit_down:464,stay_sit:479,nod_sit:501,nod_smile_sit:518,happy_sit:537,joy_sit:556,light_joy_sit:576,smile_right_sit:596,smile_left_sit:616,shout_sit:636,shock_sit:661,amazement_sit:689,angry_sit:709,trouble_sit:727,question_right_sit:740,question_left_sit:760,notice_sit:780,deny_sit:796,shy_sit:829,smug_sit:850,panic_sit:867,bye_sit:882,out:920,stay_small:937,out_small:984});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_26 = function() {
		this.gotoAndPlay("stay");
	}
	this.frame_44 = function() {
		this.gotoAndPlay("stay");
		this.parent.parent.callback_set();
	}
	this.frame_62 = function() {
		this.parent.parent.callback_set();
		this.gotoAndPlay("stay");
	}
	this.frame_88 = function() {
		this.parent.parent.callback_set();
		this.gotoAndPlay("stay");
	}
	this.frame_106 = function() {
		this.parent.parent.callback_set();
		this.gotoAndPlay("stay");
	}
	this.frame_124 = function() {
		this.parent.parent.callback_set();
		this.gotoAndPlay("stay");
	}
	this.frame_144 = function() {
		this.parent.parent.callback_set();
		this.gotoAndPlay("stay");
	}
	this.frame_164 = function() {
		this.parent.parent.callback_set();
		this.gotoAndPlay("stay");
	}
	this.frame_184 = function() {
		this.parent.parent.callback_set();
		this.gotoAndPlay("stay");
	}
	this.frame_204 = function() {
		this.parent.parent.callback_set();
		this.gotoAndPlay("stay");
	}
	this.frame_220 = function() {
		this.parent.parent.callback_set();
		this.gotoAndPlay("stay");
	}
	this.frame_244 = function() {
		this.parent.parent.callback_set();
		this.gotoAndPlay("stay");
	}
	this.frame_268 = function() {
		this.parent.parent.callback_set();
		this.gotoAndPlay("stay");
	}
	this.frame_292 = function() {
		this.parent.parent.callback_set();
		this.gotoAndPlay("stay");
	}
	this.frame_310 = function() {
		this.parent.parent.callback_set();
		this.gotoAndPlay("stay");
	}
	this.frame_323 = function() {
		this.parent.parent.callback_set();
		this.gotoAndPlay("stay");
	}
	this.frame_356 = function() {
		this.parent.parent.callback_set();
		this.gotoAndPlay("stay");
	}
	this.frame_376 = function() {
		this.parent.parent.callback_set();
		this.gotoAndPlay("stay");
	}
	this.frame_399 = function() {
		this.parent.parent.callback_set();
		this.gotoAndPlay("stay");
	}
	this.frame_413 = function() {
		this.parent.parent.callback_set();
		this.gotoAndPlay("stay");
	}
	this.frame_455 = function() {
		this.parent.parent.callback_set();
		this.gotoAndPlay("stay");
	}
	this.frame_463 = function() {
		this.parent.parent.callback_set();
		this.gotoAndPlay("stay");
	}
	this.frame_477 = function() {
		this.parent.parent.callback_set();
		this.gotoAndPlay("stay_sit");
	}
	this.frame_500 = function() {
		this.gotoAndPlay("stay_sit");
	}
	this.frame_517 = function() {
		this.parent.parent.callback_set();
		this.gotoAndPlay("stay_sit");
	}
	this.frame_536 = function() {
		this.parent.parent.callback_set();
		this.gotoAndPlay("stay_sit");
	}
	this.frame_555 = function() {
		this.parent.parent.callback_set();
		this.gotoAndPlay("stay_sit");
	}
	this.frame_575 = function() {
		this.parent.parent.callback_set();
		this.gotoAndPlay("stay_sit");
	}
	this.frame_595 = function() {
		this.parent.parent.callback_set();
		this.gotoAndPlay("stay_sit");
	}
	this.frame_615 = function() {
		this.parent.parent.callback_set();
		this.gotoAndPlay("stay_sit");
	}
	this.frame_635 = function() {
		this.parent.parent.callback_set();
		this.gotoAndPlay("stay_sit");
	}
	this.frame_660 = function() {
		this.parent.parent.callback_set();
		this.gotoAndPlay("stay_sit");
	}
	this.frame_688 = function() {
		this.parent.parent.callback_set();
		this.gotoAndPlay("stay_sit");
	}
	this.frame_708 = function() {
		this.parent.parent.callback_set();
		this.gotoAndPlay("stay_sit");
	}
	this.frame_726 = function() {
		this.parent.parent.callback_set();
		this.gotoAndPlay("stay_sit");
	}
	this.frame_739 = function() {
		this.parent.parent.callback_set();
		this.gotoAndPlay("stay_sit");
	}
	this.frame_759 = function() {
		this.parent.parent.callback_set();
		this.gotoAndPlay("stay_sit");
	}
	this.frame_779 = function() {
		this.parent.parent.callback_set();
		this.gotoAndPlay("stay_sit");
	}
	this.frame_795 = function() {
		this.parent.parent.callback_set();
		this.gotoAndPlay("stay_sit");
	}
	this.frame_828 = function() {
		this.parent.parent.callback_set();
		this.gotoAndPlay("stay_sit");
	}
	this.frame_849 = function() {
		this.parent.parent.callback_set();
		this.gotoAndPlay("stay_sit");
	}
	this.frame_866 = function() {
		this.parent.parent.callback_set();
		this.gotoAndPlay("stay_sit");
	}
	this.frame_881 = function() {
		this.parent.parent.callback_set();
		this.gotoAndPlay("stay_sit");
	}
	this.frame_915 = function() {
		this.parent.parent.callback_set();
		this.gotoAndPlay("stay_sit");
	}
	this.frame_922 = function() {
		this.stop();
	}
	this.frame_953 = function() {
		this.gotoAndPlay("stay_small");
	}
	this.frame_987 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(26).call(this.frame_26).wait(18).call(this.frame_44).wait(18).call(this.frame_62).wait(26).call(this.frame_88).wait(18).call(this.frame_106).wait(18).call(this.frame_124).wait(20).call(this.frame_144).wait(20).call(this.frame_164).wait(20).call(this.frame_184).wait(20).call(this.frame_204).wait(16).call(this.frame_220).wait(24).call(this.frame_244).wait(24).call(this.frame_268).wait(24).call(this.frame_292).wait(18).call(this.frame_310).wait(13).call(this.frame_323).wait(33).call(this.frame_356).wait(20).call(this.frame_376).wait(23).call(this.frame_399).wait(14).call(this.frame_413).wait(42).call(this.frame_455).wait(8).call(this.frame_463).wait(14).call(this.frame_477).wait(23).call(this.frame_500).wait(17).call(this.frame_517).wait(19).call(this.frame_536).wait(19).call(this.frame_555).wait(20).call(this.frame_575).wait(20).call(this.frame_595).wait(20).call(this.frame_615).wait(20).call(this.frame_635).wait(25).call(this.frame_660).wait(28).call(this.frame_688).wait(20).call(this.frame_708).wait(18).call(this.frame_726).wait(13).call(this.frame_739).wait(20).call(this.frame_759).wait(20).call(this.frame_779).wait(16).call(this.frame_795).wait(33).call(this.frame_828).wait(21).call(this.frame_849).wait(17).call(this.frame_866).wait(15).call(this.frame_881).wait(34).call(this.frame_915).wait(7).call(this.frame_922).wait(31).call(this.frame_953).wait(34).call(this.frame_987).wait(298));

	// sweat_fly
	this.instance = new lib.sweat_fly();
	this.instance.setTransform(-20.8,-128.5,0.969,0.969,0,-3.1,176.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(400).to({_off:false},0).to({_off:true},13).wait(873));

	// punpun
	this.instance_1 = new lib.mc_punpun("synched",0,false);
	this.instance_1.setTransform(-31.4,-138.7,0.672,0.672);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(293).to({startPosition:0,_off:false},0).to({_off:true},17).wait(399).to({startPosition:0,_off:false},0).to({_off:true},13).wait(564));

	// notice
	this.instance_2 = new lib.notice("synched",0,false);
	this.instance_2.setTransform(-25.8,-144.7,1,1,65,0,0,-28.6,6.3);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(207).to({startPosition:0,_off:false},0).to({_off:true},13).wait(562).to({startPosition:0,_off:false},0).to({_off:true},13).wait(491));

	// question
	this.instance_3 = new lib.question();
	this.instance_3.setTransform(-37.5,-129.9,0.648,0.648,-28.4);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(165).wait(1).to({_off:false},0).to({x:-44.9,y:-145,alpha:1},3,cjs.Ease.get(1)).to({x:-41.6,y:-138.9},4,cjs.Ease.get(-0.99)).to({x:-42.1,y:-139.7},2).wait(3).to({x:-39.3,y:-134.7,alpha:0},5,cjs.Ease.get(0.3)).to({_off:true},1).wait(1).to({rotation:28.4,x:33.4,y:-129.9,_off:false},0).to({x:42.1,y:-144.6,alpha:1},3,cjs.Ease.get(1)).to({x:38.7,y:-138.4},4,cjs.Ease.get(-0.99)).to({x:39.2,y:-139.3},2).wait(3).to({x:36.5,y:-134.1,alpha:0},5,cjs.Ease.get(0.3)).to({_off:true},1).wait(538).to({rotation:-28.3,x:-37.4,y:-129.8,_off:false},0).to({x:-44.9,y:-145,alpha:1},3,cjs.Ease.get(1)).to({x:-41.6,y:-138.9},4,cjs.Ease.get(-0.99)).to({x:-42.1,y:-139.7},2).wait(3).to({x:-39.3,y:-134.7,alpha:0},5,cjs.Ease.get(0.3)).to({_off:true},1).wait(1).to({rotation:28.4,x:33.4,y:-129.9,_off:false},0).to({x:42.1,y:-144.6,alpha:1},3,cjs.Ease.get(1)).to({x:38.7,y:-138.4},4,cjs.Ease.get(-0.99)).to({x:39.2,y:-139.3},2).wait(3).to({x:36.5,y:-134.1,alpha:0},5,cjs.Ease.get(0.3)).to({_off:true},1).wait(508));

	// effect
	this.instance_4 = new lib.spread_flower("synched",0,false);
	this.instance_4.setTransform(-8.2,-93.3,0.956,0.956,0,0,0,-0.5,-0.3);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(63).wait(7).to({startPosition:0,_off:false},0).to({_off:true},16).wait(3).wait(4).to({startPosition:0,_off:false},0).to({_off:true},13).wait(455).to({x:-7.3,y:-94.3,_off:false},0).to({_off:true},14).wait(711));

	// hand_R
	this.instance_5 = new lib.hand_R_2("single",1);
	this.instance_5.setTransform(-17.5,-47.3);
	this.instance_5.alpha = 0.012;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({startPosition:1,_off:false},0).wait(68).to({rotation:95.2,x:-27.7,y:-55.4,alpha:1,startPosition:2},0).to({rotation:174.1,x:-36.7,y:-71},2).to({rotation:155.9,x:-40.5,y:-57.6},4).to({rotation:76.8,x:-40.3,y:-59.3},3).to({startPosition:2},3).to({rotation:0,x:-17.4,y:-47.2,startPosition:1},5).to({_off:true},3).wait(235).wait(8).to({skewX:160,skewY:-19.8,x:-25.6,y:-54.1,_off:false},0).to({scaleX:1,scaleY:1,skewX:182.8,skewY:2.7,x:-24.4,y:-54},1).to({scaleX:1,scaleY:1,skewX:200.8,skewY:20.7,x:-21.5},3,cjs.Ease.get(1)).to({skewX:169.2,skewY:-10.6,x:-26.7,y:-53.6},4,cjs.Ease.get(1)).to({skewX:194.4,skewY:14.3,x:-23.8},4,cjs.Ease.get(1)).to({skewX:173,skewY:-6.8,x:-24.3,y:-54.8},4,cjs.Ease.get(-0.99)).to({skewX:164.6,skewY:-15.2,x:-23.7,y:-55.3},3).to({_off:true},1).wait(5).to({skewX:0,skewY:0,x:-17.4,y:-47.2,_off:false},0).to({rotation:-164.2,x:-23.8,y:-49},4).to({rotation:-161.3,x:-23.5,y:-49.6},4,cjs.Ease.get(1)).wait(7).to({startPosition:1},0).to({rotation:0,x:-17.4,y:-47.2},4).to({_off:true},1).wait(419).wait(8).to({skewX:160,skewY:-19.8,x:-25.6,y:-54.1,_off:false},0).to({scaleX:1,scaleY:1,skewX:182.8,skewY:2.7,x:-24.4,y:-54},1).to({scaleX:1,scaleY:1,skewX:200.8,skewY:20.7,x:-22.5},3,cjs.Ease.get(1)).to({skewX:156.4,skewY:-23.4,x:-26.1,y:-53.6},4,cjs.Ease.get(1)).to({skewX:194.4,skewY:14.3,x:-24.8},4,cjs.Ease.get(1)).to({skewX:173,skewY:-6.8,x:-24.3,y:-54.8},4,cjs.Ease.get(-0.99)).to({skewX:164.6,skewY:-15.2,x:-23.7,y:-55.3},3).to({_off:true},1).wait(5).to({skewX:0,skewY:0,x:-17.4,y:-47.2,_off:false},0).to({rotation:-164.2,x:-23.8,y:-49},4).to({rotation:-161.3,x:-23.5,y:-49.6},4,cjs.Ease.get(1)).wait(7).to({startPosition:1},0).to({rotation:0,x:-17.4,y:-47.2},4).to({_off:true},1).wait(38).to({scaleX:1,scaleY:1,skewX:149.3,skewY:-30.3,x:-25.5,y:-50.6,_off:false},0).to({scaleX:1,scaleY:1,skewX:200.7,skewY:20.7,y:-54},2).to({scaleX:1,scaleY:1,skewX:160.1,skewY:-19.7,x:-26.3,y:-53.8},3).to({scaleX:1,scaleY:1,skewX:191.8,skewY:11.7,x:-26.1,y:-53.7},3).to({scaleX:1,scaleY:1,skewX:161.1,skewY:-18.7,x:-26.3,y:-54.1},3).to({scaleX:1,scaleY:1,skewX:192,skewY:12,x:-26.1,y:-53.7},3).to({scaleY:1,skewX:160.6,skewY:-19.3,x:-26.3,y:-54.1},3).to({scaleY:1,skewX:190.8,skewY:10.7,x:-26,y:-53.7},3).wait(4).to({skewX:191.5,skewY:11.5},0).to({scaleX:1,scaleY:1,skewX:76.5,skewY:-103.3,x:-20.2,y:-48.7},3).to({_off:true},1).wait(371));

	// hand_L
	this.instance_6 = new lib.hand_L_2("single",1);
	this.instance_6.setTransform(15.7,-80,1,0.999,0,-179.3,0.8);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(423).to({startPosition:1,_off:false},0).to({scaleY:1,skewX:-207.1,skewY:-27,x:7,y:-80.6},4,cjs.Ease.get(-0.99)).to({scaleY:1,skewX:-182.6,skewY:-2.3,x:15.7,y:-79.9},5,cjs.Ease.get(1)).to({scaleY:1,skewX:-207.6,skewY:-27.5,x:7,y:-80.6},4,cjs.Ease.get(-0.99)).to({scaleY:1,skewX:-181,skewY:-0.9,x:15.1,y:-80.1},5,cjs.Ease.get(1)).to({skewX:-185.9,skewY:-5.8,x:13.6,y:-80.5},3).to({_off:true},1).wait(841));

	// hand_L
	this.instance_7 = new lib.hand_L_2("single",1);
	this.instance_7.setTransform(15,-47.9);
	this.instance_7.alpha = 0.012;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({startPosition:1,_off:false},0).wait(68).to({rotation:-112.2,x:27.1,y:-62.9,alpha:1,startPosition:2},0).to({rotation:-201.5,x:18.7,y:-80},2).to({rotation:-188.2,x:14.1,y:-70.3},4).to({rotation:-102.4,x:14.2,y:-71.8},3).to({startPosition:2},3).to({rotation:0,x:15,y:-47.8,startPosition:1},5).to({_off:true},3).wait(325).to({startPosition:1,_off:false},0).to({rotation:66.5,x:-4.9,y:-52.4},4,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:0,skewX:124.9,skewY:125.1,x:-5.8,y:-67.1},1,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,skewX:157.9,skewY:158.1,x:1.2,y:-76.7},1).to({scaleX:1,scaleY:1,skewX:181.8,skewY:182.1,x:8.8,y:-79.7},1).to({scaleX:1,scaleY:1,skewX:202.4,skewY:202.7,x:13.7,y:-80.1},1).to({_off:true},1).wait(22).to({scaleX:1,scaleY:1,skewX:154.8,skewY:334.9,x:7.2,y:-80.3,_off:false},0).wait(1).to({skewX:128.4,skewY:308.5,x:1.4,y:-77.4},0).wait(1).to({scaleX:1,scaleY:1,rotation:131.9,skewX:0,skewY:360,x:-2.9,y:-72},0).to({scaleX:1,scaleY:1,rotation:95.5,x:-5,y:-62},1).to({scaleX:1,scaleY:1,rotation:22.9,x:7.6,y:-47.4},2).to({_off:true},1).wait(835));

	// arm_L
	this.arm_L = new lib.arm_L_4();
	this.arm_L.setTransform(11,-63.8);
	this.arm_L.alpha = 0.012;
	this.arm_L._off = true;

	this.timeline.addTween(cjs.Tween.get(this.arm_L).wait(1).to({_off:false},0).wait(68).to({scaleX:0.99,scaleY:0.98,skewX:-76.2,skewY:-77.7,x:11.1,y:-62.7,alpha:1},0).to({scaleX:1,scaleY:1,rotation:-87.2,skewX:0,skewY:0,x:2.9,y:-76.8},2).to({rotation:-90.4,x:-1.3,y:-66.1},4).to({x:-1.2,y:-67.6},3).wait(3).to({rotation:0,x:11,y:-63.7},5).to({_off:true},3).wait(325).to({_off:false},0).to({rotation:67.5,x:8.9,y:-63.1},4,cjs.Ease.get(1)).to({rotation:208.7,x:11.6,y:-63.9},5,cjs.Ease.get(1)).to({rotation:182.9,x:10.2,y:-64.5},4,cjs.Ease.get(-0.99)).to({rotation:208.7,x:11.6,y:-63.9},5,cjs.Ease.get(1)).to({rotation:182.9,x:10.2,y:-64.5},4,cjs.Ease.get(-0.99)).to({rotation:208,x:11.2,y:-64},5,cjs.Ease.get(1)).to({rotation:203.5,x:11,y:-64.2},3).to({scaleX:1,scaleY:1,rotation:134.8,x:10.9,y:-64},3).to({scaleX:1,scaleY:1,rotation:25.8,y:-63.6},3).to({_off:true},1).wait(835));

	// ・face_expression
	this.instance_8 = new lib.face_expression("single",0);
	this.instance_8.setTransform(-5.4,-94.2,1,1,0,0,0,0,0.2);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({startPosition:0,_off:false},0).wait(9).to({startPosition:0},0).to({y:-91.3},8).to({y:-94.1},8).wait(2).to({startPosition:9},0).to({rotation:-4.5,x:-8.3,y:-93.7},7).to({rotation:0,x:-5.3,y:-94.1,startPosition:0},9).wait(2).to({startPosition:1},0).to({rotation:-4.5,x:-8.3,y:-93.7},7).to({rotation:0,x:-5.3,y:-94.1,startPosition:0},9).wait(1).to({startPosition:0},0).to({regX:-0.1,regY:0.3,scaleY:0.97,skewX:-9.2,skewY:-8.9,x:-6.7,y:-83.3,startPosition:4},3).to({regX:0,regY:0.2,scaleY:1,rotation:8.6,skewX:0,skewY:0,x:-15.6,y:-105,startPosition:1},5).to({regY:0.1,rotation:5.5,x:-21.2,y:-93},4).to({y:-94.5},3).to({startPosition:1},3).to({regX:0,regY:0.2,rotation:0,x:-5.3,y:-94.1,startPosition:0},5).wait(3).to({startPosition:1},0).to({rotation:-4.9,x:-10.9,y:-90.5},4).to({regY:0.1,rotation:5.5,x:-3.2,y:-94.1},5).to({startPosition:1},3).to({regY:0.2,rotation:0,x:-5.3,startPosition:0},5).wait(1).to({startPosition:1},0).to({rotation:-4.9,x:-10.9,y:-90.5},4).to({regY:0.1,rotation:5.5,x:-3.2,y:-94.1},5).to({startPosition:1},3).to({regY:0.2,rotation:0,x:-5.3,startPosition:0},5).wait(1).to({startPosition:1},0).to({rotation:-7.4,x:-9.4,y:-93.5},7).wait(4).to({startPosition:1},0).to({rotation:0,x:-5.3,y:-94.1,startPosition:0},8).wait(1).to({startPosition:1},0).to({regY:0.1,rotation:10.6,x:0},7).wait(4).to({startPosition:1},0).to({regY:0.2,rotation:0,x:-5.3,startPosition:0},8).wait(1).to({startPosition:7},0).to({rotation:-7.4,x:-9.4,y:-93.5},7).wait(4).to({startPosition:7},0).to({rotation:0,x:-5.3,y:-94.1,startPosition:0},8).wait(1).to({startPosition:7},0).to({regY:0.1,rotation:10.6,x:0},7).wait(4).to({startPosition:7},0).to({regY:0.2,rotation:0,x:-5.3,startPosition:0},8).wait(1).to({startPosition:0},0).to({rotation:3.7,x:-1.8,y:-94.7,startPosition:7},2,cjs.Ease.get(-0.99)).to({rotation:1.8,x:-3.3,y:-94.5},3,cjs.Ease.get(1)).wait(7).to({startPosition:7},0).to({rotation:0,x:-5.3,y:-94.1,startPosition:0},3).wait(1).to({startPosition:4},0).to({rotation:-2.3,x:-8.1,y:-88.1},4).to({regY:0.3,rotation:-5.2,x:-11.7,y:-95.5,startPosition:1},5,cjs.Ease.get(-0.99)).to({x:-11.3,y:-94.3},4,cjs.Ease.get(1)).wait(6).to({startPosition:0},0).to({regY:0.2,rotation:0,x:-5.3,y:-94.1},4).wait(1).to({startPosition:15},0).to({regY:0.1,rotation:10.2,x:9.6,y:-101.9},5).to({rotation:11.4,x:11.7,y:-95.8},4).to({rotation:10.2,x:9.6,y:-95.9},4).wait(5).to({startPosition:15},0).to({regY:0.2,rotation:0,x:-5.3,y:-94.1,startPosition:0},5).wait(1).to({startPosition:11},0).wait(23).to({startPosition:0},0).wait(1).to({startPosition:15},0).to({y:-91.6},2).to({y:-98.8},2,cjs.Ease.get(-0.99)).to({y:-93.1},2,cjs.Ease.get(1)).to({y:-98.8},2,cjs.Ease.get(-0.99)).to({y:-94.1},2,cjs.Ease.get(1)).to({startPosition:15},2).to({startPosition:0},4).wait(2).to({startPosition:3},0).to({rotation:-5.1,x:-9,y:-92.4},6).to({rotation:0,x:-5.3,y:-94.1},6).wait(1).to({startPosition:8},0).to({rotation:-4.4,x:-11.4,y:-88.6},4).to({rotation:2.7,x:-4.2,y:-94.4},3).to({rotation:5.2,x:-3.5,y:-94},1).to({regY:0.3,rotation:-4.7,x:-1.3,y:-93.5},4).to({regY:0.2,rotation:-4.2,x:-9.9,y:-93.9},4).to({regY:0.1,rotation:3,x:-1.4,y:-95},4).to({regY:0.2,rotation:2.3,x:-1.2,y:-94.8},3).to({rotation:3.2,x:-1.9,y:-94.6},4).to({rotation:0,x:-5.3,y:-94.1,startPosition:0},5).wait(1).to({startPosition:0},0).to({rotation:-3.9,x:-8.3,y:-93.3,startPosition:6},4).to({rotation:-3,x:-7.3,y:-93.5},4,cjs.Ease.get(1)).wait(7).to({startPosition:6},0).to({rotation:0,x:-5.3,y:-94.1,startPosition:0},4).wait(1).to({startPosition:0},0).to({rotation:-5.7,x:-12.5,y:-94.4},4).to({rotation:3.4,x:-1.5,y:-92.4,startPosition:4},4).to({rotation:2.2,x:-2.8,y:-93.8},3).wait(7).to({startPosition:4},0).to({rotation:0,x:-5.3,y:-94.1,startPosition:0},4).wait(1).to({rotation:2.5,x:-1.2,y:-94.6,startPosition:15},0).wait(1).to({rotation:3.5,x:0.2,y:-94.7},0).wait(7).to({startPosition:15},0).to({rotation:0,x:-5.3,y:-94.1,startPosition:0},5).wait(1).to({startPosition:0},0).to({rotation:-1.5,x:-8.4,y:-92.7},4,cjs.Ease.get(1)).to({rotation:1.2,x:-4,y:-94.1,startPosition:1},5,cjs.Ease.get(1)).to({rotation:-1,x:-6.6,y:-94},4,cjs.Ease.get(-0.99)).to({rotation:1.2,x:-4,y:-94.1},5,cjs.Ease.get(1)).to({rotation:-1,x:-6.6,y:-94},4,cjs.Ease.get(-0.99)).to({rotation:0.4,x:-4.8,y:-94.1},5,cjs.Ease.get(1)).to({rotation:0,x:-5.3},3,cjs.Ease.get(-0.99)).to({startPosition:0},7).wait(4).to({startPosition:0},0).wait(9).to({startPosition:0},0).to({rotation:-1.2,x:-7.7,y:-92.5},3,cjs.Ease.get(1)).to({rotation:0,x:-5.3,y:-97.2},4).to({rotation:1,x:-4.2,y:-93.5},4).to({rotation:0,x:-5.3,y:-94.1},2).wait(2).to({startPosition:0},0).to({rotation:-1,x:-6.5,y:-92.6},10).to({rotation:0,x:-5.3,y:-94.1},11).wait(1).to({startPosition:9},0).to({rotation:-4.5,x:-8.3,y:-93.7},7).to({rotation:0,x:-5.3,y:-94.1,startPosition:0},9).wait(1).to({startPosition:1},0).to({rotation:-4.5,x:-8.3,y:-93.7},9).to({rotation:0,x:-5.3,y:-94.1,startPosition:0},9).wait(20).to({startPosition:1},0).to({rotation:-3.4,x:-8.9,y:-93.4},5).to({regY:0.1,rotation:5.5,x:0,y:-94.9},4).to({rotation:5.1,x:-0.2},5).to({regY:0.2,rotation:0,x:-5.3,y:-94.1,startPosition:0},5).wait(1).to({startPosition:1},0).to({rotation:-3.4,x:-8.9,y:-93.4},5).to({regY:0.1,rotation:5.5,x:0,y:-94.9},4).to({rotation:5.1,x:-0.2},5).to({regY:0.2,rotation:0,x:-5.3,y:-94.1,startPosition:0},5).wait(1).to({startPosition:1},0).to({rotation:-7.4,x:-9.4,y:-93.5},7).wait(4).to({startPosition:1},0).to({rotation:0,x:-5.3,y:-94.1,startPosition:0},8).wait(1).to({startPosition:1},0).to({regY:0.1,rotation:10.6,x:0},7).wait(4).to({startPosition:1},0).to({regY:0.2,rotation:0,x:-5.3,startPosition:0},8).wait(1).to({startPosition:4},0).to({rotation:-2.5,x:-8.3,y:-93.4},4).to({regY:0.1,rotation:8.6,x:1.7,y:-94.2,startPosition:1},5,cjs.Ease.get(-0.99)).to({rotation:7.7,x:0.7,y:-94.3},3).wait(7).to({startPosition:0},0).to({regY:0.2,rotation:0,x:-5.3,y:-94.1},5).wait(1).to({startPosition:15},0).to({rotation:3,x:-1.8,y:-95.2},3).to({regY:0.1,rotation:5.7,x:0.7,y:-93.6},3).to({rotation:4.9,x:0,y:-94},3).wait(13).to({startPosition:15},0).to({regY:0.2,rotation:0,x:-5.3,y:-94.1,startPosition:0},5).wait(1).to({startPosition:11},0).wait(19).to({startPosition:0},0).wait(1).to({startPosition:15},0).to({y:-93.5},3).to({y:-94.1},3).to({y:-93.3},3).to({y:-94.1,startPosition:0},4).to({startPosition:0},4).wait(1).to({startPosition:3},0).to({rotation:-5.1,x:-9,y:-92.4},6).to({rotation:0,x:-5.3,y:-94.1},6).wait(1).to({startPosition:7},0).to({rotation:-7.4,x:-9.4,y:-93.5},7).wait(4).to({startPosition:7},0).to({rotation:0,x:-5.3,y:-94.1,startPosition:0},8).wait(1).to({startPosition:7},0).to({regY:0.1,rotation:10.6,x:0},7).wait(4).to({startPosition:7},0).to({regY:0.2,rotation:0,x:-5.3,startPosition:0},8).wait(1).to({startPosition:0},0).to({rotation:3.7,x:-1.8,y:-94.7,startPosition:7},2,cjs.Ease.get(-0.99)).to({rotation:1.8,x:-3.3,y:-94.5},3,cjs.Ease.get(1)).wait(7).to({startPosition:7},0).to({rotation:0,x:-5.3,y:-94.1,startPosition:0},3).wait(1).to({startPosition:8},0).to({rotation:-4.4,x:-10.8,y:-90.8},4).to({rotation:2.7,x:-4.2,y:-94.4},3).to({rotation:5.2,x:-3.5,y:-94},1).to({regY:0.3,rotation:-4.7,x:-2.3,y:-93.5},4).to({regY:0.2,rotation:-4.2,x:-9.3,y:-93.9},4).to({regY:0.1,rotation:3,x:-2.4,y:-95},4).to({regY:0.2,rotation:2.3,x:-0.8,y:-94.4},3).to({rotation:3.2,x:-1.1,y:-94.6},4).to({rotation:0,x:-5.3,y:-94.1,startPosition:0},5).wait(1).to({startPosition:0},0).to({rotation:-3.9,x:-8.3,y:-93.3,startPosition:6},4).to({rotation:-3,x:-7.3,y:-93.5},4,cjs.Ease.get(1)).wait(7).to({startPosition:6},0).to({rotation:0,x:-5.3,y:-94.1,startPosition:0},4).wait(2).to({startPosition:15},0).wait(17).to({startPosition:0},0).wait(15).to({startPosition:0},0).to({rotation:-3.2,x:-9,y:-93.6,startPosition:1},4).to({rotation:1.5,x:-3.7,y:-94.1},3).to({rotation:-0.8,x:-6.4,y:-94},4).to({rotation:0.2,x:-5,y:-94.1},4).wait(14).to({rotation:0.2},0).to({rotation:0,x:-5.3,startPosition:0},4).to({_off:true},5).wait(8).to({startPosition:0,_off:false},0).wait(9).to({startPosition:0},0).to({y:-91.3},8).to({y:-94.1},8).to({_off:true},31).wait(302));

	// ・hair_front
	this.hair_front = new lib.hair_front_2();
	this.hair_front.setTransform(-7.2,-125.2);
	this.hair_front._off = true;

	this.timeline.addTween(cjs.Tween.get(this.hair_front).wait(1).to({_off:false},0).wait(9).to({rotation:-1,y:-121.9},8).to({rotation:0,y:-125.1},8).wait(2).to({rotation:-4.5,x:-12.7,y:-124.6},7).to({rotation:0,x:-7.1,y:-125.1},9).wait(2).to({rotation:-4.5,x:-12.7,y:-124.6},7).to({rotation:0,x:-7.1,y:-125.1},9).wait(1).to({scaleY:0.97,skewX:-6.7,skewY:-6.5,x:-11.7,y:-115.2},3).to({scaleY:1,rotation:7.7,skewX:0,skewY:0,x:-12.8,y:-135.8},5).to({rotation:4.5,x:-20.2,y:-123.8},4).to({y:-125.3},3).wait(3).to({rotation:0,x:-7.1,y:-125.1},5).wait(3).to({rotation:-4.9,x:-15.5,y:-121.3},4).to({rotation:5.5,x:-2,y:-125},5).wait(3).to({rotation:0,x:-7.1,y:-125.1},5).wait(1).to({rotation:-4.9,x:-15.5,y:-121.3},4).to({rotation:5.5,x:-2,y:-125},5).wait(3).to({rotation:0,x:-7.1,y:-125.1},5).wait(1).to({rotation:-7.4,x:-15.4,y:-124.1},7).wait(4).to({rotation:0,x:-7.1,y:-125.1},8).wait(1).to({rotation:10.6,x:3.9,y:-124.9},7).wait(4).to({rotation:0,x:-7.1,y:-125.1},8).wait(1).to({rotation:-7.4,x:-15.4,y:-124.1},7).wait(4).to({rotation:0,x:-7.1,y:-125.1},8).wait(1).to({rotation:10.6,x:3.9,y:-124.9},7).wait(4).to({rotation:0,x:-7.1,y:-125.1},8).wait(1).to({rotation:3.7,x:-1.6,y:-125.8},2,cjs.Ease.get(-0.99)).to({rotation:1.8,x:-4.2,y:-125.6},3,cjs.Ease.get(1)).wait(7).to({rotation:0,x:-7.1,y:-125.1},3).wait(1).to({rotation:-2.3,x:-11.3,y:-119.1},4).to({rotation:-7,x:-16.5,y:-126.3},5,cjs.Ease.get(-0.99)).to({x:-16.1,y:-125.1},4,cjs.Ease.get(1)).wait(6).to({rotation:0,x:-7.1},4).wait(1).to({rotation:10.2,x:13.3,y:-132.7},5).to({rotation:11.4,x:16,y:-126.5},4).to({rotation:10.2,x:13.3,y:-126.7},4).wait(5).to({rotation:0,x:-7.1,y:-125.1},5).wait(25).to({y:-122.6},2).to({y:-129.9},2,cjs.Ease.get(-0.99)).to({y:-124.1},2,cjs.Ease.get(1)).to({y:-129.9},2,cjs.Ease.get(-0.99)).to({y:-125.1},2,cjs.Ease.get(1)).wait(8).to({rotation:-5.1,x:-13.8,y:-123},6).to({rotation:0,x:-7.1,y:-125.1},6).wait(1).to({rotation:0.6,x:-15.8,y:-118.6},4).to({rotation:5.7,x:-4.6,y:-125.5},3).to({rotation:7.2,x:-1.4,y:-125.1},1).to({rotation:-5.6,x:-5.9,y:-124.5},4).to({rotation:-3.5,x:-13.1,y:-124.9},4).to({rotation:4.7,x:-1.7,y:-125.1},4).to({rotation:1.5,x:-2.9,y:-125.9},3).to({rotation:2.5,x:-2,y:-125.8},4).to({rotation:0,x:-7.1,y:-125.1},5).wait(1).to({rotation:-3.9,x:-12.4,y:-124},4).to({rotation:-3,x:-10.8,y:-124.4},4,cjs.Ease.get(1)).wait(7).to({rotation:0,x:-7.1,y:-125.1},4).wait(1).to({rotation:-5.3,x:-17.5},4).to({rotation:5.6,x:-1.5,y:-123.9},4).to({rotation:2.2,x:-3.5,y:-124.9},3).wait(7).to({rotation:0,x:-7.1,y:-125.1},4).wait(1).to({rotation:2.5,x:-1.7,y:-125.6},0).wait(1).to({rotation:3.5,x:0.2,y:-125.8},0).wait(7).to({rotation:0,x:-7.1,y:-125.1},5).wait(1).to({rotation:-1.5,x:-11.1,y:-123.7},4,cjs.Ease.get(1)).to({rotation:1.2,x:-5.2,y:-125.2},5,cjs.Ease.get(1)).to({rotation:-1,x:-9.2,y:-125},4,cjs.Ease.get(-0.99)).to({rotation:1.2,x:-5.2,y:-125.2},5,cjs.Ease.get(1)).to({rotation:-1,x:-9.2,y:-125},4,cjs.Ease.get(-0.99)).to({rotation:0.4,x:-6.4,y:-125.1},5,cjs.Ease.get(1)).to({rotation:0,x:-7.1},3,cjs.Ease.get(-0.99)).wait(20).to({rotation:0.7,x:-10.3,y:-123.5},3,cjs.Ease.get(1)).to({rotation:0,x:-7.1,y:-128.2},4).to({rotation:1,x:-5.5,y:-124.6},4).to({rotation:0,x:-7.1,y:-125.1},2).wait(2).to({rotation:-1,x:-9,y:-124},10).to({rotation:0,x:-7.1,y:-125.1},11).wait(1).to({rotation:-4.5,x:-12.7,y:-124.6},7).to({rotation:0,x:-7.1,y:-125.1},9).wait(1).to({rotation:-4.5,x:-12.7,y:-124.6},9).to({rotation:0,x:-7.1,y:-125.1},9).wait(20).to({rotation:-3.4,x:-12.7,y:-124.3},5).to({rotation:5.5,x:1.2,y:-125.8},4).to({rotation:5.1,x:0.6,y:-125.9},5).to({rotation:0,x:-7.1,y:-125.1},5).wait(1).to({rotation:-3.4,x:-12.7,y:-124.3},5).to({rotation:5.5,x:1.2,y:-125.8},4).to({rotation:5.1,x:0.6,y:-125.9},5).to({rotation:0,x:-7.1,y:-125.1},5).wait(1).to({rotation:-7.4,x:-15.4,y:-124.1},7).wait(4).to({rotation:0,x:-7.1,y:-125.1},8).wait(1).to({rotation:10.6,x:3.9,y:-124.9},7).wait(4).to({rotation:0,x:-7.1,y:-125.1},8).wait(1).to({rotation:-2.5,x:-11.6,y:-124.3},4).to({rotation:8.6,x:4.6,y:-125.2},5,cjs.Ease.get(-0.99)).to({rotation:7.7,x:3,y:-125.3},3).wait(7).to({rotation:0,x:-7.1,y:-125.1},5).wait(1).to({rotation:3,x:-2,y:-126.3},3).to({rotation:5.7,x:2,y:-124.6},3).to({rotation:4.9,x:0.9,y:-125.1},3).wait(13).to({rotation:0,x:-7.1},5).wait(21).to({y:-124.5},3).to({y:-125.1},3).to({y:-124.3},3).to({y:-125.1},4).wait(5).to({rotation:-5.1,x:-13.8,y:-123},6).to({rotation:0,x:-7.1,y:-125.1},6).wait(1).to({rotation:-7.4,x:-15.4,y:-124.1},7).wait(4).to({rotation:0,x:-7.1,y:-125.1},8).wait(1).to({rotation:10.6,x:3.9,y:-124.9},7).wait(4).to({rotation:0,x:-7.1,y:-125.1},8).wait(1).to({rotation:3.7,x:-1.6,y:-125.8},2,cjs.Ease.get(-0.99)).to({rotation:1.8,x:-4.2,y:-125.6},3,cjs.Ease.get(1)).wait(7).to({rotation:0,x:-7.1,y:-125.1},3).wait(1).to({rotation:0.6,x:-15.2,y:-120.8},4).to({rotation:5.7,x:-4.6,y:-125.5},3).to({rotation:7.2,x:-1.4,y:-125.1},1).to({rotation:-5.6,x:-6.9,y:-124.5},4).to({rotation:-3.5,x:-12.5,y:-124.9},4).to({rotation:4.7,x:-2.7,y:-125.1},4).to({rotation:1.5,x:-2.5,y:-125.5},3).to({rotation:2.5,x:-1.2,y:-125.8},4).to({rotation:0,x:-7.1,y:-125.1},5).wait(1).to({rotation:-3.9,x:-12.4,y:-124},4).to({rotation:-3,x:-10.8,y:-124.4},4,cjs.Ease.get(1)).wait(7).to({rotation:0,x:-7.1,y:-125.1},4).wait(34).to({rotation:-3.2,x:-12.7,y:-124.5},4).to({rotation:1.5,x:-4.7,y:-125.2},3).to({rotation:-0.8,x:-8.8,y:-125},4).to({rotation:-0.1,x:-7.8,y:-125.1},2).to({rotation:0.2,x:-6.8},2).wait(14).to({rotation:0,x:-7.1},4).to({_off:true},5).wait(8).to({y:-124.9,_off:false},0).wait(9).to({rotation:-0.8,y:-122},8).to({rotation:0,y:-124.9},8).to({_off:true},31).wait(302));

	// ・item_face_under
	this.instance_9 = new lib.item_face_under_2();
	this.instance_9.setTransform(-5.4,-94.2,1,1,0,0,0,0,0.2);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({_off:false},0).wait(9).to({y:-91.3},8).to({y:-94.1},8).wait(2).to({rotation:-4.5,x:-8.3,y:-93.7},7).to({rotation:0,x:-5.3,y:-94.1},9).wait(2).to({rotation:-4.5,x:-8.3,y:-93.7},7).to({rotation:0,x:-5.3,y:-94.1},9).wait(1).to({regX:-0.1,regY:0.3,scaleY:0.97,skewX:-9.2,skewY:-8.9,x:-6.7,y:-83.3},3).to({regX:0,regY:0.2,scaleY:1,rotation:8.6,skewX:0,skewY:0,x:-15.6,y:-105},5).to({regX:0,regY:0.1,rotation:5.5,x:-21.1,y:-93},4).to({regX:0,x:-21.2,y:-94.5},3).wait(3).to({regX:0,regY:0.2,rotation:0,x:-5.3,y:-94.1},5).wait(3).to({rotation:-4.9,x:-10.9,y:-90.5},4).to({regY:0.1,rotation:5.5,x:-3.2,y:-94.1},5).wait(3).to({regY:0.2,rotation:0,x:-5.3},5).wait(1).to({rotation:-4.9,x:-10.9,y:-90.5},4).to({regY:0.1,rotation:5.5,x:-3.2,y:-94.1},5).wait(3).to({regY:0.2,rotation:0,x:-5.3},5).wait(1).to({rotation:-7.4,x:-9.4,y:-93.5},7).wait(4).to({rotation:0,x:-5.3,y:-94.1},8).wait(1).to({regY:0.1,rotation:10.6,x:0},7).wait(4).to({regY:0.2,rotation:0,x:-5.3},8).wait(1).to({rotation:-7.4,x:-9.4,y:-93.5},7).wait(4).to({rotation:0,x:-5.3,y:-94.1},8).wait(1).to({regY:0.1,rotation:10.6,x:0},7).wait(4).to({regY:0.2,rotation:0,x:-5.3},8).wait(1).to({rotation:3.7,x:-1.8,y:-94.7},2,cjs.Ease.get(-0.99)).to({rotation:1.8,x:-3.3,y:-94.5},3,cjs.Ease.get(1)).wait(7).to({rotation:0,x:-5.3,y:-94.1},3).wait(1).to({rotation:-2.3,x:-8.1,y:-88.1},4).to({regY:0.3,rotation:-5.2,x:-11.7,y:-95.5},5,cjs.Ease.get(-0.99)).to({x:-11.3,y:-94.3},4,cjs.Ease.get(1)).wait(6).to({regY:0.2,rotation:0,x:-5.3,y:-94.1},4).wait(1).to({regY:0.1,rotation:10.2,x:9.6,y:-101.9},5).to({rotation:11.4,x:11.7,y:-95.8},4).to({rotation:10.2,x:9.6,y:-95.9},4).wait(5).to({regY:0.2,rotation:0,x:-5.3,y:-94.1},5).wait(25).to({y:-91.6},2).to({y:-98.8},2,cjs.Ease.get(-0.99)).to({y:-93.1},2,cjs.Ease.get(1)).to({y:-98.8},2,cjs.Ease.get(-0.99)).to({y:-94.1},2,cjs.Ease.get(1)).wait(8).to({rotation:-5.1,x:-9,y:-92.4},6).to({rotation:0,x:-5.3,y:-94.1},6).wait(1).to({rotation:-4.4,x:-11.4,y:-88.6},4).to({rotation:2.7,x:-4.2,y:-94.4},3).to({rotation:5.2,x:-3.5,y:-94},1).to({regY:0.3,rotation:-4.7,x:-1.3,y:-93.5},4).to({regY:0.2,rotation:-4.2,x:-9.9,y:-93.9},4).to({rotation:3,x:-1.4,y:-94.9},4).to({rotation:2.3,x:-1.2,y:-94.8},3).to({regY:0.3,rotation:3.2,x:-1.9,y:-94.5},4).to({regY:0.2,rotation:0,x:-5.3,y:-94.1},5).wait(1).to({rotation:-3.9,x:-8.3,y:-93.3},4).to({rotation:-3,x:-7.3,y:-93.5},4,cjs.Ease.get(1)).wait(7).to({rotation:0,x:-5.3,y:-94.1},4).wait(1).to({rotation:-5.7,x:-12.5,y:-94.4},4).to({rotation:3.4,x:-1.5,y:-92.8},4).to({rotation:2.2,x:-2.8,y:-93.8},3).wait(7).to({rotation:0,x:-5.3,y:-94.1},4).wait(1).to({rotation:2.5,x:-1.2,y:-94.6},0).wait(1).to({rotation:3.5,x:0.2,y:-94.7},0).wait(7).to({rotation:0,x:-5.3,y:-94.1},5).wait(1).to({rotation:-1.5,x:-8.4,y:-92.7},4,cjs.Ease.get(1)).to({rotation:1.2,x:-4,y:-94.1},5,cjs.Ease.get(1)).to({rotation:-1,x:-6.6,y:-94},4,cjs.Ease.get(-0.99)).to({rotation:1.2,x:-4,y:-94.1},5,cjs.Ease.get(1)).to({rotation:-1,x:-6.6,y:-94},4,cjs.Ease.get(-0.99)).to({rotation:0.4,x:-4.8,y:-94.1},5,cjs.Ease.get(1)).to({rotation:0,x:-5.3},3,cjs.Ease.get(-0.99)).wait(20).to({rotation:-1.2,x:-7.7,y:-92.5},3,cjs.Ease.get(1)).to({rotation:0,x:-5.3,y:-97.2},4).to({rotation:1,x:-4.2,y:-93.5},4).to({rotation:0,x:-5.3,y:-94.1},2).wait(2).to({rotation:-1,x:-6.5,y:-93},10).to({rotation:0,x:-5.3,y:-94.1},11).wait(1).to({rotation:-4.5,x:-8.3,y:-93.7},7).to({rotation:0,x:-5.3,y:-94.1},9).wait(1).to({rotation:-4.5,x:-8.3,y:-93.7},9).to({rotation:0,x:-5.3,y:-94.1},9).wait(20).to({rotation:-3.4,x:-8.9,y:-93.4},5).to({regY:0.1,rotation:5.5,x:0,y:-94.9},4).to({rotation:5.1,x:-0.2},5).to({regY:0.2,rotation:0,x:-5.3,y:-94.1},5).wait(1).to({rotation:-3.4,x:-8.9,y:-93.4},5).to({regY:0.1,rotation:5.5,x:0,y:-94.9},4).to({rotation:5.1,x:-0.2},5).to({regY:0.2,rotation:0,x:-5.3,y:-94.1},5).wait(1).to({rotation:-7.4,x:-9.4,y:-93.5},7).wait(4).to({rotation:0,x:-5.3,y:-94.1},8).wait(1).to({regY:0.1,rotation:10.6,x:0},7).wait(4).to({regY:0.2,rotation:0,x:-5.3},8).wait(1).to({rotation:-2.5,x:-8.3,y:-93.4},4).to({regY:0.1,rotation:8.6,x:1.7,y:-94.2},5,cjs.Ease.get(-0.99)).to({rotation:7.7,x:0.7,y:-94.3},3).wait(7).to({regY:0.2,rotation:0,x:-5.3,y:-94.1},5).wait(1).to({rotation:3,x:-1.8,y:-95.2},3).to({regY:0.1,rotation:5.7,x:0.7,y:-93.6},3).to({rotation:4.9,x:0,y:-94},3).wait(13).to({regY:0.2,rotation:0,x:-5.3,y:-94.1},5).wait(21).to({y:-93.5},3).to({y:-94.1},3).to({y:-93.3},3).to({y:-94.1},4).wait(5).to({rotation:-5.1,x:-9,y:-92.4},6).to({rotation:0,x:-5.3,y:-94.1},6).wait(1).to({rotation:-7.4,x:-9.4,y:-93.5},7).wait(4).to({rotation:0,x:-5.3,y:-94.1},8).wait(1).to({regY:0.1,rotation:10.6,x:0},7).wait(4).to({regY:0.2,rotation:0,x:-5.3},8).wait(1).to({rotation:3.7,x:-1.8,y:-94.7},2,cjs.Ease.get(-0.99)).to({rotation:1.8,x:-3.3,y:-94.5},3,cjs.Ease.get(1)).wait(7).to({rotation:0,x:-5.3,y:-94.1},3).wait(1).to({rotation:-4.4,x:-10.8,y:-90.8},4).to({rotation:2.7,x:-4.2,y:-94.4},3).to({rotation:5.2,x:-3.5,y:-94},1).to({regY:0.3,rotation:-4.7,x:-2.3,y:-93.5},4).to({regY:0.2,rotation:-4.2,x:-9.3,y:-93.9},4).to({rotation:3,x:-2.4,y:-94.9},4).to({rotation:2.3,x:-0.8,y:-94.4},3).to({regY:0.3,rotation:3.2,x:-1.1,y:-94.5},4).to({regY:0.2,rotation:0,x:-5.3,y:-94.1},5).wait(1).to({rotation:-3.9,x:-8.3,y:-93.3},4).to({rotation:-3,x:-7.3,y:-93.5},4,cjs.Ease.get(1)).wait(7).to({rotation:0,x:-5.3,y:-94.1},4).wait(34).to({rotation:-3.2,x:-9,y:-93.6},4).to({rotation:1.5,x:-3.7,y:-94.1},3).to({rotation:-0.8,x:-6.4,y:-94},4).to({rotation:0.2,x:-5,y:-94.1},4).wait(14).to({rotation:0.2},0).to({rotation:0,x:-5.3},4).to({_off:true},5).wait(8).to({_off:false},0).wait(9).to({y:-91.3},8).to({y:-94.1},8).to({_off:true},31).wait(302));

	// ・face_base
	this.instance_10 = new lib.face_base_4("single",0);
	this.instance_10.setTransform(-2.9,-72.2,1,1,0,0,0,0,0.2);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({startPosition:0,_off:false},0).wait(9).to({startPosition:0},0).to({y:-70.6},8).to({y:-72.1},8).wait(2).to({startPosition:0},0).to({rotation:-4.5,x:-4,y:-72},7).to({rotation:0,x:-2.8,y:-72.1},9).wait(2).to({startPosition:0},0).to({rotation:-4.5,x:-4,y:-72},7).to({rotation:0,x:-2.8,y:-72.1},9).wait(1).to({startPosition:0},0).to({regY:0.3,scaleY:0.97,skewX:-6.7,skewY:-6.5,x:-1.2,y:-64.6},3).to({regY:0.1,scaleY:1,rotation:7.7,skewX:0,skewY:0,x:-15.9,y:-81.7},5).to({regY:0.2,rotation:4.5,x:-20.3,y:-69.6},4).to({y:-71.1},3).to({startPosition:0},3).to({rotation:0,x:-2.8,y:-72.1},5).wait(3).to({startPosition:0},0).to({rotation:-4.9,x:-6.5,y:-68.8},4).to({rotation:5.5,x:-2.8,y:-71.8},5).to({startPosition:0},3).to({rotation:0,y:-72.1},5).wait(1).to({startPosition:0},0).to({rotation:-4.9,x:-6.5,y:-68.8},4).to({rotation:5.5,x:-2.8,y:-71.8},5).to({startPosition:0},3).to({rotation:0,y:-72.1},5).wait(1).to({startPosition:0},0).to({rotation:-7.4,x:-4,y:-72},7).wait(4).to({startPosition:0},0).to({rotation:0,x:-2.8,y:-72.1},8).wait(1).to({startPosition:0},0).to({regY:0.1,rotation:10.6,x:-1.4,y:-72},7).wait(4).to({startPosition:0},0).to({regY:0.2,rotation:0,x:-2.8,y:-72.1},8).wait(1).to({startPosition:0},0).to({rotation:-7.4,x:-4,y:-72},7).wait(4).to({startPosition:0},0).to({rotation:0,x:-2.8,y:-72.1},8).wait(1).to({startPosition:0},0).to({regY:0.1,rotation:10.6,x:-1.4,y:-72},7).wait(4).to({startPosition:0},0).to({regY:0.2,rotation:0,x:-2.8,y:-72.1},8).wait(1).to({startPosition:0},0).to({rotation:3.7,x:-0.7,y:-72.5},2,cjs.Ease.get(-0.99)).to({rotation:1.8,x:-1.4,y:-72.4},3,cjs.Ease.get(1)).wait(7).to({startPosition:0},0).to({rotation:0,x:-2.8,y:-72.1},3).wait(1).to({startPosition:0},0).to({rotation:-2.3,x:-4.6,y:-66.2},4).to({rotation:-5.2,x:-7.2,y:-73.9},5,cjs.Ease.get(-0.99)).to({x:-6.8,y:-72.7},4,cjs.Ease.get(1)).wait(6).to({startPosition:0},0).to({rotation:0,x:-2.8,y:-72.1},4).wait(1).to({startPosition:0},0).to({rotation:10.2,x:8.2,y:-79.7},5).to({regY:0.1,rotation:11.4,x:9.8,y:-73.8},4).to({regY:0.2,rotation:10.2,x:8.2,y:-73.7},4).wait(5).to({startPosition:0},0).to({rotation:0,x:-2.8,y:-72.1},5).wait(1).to({startPosition:0},0).wait(23).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({y:-69.6},2).to({y:-76.8},2,cjs.Ease.get(-0.99)).to({y:-71.1},2,cjs.Ease.get(1)).to({y:-76.8},2,cjs.Ease.get(-0.99)).to({y:-72.1},2,cjs.Ease.get(1)).to({startPosition:0},2).to({startPosition:0},4).wait(2).to({startPosition:0},0).to({rotation:-5.1,x:-4.4,y:-70.8},6).to({rotation:0,x:-2.8,y:-72.1},6).wait(1).to({startPosition:0},0).to({regY:0.3,rotation:-4.4,x:-6.9,y:-68.9},4).to({regY:0.2,rotation:2.7,x:-2.7,y:-72.2},3).to({rotation:5.2,x:-1.8,y:-71.9},1).to({regY:0.3,rotation:-4.7,x:2.9,y:-71.8},4).to({rotation:-4.5,x:-4.3,y:-72.1},4).to({regY:0.2,rotation:3,x:-0.5,y:-71.8},4).to({rotation:2,x:-0.1,y:-72},3).to({rotation:2.9,x:-0.9},4).to({rotation:0,x:-2.8,y:-72.1},5).wait(1).to({startPosition:0},0).to({rotation:-3.9,x:-4.2,y:-71.5},4).to({rotation:-3,x:-3.5,y:-71.7},4,cjs.Ease.get(1)).wait(7).to({startPosition:0},0).to({rotation:0,x:-2.8,y:-72.1},4).wait(1).to({startPosition:0},0).to({rotation:-5.7,x:-7.7,y:-72.8},4).to({rotation:3.4,x:-0.3,y:-70.7},4).to({rotation:2.2,x:-1.2,y:-71.7},3).wait(7).to({startPosition:0},0).to({rotation:0,x:-2.8,y:-72.1},4).wait(1).to({rotation:2.5,x:0.2,y:-72.4},0).wait(1).to({rotation:3.5,x:1.3,y:-72.6},0).wait(7).to({startPosition:0},0).to({rotation:0,x:-2.8,y:-72.1},5).wait(1).to({startPosition:0},0).to({rotation:-1.5,x:-5.2,y:-70.8},4,cjs.Ease.get(1)).to({rotation:1.2,x:-1.9,y:-72.1},5,cjs.Ease.get(1)).to({rotation:-1,x:-3.7},4,cjs.Ease.get(-0.99)).to({rotation:1.2,x:-1.9},5,cjs.Ease.get(1)).to({rotation:-1,x:-3.7},4,cjs.Ease.get(-0.99)).to({rotation:0.4,x:-2.5,y:-72},5,cjs.Ease.get(1)).to({rotation:0,x:-2.8,y:-72.1},3,cjs.Ease.get(-0.99)).to({startPosition:0},7).wait(4).to({startPosition:0},0).wait(9).to({startPosition:0},0).to({rotation:-1.2,x:-4.6,y:-70.6},3,cjs.Ease.get(1)).to({rotation:0,x:-2.8,y:-75.2},4).to({rotation:1,x:-2.1,y:-71.4},4).to({rotation:0,x:-2.8,y:-72.1},2).wait(2).to({startPosition:0},0).to({rotation:-1,x:-3.6,y:-71.1},10).to({rotation:0,x:-2.8,y:-72.1},11).wait(1).to({startPosition:0},0).to({rotation:-4.5,x:-4,y:-72},7).to({rotation:0,x:-2.8,y:-72.1},9).wait(1).to({startPosition:0},0).to({rotation:-4.5,x:-4,y:-72},9).to({rotation:0,x:-2.8,y:-72.1},9).wait(20).to({startPosition:0},0).to({rotation:-3.4,x:-5,y:-71.6},5).to({rotation:5.5,x:0.4,y:-72.6},4).to({rotation:5.1,x:0.2,y:-72.7},5).to({rotation:0,x:-2.8,y:-72.1},5).wait(1).to({startPosition:0},0).to({rotation:-3.4,x:-5,y:-71.6},5).to({rotation:5.5,x:0.4,y:-72.6},4).to({rotation:5.1,x:0.2,y:-72.7},5).to({rotation:0,x:-2.8,y:-72.1},5).wait(1).to({startPosition:0},0).to({rotation:-7.4,x:-4,y:-72},7).wait(4).to({startPosition:0},0).to({rotation:0,x:-2.8,y:-72.1},8).wait(1).to({startPosition:0},0).to({regY:0.1,rotation:10.6,x:-1.4,y:-72},7).wait(4).to({startPosition:0},0).to({regY:0.2,rotation:0,x:-2.8,y:-72.1},8).wait(1).to({startPosition:0},0).to({rotation:-2.5,x:-4.8,y:-71.6},4).to({rotation:8.6,x:0.9,y:-72},5,cjs.Ease.get(-0.99)).to({rotation:7.7,x:0.2,y:-72.1},3).wait(7).to({startPosition:0},0).to({rotation:0,x:-2.8},5).wait(1).to({startPosition:0},0).to({rotation:3,x:-0.6,y:-73.1},3).to({rotation:5.7,x:1.1,y:-71.4},3).to({rotation:4.9,x:0.6,y:-71.8},3).wait(13).to({startPosition:0},0).to({rotation:0,x:-2.8,y:-72.1},5).wait(1).to({startPosition:0},0).wait(19).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({y:-71.5},3).to({y:-72.1},3).to({y:-71.3},3).to({y:-72.1},4).to({startPosition:0},4).wait(1).to({startPosition:0},0).to({rotation:-5.1,x:-4.4,y:-70.8},6).to({rotation:0,x:-2.8,y:-72.1},6).wait(1).to({startPosition:0},0).to({rotation:-7.4,x:-4,y:-72},7).wait(4).to({startPosition:0},0).to({rotation:0,x:-2.8,y:-72.1},8).wait(1).to({startPosition:0},0).to({regY:0.1,rotation:10.6,x:-1.4,y:-72},7).wait(4).to({startPosition:0},0).to({regY:0.2,rotation:0,x:-2.8,y:-72.1},8).wait(1).to({startPosition:0},0).to({rotation:3.7,x:-0.7,y:-72.5},2,cjs.Ease.get(-0.99)).to({rotation:1.8,x:-1.4,y:-72.4},3,cjs.Ease.get(1)).wait(7).to({startPosition:0},0).to({rotation:0,x:-2.8,y:-72.1},3).wait(1).to({startPosition:0},0).to({regY:0.3,rotation:-4.4,x:-6.3,y:-71.1},4).to({regY:0.2,rotation:2.7,x:-2.7,y:-72.2},3).to({rotation:5.2,x:-1.8,y:-71.9},1).to({regY:0.3,rotation:-4.7,x:1.9,y:-71.8},4).to({rotation:-4.5,x:-3.7,y:-72.1},4).to({regY:0.2,rotation:3,x:-1.5,y:-71.8},4).to({rotation:2,x:0.1,y:-71.6},3).to({rotation:2.9,x:-0.1,y:-72},4).to({rotation:0,x:-2.8,y:-72.1},5).wait(1).to({startPosition:0},0).to({rotation:-3.9,x:-4.2,y:-71.5},4).to({rotation:-3,x:-3.5,y:-71.7},4,cjs.Ease.get(1)).wait(7).to({startPosition:0},0).to({rotation:0,x:-2.8,y:-72.1},4).wait(2).to({startPosition:0},0).wait(17).to({startPosition:0},0).wait(15).to({startPosition:0},0).to({rotation:-3.2,x:-5.2,y:-71.8},4).to({rotation:1.5,x:-1.7,y:-72},3).to({rotation:-0.8,x:-3.5},4).to({rotation:0.2,x:-2.6,y:-72.1},4).wait(14).to({rotation:0.2},0).to({rotation:0,x:-2.8},4).to({_off:true},5).wait(8).to({regY:0,y:-72.3,startPosition:2,_off:false},0).wait(9).to({startPosition:2},0).to({y:-70.8},8).to({y:-72.3},8).to({_off:true},31).wait(302));

	// ☆hair_middle_L
	this.instance_11 = new lib.hair_middle_L_3();
	this.instance_11.setTransform(14.8,-79.4);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1).to({_off:false},0).wait(9).to({rotation:3.7,y:-78.1},8).to({rotation:0,y:-79.3},8).wait(2).to({rotation:-4.5,x:12.9,y:-80.7},7).to({rotation:0,x:14.8,y:-79.3},9).wait(2).to({rotation:-4.5,x:12.9,y:-80.7},7).to({rotation:0,x:14.8,y:-79.3},9).wait(1).to({rotation:16.7,x:12.2,y:-77.2},3).to({rotation:-18.7,x:0,y:-89.6},5).to({rotation:18,x:-5.3,y:-79.9},4).to({rotation:7.1,x:-6.6,y:-80.4},3).wait(3).to({rotation:0,x:14.8,y:-79.3},5).wait(3).to({rotation:-4.9,x:10.4,y:-77.7},4).to({rotation:0,x:14.8,y:-79.3},5).wait(9).to({rotation:-4.9,x:10.4,y:-77.7},4).to({rotation:0,x:14.8,y:-79.3},5).wait(9).to({rotation:-7.4,x:12.5,y:-81.5},7).wait(4).to({rotation:0,x:14.8,y:-79.3},8).wait(1).to({rotation:12.8,x:18.7,y:-75.4},7).wait(4).to({rotation:0,x:14.8,y:-79.3},8).wait(1).to({rotation:-7.4,x:12.5,y:-81.5},7).wait(4).to({rotation:0,x:14.8,y:-79.3},8).wait(1).to({rotation:12.8,x:18.7,y:-75.4},7).wait(4).to({rotation:0,x:14.8,y:-79.3},8).wait(1).to({rotation:3.7,x:17.3,y:-78.6},2,cjs.Ease.get(-0.99)).to({rotation:1.8,x:16.4,y:-79.1},3,cjs.Ease.get(1)).wait(7).to({rotation:0,x:14.8,y:-79.3},3).wait(1).to({rotation:-0.8,x:12.6,y:-74.3},4).to({rotation:-5.2,x:9.7,y:-82.8},5,cjs.Ease.get(-0.99)).to({x:10.1,y:-81.6},4,cjs.Ease.get(1)).wait(6).to({rotation:0,x:14.8,y:-79.3},4).wait(1).to({rotation:10.2,x:26.9,y:-83.7},5).to({rotation:11.4,x:28.6,y:-77.3},4).to({rotation:10.2,x:26.9,y:-77.7},4).wait(5).to({rotation:0,x:14.8,y:-79.3},5).wait(25).to({y:-76.8},2).to({y:-84.1},2,cjs.Ease.get(-0.99)).to({y:-78.3},2,cjs.Ease.get(1)).to({y:-84.1},2,cjs.Ease.get(-0.99)).to({y:-79.3},2,cjs.Ease.get(1)).wait(8).to({rotation:-5.1,x:12.3,y:-79.6},6).to({rotation:0,x:14.8,y:-79.3},6).wait(1).to({rotation:4.7,x:12.6,y:-79.6},4).to({rotation:18.2,x:14.8,y:-78.8},3).to({rotation:10.5,y:-77.8},1).to({rotation:-16.8,x:15.8,y:-81},4).to({rotation:-10.2,x:12.2,y:-80.9},4).to({rotation:2.7,x:15.7,y:-78.3},4).to({rotation:0,x:15.6,y:-78.6},3).to({rotation:5,x:16.2,y:-78.3},4).to({rotation:0,x:14.8,y:-79.3},5).wait(1).to({rotation:-4.6,x:12.7,y:-79.9},4).to({rotation:-3,x:13.6},4,cjs.Ease.get(1)).wait(7).to({rotation:0,x:14.8,y:-79.3},4).wait(1).to({rotation:-5.7,x:9,y:-81.9},4).to({rotation:5.4,x:17.6,y:-76.8},4).to({rotation:2.2,x:16.6,y:-78.2},3).wait(7).to({rotation:0,x:14.8,y:-79.3},4).wait(1).to({rotation:2.5,x:18.2,y:-78.9},0).wait(1).to({rotation:3.5,x:19.5,y:-78.7},0).wait(7).to({rotation:0,x:14.8,y:-79.3},5).wait(1).to({rotation:-1.5,x:12.2,y:-78.6},4,cjs.Ease.get(1)).to({rotation:1.2,x:15.8,y:-79},5,cjs.Ease.get(1)).to({rotation:-1,x:13.7,y:-79.7},4,cjs.Ease.get(-0.99)).to({rotation:1.2,x:15.8,y:-79},5,cjs.Ease.get(1)).to({rotation:-1,x:13.7,y:-79.7},4,cjs.Ease.get(-0.99)).to({rotation:0,x:14.8,y:-79.3},5,cjs.Ease.get(1)).wait(23).to({rotation:-1.2,x:12.8,y:-78.2},3,cjs.Ease.get(1)).to({rotation:0,x:14.8,y:-82.4},4).to({rotation:1,x:15.6,y:-78.4},4).to({rotation:0,x:14.8,y:-79.3},2).wait(2).to({rotation:-1,x:13.9,y:-78.7},10).to({rotation:0,x:14.8,y:-79.3},11).wait(1).to({rotation:-4.5,x:12.9,y:-80.7},7).to({rotation:0,x:14.8,y:-79.3},9).wait(1).to({rotation:-4.5,x:12.9,y:-80.7},9).to({rotation:0,x:14.8,y:-79.3},9).wait(20).to({rotation:-3.4,x:12.2,y:-80},5).to({rotation:0,x:18.2,y:-80.1},4).to({rotation:-0.2,x:17.9,y:-80.3},5).to({rotation:0,x:14.8,y:-79.3},5).wait(1).to({rotation:-3.4,x:12.2,y:-80},5).to({rotation:0,x:18.2,y:-80.1},4).to({rotation:-0.2,x:17.9,y:-80.3},5).to({rotation:0,x:14.8,y:-79.3},5).wait(1).to({rotation:-7.4,x:12.5,y:-81.5},7).wait(4).to({rotation:0,x:14.8,y:-79.3},8).wait(1).to({rotation:12.8,x:18.7,y:-75.4},7).wait(4).to({rotation:0,x:14.8,y:-79.3},8).wait(1).to({rotation:-2.5,x:12.4,y:-79.6},4).to({rotation:8.6,x:19.6,y:-76.5},5,cjs.Ease.get(-0.99)).to({rotation:7.7,x:18.8,y:-76.9},3).wait(7).to({rotation:0,x:14.8,y:-79.3},5).wait(1).to({rotation:3,x:17.3,y:-79.4},3).to({rotation:5.7,x:19.4,y:-76.8},3).to({rotation:4.9,x:18.9,y:-77.5},3).wait(13).to({rotation:0,x:14.8,y:-79.3},5).wait(21).to({rotation:-0.5},3).to({rotation:0},3).to({rotation:-0.5,y:-78.5},3).to({rotation:0,y:-79.3},4).wait(5).to({rotation:-5.1,x:12.3,y:-79.6},6).to({rotation:0,x:14.8,y:-79.3},6).wait(1).to({rotation:-7.4,x:12.5,y:-81.5},7).wait(4).to({rotation:0,x:14.8,y:-79.3},8).wait(1).to({rotation:12.8,x:18.7,y:-75.4},7).wait(4).to({rotation:0,x:14.8,y:-79.3},8).wait(1).to({rotation:3.7,x:17.3,y:-78.6},2,cjs.Ease.get(-0.99)).to({rotation:1.8,x:16.4,y:-79.1},3,cjs.Ease.get(1)).wait(7).to({rotation:0,x:14.8,y:-79.3},3).wait(1).to({rotation:4.7,x:11.4,y:-80.2},4).to({rotation:13,x:14.8,y:-78.8},3).to({rotation:8,y:-77.8},1).to({rotation:-16.8,y:-81},4).to({rotation:-10.2,x:12.2,y:-80.9},4).to({rotation:2.7,x:14.5,y:-77.9},4).to({rotation:0,x:16.2,y:-78.6},3).to({rotation:5,x:16.8,y:-78.1},4).to({rotation:0,x:14.8,y:-79.3},5).wait(1).to({rotation:-4.6,x:12.7,y:-79.9},4).to({rotation:-3,x:13.6},4,cjs.Ease.get(1)).wait(7).to({rotation:0,x:14.8,y:-79.3},4).wait(34).to({rotation:-3.2,x:11.9,y:-80.1},4).to({rotation:1.5,x:16,y:-78.8},3).to({rotation:-0.8,x:13.9,y:-79.6},4).to({rotation:0.2,x:15,y:-79.3},4).wait(14).to({rotation:0.2},0).to({rotation:0,x:14.8},4).to({_off:true},5).wait(8).to({x:14,y:-79.6,_off:false},0).wait(9).to({rotation:2,y:-76.8},8).to({rotation:0,y:-79.6},8).to({_off:true},31).wait(302));

	// hand_L
	this.instance_12 = new lib.hand_L_2("single",1);
	this.instance_12.setTransform(15,-47.9);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1).to({startPosition:1,_off:false},0).wait(9).to({startPosition:1},0).to({rotation:-6.3,x:16.8,y:-46.6},8).to({rotation:0,x:15,y:-47.8},8).wait(2).to({startPosition:1},0).to({rotation:-1.5,x:14.5,y:-48.3},7).to({rotation:0,x:15,y:-47.8},9).wait(2).to({startPosition:1},0).to({rotation:-26.7,x:21.2,y:-51.8},7).to({rotation:0,x:15,y:-47.8},9).wait(1).to({mode:"independent"},0).to({scaleX:0.97,scaleY:1,skewX:-116.3,skewY:-117.5,x:11.3,y:-44.4},3).to({x:16.8,y:-46.2},2).to({_off:true},1).wait(17).to({scaleX:1,scaleY:1,skewX:0,skewY:0,x:15,y:-47.8,mode:"single",startPosition:1,_off:false},0).wait(3).to({startPosition:1},0).to({rotation:-125.3,x:16.6,y:-47.9},4).to({rotation:-49,x:25.6,y:-55.3},5).to({rotation:-49},3).to({rotation:0,x:15,y:-47.8},5).wait(1).to({startPosition:1},0).to({rotation:-125.3,x:16.6,y:-47.9},4).to({rotation:-49,x:25.6,y:-55.3},5).to({rotation:-49},3).to({rotation:0,x:15,y:-47.8},5).wait(1).to({startPosition:1},0).to({rotation:-1.5,x:14.5,y:-48.3},7).wait(4).to({startPosition:1},0).to({rotation:0,x:15,y:-47.8},8).wait(1).to({startPosition:1},0).to({rotation:3.5,x:16.3,y:-46.8},7).wait(4).to({startPosition:1},0).to({rotation:0,x:15,y:-47.8},8).wait(1).to({startPosition:1},0).to({rotation:-1.5,x:14.5,y:-48.3},7).wait(4).to({startPosition:1},0).to({rotation:0,x:15,y:-47.8},8).wait(1).to({startPosition:1},0).to({rotation:3.5,x:16.3,y:-46.8},7).wait(4).to({startPosition:1},0).to({rotation:0,x:15,y:-47.8},8).wait(1).to({startPosition:1},0).to({rotation:-8,x:18.9,y:-48.3},2,cjs.Ease.get(-0.99)).to({rotation:-7,x:18},3,cjs.Ease.get(1)).wait(7).to({startPosition:1},0).to({rotation:0,x:15,y:-47.8},3).wait(1).to({startPosition:1},0).to({rotation:31.5,x:5,y:-43},4).to({rotation:-54.9,x:18.7,y:-54.9},5,cjs.Ease.get(-0.99)).to({rotation:-36.9,x:17.5,y:-52.4},4,cjs.Ease.get(1)).wait(6).to({startPosition:1},0).to({rotation:0,x:15,y:-47.8},4).wait(1).to({startPosition:1},0).to({scaleX:1,scaleY:1,rotation:-32.7,x:26.9,y:-55},2).to({scaleX:1,scaleY:1,rotation:-65.8,x:35,y:-65.7},2).to({scaleX:1,scaleY:1,rotation:-82.3,x:37.2,y:-71.6},1).to({rotation:-81.1,x:38.6,y:-64.9},4).to({rotation:-82.3,x:37.2,y:-65.6},4).wait(5).to({startPosition:1},0).to({scaleX:1,scaleY:1,rotation:-49.2,x:31.4,y:-56.3},2).to({scaleX:1,scaleY:1,rotation:0,x:15,y:-47.8},3).wait(1).to({startPosition:1},0).wait(23).to({startPosition:1},0).wait(1).to({rotation:-113.1,x:23.7,y:-73.5},0).to({y:-71},2).to({y:-78.2},2,cjs.Ease.get(-0.99)).to({y:-72.5},2,cjs.Ease.get(1)).to({y:-78.2},2,cjs.Ease.get(-0.99)).to({y:-73.5},2,cjs.Ease.get(1)).to({startPosition:1},2).to({scaleX:1,scaleY:1,rotation:-56.5,x:26.5,y:-58.4},2).to({scaleX:1,scaleY:1,rotation:0,x:15,y:-47.8},2).wait(2).to({startPosition:1},0).to({rotation:5.3,x:12.4,y:-46.6},6).to({rotation:0,x:15,y:-47.8},6).wait(1).to({startPosition:1},0).to({rotation:-9.2,x:14,y:-47.2},4).to({rotation:0,x:14.5,y:-48.7},3).to({rotation:-6.1,x:16.7,y:-48.3},1).to({rotation:2.6,x:16.9,y:-47.9},4).to({rotation:-3.5,x:14.1,y:-49},4).to({rotation:-3.5,x:17,y:-49.3},4).to({rotation:-0.3,x:16.3,y:-48.2},3).to({rotation:0.5,x:16.7,y:-48.1},4).to({rotation:0,x:15,y:-47.8},5).wait(1).to({startPosition:1},0).to({rotation:90.6,x:18.5,y:-49.8},4).to({rotation:87.9,x:18.9,y:-49.7},4,cjs.Ease.get(1)).wait(7).to({startPosition:1},0).to({rotation:0,x:15,y:-47.8},4).wait(1).to({startPosition:1},0).to({rotation:16.3,x:17.5,y:-53.4},4).to({rotation:58.1,x:23.4,y:-48.8},4).to({rotation:56.9,x:23,y:-50.4},3).wait(7).to({startPosition:1},0).to({rotation:0,x:15,y:-47.8},4).wait(1).to({rotation:-6.8,x:19.6,y:-48.2},0).wait(1).to({rotation:-62.2,x:30.6,y:-59.4},0).wait(1).to({rotation:-12.5,x:22.1,y:-48.6},0).wait(1).to({rotation:-60.5,x:30.5,y:-59.1},0).wait(1).to({rotation:-12.5,x:22.1,y:-48.6},0).wait(1).to({rotation:-55.5,x:30.1,y:-57.6},0).wait(3).to({startPosition:1},0).to({rotation:0,x:15,y:-47.8},5).to({_off:true},1).wait(30).wait(7).to({startPosition:1,_off:false},0).wait(4).to({startPosition:1},0).wait(9).to({startPosition:1},0).to({rotation:16.3,x:8.8,y:-46.2},3,cjs.Ease.get(1)).to({rotation:-6.5,x:16.9,y:-51.4},4).to({rotation:1,x:15.3,y:-46.8},4).to({rotation:0,x:15,y:-47.8},2).wait(2).to({startPosition:1},0).to({rotation:-1,x:14.7,y:-47.7},10).to({rotation:0,x:15,y:-47.8},11).wait(1).to({startPosition:1},0).to({rotation:-1.5,x:14.5,y:-48.3},7).to({rotation:0,x:15,y:-47.8},9).wait(1).to({startPosition:1},0).to({rotation:-1.5,x:14.5,y:-48.3},9).to({rotation:0,x:15,y:-47.8},9).wait(20).to({startPosition:1},0).to({rotation:-123.8,x:17.6,y:-50.1},5).to({rotation:-49,x:29,y:-56.1},4).to({rotation:-47.7,x:28.7,y:-55.9},5).to({rotation:0,x:15,y:-47.8},5).wait(1).to({startPosition:1},0).to({rotation:-123.8,x:17.6,y:-50.1},5).to({rotation:-49,x:29,y:-56.1},4).to({rotation:-47.7,x:28.7,y:-55.9},5).to({rotation:0,x:15,y:-47.8},5).wait(1).to({startPosition:1},0).to({rotation:-1.5,x:14.5,y:-48.3},7).wait(4).to({startPosition:1},0).to({rotation:0,x:15,y:-47.8},8).wait(1).to({startPosition:1},0).to({rotation:3.5,x:16.3,y:-46.8},7).wait(4).to({startPosition:1},0).to({rotation:0,x:15,y:-47.8},8).wait(1).to({startPosition:1},0).to({rotation:-5.9,x:15.1,y:-48.9},4).to({rotation:-4.1,x:19.3,y:-46.8},5,cjs.Ease.get(-0.99)).to({rotation:-3.8,x:18.7,y:-47},3).wait(7).to({startPosition:1},0).to({rotation:0,x:15,y:-47.8},5).wait(1).to({startPosition:1},0).to({scaleX:1,scaleY:1,rotation:-21.6,x:21,y:-51.3},1).to({scaleX:1,scaleY:1,rotation:-65.5,x:28.8,y:-61.5},2).to({scaleX:1,scaleY:1,rotation:-104.2,x:28.6,y:-69.9},3).to({rotation:-98.6,x:28.9,y:-69.1},3).wait(13).to({rotation:-101.1,x:28.6,y:-69.7},0).to({scaleX:1,scaleY:1,rotation:-60.7,x:28.2,y:-59},2).to({scaleX:1,scaleY:1,rotation:-20.1,x:20.7,y:-50.1},2).to({scaleX:1,scaleY:1,rotation:0,x:15,y:-47.8},1).wait(1).to({startPosition:1},0).wait(19).to({startPosition:1},0).wait(1).to({rotation:-113.9,x:23.5,y:-73.9},0).to({rotation:-105.5,x:24.9,y:-71.3},3).to({rotation:-117.6,x:22.8,y:-74.8},3).to({rotation:-109.4,x:24.3,y:-72.1},3).to({rotation:-113.9,x:23.5,y:-73.9},4).to({scaleX:1,scaleY:1,rotation:-56.9,x:26,y:-58.7},2).to({scaleX:1,scaleY:1,rotation:0,x:15,y:-47.8},2).wait(1).to({startPosition:1},0).to({rotation:5.3,x:12.4,y:-46.6},6).to({rotation:0,x:15,y:-47.8},6).wait(1).to({startPosition:1},0).to({rotation:-1.5,x:14.5,y:-48.3},7).wait(4).to({startPosition:1},0).to({rotation:0,x:15,y:-47.8},8).wait(1).to({startPosition:1},0).to({rotation:3.5,x:16.3,y:-46.8},7).wait(4).to({startPosition:1},0).to({rotation:0,x:15,y:-47.8},8).wait(1).to({startPosition:1},0).to({rotation:-8,x:18.9,y:-48.3},2,cjs.Ease.get(-0.99)).to({rotation:-5.8,x:17.7,y:-48.2},3,cjs.Ease.get(1)).wait(7).to({startPosition:1},0).to({rotation:0,x:15,y:-47.8},3).wait(1).to({startPosition:1},0).to({rotation:-9.2,x:14.6,y:-49.4},4).to({rotation:0,x:14.5,y:-48.7},3).to({rotation:-6.1,x:16.7,y:-48.3},1).to({rotation:2.6,x:15.9,y:-47.9},4).to({rotation:-3.5,x:14.7,y:-49},4).to({rotation:-3.5,x:16,y:-49.3},4).to({rotation:-0.3,x:16.3,y:-48.2},3).to({rotation:0.5,x:16.7,y:-48.1},4).to({rotation:0,x:15,y:-47.8},5).wait(1).to({startPosition:1},0).to({rotation:90.6,x:18.5,y:-49.8},4).to({rotation:87.9,x:18.9,y:-49.7},4,cjs.Ease.get(1)).wait(7).to({startPosition:1},0).to({rotation:0,x:15,y:-47.8},4).wait(2).to({startPosition:1},0).wait(17).to({startPosition:1},0).wait(15).to({startPosition:1},0).to({rotation:-0.7,x:13.3,y:-48.4},4).to({rotation:-1.5,x:16.4,y:-47.5},3).to({rotation:-3.3,x:15.4,y:-48.4},4).to({rotation:0.2,x:15.1,y:-47.8},4).wait(14).to({rotation:0.2},0).to({rotation:0,x:15},4).to({_off:true},5).wait(8).to({x:12.2,y:-41.3,_off:false},0).wait(9).to({startPosition:1},0).to({rotation:-6.3,x:13.5,y:-40.9},8).to({rotation:0,x:12.2,y:-41.3},8).to({_off:true},31).wait(302));

	// arm_L
	this.arm_L_1 = new lib.arm_L_4();
	this.arm_L_1.setTransform(11,-63.8);
	this.arm_L_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.arm_L_1).wait(1).to({_off:false},0).wait(9).to({rotation:-6.3,x:10.8,y:-62.2},8).to({rotation:0,x:11,y:-63.7},8).wait(2).to({rotation:-1.5,x:10,y:-64.1},7).to({rotation:0,x:11,y:-63.7},9).wait(2).to({rotation:-28.5,x:10,y:-64.1},7).to({rotation:0,x:11,y:-63.7},9).wait(1).to({scaleX:0.99,scaleY:0.98,skewX:23.7,skewY:22.2,x:13.5,y:-60.1},3).to({skewX:-1.9,skewY:-3.3,x:12.7,y:-61.2},2).to({_off:true},1).wait(17).to({scaleX:1,scaleY:1,skewX:0,skewY:0,x:11,y:-63.7,_off:false},0).wait(3).to({rotation:-18.9,x:8,y:-61.7},4).to({rotation:-50.9,x:10.4,y:-62.3},5).wait(3).to({rotation:0,x:11,y:-63.7},5).wait(1).to({rotation:-18.9,x:8,y:-61.7},4).to({rotation:-50.9,x:10.4,y:-62.3},5).wait(3).to({rotation:0,x:11,y:-63.7},5).wait(1).to({rotation:-1.5,x:10,y:-64.1},7).wait(4).to({rotation:0,x:11,y:-63.7},8).wait(1).to({rotation:0.5,x:12.6,y:-62.8},7).wait(4).to({rotation:0,x:11,y:-63.7},8).wait(1).to({rotation:-1.5,x:10,y:-64.1},7).wait(4).to({rotation:0,x:11,y:-63.7},8).wait(1).to({rotation:0.5,x:12.6,y:-62.8},7).wait(4).to({rotation:0,x:11,y:-63.7},8).wait(1).to({rotation:-8,x:12.6,y:-63.5},2,cjs.Ease.get(-0.99)).to({rotation:-7,x:12.1,y:-63.6},3,cjs.Ease.get(1)).wait(7).to({rotation:0,x:11,y:-63.7},3).wait(1).to({rotation:29.9,x:9.4,y:-58.8},4).to({rotation:-29.2,x:7.4,y:-66.8},5,cjs.Ease.get(-0.99)).to({rotation:-21.7,x:7.8,y:-65.6},4,cjs.Ease.get(1)).wait(6).to({rotation:0,x:11,y:-63.7},4).wait(1).to({rotation:-84.2,x:20.4,y:-69},5).to({rotation:-83,x:21.8,y:-62.7},4).to({rotation:-84.2,x:20.4,y:-63},4).wait(5).to({rotation:0,x:11,y:-63.7},5).wait(24).wait(1).to({rotation:-113.5},0).to({y:-61.2},2).to({y:-68.4},2,cjs.Ease.get(-0.99)).to({y:-62.7},2,cjs.Ease.get(1)).to({y:-68.4},2,cjs.Ease.get(-0.99)).to({y:-63.7},2,cjs.Ease.get(1)).wait(2).to({rotation:0},4).wait(2).to({rotation:4.8,x:9.6,y:-62.8},6).to({rotation:0,x:11,y:-63.7},6).wait(1).to({rotation:-10.9,x:7.2,y:-61.7},4).to({rotation:0.5,x:10.9,y:-63.7},3).to({rotation:-5.5,x:11.5,y:-62.9},1).to({rotation:3.2,x:14,y:-63.2},4).to({rotation:-3,x:9.6,y:-64},4).to({rotation:-3,x:12.5,y:-64.2},4).to({rotation:0,x:12.7,y:-63.2},3).to({rotation:1,x:13.3},4).to({rotation:0,x:11,y:-63.7},5).wait(1).to({rotation:-17.2,x:9.9,y:-63.8},4).to({rotation:-16.2,x:10.5},4,cjs.Ease.get(1)).wait(7).to({rotation:0,x:11,y:-63.7},4).wait(1).to({rotation:-25.7,x:6.9,y:-65.9},4).to({rotation:-25.8,x:12.8,y:-61.4},4).to({rotation:-27,x:12.1,y:-62.7},3).wait(7).to({rotation:0,x:11,y:-63.7},4).wait(1).to({rotation:-6.8,x:13.7,y:-63.5},0).wait(1).to({rotation:-62.2,x:14.6,y:-63.1},0).wait(1).to({rotation:-12.5,x:14.7,y:-63.3},0).wait(1).to({rotation:-60.5,x:14.5},0).wait(1).to({rotation:-12.5,x:14.7},0).wait(1).to({rotation:-55.5,x:14.6},0).wait(3).to({rotation:0,x:11,y:-63.7},5).to({_off:true},1).wait(30).wait(7).to({_off:false},0).wait(13).to({rotation:16.3,x:9.4,y:-62.6},3,cjs.Ease.get(1)).to({rotation:-6.5,x:11.1,y:-66.8},4).to({rotation:1,x:11.5,y:-62.8},4).to({rotation:0,x:11,y:-63.7},2).wait(2).to({rotation:-1,x:10.3,y:-63.6},10).to({rotation:0,x:11,y:-63.7},11).wait(1).to({rotation:-1.5,x:10,y:-64.1},7).to({rotation:0,x:11,y:-63.7},9).wait(1).to({rotation:-1.5,x:10,y:-64.1},9).to({rotation:0,x:11,y:-63.7},9).wait(20).to({rotation:-17.4,x:9.3,y:-64.1},5).to({rotation:-50.9,x:13.8,y:-63.1},4).to({rotation:-49.7,x:13.6,y:-63.2},5).to({rotation:0,x:11,y:-63.7},5).wait(1).to({rotation:-17.4,x:9.3,y:-64.1},5).to({rotation:-50.9,x:13.8,y:-63.1},4).to({rotation:-49.7,x:13.6,y:-63.2},5).to({rotation:0,x:11,y:-63.7},5).wait(1).to({rotation:-1.5,x:10,y:-64.1},7).wait(4).to({rotation:0,x:11,y:-63.7},8).wait(1).to({rotation:0.5,x:12.6,y:-62.8},7).wait(4).to({rotation:0,x:11,y:-63.7},8).wait(1).to({rotation:-5.9,x:9.4,y:-64.3},4).to({rotation:-4.1,x:14.1,y:-62.4},5,cjs.Ease.get(-0.99)).to({rotation:-3.8,x:13.5,y:-62.6},3).wait(7).to({rotation:0,x:11,y:-63.7},5).wait(1).to({scaleX:1,scaleY:1,rotation:-65.5,x:12.8,y:-64.2},3).to({scaleX:1,scaleY:1,rotation:-104.2,x:14.2,y:-62},3).to({rotation:-98.6,x:13.9,y:-62.6},3).wait(13).to({rotation:-101.1},0).to({rotation:0,x:11,y:-63.7},5).wait(20).wait(1).to({rotation:-113.9,x:10.7},0).to({rotation:-105.5,x:10.8,y:-63.1},3).to({rotation:-117.6,x:10.7,y:-63.7},3).to({rotation:-109.4,x:10.6,y:-62.9},3).to({rotation:-113.9,x:10.7,y:-63.7},4).to({rotation:0,x:11},4).wait(1).to({rotation:4.8,x:9.6,y:-62.8},6).to({rotation:0,x:11,y:-63.7},6).wait(1).to({rotation:-1.5,x:10,y:-64.1},7).wait(4).to({rotation:0,x:11,y:-63.7},8).wait(1).to({rotation:0.5,x:12.6,y:-62.8},7).wait(4).to({rotation:0,x:11,y:-63.7},8).wait(1).to({rotation:-8,x:12.6,y:-63.5},2,cjs.Ease.get(-0.99)).to({rotation:-5.8,x:12.1,y:-63.6},3,cjs.Ease.get(1)).wait(7).to({rotation:0,x:11,y:-63.7},3).wait(1).to({rotation:-10.9,x:7.8,y:-63.9},4).to({rotation:0.5,x:10.9,y:-63.7},3).to({rotation:-5.5,x:11.5,y:-62.9},1).to({rotation:3.2,x:13,y:-63.2},4).to({rotation:-3,x:10.2,y:-64},4).to({rotation:-3,x:11.5,y:-64.2},4).to({rotation:0,x:12.7,y:-63.2},3).to({rotation:1,x:13.3},4).to({rotation:0,x:11,y:-63.7},5).wait(1).to({rotation:-17.2,x:9.9,y:-63.8},4).to({rotation:-16.2,x:10.5},4,cjs.Ease.get(1)).wait(7).to({rotation:0,x:11,y:-63.7},4).wait(34).to({rotation:-0.7,x:9,y:-64.3},4).to({rotation:-1.5,x:11.9,y:-63.3},3).to({rotation:-3.3,x:10.5,y:-64},4).to({rotation:0.2,x:11.2,y:-63.7},4).wait(14).to({rotation:0.2},0).to({rotation:0,x:11},4).to({_off:true},5).wait(8).to({x:8.7,y:-55.3,_off:false},0).wait(9).to({rotation:-6.3,x:8.6,y:-53.9},8).to({rotation:0,x:8.7,y:-55.3},8).to({_off:true},31).wait(302));

	// ・head_back
	this.head_back = new lib.head_back_4();
	this.head_back.setTransform(2.5,-99.4);
	this.head_back._off = true;

	this.timeline.addTween(cjs.Tween.get(this.head_back).wait(1).to({_off:false},0).wait(9).to({x:2.8,y:-97.8},8).to({x:2.5,y:-99.3},8).wait(2).to({rotation:-4.5,x:-0.8,y:-99.6},7).to({rotation:0,x:2.5,y:-99.3},9).wait(2).to({rotation:-4.5,x:-0.8,y:-99.6},7).to({rotation:0,x:2.5,y:-99.3},9).wait(1).to({scaleY:0.97,skewX:-6.7,skewY:-6.5,x:0.5,y:-94},3).to({scaleY:1,rotation:7.7,skewX:0,skewY:0,x:-6.9,y:-107.9},5).to({rotation:4.5,x:-12.8,y:-96.3},4).to({y:-97.8},3).wait(3).to({rotation:0,x:2.5,y:-99.3},5).wait(3).to({rotation:-4.9,x:-3.4,y:-96.5},4).to({rotation:5.5,x:5.1,y:-98.4},5).wait(3).to({rotation:0,x:2.5,y:-99.3},5).wait(1).to({rotation:-4.9,x:-3.4,y:-96.5},4).to({rotation:5.5,x:5.1,y:-98.4},5).wait(3).to({rotation:0,x:2.5,y:-99.3},5).wait(1).to({rotation:-7.4,x:-2.2,y:-99.7},7).wait(4).to({rotation:0,x:2.5,y:-99.3},8).wait(1).to({rotation:10.6,x:8.8,y:-97.7},7).wait(4).to({rotation:0,x:2.5,y:-99.3},8).wait(1).to({rotation:-7.4,x:-2.2,y:-99.7},7).wait(4).to({rotation:0,x:2.5,y:-99.3},8).wait(1).to({rotation:10.6,x:8.8,y:-97.7},7).wait(4).to({rotation:0,x:2.5,y:-99.3},8).wait(1).to({rotation:3.7,x:6.4,y:-99.4},2,cjs.Ease.get(-0.99)).to({rotation:1.8,x:4.7,y:-99.5},3,cjs.Ease.get(1)).wait(7).to({rotation:0,x:2.5,y:-99.3},3).wait(1).to({rotation:-2.3,x:-0.4,y:-93.7},4).to({rotation:-5.2,x:-4.3,y:-101.6},5,cjs.Ease.get(-0.99)).to({x:-3.9,y:-100.4},4,cjs.Ease.get(1)).wait(6).to({rotation:0,x:2.5,y:-99.3},4).wait(1).to({rotation:10.2,x:18.4,y:-105.6},5).to({rotation:11.4,x:20.6,y:-99.3},4).to({rotation:10.2,x:18.4,y:-99.6},4).wait(5).to({rotation:0,x:2.5,y:-99.3},5).wait(25).to({y:-96.8},2).to({y:-104.1},2,cjs.Ease.get(-0.99)).to({y:-98.3},2,cjs.Ease.get(1)).to({y:-104.1},2,cjs.Ease.get(-0.99)).to({y:-99.3},2,cjs.Ease.get(1)).wait(8).to({rotation:-5.1,x:-1.6,y:-98.4},6).to({rotation:0,x:2.5,y:-99.3},6).wait(1).to({rotation:-4.4,x:-6.1,y:-96.5},4).to({rotation:5.5,x:0.5,y:-100.3},3).to({rotation:5.2,x:2.4,y:-99},1).to({rotation:-4.5,x:3.7,y:-98.4},4).to({rotation:0,skewX:-10.6,skewY:-10.7,x:-0.8,y:-98.8},4).to({rotation:5.2,skewX:0,skewY:0,x:2.6,y:-99.4},4).to({rotation:-1.8,x:4.3,y:-99.6},3).to({rotation:1.2,x:4.7,y:-99.4},4).to({rotation:0,x:2.5,y:-99.3},5).wait(1).to({rotation:-3.9,x:-0.7,y:-99},4).to({rotation:-3,x:0.3,y:-99.2},4,cjs.Ease.get(1)).wait(7).to({rotation:0,x:2.5,y:-99.3},4).wait(1).to({rotation:-5.7,x:-5.1,y:-100.5},4).to({rotation:3.4,x:6.6,y:-97.5},4).to({rotation:2.2,x:5.2,y:-98.7},3).wait(7).to({rotation:0,x:2.5,y:-99.3},4).wait(1).to({rotation:2.5,x:6.9,y:-99.4},0).wait(1).to({rotation:3.5,x:8.5},0).wait(7).to({rotation:0,x:2.5,y:-99.3},5).wait(1).to({rotation:-1.5,x:-0.6,y:-98.2},4,cjs.Ease.get(1)).to({rotation:1.2,x:3.9,y:-99.2},5,cjs.Ease.get(1)).to({rotation:-1,x:1,y:-99.4},4,cjs.Ease.get(-0.99)).to({rotation:1.2,x:3.9,y:-99.2},5,cjs.Ease.get(1)).to({rotation:-1,x:1,y:-99.4},4,cjs.Ease.get(-0.99)).to({rotation:0.4,x:3.1,y:-99.3},5,cjs.Ease.get(1)).to({rotation:0,x:2.5},3,cjs.Ease.get(-0.99)).wait(20).to({rotation:-1.2,x:0,y:-97.9},3,cjs.Ease.get(1)).to({rotation:0,x:2.5,y:-102.4},4).to({rotation:1,x:3.7,y:-98.6},4).to({rotation:0,x:2.5,y:-99.3},2).wait(2).to({rotation:-1,x:1.2,y:-98.4},10).to({rotation:0,x:2.5,y:-99.3},11).wait(1).to({rotation:-4.5,x:-0.8,y:-99.6},7).to({rotation:0,x:2.5,y:-99.3},9).wait(1).to({rotation:-4.5,x:-0.8,y:-99.6},9).to({rotation:0,x:2.5,y:-99.3},9).wait(20).to({rotation:-3.4,x:-1.2,y:-99.2},5).to({rotation:5.5,x:8.5},4).to({rotation:5.1,x:8.1,y:-99.3},5).to({rotation:0,x:2.5},5).wait(1).to({rotation:-3.4,x:-1.2,y:-99.2},5).to({rotation:5.5,x:8.5},4).to({rotation:5.1,x:8.1,y:-99.3},5).to({rotation:0,x:2.5},5).wait(1).to({rotation:-7.4,x:-2.2,y:-99.7},7).wait(4).to({rotation:0,x:2.5,y:-99.3},8).wait(1).to({rotation:10.6,x:8.8,y:-97.7},7).wait(4).to({rotation:0,x:2.5,y:-99.3},8).wait(1).to({rotation:-2.5,x:-0.6,y:-99},4).to({rotation:8.6,x:10.5,y:-98.2},5,cjs.Ease.get(-0.99)).to({rotation:7.7,x:9.4,y:-98.4},3).wait(7).to({rotation:0,x:2.5,y:-99.3},5).wait(1).to({rotation:3,x:6.2,y:-100},3).to({rotation:5.7,x:9.2,y:-98},3).to({rotation:4.9,x:8.4,y:-98.5},3).wait(13).to({rotation:0,x:2.5,y:-99.3},5).wait(21).to({y:-98.7},3).to({y:-99.3},3).to({y:-98.5},3).to({y:-99.3},4).wait(5).to({rotation:-5.1,x:-1.6,y:-98.4},6).to({rotation:0,x:2.5,y:-99.3},6).wait(1).to({rotation:-7.4,x:-2.2,y:-99.7},7).wait(4).to({rotation:0,x:2.5,y:-99.3},8).wait(1).to({rotation:10.6,x:8.8,y:-97.7},7).wait(4).to({rotation:0,x:2.5,y:-99.3},8).wait(1).to({rotation:3.7,x:6.4,y:-99.4},2,cjs.Ease.get(-0.99)).to({rotation:1.8,x:4.7,y:-99.5},3,cjs.Ease.get(1)).wait(7).to({rotation:0,x:2.5,y:-99.3},3).wait(1).to({rotation:-4.4,x:-5.5,y:-98.7},4).to({rotation:10,x:0.2,y:-100.8},3).to({rotation:10.5,x:3.5,y:-99},1).to({rotation:-4.5,x:2.6,y:-99.1},4).to({rotation:0,skewX:-10.6,skewY:-10.7,x:-1.3,y:-98.8},4).to({rotation:5.2,skewX:0,skewY:0,x:0.8,y:-99.8},4).to({rotation:-1.8,x:3.9,y:-99.6},3).to({rotation:1.2,x:5.1,y:-100.2},4).to({rotation:0,x:2.5,y:-99.3},5).wait(1).to({rotation:-3.9,x:-0.7,y:-99},4).to({rotation:-3,x:0.3,y:-99.2},4,cjs.Ease.get(1)).wait(7).to({rotation:0,x:2.5,y:-99.3},4).wait(34).to({rotation:-3.2,x:-1.4},4).to({rotation:1.5,x:4.3,y:-99.1},3).to({rotation:-0.8,x:1.3,y:-99.4},4).to({rotation:0.2,x:2.8,y:-99.3},4).wait(14).to({rotation:0.2},0).to({rotation:0,x:2.5},4).to({_off:true},5).wait(8).to({_off:false},0).wait(9).to({x:2.8,y:-97.8},8).to({x:2.5,y:-99.3},8).to({_off:true},31).wait(302));

	// ★foot_L_front
	this.leg_L = new lib.foot_L_front_4();
	this.leg_L.setTransform(6.8,-19.1);
	this.leg_L._off = true;

	this.timeline.addTween(cjs.Tween.get(this.leg_L).wait(1).to({_off:false},0).wait(9).to({rotation:-7.4,x:4.8,y:-18.6},8).to({rotation:0,x:6.8,y:-19},8).wait(37).to({rotation:-13.6,x:3.9,y:-18},3).to({rotation:-116.7,x:13.4,y:-36.9},5).to({rotation:-85.4,x:9.7,y:-23.4},4).to({rotation:-111.9,x:12,y:-27.1},3).wait(3).to({rotation:0,x:6.8,y:-19},5).wait(3).to({rotation:-20.2,x:3.1,y:-17.6},4).to({rotation:-11.2,x:3.6,y:-17.8},5).wait(3).to({rotation:0,x:6.8,y:-19},5).wait(1).to({rotation:-20.2,x:3.1,y:-17.6},4).to({rotation:-11.2,x:3.6,y:-17.8},5).wait(3).to({rotation:0,x:6.8,y:-19},5).wait(97).to({rotation:-21.7,x:0.9,y:-15.9},4).to({scaleX:1,scaleY:1,rotation:-27.9,x:2.3,y:-16.2},2,cjs.Ease.get(-0.99)).to({scaleX:1,scaleY:1,rotation:-48.2,x:8.9,y:-19.5},2).to({scaleX:1,scaleY:1,rotation:-73.6,x:13.3,y:-24.1},1).to({rotation:-60.6,x:12.9,y:-22.3},4,cjs.Ease.get(1)).wait(6).to({rotation:0,x:6.8,y:-19},4).wait(1).to({rotation:4.5,x:8.4,y:-25.7},5).to({rotation:5.7,x:8.9,y:-19.7},4).to({rotation:4.5,x:8.4},4).wait(5).to({rotation:0,x:6.8,y:-19},5).wait(25).to({rotation:-8.1,x:4.1,y:-16.8},2).to({rotation:0,x:6.8,y:-23.7},2,cjs.Ease.get(-0.99)).to({rotation:-0.6,x:5.8,y:-18.2},2,cjs.Ease.get(1)).to({rotation:0,x:6.8,y:-23.7},2,cjs.Ease.get(-0.99)).to({y:-19},2,cjs.Ease.get(1)).wait(8).to({rotation:-8,x:4.8,y:-18.7},6).to({rotation:0,x:6.8,y:-19},6).wait(1).to({rotation:-19.5,x:3.2,y:-17.5},4).to({rotation:-1.8,x:6.4,y:-19},3).to({rotation:-0.9,x:6.7,y:-19.2},1).to({rotation:3,x:7.5,y:-19.3},4).to({rotation:0.6,x:7,y:-19.2},4).to({rotation:5.1,x:7.9,y:-19.3},4).to({rotation:2.4,x:7.2},3).to({rotation:1.4,x:7,y:-19},4).to({rotation:0,x:6.8},5).wait(1).to({rotation:-5.8,x:5.7,y:-19.1},4).wait(11).to({rotation:0,x:6.8,y:-19},4).wait(1).to({rotation:20.7,x:2.9,y:-21.8},4).to({rotation:-15.6,x:7.8,y:-17.8},4).to({rotation:-13.8,x:8.1,y:-18.2},3).wait(7).to({rotation:0,x:6.8,y:-19},4).wait(1).to({rotation:2.5,x:7.6},0).wait(1).to({rotation:3.5,x:7.9},0).wait(7).to({rotation:0,x:6.8},5).wait(1).to({rotation:-11,x:3.4,y:-17.8},4,cjs.Ease.get(1)).to({rotation:0,x:6.8,y:-19},5,cjs.Ease.get(1)).wait(41).to({rotation:-9.2,x:4,y:-18},3,cjs.Ease.get(1)).to({scaleY:1.02,rotation:14.7,x:3.6,y:-23.5},4).to({scaleX:1,scaleY:1.05,rotation:-15.3,x:-2.8,y:-22.4},4).to({rotation:-9.8,y:-23},2).wait(2).to({rotation:-4.1},10).to({rotation:-9.8},11).wait(1).to({rotation:-4.3},7).to({rotation:-9.8},9).wait(1).to({rotation:-4.3},9).to({rotation:-9.8},9).wait(20).to({rotation:-20.3,x:-2.1,y:-23.1},5).to({rotation:3,x:-3.8,y:-22.7},4).to({rotation:4.1,x:-3.7},5).to({rotation:-9.8,x:-2.8,y:-23},5).wait(1).to({rotation:-20.3,x:-2.1,y:-23.1},5).to({rotation:3,x:-3.8,y:-22.7},4).to({rotation:4.1,x:-3.7},5).to({rotation:-9.8,x:-2.8,y:-23},5).wait(1).to({rotation:-4.3},7).wait(4).to({rotation:-9.8},8).wait(1).to({rotation:-4.3},7).wait(4).to({rotation:-9.8},8).wait(1).to({rotation:2.5},4).to({rotation:-13.5},5,cjs.Ease.get(-0.99)).to({rotation:-9.8},3).wait(13).to({scaleX:1,scaleY:1.05,rotation:30.8,x:-2.4,y:-23.9},3).to({scaleX:1,scaleY:1.05,rotation:55.5,x:-2.2,y:-22.1},3).to({rotation:52,x:-1.8,y:-21.9},3).wait(13).to({rotation:-9.8,x:-2.8,y:-23},5).wait(1).to({rotation:-9.8},0).wait(38).to({rotation:-3.8,x:-2.9,y:-23.2},6).to({rotation:-9.8,x:-2.8,y:-23},6).wait(1).to({rotation:-4.3},7).wait(4).to({rotation:-9.8},8).wait(1).to({rotation:-4.3},7).wait(4).to({rotation:-9.8},8).wait(1).to({rotation:2.2},2).to({rotation:-2.3},3).wait(7).to({rotation:-2.3},0).to({rotation:-9.8},3).wait(1).to({rotation:-15.5},4).to({rotation:4.8},4).to({rotation:-8.3},4).to({rotation:1},4).to({rotation:-14.5},4).to({rotation:-0.5},3).to({rotation:4.8},4).to({rotation:-9.8},5).wait(1).to({rotation:-9.8},0).to({rotation:-17.8},4).to({rotation:-15.6},4).wait(7).to({rotation:-9.8},4).wait(34).to({x:-2.9},4).to({x:-2.8},3).wait(26).to({_off:true},5).wait(8).to({scaleX:1,scaleY:1,rotation:0,x:5.4,y:-15.5,_off:false},0).wait(9).to({rotation:-5.2,x:4.1,y:-15.2},8).to({rotation:0,x:5.4,y:-15.5},8).to({_off:true},31).wait(302));

	// ★leg_L_front
	this.leg_L_front = new lib.leg_L_front_4();
	this.leg_L_front.setTransform(7.1,-29);
	this.leg_L_front._off = true;

	this.timeline.addTween(cjs.Tween.get(this.leg_L_front).wait(1).to({_off:false},0).wait(9).to({rotation:8.5,x:6.5,y:-28.6},8).to({rotation:0,x:7.1,y:-28.9},8).wait(37).to({rotation:36.5,x:10.2,y:-26.1},3).to({rotation:-57.8,x:5.3,y:-42.4},5).to({rotation:-39.3,x:3.3,y:-31.1},4).to({rotation:-61,y:-32.6},3).wait(3).to({rotation:0,x:7.1,y:-28.9},5).wait(3).to({rotation:20.2,x:7.2,y:-27},4).to({rotation:-5.5,x:2.9,y:-27.7},5).to({rotation:-5.5},3).to({rotation:0,x:7.1,y:-28.9},5).wait(1).to({rotation:20.2,x:7.2,y:-27},4).to({rotation:-5.5,x:2.9,y:-27.7},5).to({rotation:-5.5},3).to({rotation:0,x:7.1,y:-28.9},5).wait(21).to({rotation:3,x:7.4,y:-28.3},7).wait(4).to({rotation:0,x:7.1,y:-28.9},8).wait(21).to({rotation:3,x:7.4,y:-28.3},7).wait(4).to({rotation:0,x:7.1,y:-28.9},8).wait(17).to({rotation:37.5,x:7.2,y:-23.6},4).to({rotation:-40.4,x:6.9,y:-31.8},5,cjs.Ease.get(-0.99)).to({rotation:-35.2,x:7.3,y:-30.6},4,cjs.Ease.get(1)).wait(6).to({rotation:0,x:7.1,y:-28.9},4).wait(1).to({rotation:10.2,x:10.5,y:-35.5},5).to({rotation:11.4,x:11.1,y:-29.4},4).to({rotation:10.2,x:10.5,y:-29.5},4).wait(5).to({rotation:0,x:7.1,y:-28.9},5).wait(25).to({rotation:11.5,x:6.7,y:-26.2},2).to({rotation:0,x:7.1,y:-33.7},2,cjs.Ease.get(-0.99)).to({rotation:5.7,x:7.4,y:-27.7},2,cjs.Ease.get(1)).to({rotation:0,x:7.1,y:-33.7},2,cjs.Ease.get(-0.99)).to({y:-28.9},2,cjs.Ease.get(1)).wait(8).to({rotation:8.3,x:6.7,y:-28.4},6).to({rotation:0,x:7.1,y:-28.9},6).wait(1).to({rotation:15.9,x:6.1,y:-27.2},4).to({rotation:-1.8,x:6.4,y:-28.9},3).to({rotation:-2.8,y:-29.1},1).to({rotation:0.2,x:7.7,y:-29.2},4).to({rotation:-7.1,x:5.9,y:-29},4).to({rotation:5.3,x:8.8,y:-29.1},4).to({rotation:-0.5,x:7.4,y:-29.2},3).to({rotation:-1.5,x:7,y:-29},4).to({rotation:0,x:7.1,y:-28.9},5).wait(1).to({rotation:10.4,x:7.8},4).wait(11).to({rotation:0,x:7.1},4).wait(1).to({rotation:20.7,x:6.6,y:-31.1},4).to({rotation:-6.6,x:7,y:-27},4).to({rotation:-7.8,y:-28.2},3).wait(7).to({rotation:0,x:7.1,y:-28.9},4).wait(1).to({rotation:2.5,x:8.3},0).wait(1).to({rotation:3.5,x:8.8},0).wait(7).to({rotation:0,x:7.1},5).wait(1).to({rotation:14,x:5.9,y:-27.8},4,cjs.Ease.get(1)).to({rotation:0,x:7.1,y:-28.9},5,cjs.Ease.get(1)).wait(41).to({rotation:12.3,x:6.4,y:-27.7},3,cjs.Ease.get(1)).to({scaleX:1,scaleY:1.03,rotation:19.3,x:7.1,y:-32},4).to({scaleY:1.1,rotation:58.2,x:6.9,y:-28.3},4).to({y:-28.9},2).wait(79).to({rotation:58.5,x:7.7,y:-28.8},5).to({rotation:58.2,x:5.9,y:-28.6},4).to({x:6},5).to({x:6.9,y:-28.9},5).wait(1).to({rotation:58.5,x:7.7,y:-28.8},5).to({rotation:58.2,x:5.9,y:-28.6},4).to({x:6},5).to({x:6.9,y:-28.9},5).wait(66).to({scaleX:1,scaleY:1.1,x:7.3,y:-29.8},3).to({scaleX:1,scaleY:1.1,x:7.5,y:-28},3).to({rotation:54.8,y:-28.4},3).wait(13).to({rotation:58.2,x:6.9,y:-28.9},5).wait(39).to({rotation:59},6).to({rotation:58.2},6).wait(90).to({rotation:55.7,y:-29.3},4).to({rotation:58.2,y:-28.9},4).wait(45).to({scaleX:1,scaleY:1.1},4).to({scaleX:1,scaleY:1.1},3).wait(26).to({_off:true},5).wait(8).to({scaleX:1,scaleY:1,rotation:0,x:5.5,y:-24.1,_off:false},0).wait(9).to({rotation:4.9,x:5.3,y:-23.3},8).to({rotation:0,x:5.5,y:-24.1},8).to({_off:true},31).wait(302));

	// △breast_L
	this.instance_13 = new lib.breast_L_1();
	this.instance_13.setTransform(-4.8,-58.5);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1).to({_off:false},0).wait(9).to({scaleY:1.01,x:-4.8,y:-56.2},8).to({scaleY:1,x:-4.7,y:-58.4},8).wait(2).to({rotation:-1.5,x:-5.5,y:-58.3},7).to({rotation:0,x:-4.7,y:-58.4},9).wait(2).to({rotation:-1.5,x:-5.5,y:-58.3},7).to({rotation:0,x:-4.7,y:-58.4},9).wait(1).to({scaleY:1.01,skewX:-0.5,skewY:-0.7,x:-2.1,y:-54.4},3).to({scaleX:1.04,scaleY:1.01,rotation:-6.9,skewX:0,skewY:0,x:-12.1,y:-68.7},5).to({scaleX:1,scaleY:1.1,rotation:-10.1,x:-15.1,y:-56.4},4).to({scaleY:1,x:-15.3,y:-58.6},3).wait(3).to({rotation:0,x:-4.7,y:-58.4},5).wait(3).to({rotation:-4.9,x:-7.2,y:-55.1},4).to({rotation:5.5,x:-6.1,y:-58.5},5).wait(3).to({rotation:0,x:-4.7,y:-58.4},5).wait(1).to({rotation:-4.9,x:-7.2,y:-55.1},4).to({rotation:5.5,x:-6.1,y:-58.5},5).wait(3).to({rotation:0,x:-4.7,y:-58.4},5).wait(1).to({rotation:-1.5,x:-5.5,y:-58.3},7).wait(4).to({rotation:0,x:-4.7,y:-58.4},8).wait(1).to({rotation:3.5,x:-3,y:-58.6},7).wait(4).to({rotation:0,x:-4.7,y:-58.4},8).wait(1).to({rotation:-1.5,x:-5.5,y:-58.3},7).wait(4).to({rotation:0,x:-4.7,y:-58.4},8).wait(1).to({rotation:3.5,x:-3,y:-58.6},7).wait(4).to({rotation:0,x:-4.7,y:-58.4},8).wait(1).to({rotation:2.7,x:-3.3,y:-59},2,cjs.Ease.get(-0.99)).to({rotation:1.8,x:-3.8,y:-58.9},3,cjs.Ease.get(1)).wait(7).to({rotation:0,x:-4.7,y:-58.4},3).wait(1).to({rotation:-2.3,x:-6,y:-52.5},4).to({rotation:-5.2,x:-7.8,y:-60.2},5,cjs.Ease.get(-0.99)).to({x:-7.4,y:-59},4,cjs.Ease.get(1)).wait(6).to({rotation:0,x:-4.7,y:-58.4},4).wait(1).to({rotation:10.2,x:3.9,y:-66.7},5).to({rotation:11.4,x:5.2,y:-60.7},4).to({rotation:10.2,x:3.9},4).wait(5).to({rotation:0,x:-4.7,y:-58.4},5).wait(25).to({y:-55.9},2).to({y:-63.2},2,cjs.Ease.get(-0.99)).to({y:-57.4},2,cjs.Ease.get(1)).to({y:-63.2},2,cjs.Ease.get(-0.99)).to({y:-58.4},2,cjs.Ease.get(1)).wait(8).to({rotation:-2,x:-5.9,y:-57},6).to({rotation:0,x:-4.7,y:-58.4},6).wait(1).to({rotation:-4.4,x:-8,y:-55.3},4).to({rotation:0.5,x:-4.8,y:-58.6},3).to({rotation:2,x:-4.2,y:-58.3},1).to({rotation:5.9,x:-2.4,y:-59.3},4).to({rotation:-0.3,x:-6.2,y:-58.5},4).to({rotation:-0.3,x:-3.3,y:-58.6},4).to({rotation:2.8,y:-58.7},3).to({rotation:3.7,x:-2.7,y:-58.9},4).to({rotation:0,x:-4.7,y:-58.4},5).wait(1).to({rotation:-2.7,x:-5.5,y:-57.8},4).to({rotation:-1.8,x:-5.1,y:-58.1},4,cjs.Ease.get(1)).wait(7).to({rotation:0,x:-4.7,y:-58.4},4).wait(1).to({rotation:-5.7,x:-8.2,y:-59},4).to({rotation:3.4,x:-3.1,y:-57.2},4).to({rotation:2.2,x:-3.7,y:-58.1},3).wait(7).to({rotation:0,x:-4.7,y:-58.4},4).wait(1).to({rotation:2.5,x:-2.2,y:-58.9},0).wait(1).to({rotation:3.5,x:-1.3,y:-59.1},0).wait(7).to({rotation:0,x:-4.7,y:-58.4},5).wait(1).to({rotation:-1.5,x:-6.7,y:-57.1},4,cjs.Ease.get(1)).to({rotation:1.2,x:-4.2,y:-58.5},5,cjs.Ease.get(1)).to({rotation:-1,x:-5.3,y:-58.4},4,cjs.Ease.get(-0.99)).to({rotation:1.2,x:-4.2,y:-58.5},5,cjs.Ease.get(1)).to({rotation:-1,x:-5.3,y:-58.4},4,cjs.Ease.get(-0.99)).to({rotation:0.4,x:-4.5},5,cjs.Ease.get(1)).to({rotation:0,x:-4.7},3,cjs.Ease.get(-0.99)).wait(20).to({rotation:-1.2,x:-6.2,y:-56.9},3,cjs.Ease.get(1)).to({rotation:0,x:-4.7,y:-61.5},4).to({rotation:1,x:-4.3,y:-57.8},4).to({rotation:0,x:-4.7,y:-58.4},2).wait(2).to({rotation:-1,x:-5.2},10).to({rotation:0,x:-4.7},11).wait(1).to({rotation:-1.5,x:-5.5,y:-58.3},7).to({rotation:0,x:-4.7,y:-58.4},9).wait(1).to({rotation:-1.5,x:-5.5,y:-58.3},9).to({rotation:0,x:-4.7,y:-58.4},9).wait(20).to({rotation:-3.4,x:-6,y:-57.9},5).to({rotation:5.5,x:-2.7,y:-59.3},4).to({rotation:5.1,x:-2.8},5).to({rotation:0,x:-4.7,y:-58.4},5).wait(1).to({rotation:-3.4,x:-6,y:-57.9},5).to({rotation:5.5,x:-2.7,y:-59.3},4).to({rotation:5.1,x:-2.8},5).to({rotation:0,x:-4.7,y:-58.4},5).wait(1).to({rotation:-1.5,x:-5.5,y:-58.3},7).wait(4).to({rotation:0,x:-4.7,y:-58.4},8).wait(1).to({rotation:3.5,x:-3,y:-58.6},7).wait(4).to({rotation:0,x:-4.7,y:-58.4},8).wait(1).to({rotation:-2.5,x:-6,y:-58.3},4).to({rotation:5.6,x:-2.1,y:-58.7},5,cjs.Ease.get(-0.99)).to({rotation:4.7,x:-2.6},3).wait(7).to({rotation:0,x:-4.7,y:-58.4},5).wait(1).to({rotation:3,x:-3.3,y:-59.6},3).to({rotation:5.7,x:-2.1,y:-58},3).to({rotation:4.9,x:-2.4,y:-58.4},3).wait(13).to({rotation:0,x:-4.7},5).wait(21).to({y:-57.8},3).to({y:-58.4},3).to({y:-57.6},3).to({y:-58.4},4).wait(5).to({rotation:-2,x:-5.9,y:-57},6).to({rotation:0,x:-4.7,y:-58.4},6).wait(1).to({rotation:-1.5,x:-5.5,y:-58.3},7).wait(4).to({rotation:0,x:-4.7,y:-58.4},8).wait(1).to({rotation:3.5,x:-3,y:-58.6},7).wait(4).to({rotation:0,x:-4.7,y:-58.4},8).wait(1).to({rotation:2.7,x:-3.3,y:-59},2,cjs.Ease.get(-0.99)).to({rotation:1.8,x:-3.8,y:-58.9},3,cjs.Ease.get(1)).wait(7).to({rotation:0,x:-4.7,y:-58.4},3).wait(1).to({rotation:-4.4,x:-7.4,y:-57.5},4).to({rotation:0.5,x:-4.8,y:-58.6},3).to({rotation:2,x:-4.2,y:-58.3},1).to({rotation:5.9,x:-3.4,y:-59.3},4).to({rotation:-0.3,x:-5.6,y:-58.5},4).to({rotation:-0.3,x:-4.3,y:-58.6},4).to({rotation:2.8,x:-3.3,y:-58.7},3).to({rotation:3.7,x:-2.7,y:-58.9},4).to({rotation:0,x:-4.7,y:-58.4},5).wait(1).to({rotation:-2.7,x:-5.5,y:-57.8},4).to({rotation:-1.8,x:-5.1,y:-58.1},4,cjs.Ease.get(1)).wait(7).to({rotation:0,x:-4.7,y:-58.4},4).wait(34).to({rotation:-3.2,x:-6.3,y:-58.1},4).to({rotation:1.5,x:-4,y:-58.4},3).to({rotation:-0.8,x:-5.2},4).to({rotation:0.2,x:-4.6},4).wait(14).to({rotation:0.2},0).to({rotation:0,x:-4.7},4).to({_off:true},5).wait(366));

	// ☆hair_middle_R
	this.instance_14 = new lib.hair_middle_R_3();
	this.instance_14.setTransform(-18.5,-78.3);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1).to({_off:false},0).wait(9).to({rotation:-1.8,y:-77},8).to({rotation:0,y:-78.2},8).wait(2).to({rotation:-4.5,x:-20.1,y:-76.9},7).to({rotation:0,x:-18.4,y:-78.2},9).wait(2).to({rotation:-4.5,x:-20.1,y:-76.9},7).to({rotation:0,x:-18.4,y:-78.2},9).wait(1).to({rotation:-4.5,x:-16.5,y:-72},3).to({rotation:45.7,x:-27,y:-89.6},5).to({rotation:-14.3,x:-26.4,y:-76.9},4).to({rotation:5.8,x:-24.6,y:-75.4},3).to({rotation:5.8},3).to({rotation:0,x:-18.4,y:-78.2},5).wait(3).to({rotation:-4.9,x:-22.6,y:-73.5},4).to({rotation:0,x:-18.4,y:-78.2},5).wait(9).to({rotation:-4.9,x:-22.6,y:-73.5},4).to({rotation:0,x:-18.4,y:-78.2},5).wait(9).to({rotation:-7.4,x:-20.3,y:-76},7).wait(4).to({rotation:0,x:-18.4,y:-78.2},8).wait(1).to({rotation:10.6,x:-15.6,y:-80.9},7).wait(4).to({rotation:0,x:-18.4,y:-78.2},8).wait(1).to({rotation:-7.4,x:-20.3,y:-76},7).wait(4).to({rotation:0,x:-18.4,y:-78.2},8).wait(1).to({rotation:10.6,x:-15.6,y:-80.9},7).wait(4).to({rotation:0,x:-18.4,y:-78.2},8).wait(1).to({rotation:3.7,x:-16,y:-79.7},2,cjs.Ease.get(-0.99)).to({rotation:1.8,x:-16.9,y:-79.1},3,cjs.Ease.get(1)).wait(7).to({rotation:0,x:-18.4,y:-78.2},3).wait(1).to({rotation:-1,x:-20.6,y:-71.7},4).to({rotation:-5.2,x:-23.3,y:-78.6},5,cjs.Ease.get(-0.99)).to({rotation:-5.2,x:-22.9,y:-77.4},4,cjs.Ease.get(1)).wait(6).to({rotation:0,x:-18.4,y:-78.2},4).wait(1).to({rotation:10.2,x:-5.9,y:-88.6},5).to({rotation:11.4,x:-4.2,y:-82.9},4).to({rotation:10.2,x:-5.9,y:-82.6},4).wait(5).to({rotation:0,x:-18.4,y:-78.2},5).wait(25).to({y:-75.7},2).to({y:-83},2,cjs.Ease.get(-0.99)).to({y:-77.2},2,cjs.Ease.get(1)).to({y:-83},2,cjs.Ease.get(-0.99)).to({y:-78.2},2,cjs.Ease.get(1)).wait(8).to({rotation:-5.1,x:-20.6,y:-75.4},6).to({rotation:0,x:-18.4,y:-78.2},6).wait(1).to({rotation:10,x:-19.9,y:-75.2},4).to({rotation:26.5,x:-14.9,y:-78.2},3).to({rotation:24,x:-15.2},1).to({rotation:-18.3,x:-13.7,y:-79.8},4).to({rotation:-5.5,x:-17,y:-77.8},4).to({rotation:2.7,x:-14.1,y:-79.2},4).to({rotation:0,x:-13.9,y:-79.6},3).to({rotation:5,y:-79.8},4).to({rotation:0,x:-18.4,y:-78.2},5).wait(1).to({rotation:-4.9,x:-20.3,y:-76.5},4).to({rotation:-3,x:-19.5,y:-77},4,cjs.Ease.get(1)).wait(7).to({rotation:0,x:-18.4,y:-78.2},4).wait(1).to({rotation:-5.7,x:-23.9,y:-77.3},4).to({rotation:5.4,x:-15.7,y:-77.8},4).to({rotation:2.2,x:-16.6,y:-78.5},3).wait(7).to({rotation:0,x:-18.4,y:-78.2},4).wait(1).to({rotation:2.5,x:-15,y:-79.3},0).wait(1).to({rotation:3.5,x:-13.7,y:-79.7},0).wait(7).to({rotation:0,x:-18.4,y:-78.2},5).wait(1).to({rotation:-1.5,x:-21,y:-76.5},4,cjs.Ease.get(1)).to({rotation:1.2,x:-17.5,y:-78.6},5,cjs.Ease.get(1)).to({rotation:-1,x:-19.5,y:-77.9},4,cjs.Ease.get(-0.99)).to({rotation:1.2,x:-17.5,y:-78.6},5,cjs.Ease.get(1)).to({rotation:-1,x:-19.5,y:-77.9},4,cjs.Ease.get(-0.99)).to({rotation:0,x:-18.4,y:-78.2},5,cjs.Ease.get(1)).wait(23).to({rotation:-1.2,x:-20.4,y:-76.3},3,cjs.Ease.get(1)).to({rotation:0,x:-18.4,y:-81.3},4).to({rotation:1,x:-17.6,y:-77.8},4).to({rotation:0,x:-18.4,y:-78.2},2).wait(2).to({rotation:-1,x:-19.3,y:-76.9},10).to({rotation:0,x:-18.4,y:-78.2},11).wait(1).to({rotation:-4.5,x:-20.1,y:-76.9},7).to({rotation:0,x:-18.4,y:-78.2},9).wait(1).to({rotation:-4.5,x:-20.1,y:-76.9},9).to({rotation:0,x:-18.4,y:-78.2},9).wait(20).to({rotation:-3.4,x:-21,y:-76.8},5).to({rotation:0,x:-15,y:-79},4).to({rotation:-0.2,x:-15.3},5).to({rotation:0,x:-18.4,y:-78.2},5).wait(1).to({rotation:-3.4,x:-21,y:-76.8},5).to({rotation:0,x:-15,y:-79},4).to({rotation:-0.2,x:-15.3},5).to({rotation:0,x:-18.4,y:-78.2},5).wait(1).to({rotation:-7.4,x:-20.3,y:-76},7).wait(4).to({rotation:0,x:-18.4,y:-78.2},8).wait(1).to({rotation:10.6,x:-15.6,y:-80.9},7).wait(4).to({rotation:0,x:-18.4,y:-78.2},8).wait(1).to({rotation:-2.5,x:-20.7,y:-76.9},4).to({rotation:8.6,x:-13.5,y:-80.4},5,cjs.Ease.get(-0.99)).to({rotation:7.7,x:-14.3,y:-80.2},3).wait(7).to({rotation:0,x:-18.4,y:-78.2},5).wait(1).to({rotation:3,x:-15.9,y:-80.1},3).to({rotation:5.7,x:-13.7,y:-79},3).to({rotation:4.9,x:-14.3,y:-79.3},3).wait(13).to({rotation:0,x:-18.4,y:-78.2},5).wait(21).to({rotation:2.2},3).to({rotation:0},3).to({rotation:1.7,y:-77.4},3).to({rotation:0,y:-78.2},4).wait(5).to({rotation:-5.1,x:-20.6,y:-75.4},6).to({rotation:0,x:-18.4,y:-78.2},6).wait(1).to({rotation:-7.4,x:-20.3,y:-76},7).wait(4).to({rotation:0,x:-18.4,y:-78.2},8).wait(1).to({rotation:10.6,x:-15.6,y:-80.9},7).wait(4).to({rotation:0,x:-18.4,y:-78.2},8).wait(1).to({rotation:3.7,x:-16,y:-79.7},2,cjs.Ease.get(-0.99)).to({rotation:1.8,x:-16.9,y:-79.1},3,cjs.Ease.get(1)).wait(7).to({rotation:0,x:-18.4,y:-78.2},3).wait(1).to({rotation:10,x:-19.9,y:-76},4).to({rotation:26.5,x:-14.9,y:-78.2},3).to({rotation:24,x:-15.2},1).to({rotation:-18.3,x:-14.7,y:-79.8},4).to({rotation:-5.5,x:-16.4,y:-77.8},4).to({rotation:2.7,x:-15.1,y:-79.2},4).to({rotation:0,x:-13.5},3).to({rotation:5,x:-13.9,y:-79.8},4).to({rotation:0,x:-18.4,y:-78.2},5).wait(1).to({rotation:-4.9,x:-20.3,y:-76.5},4).to({rotation:-3,x:-19.5,y:-77},4,cjs.Ease.get(1)).wait(7).to({rotation:0,x:-18.4,y:-78.2},4).wait(34).to({rotation:-3.2,x:-21.2,y:-77},4).to({rotation:1.5,x:-17.2,y:-78.5},3).to({rotation:-0.8,x:-19.2,y:-78},4).to({rotation:0.2,x:-18.2,y:-78.3},4).wait(14).to({rotation:0.2},0).to({rotation:0,x:-18.4,y:-78.2},4).to({_off:true},5).wait(8).to({x:-17.8,y:-78.8,_off:false},0).wait(9).to({rotation:-2.8,y:-76.8},8).to({rotation:0,y:-78.8},8).to({_off:true},31).wait(302));

	// body
	this.body = new lib.body_4();
	this.body.setTransform(-1.4,-57.9);
	this.body._off = true;

	this.timeline.addTween(cjs.Tween.get(this.body).wait(1).to({_off:false},0).wait(9).to({y:-56.3},8).to({y:-57.8},8).wait(2).to({rotation:-1.5,x:-2.1},7).to({rotation:0,x:-1.3},9).wait(2).to({rotation:-1.5,x:-2.1},7).to({rotation:0,x:-1.3},9).wait(1).to({scaleY:0.97,skewX:-0.5,skewY:-0.7,x:1.1,y:-54.2},3).to({scaleY:1,rotation:-10.4,skewX:0,skewY:0,x:-8,y:-68.9},5).to({rotation:0,skewX:-13.5,skewY:-13.6,x:-11.8,y:-57.3},4).to({rotation:-13.6,skewX:0,skewY:0,y:-58.8},3).wait(3).to({rotation:0,x:-1.3,y:-57.8},5).wait(3).to({rotation:-4.9,x:-3.7,y:-54.8},4).to({rotation:5.5,x:-2.8,y:-57.5},5).wait(3).to({rotation:0,x:-1.3,y:-57.8},5).wait(1).to({rotation:-4.9,x:-3.7,y:-54.8},4).to({rotation:5.5,x:-2.8,y:-57.5},5).wait(3).to({rotation:0,x:-1.3,y:-57.8},5).wait(1).to({rotation:-1.5,x:-2.1},7).wait(4).to({rotation:0,x:-1.3},8).wait(1).to({rotation:3.5,x:0.4},7).wait(4).to({rotation:0,x:-1.3},8).wait(1).to({rotation:-1.5,x:-2.1},7).wait(4).to({rotation:0,x:-1.3},8).wait(1).to({rotation:3.5,x:0.4},7).wait(4).to({rotation:0,x:-1.3},8).wait(1).to({rotation:2.7,x:0,y:-58.2},2,cjs.Ease.get(-0.99)).to({rotation:1.8,x:-0.4,y:-58.1},3,cjs.Ease.get(1)).wait(7).to({rotation:0,x:-1.3,y:-57.8},3).wait(1).to({rotation:-2.3,x:-2.6,y:-52.1},4).to({rotation:-5.2,x:-4.3,y:-59.9},5,cjs.Ease.get(-0.99)).to({x:-3.9,y:-58.7},4,cjs.Ease.get(1)).wait(6).to({rotation:0,x:-1.3,y:-57.8},4).wait(1).to({rotation:10.2,x:7.1,y:-65.4},5).to({rotation:11.4,x:8.4,y:-59.4},4).to({rotation:10.2,x:7.1},4).wait(5).to({rotation:0,x:-1.3,y:-57.8},5).wait(25).to({y:-55.3},2).to({y:-62.6},2,cjs.Ease.get(-0.99)).to({y:-56.8},2,cjs.Ease.get(1)).to({y:-62.6},2,cjs.Ease.get(-0.99)).to({y:-57.8},2,cjs.Ease.get(1)).wait(8).to({rotation:-2,x:-2.4,y:-56.5},6).to({rotation:0,x:-1.3,y:-57.8},6).wait(1).to({rotation:-4.4,x:-4.5,y:-54.9},4).to({rotation:0.5,x:-1.4,y:-58},3).to({rotation:2,x:-0.8,y:-57.6},1).to({rotation:3.7,x:1.1,y:-58.4},4).to({rotation:-0.3,x:-2.7,y:-57.9},4).to({rotation:-0.3,x:0,y:-58.2},4).to({rotation:2.8,y:-58},3).to({rotation:3.7,x:0.5,y:-58.2},4).to({rotation:0,x:-1.3,y:-57.8},5).wait(1).to({rotation:-2.7,x:-2.1,y:-57.4},4).to({rotation:-1.8,x:-1.6,y:-57.6},4,cjs.Ease.get(1)).wait(7).to({rotation:0,x:-1.3,y:-57.8},4).wait(1).to({rotation:-5.7,x:-4.7,y:-58.8},4).to({rotation:3.4,x:0.1,y:-56.3},4).to({rotation:2.2,x:-0.3,y:-57.4},3).wait(7).to({rotation:0,x:-1.3,y:-57.8},4).wait(1).to({rotation:2.5,x:1,y:-58.2},0).wait(1).to({rotation:3.5,x:1.9,y:-58.3},0).wait(7).to({rotation:0,x:-1.3,y:-57.8},5).wait(1).to({rotation:-1.5,x:-3.3,y:-56.6},4,cjs.Ease.get(1)).to({rotation:1.2,x:-0.8,y:-57.8},5,cjs.Ease.get(1)).to({rotation:-1,x:-1.9},4,cjs.Ease.get(-0.99)).to({rotation:1.2,x:-0.8},5,cjs.Ease.get(1)).to({rotation:-1,x:-1.9},4,cjs.Ease.get(-0.99)).to({rotation:0.4,x:-1.1},5,cjs.Ease.get(1)).to({rotation:0,x:-1.3},3,cjs.Ease.get(-0.99)).wait(20).to({rotation:-1.2,x:-2.8,y:-56.4},3,cjs.Ease.get(1)).to({rotation:0,x:-1.3,y:-60.9},4).to({rotation:1,x:-0.9,y:-57.2},4).to({rotation:0,x:-1.3,y:-57.8},2).wait(2).to({rotation:-1,x:-1.8,y:-57.5},10).to({rotation:0,x:-1.3,y:-57.8},11).wait(1).to({rotation:-1.5,x:-2.1},7).to({rotation:0,x:-1.3},9).wait(1).to({rotation:-1.5,x:-2.1},9).to({rotation:0,x:-1.3},9).wait(20).to({rotation:-3.4,x:-2.5,y:-57.5},5).to({rotation:5.5,x:0.5,y:-58.3},4).to({rotation:5.1,x:0.4,y:-58.4},5).to({rotation:0,x:-1.3,y:-57.8},5).wait(1).to({rotation:-3.4,x:-2.5,y:-57.5},5).to({rotation:5.5,x:0.5,y:-58.3},4).to({rotation:5.1,x:0.4,y:-58.4},5).to({rotation:0,x:-1.3,y:-57.8},5).wait(1).to({rotation:-1.5,x:-2.1},7).wait(4).to({rotation:0,x:-1.3},8).wait(1).to({rotation:3.5,x:0.4},7).wait(4).to({rotation:0,x:-1.3},8).wait(1).to({rotation:-2.5,x:-2.6,y:-57.9},4).to({rotation:5.6,x:1,y:-57.7},5,cjs.Ease.get(-0.99)).to({rotation:4.7,x:0.6},3).wait(7).to({rotation:0,x:-1.3,y:-57.8},5).wait(1).to({rotation:3,x:0,y:-58.8},3).to({rotation:5.7,x:1.1,y:-57.1},3).to({rotation:4.9,x:0.8,y:-57.5},3).wait(13).to({rotation:0,x:-1.3,y:-57.8},5).wait(21).to({y:-57.2},3).to({y:-57.8},3).to({y:-57},3).to({y:-57.8},4).wait(5).to({rotation:-2,x:-2.4,y:-56.5},6).to({rotation:0,x:-1.3,y:-57.8},6).wait(1).to({rotation:-1.5,x:-2.1},7).wait(4).to({rotation:0,x:-1.3},8).wait(1).to({rotation:3.5,x:0.4},7).wait(4).to({rotation:0,x:-1.3},8).wait(1).to({rotation:2.7,x:0,y:-58.2},2,cjs.Ease.get(-0.99)).to({rotation:1.8,x:-0.4,y:-58.1},3,cjs.Ease.get(1)).wait(7).to({rotation:0,x:-1.3,y:-57.8},3).wait(1).to({rotation:-4.4,x:-3.9,y:-57.1},4).to({rotation:0.5,x:-1.4,y:-58},3).to({rotation:2,x:-0.8,y:-57.6},1).to({rotation:3.7,x:0.1,y:-58.4},4).to({rotation:-0.3,x:-2.1,y:-57.9},4).to({rotation:-0.3,x:-0.8,y:-58.2},4).to({rotation:2.8,x:0,y:-58},3).to({rotation:3.7,x:0.5,y:-58.2},4).to({rotation:0,x:-1.3,y:-57.8},5).wait(1).to({rotation:-2.7,x:-2.1,y:-57.4},4).to({rotation:-1.8,x:-1.6,y:-57.6},4,cjs.Ease.get(1)).wait(7).to({rotation:0,x:-1.3,y:-57.8},4).wait(34).to({rotation:-3.2,x:-2.9,y:-57.7},4).to({rotation:1.5,x:-0.6},3).to({rotation:-0.8,x:-1.8,y:-57.9},4).to({rotation:0.2,x:-1.2},4).wait(14).to({rotation:0.2},0).to({rotation:0,x:-1.3,y:-57.8},4).to({_off:true},5).wait(8).to({_off:false},0).wait(9).to({y:-56.5},8).to({y:-57.8},8).to({_off:true},31).wait(302));

	// hand_R
	this.instance_15 = new lib.hand_R_2("single",1);
	this.instance_15.setTransform(-17.5,-47.3);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1).to({startPosition:1,_off:false},0).wait(9).to({startPosition:1},0).to({rotation:5.6,x:-18.8,y:-46.1},8).to({rotation:0,x:-17.4,y:-47.2},8).wait(2).to({startPosition:1},0).to({rotation:-1.5,x:-17.9,y:-46.7},7).to({rotation:0,x:-17.4,y:-47.2},9).wait(2).to({startPosition:1},0).to({rotation:20.2,x:-24,y:-49.6},7).to({rotation:0,x:-17.4,y:-47.2},9).wait(1).to({mode:"independent"},0).to({scaleX:0.99,scaleY:0.98,skewX:130.6,skewY:132.3,x:-14.7,y:-43.6},3).to({skewX:125.1,skewY:126.8,x:-20.9,y:-47.5},2).to({_off:true},1).wait(17).to({scaleX:1,scaleY:1,skewX:0,skewY:0,x:-17.4,y:-47.2,mode:"single",startPosition:1,_off:false},0).wait(3).to({startPosition:1},0).to({rotation:91.6,x:-16.2,y:-42.9},4).to({scaleX:1,scaleY:1,rotation:80.5,x:-23.9,y:-47.4},2).to({rotation:75,x:-26.5,y:-50.8},1).to({scaleX:1,scaleY:1,rotation:63.9,x:-28.8,y:-59.9},2).to({startPosition:1},3).to({rotation:0,x:-17.4,y:-47.2},5).wait(1).to({startPosition:1},0).to({rotation:91.6,x:-16.2,y:-42.9},4).to({scaleX:1,scaleY:1,rotation:75,x:-26.5,y:-50.7},3).to({scaleX:1,scaleY:1,rotation:63.9,x:-28.8,y:-59.9},2).to({startPosition:1},3).to({rotation:0,x:-17.4,y:-47.2},5).wait(1).to({startPosition:1},0).to({rotation:-1.5,x:-17.9,y:-46.7},7).wait(4).to({startPosition:1},0).to({rotation:0,x:-17.4,y:-47.2},8).wait(1).to({startPosition:1},0).to({rotation:3.5,x:-16.2,y:-48.2},7).wait(4).to({startPosition:1},0).to({rotation:0,x:-17.4,y:-47.2},8).wait(1).to({startPosition:1},0).to({rotation:-1.5,x:-17.9,y:-46.7},7).wait(4).to({startPosition:1},0).to({rotation:0,x:-17.4,y:-47.2},8).wait(1).to({startPosition:1},0).to({rotation:3.5,x:-16.2,y:-48.2},7).wait(4).to({startPosition:1},0).to({rotation:0,x:-17.4,y:-47.2},8).wait(1).to({startPosition:1},0).to({rotation:15.6,x:-20,y:-50.2},2,cjs.Ease.get(-0.99)).to({rotation:13.4,y:-49.5},3,cjs.Ease.get(1)).wait(7).to({startPosition:1},0).to({rotation:0,x:-17.4,y:-47.2},3).wait(1).to({startPosition:1},0).to({rotation:84.7,x:-25.9,y:-45.3},4).to({rotation:87.2,x:-28.9,y:-49.9},2,cjs.Ease.get(-0.99)).to({rotation:93.8,x:-31.6,y:-68.6},2,cjs.Ease.get(-0.99)).to({rotation:104.8,x:-31.1,y:-74.2},1).to({x:-29.5,y:-72.2},4,cjs.Ease.get(1)).wait(6).to({startPosition:1},0).to({scaleX:1,scaleY:1,rotation:52.4,x:-29.4,y:-57.4},2).to({scaleX:1,scaleY:1,rotation:0,x:-17.4,y:-47.2},2).wait(1).to({startPosition:1},0).to({scaleX:1,scaleY:1,rotation:44.9,x:-23,y:-58.7},2).to({scaleX:1,scaleY:1,rotation:89.7,x:-21.3,y:-74.8},2).to({scaleX:1,scaleY:1,rotation:112,x:-16.1,y:-81.8},1).to({rotation:113.2,x:-14.4,y:-76.3},4).to({rotation:112,x:-16.1,y:-75.8},4).wait(5).to({startPosition:1},0).to({scaleX:1,scaleY:1,rotation:67.2,x:-23.2,y:-62.9},2).to({scaleX:1,scaleY:1,rotation:0,x:-17.4,y:-47.2},3).wait(1).to({startPosition:1},0).wait(23).to({startPosition:1},0).wait(1).to({rotation:120.3,x:-24.4,y:-74.2},0).to({y:-71.7},2).to({y:-78.9},2,cjs.Ease.get(-0.99)).to({y:-73.2},2,cjs.Ease.get(1)).to({y:-78.9},2,cjs.Ease.get(-0.99)).to({y:-74.2},2,cjs.Ease.get(1)).to({startPosition:1},2).to({scaleX:1,scaleY:1,rotation:60.2,x:-28.6,y:-58.9},2).to({scaleX:1,scaleY:1,rotation:0,x:-17.4,y:-47.2},2).wait(2).to({startPosition:1},0).to({rotation:1.2,x:-18.1,y:-45.2},6).to({rotation:0,x:-17.4,y:-47.2},6).wait(1).to({startPosition:1},0).to({rotation:2.4,x:-20.2,y:-44.6},4).to({rotation:46.5,x:-24.8,y:-53.8},3).to({_off:true},1).wait(20).to({rotation:0,skewX:146,skewY:-33.8,x:-23.1,y:-53.5,_off:false},0).to({scaleX:1,scaleY:1,skewX:124.1,skewY:-55.7,x:-20.8,y:-50.2},2).to({skewX:50.1,skewY:-129.7,x:-19.3,y:-48.2},1).to({scaleX:1,scaleY:1,skewX:0,skewY:0,x:-17.4,y:-47.2},1).to({_off:true},1).wait(19).wait(1).to({startPosition:1,_off:false},0).to({rotation:9.8,x:-24.2,y:-48.3},4,cjs.Ease.get(1)).to({rotation:3.4,x:-16.4,y:-46.7},4).to({rotation:2.2,x:-16.8,y:-47.4},3).wait(7).to({startPosition:1},0).to({rotation:0,x:-17.4,y:-47.2},4).wait(1).to({rotation:13.5,x:-18.3,y:-49.6},0).wait(1).to({rotation:67.1,x:-25.1,y:-63.2},0).wait(1).to({rotation:22.2,x:-19.3,y:-51.8},0).wait(1).to({rotation:62.1,x:-25,y:-61.8},0).wait(1).to({rotation:22.2,x:-19.3,y:-51.8},0).wait(1).to({rotation:71.6,x:-25.3,y:-64.6},0).wait(3).to({startPosition:1},0).to({rotation:0,x:-17.4,y:-47.2},5).wait(1).to({startPosition:1},0).to({scaleX:1,scaleY:1,rotation:32,x:-26.2,y:-51.3},4,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:136.7,x:-20.8,y:-78.3},5,cjs.Ease.get(1)).to({rotation:119.8,x:-26.2,y:-74.7},4,cjs.Ease.get(-0.99)).to({rotation:136.7,x:-20.8,y:-78.3},5,cjs.Ease.get(1)).to({rotation:119.8,x:-26.2,y:-74.7},4,cjs.Ease.get(-0.99)).to({rotation:135.9,x:-22,y:-78.1},5,cjs.Ease.get(1)).to({rotation:133.5,x:-22.6,y:-77.4},3,cjs.Ease.get(-0.99)).to({rotation:90.3,x:-28,y:-67.8},3).to({scaleX:1,scaleY:1,rotation:67.7,x:-29.1,y:-61.2},1).to({scaleX:1,scaleY:1,rotation:0,x:-17.4,y:-47.2},3).wait(4).to({startPosition:1},0).wait(9).to({startPosition:1},0).to({rotation:5.5,x:-20.5,y:-46},3,cjs.Ease.get(1)).to({rotation:-7,x:-15.3,y:-49.7},4).to({rotation:1,x:-17.1,y:-46.8},4).to({rotation:0,x:-17.4,y:-47.2},2).wait(2).to({startPosition:1},0).to({rotation:-1,x:-17.9,y:-46.6},10).to({rotation:0,x:-17.4,y:-47.2},11).wait(1).to({startPosition:1},0).to({rotation:0.5,x:-17.6},7).to({rotation:0,x:-17.4},9).wait(1).to({startPosition:1},0).to({rotation:0.5,x:-17.6},9).to({rotation:0,x:-17.4},9).wait(20).to({startPosition:1},0).to({rotation:93.1,x:-15.4,y:-46},5).to({scaleX:1,scaleY:1,rotation:78.5,x:-23.1,y:-51.1},2).to({scaleX:1,scaleY:1,rotation:63.9,x:-25.4,y:-60.7},2).to({rotation:61.7,y:-60.1},5).to({rotation:0,x:-17.4,y:-47.2},5).wait(1).to({startPosition:1},0).to({rotation:93.1,x:-15.4,y:-46},5).to({scaleX:1,scaleY:1,rotation:78.5,x:-23.1,y:-51.1},2).to({scaleX:1,scaleY:1,rotation:63.9,x:-25.4,y:-60.7},2).to({rotation:61.7,y:-60.1},5).to({rotation:0,x:-17.4,y:-47.2},5).wait(1).to({startPosition:1},0).to({rotation:-1.5,x:-17.9,y:-46.7},7).wait(4).to({startPosition:1},0).to({rotation:0,x:-17.4,y:-47.2},8).wait(1).to({startPosition:1},0).to({rotation:3.5,x:-16.2,y:-48.2},7).wait(4).to({startPosition:1},0).to({rotation:0,x:-17.4,y:-47.2},8).wait(1).to({startPosition:1},0).to({rotation:118.3,x:-20.5,y:-48.1},4).to({scaleX:1,scaleY:1,rotation:117.6,x:-24.4,y:-51},2,cjs.Ease.get(-0.99)).to({scaleX:1,scaleY:1,rotation:116.6,x:-27.4,y:-56.6},1).to({rotation:115.6,x:-27.8,y:-65.2},1).to({scaleX:1,scaleY:1,rotation:114.7,x:-21.4,y:-75.8},1).to({rotation:113.7,x:-22.1,y:-75.5},3).wait(7).to({startPosition:1},0).to({scaleX:1,scaleY:1,rotation:68.2,x:-27.3,y:-62.9},2).to({scaleX:1,scaleY:1,rotation:22.6,x:-22.4,y:-51.2},2).to({scaleX:1,scaleY:1,rotation:0,x:-17.4,y:-47.2},1).wait(1).to({startPosition:1},0).to({scaleX:1,scaleY:1,rotation:25.5,x:-23.3,y:-51.4},1).to({scaleX:1,scaleY:1,rotation:76.7,x:-27.3,y:-66.4},2).to({scaleX:1,scaleY:1,rotation:123.1,x:-20,y:-76.9},3).to({rotation:111.1,x:-23,y:-74.6},3).wait(13).to({rotation:116.4,x:-21.9,y:-75.8},0).to({scaleX:1,scaleY:1,rotation:69.9,x:-27.2,y:-63.1},2).to({scaleX:1,scaleY:1,rotation:23.3,x:-23.1,y:-50.4},2).to({scaleX:1,scaleY:1,rotation:0,x:-17.4,y:-47.2},1).wait(1).to({startPosition:1},0).wait(19).to({startPosition:1},0).wait(1).to({rotation:107.5,x:-25.8,y:-73.2},0).to({rotation:102.8,x:-26.6,y:-71.5},3).to({rotation:111.5,x:-25.1,y:-74.1},3).to({rotation:102.3,x:-26.7,y:-71},3).to({rotation:107.5,x:-25.8,y:-73.2},4).to({scaleX:1,scaleY:1,rotation:53.9,x:-28,y:-57.9},2).to({scaleX:1,scaleY:1,rotation:0,x:-17.4,y:-47.2},2).wait(1).to({startPosition:1},0).to({rotation:1.2,x:-18.1,y:-45.2},6).to({rotation:0,x:-17.4,y:-47.2},6).wait(1).to({startPosition:1},0).to({rotation:-1.5,x:-17.9,y:-46.7},7).wait(4).to({startPosition:1},0).to({rotation:0,x:-17.4,y:-47.2},8).wait(1).to({startPosition:1},0).to({rotation:3.5,x:-16.2,y:-48.2},7).wait(4).to({startPosition:1},0).to({rotation:0,x:-17.4,y:-47.2},8).wait(1).to({startPosition:1},0).to({rotation:15.6,x:-20,y:-50.2},2,cjs.Ease.get(-0.99)).to({rotation:11.7,x:-19.6,y:-49.3},3,cjs.Ease.get(1)).wait(7).to({startPosition:1},0).to({rotation:0,x:-17.4,y:-47.2},3).wait(1).to({startPosition:1},0).to({rotation:2.4,x:-19.6,y:-46.8},4).to({rotation:46.5,x:-24.8,y:-53.8},3).to({_off:true},1).wait(20).to({rotation:0,skewX:146,skewY:-33.8,x:-23.1,y:-53.9,_off:false},0).to({scaleX:1,scaleY:1,skewX:105.7,skewY:-74.1,x:-20.9,y:-50},2).to({skewX:50.1,skewY:-129.7,x:-19.3,y:-48.2},1).to({scaleX:1,scaleY:1,skewX:0,skewY:0,x:-17.4,y:-47.2},1).to({_off:true},1).wait(19).wait(2).to({startPosition:1,_off:false},0).wait(17).to({startPosition:1},0).wait(15).to({startPosition:1},0).to({scaleX:1,scaleY:1,rotation:90,x:-24.1,y:-48.9},4).to({_off:true},1).wait(24).wait(4).to({scaleX:1,scaleY:1,rotation:0,x:-17.4,y:-47.2,_off:false},0).to({_off:true},5).wait(8).to({x:-13.8,y:-41.2,_off:false},0).wait(9).to({startPosition:1},0).to({rotation:5.6,x:-15.2,y:-40.3},8).to({rotation:0,x:-13.8,y:-41.2},8).to({_off:true},31).wait(302));

	// arm_R
	this.arm_R = new lib.arm_R_4();
	this.arm_R.setTransform(-12.2,-63.4);
	this.arm_R._off = true;

	this.timeline.addTween(cjs.Tween.get(this.arm_R).wait(1).to({_off:false},0).wait(9).to({rotation:5.6,x:-11.9,y:-62.1},8).to({rotation:0,x:-12.1,y:-63.3},8).wait(2).to({rotation:-1.5,x:-13.1,y:-63},7).to({rotation:0,x:-12.1,y:-63.3},9).wait(2).to({rotation:20.7,x:-13.1,y:-63},7).to({rotation:0,x:-12.1,y:-63.3},9).wait(1).to({scaleY:0.97,skewX:-0.5,skewY:-0.7,x:-9.6,y:-59.3},3).to({scaleX:1,scaleY:0.98,skewX:21.1,skewY:20.8,x:-10.3,y:-59.9},2).to({skewX:51.8,skewY:51.5,x:-12,y:-60.9},1).to({scaleX:1,scaleY:1,rotation:66,skewX:0,skewY:0,x:-20,y:-72.1},2).to({rotation:62.8,x:-23.9,y:-59.7},4).to({x:-23.7,y:-61.4},3).wait(3).to({rotation:0,x:-12.1,y:-63.3},5).wait(3).to({rotation:-13.4,x:-15,y:-59.3},4).to({rotation:57.8,x:-13.1,y:-64},5).wait(3).to({rotation:0,x:-12.1,y:-63.3},5).wait(1).to({rotation:-13.4,x:-15,y:-59.3},4).to({rotation:57.8,x:-13.1,y:-64},5).wait(3).to({rotation:0,x:-12.1,y:-63.3},5).wait(1).to({rotation:-1.5,x:-13.1,y:-63},7).wait(4).to({rotation:0,x:-12.1,y:-63.3},8).wait(1).to({rotation:3.5,x:-9.9,y:-64},7).wait(4).to({rotation:0,x:-12.1,y:-63.3},8).wait(1).to({rotation:-1.5,x:-13.1,y:-63},7).wait(4).to({rotation:0,x:-12.1,y:-63.3},8).wait(1).to({rotation:3.5,x:-9.9,y:-64},7).wait(4).to({rotation:0,x:-12.1,y:-63.3},8).wait(1).to({rotation:15.6,x:-10.6,y:-64.4},2,cjs.Ease.get(-0.99)).to({rotation:13.4,x:-11.1,y:-64},3,cjs.Ease.get(1)).wait(7).to({rotation:0,x:-12.1,y:-63.3},3).wait(1).to({rotation:27.7,x:-13.8,y:-57.2},4).to({rotation:104.1,x:-15.9,y:-64.8},5,cjs.Ease.get(-0.99)).to({x:-15.1,y:-63.2},4,cjs.Ease.get(1)).wait(6).to({rotation:0,x:-12.1,y:-63.3},4).wait(1).to({rotation:106,x:-2.4,y:-72.8},5).to({rotation:107.2,x:-1,y:-67},4).to({rotation:106,x:-2.4,y:-66.8},4).wait(5).to({rotation:0,x:-12.1,y:-63.3},5).wait(24).wait(1).to({rotation:114.3},0).to({y:-60.8},2).to({y:-68.1},2,cjs.Ease.get(-0.99)).to({y:-62.3},2,cjs.Ease.get(1)).to({y:-68.1},2,cjs.Ease.get(-0.99)).to({y:-63.3},2,cjs.Ease.get(1)).wait(2).to({rotation:0},4).wait(2).to({rotation:-2,x:-13.4,y:-61.6},6).to({rotation:0,x:-12.1,y:-63.3},6).wait(1).to({rotation:-1.6,x:-15.8,y:-59.6},4).to({rotation:34.9,x:-12.2,y:-63.6},3).to({rotation:36.4,x:-11.5,y:-63.5},1).to({rotation:40.3,x:-7.3,y:-62.5},4).to({rotation:34,x:-13.6,y:-63.4},4).to({x:-10.8,y:-63.6},4).to({rotation:37.2,x:-10.5,y:-64},3).to({rotation:38.2,x:-9.9,y:-64.4},4).to({rotation:0,x:-12.1,y:-63.3},5).wait(1).to({rotation:19.6,x:-13.5,y:-62.6},4).to({rotation:20.5,x:-12.9,y:-63},4,cjs.Ease.get(1)).wait(7).to({rotation:0,x:-12.1,y:-63.3},4).wait(1).to({rotation:9.8,x:-16.2},4,cjs.Ease.get(1)).to({rotation:3.4,x:-10.2,y:-62.5},4).to({rotation:2.2,x:-10.9,y:-63.3},3).wait(7).to({rotation:0,x:-12.1},4).wait(1).to({rotation:13.5,x:-9.4,y:-64.1},0).wait(1).to({rotation:67.1,x:-8.2,y:-64.7},0).wait(1).to({rotation:22.2,x:-8.3,y:-64.8},0).wait(1).to({rotation:62.1,x:-8.4,y:-64.7},0).wait(1).to({rotation:22.2,x:-8.3,y:-64.8},0).wait(1).to({rotation:71.6,y:-64.7},0).wait(3).to({rotation:0,x:-12.1,y:-63.3},5).wait(1).to({scaleX:1,scaleY:1,rotation:30,x:-13.5,y:-62.9},4,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:131.6,x:-11.9,y:-63.6},5,cjs.Ease.get(1)).to({rotation:114.8,x:-13.3,y:-63.2},4,cjs.Ease.get(-0.99)).to({rotation:131.6,x:-11.9,y:-63.6},5,cjs.Ease.get(1)).to({rotation:114.8,x:-13.3,y:-63.2},4,cjs.Ease.get(-0.99)).to({rotation:130.9,x:-12.9,y:-63.4},5,cjs.Ease.get(1)).to({rotation:128.5,x:-12.8,y:-63.2},3,cjs.Ease.get(-0.99)).to({rotation:87,x:-11.2},3).to({rotation:0,x:-12.1,y:-63.3},4).wait(13).to({rotation:5.5,x:-13.7,y:-61.6},3,cjs.Ease.get(1)).to({rotation:-7,x:-12.2,y:-66.4},4).to({rotation:1,x:-11.6,y:-62.8},4).to({rotation:0,x:-12.1,y:-63.3},2).wait(2).to({rotation:-1,x:-13,y:-62.8},10).to({rotation:0,x:-12.1,y:-63.3},11).wait(1).to({rotation:0.5},7).to({rotation:0},9).wait(1).to({rotation:0.5},9).to({rotation:0},9).wait(20).to({rotation:-11.9,x:-13.8,y:-62.3},5).to({rotation:57.8,x:-9.7,y:-64.8},4).to({rotation:55.7,x:-9.8},5).to({rotation:0,x:-12.1,y:-63.3},5).wait(1).to({rotation:-11.9,x:-13.8,y:-62.3},5).to({rotation:57.8,x:-9.7,y:-64.8},4).to({rotation:55.7,x:-9.8},5).to({rotation:0,x:-12.1,y:-63.3},5).wait(1).to({rotation:-1.5,x:-13.1,y:-63},7).wait(4).to({rotation:0,x:-12.1,y:-63.3},8).wait(1).to({rotation:3.5,x:-9.9,y:-64},7).wait(4).to({rotation:0,x:-12.1,y:-63.3},8).wait(1).to({rotation:6.2,x:-13.5,y:-63.1},4).to({rotation:114.7,x:-9,y:-64.3},5,cjs.Ease.get(-0.99)).to({rotation:113.7,x:-9.5,y:-64.2},3).wait(7).to({rotation:0,x:-12.1,y:-63.3},5).wait(1).to({scaleX:1,scaleY:1,rotation:76.7,x:-10.6,y:-65},3).to({scaleX:1,scaleY:1,rotation:123.1,x:-9.3,y:-63.7},3).to({rotation:111.1,x:-9.9,y:-63.9},3).wait(13).to({rotation:116.4,x:-9.8,y:-64},0).to({rotation:0,x:-12.1,y:-63.3},5).wait(20).wait(1).to({rotation:107.5,x:-12},0).to({rotation:102.8,x:-11.9,y:-62.9},3).to({rotation:111.5,x:-12,y:-63.4},3).to({rotation:102.3,x:-12.1,y:-62.4},3).to({rotation:107.5,x:-12,y:-63.3},4).to({rotation:0,x:-12.1},4).wait(1).to({rotation:-2,x:-13.4,y:-61.6},6).to({rotation:0,x:-12.1,y:-63.3},6).wait(1).to({rotation:-1.5,x:-13.1,y:-63},7).wait(4).to({rotation:0,x:-12.1,y:-63.3},8).wait(1).to({rotation:3.5,x:-9.9,y:-64},7).wait(4).to({rotation:0,x:-12.1,y:-63.3},8).wait(1).to({rotation:15.6,x:-10.6,y:-64.4},2,cjs.Ease.get(-0.99)).to({rotation:11.7,x:-11.1,y:-64},3,cjs.Ease.get(1)).wait(7).to({rotation:0,x:-12.1,y:-63.3},3).wait(1).to({rotation:-1.6,x:-15.2,y:-61.8},4).to({rotation:34.9,x:-12.2,y:-63.6},3).to({rotation:36.4,x:-11.5,y:-63.5},1).to({rotation:40.3,x:-8.3,y:-62.5},4).to({rotation:34,x:-13,y:-63.4},4).to({x:-11.8,y:-63.6},4).to({rotation:37.2,x:-10.5,y:-64},3).to({rotation:38.2,x:-9.9,y:-64.4},4).to({rotation:0,x:-12.1,y:-63.3},5).wait(1).to({rotation:19.6,x:-13.5,y:-62.6},4).to({rotation:20.5,x:-12.9,y:-63},4,cjs.Ease.get(1)).wait(7).to({rotation:0,x:-12.1,y:-63.3},4).wait(34).to({scaleX:1,scaleY:1,rotation:17.6,x:-14.1,y:-62.4},4).to({scaleX:1,scaleY:1,rotation:38.3,x:-11.4,y:-63.3},3).to({rotation:35.9,x:-12.7,y:-63},4).to({rotation:37.1,x:-12,y:-63.2},4).wait(14).to({rotation:0,x:-12.1,y:-63.3},4).to({_off:true},5).wait(8).to({x:-9.1,y:-55,_off:false},0).wait(9).to({rotation:5.6,x:-9.2,y:-53.6},8).to({rotation:0,x:-9.1,y:-55},8).to({_off:true},31).wait(302));

	// foot_L_back
	this.leg_L_1 = new lib.foot_L_back_4();
	this.leg_L_1.setTransform(6.8,-18.6);
	this.leg_L_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.leg_L_1).wait(1).to({_off:false},0).wait(9).to({rotation:-2.7,x:6.3,y:-18.3},8).to({rotation:0,x:6.8,y:-18.5},8).wait(37).to({rotation:-15.3,x:4.3,y:-17.5},3).to({rotation:-109.4,x:12.3,y:-35.4},5).to({rotation:-97.7,x:11.2,y:-24.6},4).to({rotation:-112.6,x:10.6,y:-25.6},3).wait(3).to({rotation:0,x:6.8,y:-18.5},5).wait(3).to({rotation:-22.3,x:2,y:-17.7},4).to({rotation:-11,x:4.2,y:-17.6},5).wait(3).to({rotation:0,x:6.8,y:-18.5},5).wait(1).to({rotation:-22.3,x:2,y:-17.7},4).to({rotation:-11,x:4.2,y:-17.6},5).wait(3).to({rotation:0,x:6.8,y:-18.5},5).wait(97).to({rotation:-19.3,x:1.6,y:-14.8},4).to({scaleX:1,scaleY:1,rotation:-25.6,x:3.8,y:-15.4},2,cjs.Ease.get(-0.99)).to({scaleX:1,scaleY:1,rotation:-43.4,x:10.3,y:-19.3},2).to({scaleX:1,scaleY:1,rotation:-72.4,x:14.8,y:-25.1},1).to({rotation:-49.7,x:14.9,y:-23.5},4,cjs.Ease.get(1)).wait(6).to({rotation:0,x:6.8,y:-18.5},4).wait(1).to({rotation:4.5,x:8.4,y:-25.2},5).to({rotation:5.7,x:8.8,y:-19.2},4).to({rotation:4.5,x:8.4},4).wait(5).to({rotation:0,x:6.8,y:-18.5},5).wait(25).to({rotation:-16.5,x:2.5,y:-17.1},2).to({rotation:0,x:6.8,y:-23.3},2,cjs.Ease.get(-0.99)).to({rotation:-0.6,x:5.8,y:-17.7},2,cjs.Ease.get(1)).to({rotation:0,x:6.8,y:-23.3},2,cjs.Ease.get(-0.99)).to({y:-18.5},2,cjs.Ease.get(1)).wait(8).to({rotation:-8.8,x:4.2,y:-18.4},6).to({rotation:0,x:6.8,y:-18.5},6).wait(1).to({rotation:-11,x:4.3},4).to({rotation:0,x:6.8},3).wait(1).to({rotation:-4.1,x:5.3,y:-18.9},4).to({rotation:0,x:6.1,y:-18.5},4).to({rotation:7.4,x:8.4,y:-18.8},4).to({rotation:0,x:6.8,y:-18.5},3).wait(10).to({rotation:-4.6,x:6.3,y:-18.7},4).wait(11).to({rotation:0,x:6.8,y:-18.5},4).wait(1).to({rotation:21.8,x:2.6,y:-21.2},4,cjs.Ease.get(1)).to({rotation:-15.3,x:8.3,y:-17.6},4).to({rotation:-13,x:8.6,y:-18},3).wait(7).to({rotation:0,x:6.8,y:-18.5},4).wait(1).to({rotation:2.5,x:7.6},0).wait(1).to({rotation:3.5,x:7.9},0).wait(7).to({rotation:0,x:6.8},5).wait(1).to({rotation:-16.5,x:3.3,y:-17.4},4,cjs.Ease.get(1)).to({rotation:0,x:6.8,y:-18.5},5,cjs.Ease.get(1)).wait(41).to({rotation:-7.3,x:4,y:-17.5},3,cjs.Ease.get(1)).to({scaleY:1.02,rotation:7.7,x:3.2,y:-22.9},4).to({scaleX:1,scaleY:1.05,rotation:-13.9,x:-4,y:-21.8},4).to({rotation:-10.4,y:-22.4},2).wait(2).to({rotation:-4.9},10).to({rotation:-10.4},11).wait(1).to({rotation:-8.4},7).to({rotation:-10.4},9).wait(1).to({rotation:-8.4},9).to({rotation:-10.4},9).wait(20).to({rotation:-22.7,x:-3.7,y:-23.4},5).to({rotation:2.8,x:-4.2,y:-23.2},4).to({rotation:3},5).to({rotation:-10.4,x:-4,y:-22.4},5).wait(1).to({rotation:-22.7,x:-3.7,y:-23.4},5).to({rotation:2.8,x:-4.2,y:-23.2},4).to({rotation:3},5).to({rotation:-10.4,x:-4,y:-22.4},5).wait(1).to({rotation:-8.4},7).wait(4).to({rotation:-10.4},8).wait(1).to({rotation:-8.4},7).wait(4).to({rotation:-10.4},8).wait(1).to({rotation:-2.2},4).to({rotation:-14.3},5,cjs.Ease.get(-0.99)).to({rotation:-10.4},3).wait(13).to({scaleX:1,scaleY:1.05,rotation:30.8,x:-3.7,y:-23.4},3).to({scaleX:1,scaleY:1.05,rotation:55.7,x:-3.5,y:-21.6},3).to({rotation:50,x:-2.9,y:-21.1},3).wait(13).to({rotation:-10.4,x:-4,y:-22.4},5).wait(39).to({rotation:-5.1},6).to({rotation:-10.4},6).wait(1).to({rotation:-8.4},7).wait(4).to({rotation:-10.4},8).wait(1).to({rotation:-8.4},7).wait(4).to({rotation:-10.4},8).wait(1).to({rotation:3},2).to({rotation:0.1},3).wait(7).to({rotation:0.1},0).to({rotation:-10.4},3).wait(1).to({rotation:-16.1},4).to({rotation:3.2},4).to({rotation:-10.3},4).to({rotation:-2.9},4).to({rotation:-12.3},4).to({rotation:-1.9},3).to({rotation:3.2},4).to({rotation:-10.4},5).wait(1).to({rotation:-18.6},4).to({rotation:-16},4).wait(7).to({rotation:-10.4},4).wait(34).to({rotation:-10.3,y:-22.5},4).to({rotation:-10.4,y:-22.4},3).wait(26).to({_off:true},5).wait(8).to({scaleX:1,scaleY:1,rotation:0,x:5.3,y:-15.6,_off:false},0).wait(9).to({rotation:-5.5,x:4,y:-15.1},8).to({rotation:0,x:5.3,y:-15.6},8).to({_off:true},31).wait(302));

	// leg_L_back
	this.leg_L_2 = new lib.leg_L_back_3();
	this.leg_L_2.setTransform(7,-28.6);
	this.leg_L_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.leg_L_2).wait(1).to({_off:false},0).wait(9).to({x:6.4,y:-28.3},8).to({x:7,y:-28.5},8).wait(37).to({rotation:32.4,x:9.9,y:-26.2},3).to({rotation:-45.3,x:5.5,y:-42.5},5).to({rotation:-48.5,x:3.9,y:-31.1},4).to({x:3.3,y:-32.3},3).wait(3).to({rotation:0,x:7,y:-28.5},5).wait(3).to({rotation:26.6,x:7.2,y:-26.6},4).to({rotation:-8.8,x:2.8,y:-27.5},5).to({rotation:-8.8},3).to({rotation:0,x:7,y:-28.5},5).wait(1).to({rotation:26.6,x:7.2,y:-26.6},4).to({rotation:-8.8,x:2.8,y:-27.5},5).to({rotation:-8.8},3).to({rotation:0,x:7,y:-28.5},5).wait(21).to({rotation:3,x:7.3,y:-27.9},7).wait(4).to({rotation:0,x:7,y:-28.5},8).wait(21).to({rotation:3,x:7.3,y:-27.9},7).wait(4).to({rotation:0,x:7,y:-28.5},8).wait(17).to({rotation:31.2,x:6.9,y:-23.3},4).to({rotation:-50.9,x:7.1,y:-31.5},5,cjs.Ease.get(-0.99)).to({rotation:-48.2,x:7.5,y:-30.3},4,cjs.Ease.get(1)).wait(6).to({rotation:0,x:7,y:-28.5},4).wait(1).to({rotation:10.2,x:10.3,y:-35.1},5).to({rotation:11.4,x:11,y:-29.1},4).to({rotation:10.2,x:10.3},4).wait(5).to({rotation:0,x:7,y:-28.5},5).wait(25).to({rotation:22.4,y:-26.3},2).to({rotation:0,y:-33.3},2,cjs.Ease.get(-0.99)).to({rotation:5.2,x:7.3,y:-27.8},2,cjs.Ease.get(1)).to({rotation:0,x:7,y:-33.3},2,cjs.Ease.get(-0.99)).to({y:-28.5},2,cjs.Ease.get(1)).wait(8).to({scaleX:1,scaleY:1,rotation:14.5,x:6.8,y:-27.7},6).to({scaleX:1,scaleY:1,rotation:0,x:7,y:-28.5},6).wait(1).to({scaleY:0.86,rotation:14,x:6.3,y:-26.5},4).to({scaleY:1,rotation:0,x:7,y:-28.5},3).wait(1).to({rotation:12.5,x:7.5,y:-28.3},4).to({rotation:0,x:6.3,y:-28.5},4).to({rotation:1,x:8.6,y:-28.7},4).to({rotation:0,x:7,y:-28.4},3).to({y:-28.6},4).to({y:-28.5},5).wait(1).to({rotation:7.2,x:7.7,y:-28.6},4).wait(11).to({rotation:0,x:7,y:-28.5},4).wait(1).to({rotation:21.8,x:6.5,y:-30.5},4,cjs.Ease.get(1)).to({rotation:-9.1,x:6.9,y:-26.7},4).to({rotation:-10.3,y:-27.9},3).wait(7).to({rotation:0,x:7,y:-28.5},4).wait(1).to({rotation:2.5,x:8.3},0).wait(1).to({rotation:3.5,x:8.7},0).wait(7).to({rotation:0,x:7},5).wait(1).to({rotation:16.5,x:5.8,y:-27.4},4,cjs.Ease.get(1)).to({rotation:0,x:7,y:-28.5},5,cjs.Ease.get(1)).wait(41).to({rotation:11.3,x:6.1,y:-27.3},3,cjs.Ease.get(1)).to({scaleX:1,scaleY:1.03,rotation:20.3,x:6.7,y:-31.3},4).to({scaleY:1.1,rotation:61.3,x:5.9,y:-27.2},4).to({y:-27.8},2).wait(79).to({rotation:64.9,x:6.4,y:-27.9},5).to({x:5.9,y:-27.8},4).wait(5).to({rotation:61.3},5).wait(1).to({rotation:64.9,x:6.4,y:-27.9},5).to({x:5.9,y:-27.8},4).wait(5).to({rotation:61.3},5).wait(66).to({scaleX:1,scaleY:1.1,rotation:61.4,x:6.2,y:-28.7},3).to({scaleX:1,scaleY:1.1,rotation:61.3,x:6.4,y:-27},3).to({rotation:55.6,y:-27.4},3).wait(13).to({rotation:61.3,x:5.9,y:-27.8},5).wait(141).to({rotation:59.5,x:6,y:-28.1},4).to({rotation:61.3,x:5.9,y:-27.8},4).wait(45).to({scaleX:1,scaleY:1.1,rotation:61.4},4).to({scaleX:1,scaleY:1.1,rotation:61.3},3).wait(26).to({_off:true},5).wait(8).to({scaleX:1,scaleY:1,rotation:0,x:5.5,y:-23.9,_off:false},0).wait(9).to({rotation:6.8,x:4.9,y:-23.4},8).to({rotation:0,x:5.5,y:-23.9},8).to({_off:true},31).wait(302));

	// foot_R
	this.leg_R = new lib.foot_R_4();
	this.leg_R.setTransform(-9.8,-18.5);
	this.leg_R._off = true;

	this.timeline.addTween(cjs.Tween.get(this.leg_R).wait(1).to({_off:false},0).wait(9).to({rotation:4.5,x:-8.9,y:-18.3},8).to({rotation:0,x:-9.7,y:-18.4},8).wait(37).to({rotation:31.4,x:-1.5,y:-17.5},3).to({rotation:-5.9,x:-11,y:-27.4},5).to({rotation:-17.5,x:-13.3,y:-16.2},4).to({rotation:-14.3,x:-12.2,y:-18},3).wait(3).to({rotation:0,x:-9.7,y:-18.4},5).wait(3).to({rotation:41.1,x:-6.7,y:-15.5},4).to({rotation:-8.3,x:-13,y:-19.3},5).to({rotation:-8.3},3).to({rotation:0,x:-9.7,y:-18.4},5).wait(1).to({rotation:41.1,x:-6.7,y:-15.5},4).to({rotation:-8.3,x:-13,y:-19.3},5).to({rotation:-8.3},3).to({rotation:0,x:-9.7,y:-18.4},5).wait(81).to({rotation:2.7,x:-9.1,y:-18.3},2,cjs.Ease.get(-0.99)).wait(10).to({rotation:0,x:-9.7,y:-18.4},3).wait(1).to({rotation:-28,x:-18.1,y:-14.3},4).to({rotation:0,x:-9.7,y:-18.4},5,cjs.Ease.get(-0.99)).wait(15).to({rotation:48.4,x:-15.9,y:-30.7},5).to({rotation:49.6,x:-15.4,y:-25.2},4).to({rotation:48.4,x:-15.9,y:-24.7},4).wait(5).to({rotation:0,x:-9.7,y:-18.4},5).wait(25).to({rotation:-23.3,x:-17,y:-17.1},2).to({rotation:0,x:-9.7,y:-23.2},2,cjs.Ease.get(-0.99)).to({rotation:-3.8,x:-11.5,y:-17.3},2,cjs.Ease.get(1)).to({rotation:0,x:-9.7,y:-23.2},2,cjs.Ease.get(-0.99)).to({y:-18.4},2,cjs.Ease.get(1)).wait(8).to({scaleX:1,scaleY:1,rotation:8.2,x:-8,y:-18.3},6).to({scaleX:1,scaleY:1,rotation:0,x:-9.7,y:-18.4},6).wait(1).to({scaleX:0.99,scaleY:0.95,skewX:-21.3,skewY:-19.2,x:-15.2,y:-16.2},4).to({scaleX:1,scaleY:1,rotation:-12.5,skewX:0,skewY:0,x:-10.2,y:-18.6},3).to({rotation:-4.7,x:-10.4,y:-18.4},1).to({rotation:16.1,x:-13.4,y:-19.8},4).to({rotation:0,x:-12.6,y:-18.2},4).to({rotation:13.5,x:-12.9,y:-19.2},4).to({rotation:20.7,x:-13.7},3).to({rotation:-7.4,x:-10.4,y:-19.6},4).to({rotation:0,x:-9.7,y:-18.4},5).wait(1).to({rotation:12.8,x:-7,y:-18.7},4).wait(11).to({rotation:0,x:-9.7,y:-18.4},4).wait(1).to({rotation:-5.5,x:-10.7,y:-18.3},4,cjs.Ease.get(1)).to({rotation:0,x:-9.7,y:-18.4},4).wait(14).wait(1).to({rotation:22.3,x:-14,y:-19.4},0).wait(1).to({rotation:39.9,x:-17,y:-21.2},0).wait(7).to({rotation:0,x:-9.7,y:-18.4},5).wait(1).to({rotation:-18.1,x:-15.1,y:-16.9},4,cjs.Ease.get(1)).to({rotation:0,x:-9.7,y:-18.4},5,cjs.Ease.get(1)).wait(41).to({rotation:-16.9,x:-13.2,y:-17.2},3,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:16.5,x:-11.9,y:-22.6},4).to({rotation:18.6,x:-16.3,y:-21.3},4).to({rotation:14.9,y:-21.9},2).wait(2).to({rotation:11.4},10).to({rotation:14.9},11).wait(1).to({rotation:11.4},7).to({rotation:14.9},9).wait(1).to({rotation:11.4},9).to({rotation:14.9},9).wait(20).to({rotation:11.5,x:-14.4,y:-23.3},5).to({rotation:24.1,x:-15.7,y:-23.6},4).to({x:-15.6,y:-23.7},5).to({rotation:14.9,x:-16.3,y:-21.9},5).wait(1).to({rotation:11.5,x:-14.4,y:-23.3},5).to({rotation:24.1,x:-15.7,y:-23.6},4).to({x:-15.6,y:-23.7},5).to({rotation:14.9,x:-16.3,y:-21.9},5).wait(1).to({rotation:11.4},7).wait(4).to({rotation:14.9},8).wait(1).to({rotation:11.4},7).wait(4).to({rotation:14.9},8).wait(1).to({rotation:10.7},4).to({rotation:17.4},5,cjs.Ease.get(-0.99)).to({rotation:14.9},3).wait(13).to({scaleX:1,scaleY:1,rotation:40.1,x:-18.9,y:-24.7},3).to({scaleX:1,scaleY:1,rotation:55.1,x:-20.5,y:-24.2},3).to({rotation:50.1,x:-19.7,y:-23.8},3).wait(13).to({rotation:14.9,x:-16.3,y:-21.9},5).wait(1).to({rotation:14.9},0).wait(38).to({rotation:8.7},6).to({rotation:14.9},6).wait(1).to({rotation:11.4},7).wait(4).to({rotation:14.9},8).wait(1).to({rotation:11.4},7).wait(4).to({rotation:14.9},8).wait(1).to({rotation:22.8},2).to({rotation:18.6},3).wait(7).to({rotation:14.9},3).wait(1).to({rotation:9.2},4).to({rotation:22.4},4).to({rotation:15.2},4).to({rotation:22.4},4).to({rotation:11.6},4).to({rotation:16.6},3).to({rotation:22.4},4).to({rotation:14.9},5).wait(1).to({rotation:18.6},4).to({rotation:14.8},4).wait(7).to({rotation:14.9},4).wait(34).to({scaleX:1,scaleY:1,rotation:14.8,x:-16.4},4).to({scaleX:1,scaleY:1,rotation:14.9,x:-16.3},3).wait(26).to({_off:true},5).wait(8).to({scaleX:1,scaleY:1,rotation:0,x:-7.2,y:-15.2,_off:false},0).wait(9).to({rotation:3.9,x:-6.5,y:-15.1},8).to({rotation:0,x:-7.2,y:-15.2},8).to({_off:true},31).wait(302));

	// leg_R
	this.leg_R_1 = new lib.leg_R_4();
	this.leg_R_1.setTransform(-12.1,-31.9);
	this.leg_R_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.leg_R_1).wait(1).to({_off:false},0).wait(9).to({rotation:-2.6,x:-11.6,y:-31.6},8).to({rotation:0,x:-12,y:-31.8},8).wait(37).to({rotation:-23.3,x:-8.8,y:-28.9},3).to({rotation:-0.1,x:-13.4,y:-40.7},5).to({rotation:-3.2,x:-15.8,y:-29.3},4).to({rotation:-4.9,x:-15.6,y:-30.9},3).wait(3).to({rotation:0,x:-12,y:-31.8},5).wait(3).to({rotation:-13.3,x:-11.8,y:-27.9},4).to({rotation:0,x:-15.3,y:-32.7},5).wait(3).to({x:-12,y:-31.8},5).wait(1).to({rotation:-13.3,x:-11.8,y:-27.9},4).to({rotation:0,x:-15.3,y:-32.7},5).wait(3).to({x:-12,y:-31.8},5).wait(21).to({rotation:3,x:-11.5,y:-32.1},7).wait(4).to({rotation:0,x:-12,y:-31.8},8).wait(21).to({rotation:3,x:-11.5,y:-32.1},7).wait(4).to({rotation:0,x:-12,y:-31.8},8).wait(1).to({rotation:2.7,x:-10.8,y:-31.7},2,cjs.Ease.get(-0.99)).wait(10).to({rotation:0,x:-12,y:-31.8},3).wait(1).to({rotation:37.4,x:-11.9,y:-26.4},4).to({rotation:0,x:-12.4,y:-33},5,cjs.Ease.get(-0.99)).to({x:-12,y:-31.8},4,cjs.Ease.get(1)).wait(11).to({rotation:44.2,x:-7.8,y:-41.7},5).to({rotation:45.4,x:-7.1,y:-36},4).to({rotation:44.2,x:-7.8,y:-35.7},4).wait(5).to({rotation:0,x:-12,y:-31.8},5).wait(25).to({rotation:33.9,x:-11.4,y:-29.2},2).to({rotation:0,x:-12,y:-36.5},2,cjs.Ease.get(-0.99)).to({rotation:9.4,x:-11.4,y:-30.7},2,cjs.Ease.get(1)).to({rotation:0,x:-12,y:-36.5},2,cjs.Ease.get(-0.99)).to({y:-31.8},2,cjs.Ease.get(1)).wait(8).to({scaleX:1,scaleY:1,rotation:-11.7,x:-12.4,y:-30.7},6).to({scaleX:1,scaleY:1,rotation:0,x:-12,y:-31.8},6).wait(1).to({scaleX:0.99,scaleY:0.95,skewX:20.8,skewY:18.7,x:-12.7,y:-28.7},4).to({scaleX:1,scaleY:1,skewX:0,skewY:0,x:-12.3,y:-31.9},3).to({rotation:1.5,x:-12.4,y:-31.8},1).to({rotation:20.9,x:-10.7,y:-32.9},4).to({rotation:6.7,x:-13.1,y:-31.5},4).to({rotation:20.3,x:-10.1,y:-32.2},4).to({rotation:19,x:-11.5,y:-32.5},3).to({rotation:3.2,x:-11.9,y:-32.7},4).to({rotation:0,x:-12,y:-31.8},5).wait(1).to({rotation:-4.8,x:-10.2,y:-31.9},4).wait(11).to({rotation:0,x:-12,y:-31.8},4).wait(1).to({rotation:1.5,x:-12.6,y:-31.7},4,cjs.Ease.get(1)).to({rotation:0,x:-12,y:-31},4).to({y:-31.8},3).wait(11).wait(1).to({rotation:24,x:-10.6,y:-32.6},0).wait(1).to({rotation:39.9,x:-10.2,y:-33},0).wait(7).to({rotation:0,x:-12,y:-31.8},5).wait(1).to({rotation:18,x:-13.2,y:-30.5},4,cjs.Ease.get(1)).to({rotation:0,x:-12,y:-31.8},5,cjs.Ease.get(1)).wait(41).to({scaleY:0.97,rotation:10,x:-12.8,y:-30.1},3,cjs.Ease.get(1)).to({scaleX:1,scaleY:0.97,rotation:10.5,x:-11.9,y:-35.4},4).to({scaleX:1,scaleY:0.9,rotation:31.7,x:-11.8,y:-32.8},4).to({y:-33.4},2).wait(79).to({scaleY:0.78,rotation:23.3,x:-11.7,y:-34.1},5).to({scaleY:0.85,rotation:32,x:-11.3,y:-34.3},4).to({x:-11.2},5).to({scaleY:0.9,rotation:31.7,x:-11.8,y:-33.4},5).wait(1).to({scaleY:0.78,rotation:23.3,x:-11.7,y:-34.1},5).to({scaleY:0.85,rotation:32,x:-11.3,y:-34.3},4).to({x:-11.2},5).to({scaleY:0.9,rotation:31.7,x:-11.8,y:-33.4},5).wait(66).to({scaleX:1,scaleY:0.9,rotation:45.9,x:-11.9,y:-34.7},3).to({scaleX:1,scaleY:0.9,rotation:54.5,y:-33},3).to({rotation:49.5,y:-33.3},3).wait(13).to({rotation:31.7,x:-11.8,y:-33.4},5).wait(194).to({scaleX:1,scaleY:0.9,rotation:31.6,y:-33.5},4).to({scaleX:1,scaleY:0.9,rotation:31.7,y:-33.4},3).wait(26).to({_off:true},5).wait(8).to({scaleY:1,rotation:0,x:-9,y:-26.3,_off:false},0).wait(9).to({rotation:-5,x:-8.9,y:-25.9},8).to({rotation:0,x:-9,y:-26.3},8).to({_off:true},31).wait(302));

	// ・hair_back
	this.hair_back = new lib.hair_back_3();
	this.hair_back.setTransform(0.5,-137.9,1,1,-1.1);
	this.hair_back._off = true;

	this.timeline.addTween(cjs.Tween.get(this.hair_back).wait(1).to({_off:false},0).wait(9).to({rotation:-3,x:-0.6,y:-136.8},8).to({rotation:-1,x:0.5,y:-137.8},8).wait(2).to({rotation:-5.7,x:-5.9},7).to({rotation:-1,x:0.5},9).wait(2).to({rotation:-1},0).to({rotation:-5.7,x:-5.9},7).to({rotation:-1,x:0.5},9).wait(1).to({rotation:-1},0).to({scaleX:1,scaleY:0.97,rotation:0,skewX:-18.4,skewY:-17.9,x:-11.1,y:-130.6},3).to({scaleX:1,scaleY:1,rotation:2.3,skewX:0,skewY:0,x:-5.8,y:-145.7},5).to({rotation:-1.3,x:-14.3,y:-137.1},4).to({rotation:-2.5,x:-15.6},3).wait(3).to({rotation:-1,x:0.5,y:-137.8},5).wait(3).to({rotation:-6.2,x:-8.9,y:-134.6},4).to({rotation:4.3,x:6.8,y:-137},5).to({rotation:4.3},3).to({rotation:-1,x:0.5,y:-137.8},5).wait(1).to({rotation:-1},0).to({rotation:-6.2,x:-8.9,y:-134.6},4).to({rotation:4.3,x:6.8,y:-137},5).to({rotation:4.3},3).to({rotation:-1,x:0.5,y:-137.8},5).wait(1).to({rotation:-1},0).to({rotation:-8.6,x:-9.3,y:-137.6},7).wait(4).to({rotation:-1,x:0.5,y:-137.8},8).wait(1).to({rotation:-1},0).to({rotation:9.4,x:13.9,y:-135.9},7).wait(4).to({rotation:-1,x:0.5,y:-137.8},8).wait(1).to({rotation:-1},0).to({rotation:-8.6,x:-9.3,y:-137.6},7).wait(4).to({rotation:-1,x:0.5,y:-137.8},8).wait(1).to({rotation:-1},0).to({rotation:9.4,x:13.9,y:-135.9},7).wait(4).to({rotation:-1,x:0.5,y:-137.8},8).wait(1).to({rotation:-1},0).to({rotation:2.5,x:6.8,y:-138},2,cjs.Ease.get(-0.99)).to({rotation:0.5,x:3.9,y:-138.1},3,cjs.Ease.get(1)).wait(7).to({rotation:-1,x:0.5,y:-137.8},3).wait(1).to({rotation:-3.5,x:-4,y:-132},4).to({rotation:-6.5,x:-9.9,y:-139.7},5,cjs.Ease.get(-0.99)).to({x:-9.5,y:-138.5},4,cjs.Ease.get(1)).wait(6).to({rotation:-1,x:0.5,y:-137.8},4).wait(1).to({rotation:-1},0).to({rotation:9,x:23.3,y:-143.8},5).to({rotation:10.2,x:26.2,y:-137.4},4).to({rotation:9,x:23.3,y:-137.8},4).wait(5).to({rotation:-1,x:0.5},5).wait(1).to({rotation:-1},0).wait(24).to({y:-135.3},2).to({y:-142.6},2,cjs.Ease.get(-0.99)).to({y:-136.8},2,cjs.Ease.get(1)).to({y:-142.6},2,cjs.Ease.get(-0.99)).to({y:-137.8},2,cjs.Ease.get(1)).wait(8).to({rotation:-6.3,x:-7.2,y:-136.4},6).to({rotation:-1,x:0.5,y:-137.8},6).wait(1).to({rotation:-1},0).to({rotation:-5.6,x:-11.2,y:-134.7},4).to({rotation:4.3,x:1.7,y:-138.8},3).to({rotation:3.8,x:3.7,y:-138},1).to({rotation:-7.3,x:-2.5,y:-137},4).to({rotation:-14,x:-11.6,y:-137.1},4).to({rotation:6.7,x:5.1,y:-139.5},4).to({rotation:-3,x:0.7,y:-138.1},3).to({rotation:2.6,x:4.2,y:-138.7},4).to({rotation:-1,x:0.5,y:-137.8},5).wait(1).to({rotation:-5.2,x:-5.6,y:-137.3},4).to({rotation:-4.2,x:-3.8,y:-137.5},4,cjs.Ease.get(1)).wait(7).to({rotation:-1,x:0.5,y:-137.8},4).wait(1).to({rotation:-7,x:-11,y:-138.5},4,cjs.Ease.get(1)).to({rotation:2.2,x:6.9,y:-136.1},4).to({rotation:1,x:4.7,y:-137.3},3).wait(7).to({rotation:-1,x:0.5,y:-137.8},4).wait(1).to({rotation:1.3,x:6.6,y:-138},0).wait(1).to({rotation:2.3,x:8.8},0).wait(7).to({rotation:-1,x:0.5,y:-137.8},5).wait(1).to({rotation:-2.6,x:-3.7,y:-136.7},4,cjs.Ease.get(1)).to({rotation:0,x:2.7,y:-137.7},5,cjs.Ease.get(1)).to({rotation:-2.3,x:-1.6,y:-137.8},4,cjs.Ease.get(-0.99)).to({rotation:0,x:2.7,y:-137.7},5,cjs.Ease.get(1)).to({rotation:-2.3,x:-1.6,y:-137.8},4,cjs.Ease.get(-0.99)).to({rotation:-0.6,x:1.4},5,cjs.Ease.get(1)).to({rotation:-1,x:0.5},3,cjs.Ease.get(-0.99)).wait(20).to({rotation:-2.5,x:-2.8,y:-136.4},3,cjs.Ease.get(1)).to({rotation:-0.9,x:0.5,y:-141},4).to({rotation:0,x:2.4,y:-137.1},4).to({rotation:-1,x:0.5,y:-137.8},2).wait(2).to({rotation:-2.2,x:-1.4,y:-136.9},10).to({rotation:-1,x:0.5,y:-137.8},11).wait(1).to({rotation:-5.7,x:-5.9},7).to({rotation:-1,x:0.5},9).wait(1).to({rotation:-1},0).to({rotation:-5.7,x:-5.9},9).to({rotation:-1,x:0.5},9).wait(20).to({rotation:-1},0).to({rotation:-4.7,x:-5.6,y:-137.4},5).to({rotation:4.3,x:10.2,y:-137.8},4).to({rotation:3.9,x:9.5,y:-137.9},5).to({rotation:-1,x:0.5,y:-137.8},5).wait(1).to({rotation:-4.7,x:-5.6,y:-137.4},5).to({rotation:4.3,x:10.2,y:-137.8},4).to({rotation:3.9,x:9.5,y:-137.9},5).to({rotation:-1,x:0.5,y:-137.8},5).wait(1).to({rotation:-8.6,x:-9.3,y:-137.6},7).wait(4).to({rotation:-1,x:0.5,y:-137.8},8).wait(1).to({rotation:-1},0).to({rotation:9.4,x:13.9,y:-135.9},7).wait(4).to({rotation:-1,x:0.5,y:-137.8},8).wait(1).to({rotation:-1},0).to({rotation:-3.7,x:-4.4,y:-137.3},4).to({rotation:7.4,x:14.2,y:-136.5},5,cjs.Ease.get(-0.99)).to({rotation:6.4,x:12.5,y:-136.8},3).wait(7).to({rotation:-1,x:0.5,y:-137.8},5).wait(1).to({rotation:-1},0).to({rotation:1.8,x:6.3,y:-138.5},3).to({rotation:4.4,x:11,y:-136.5},3).to({rotation:3.7,x:9.7,y:-137},3).wait(13).to({rotation:-1,x:0.5,y:-137.8},5).wait(1).to({rotation:-1},0).wait(20).to({y:-137.2},3).to({y:-137.8},3).to({y:-137},3).to({y:-137.8},4).wait(5).to({rotation:-6.3,x:-7.2,y:-136.4},6).to({rotation:-1,x:0.5,y:-137.8},6).wait(1).to({rotation:-1},0).to({rotation:-8.6,x:-9.3,y:-137.6},7).wait(4).to({rotation:-1,x:0.5,y:-137.8},8).wait(1).to({rotation:-1},0).to({rotation:9.4,x:13.9,y:-135.9},7).wait(4).to({rotation:-1,x:0.5,y:-137.8},8).wait(1).to({rotation:-1},0).to({rotation:2.5,x:6.8,y:-138},2,cjs.Ease.get(-0.99)).to({rotation:0.5,x:3.9,y:-138.1},3,cjs.Ease.get(1)).wait(7).to({rotation:-1,x:0.5,y:-137.8},3).wait(1).to({rotation:-5.6,x:-10.6,y:-136.9},4).to({rotation:8.7,x:4.4,y:-139.1},3).to({rotation:9.2,x:8.4,y:-137.6},1).to({rotation:-7.3,x:-3.6,y:-137.7},4).to({rotation:-14,x:-12.2,y:-137.1},4).to({rotation:6.7,x:3.3,y:-139.9},4).to({rotation:-3,x:0.3,y:-138.1},3).to({rotation:2.6,x:4.6,y:-139.5},4).to({rotation:-1,x:0.5,y:-137.8},5).wait(1).to({rotation:-5.2,x:-5.6,y:-137.3},4).to({rotation:-4.2,x:-3.8,y:-137.5},4,cjs.Ease.get(1)).wait(7).to({rotation:-1,x:0.5,y:-137.8},4).wait(34).to({rotation:-4.3,x:-5.7,y:-137.7},4).to({rotation:0.2,x:3.3,y:-137.6},3).to({rotation:-2,x:-1.2,y:-137.9},4).to({rotation:-0.8,x:1,y:-137.8},4).wait(14).to({rotation:-0.8},0).to({rotation:-1,x:0.5},4).to({_off:true},5).wait(8).to({x:0,y:-137.5,_off:false},0).wait(9).to({rotation:0,y:-137.9},8).to({rotation:-1,y:-137.5},8).to({_off:true},31).wait(302));

	// ・item_back_upper
	this.instance_16 = new lib.item_back_upper_3();
	this.instance_16.setTransform(-0.3,-56.9,1,1,0,0,0,-0.4,0);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(1).to({_off:false},0).wait(9).to({y:-54},8).to({y:-56.8},8).wait(2).to({rotation:-1.8},7).to({rotation:0},9).wait(2).to({rotation:-2.8,x:-1.2,y:-57.4},7).to({rotation:0,x:-0.2,y:-56.8},9).wait(1).to({rotation:-1.6,y:-54},3).to({rotation:-7.8,x:-4.8,y:-65.4},5).to({rotation:-9.8,x:-8.1,y:-54},4).to({rotation:-11,x:-8.4,y:-55.5},3).wait(3).to({rotation:0,x:-0.2,y:-56.8},5).wait(3).to({rotation:-4.9,x:-2.5,y:-53.8},4).to({rotation:5.5,x:-1.7,y:-56.4},5).wait(3).to({rotation:0,x:-0.2,y:-56.8},5).wait(1).to({rotation:-4.9,x:-2.5,y:-53.8},4).to({rotation:5.5,x:-1.7,y:-56.4},5).wait(3).to({rotation:0,x:-0.2,y:-56.8},5).wait(1).to({rotation:-5.5,x:-1.2,y:-57.2},7).wait(4).to({rotation:0,x:-0.2,y:-56.8},8).wait(1).to({rotation:5.2,x:2.2,y:-56.6},7).wait(4).to({rotation:0,x:-0.2,y:-56.8},8).wait(1).to({rotation:-5,x:-1.2,y:-57.2},7).wait(4).to({rotation:0,x:-0.2,y:-56.8},8).wait(1).to({rotation:5.2,x:2.2,y:-56.6},7).wait(4).to({rotation:0,x:-0.2,y:-56.8},8).wait(1).to({rotation:2.7,x:0.9,y:-57.1},2,cjs.Ease.get(-0.99)).to({regY:0.1,rotation:1.4},3,cjs.Ease.get(1)).wait(7).to({regY:0,rotation:0,x:-0.2,y:-56.8},3).wait(1).to({y:-51.4},4).to({rotation:-5.2,x:-3.1,y:-58.9},5,cjs.Ease.get(-0.99)).to({x:-2.7,y:-57.7},4,cjs.Ease.get(1)).wait(6).to({rotation:0,x:-0.2,y:-56.8},4).wait(1).to({rotation:10.2,x:8,y:-64.2},5).to({rotation:11.4,x:9.3,y:-58.2},4).to({rotation:10.2,x:8},4).wait(5).to({rotation:0,x:-0.2,y:-56.8},5).wait(25).to({y:-54.3},2).to({y:-61.5},2,cjs.Ease.get(-0.99)).to({y:-55.8},2,cjs.Ease.get(1)).to({y:-61.5},2,cjs.Ease.get(-0.99)).to({y:-56.8},2,cjs.Ease.get(1)).wait(8).to({rotation:-2,x:-1.2,y:-55.5},6).to({rotation:0,x:-0.2,y:-56.8},6).wait(1).to({scaleY:1.01,skewX:-11.6,skewY:-3,x:-0.7,y:-54.9},4).to({scaleY:1,skewX:0,skewY:0,x:-0.2,y:-56.8},3).to({regY:0.1,rotation:3.4,x:1.4,y:-56.4},1).to({regY:0,rotation:-9.3,x:8.5,y:-57.3},4).to({rotation:-5.5,x:-0.2,y:-56.8},4).to({rotation:0.5,x:2.6,y:-55.2},4).to({rotation:-1.5,y:-56.3},3).to({rotation:3.7,x:3.6,y:-55.3},4).to({rotation:0,x:-0.2,y:-56.8},5).wait(1).to({regY:0.1,rotation:-2.7,x:-0.9,y:-56.3},4).to({rotation:-1.8,x:-0.4,y:-56.5},4,cjs.Ease.get(1)).wait(7).to({regY:0,rotation:0,x:-0.2,y:-56.8},4).wait(1).to({rotation:-5.7,x:-3.5,y:-57.8},4,cjs.Ease.get(1)).to({regY:0.1,rotation:3.4,x:1.1,y:-55.1},4).to({regY:0,rotation:2.2,x:0.6,y:-56.3},3).wait(7).to({rotation:0,x:-0.2,y:-56.8},4).wait(1).to({rotation:2.5,x:2.1,y:-57},0).wait(1).to({rotation:3.5,x:3,y:-57.1},0).wait(7).to({rotation:0,x:-0.2,y:-56.8},5).wait(1).to({rotation:-1.5,x:-2.1,y:-55.6},4,cjs.Ease.get(1)).to({rotation:1.2,x:0.2,y:-56.7},5,cjs.Ease.get(1)).to({rotation:-1,x:-0.7,y:-56.8},4,cjs.Ease.get(-0.99)).to({rotation:1.2,x:0.2,y:-56.7},5,cjs.Ease.get(1)).to({rotation:-1,x:-0.7,y:-56.8},4,cjs.Ease.get(-0.99)).to({rotation:0.4,x:0,y:-56.7},5,cjs.Ease.get(1)).to({rotation:0,x:-0.2,y:-56.8},3,cjs.Ease.get(-0.99)).wait(20).to({rotation:-1.2,x:-1.6,y:-55.4},3,cjs.Ease.get(1)).to({rotation:0,x:-0.2,y:-59.9},4).to({rotation:1,x:0.1,y:-56.1},4).to({rotation:0,x:-0.2,y:-56.8},2).wait(2).to({rotation:-0.7,y:-56.4},10).to({rotation:0,y:-56.8},11).wait(1).to({rotation:-1.8},7).to({rotation:0},9).wait(1).to({rotation:-1.8},9).to({rotation:0},9).wait(20).to({rotation:-3.4,x:-1.4,y:-56.5},5).to({rotation:5.5,x:1.5,y:-57.2},4).to({rotation:5.1,x:1.4},5).to({rotation:0,x:-0.2,y:-56.8},5).wait(1).to({rotation:-3.4,x:-1.4,y:-56.5},5).to({rotation:5.5,x:1.5,y:-57.2},4).to({rotation:5.1,x:1.4},5).to({rotation:0,x:-0.2,y:-56.8},5).wait(1).to({rotation:-5.5,x:-1.2,y:-57.2},7).wait(4).to({rotation:0,x:-0.2,y:-56.8},8).wait(1).to({rotation:5.2,x:2.2,y:-56.6},7).wait(4).to({rotation:0,x:-0.2,y:-56.8},8).wait(1).to({regY:0.1,rotation:-2.5,x:-1.4},4).to({regY:0,rotation:5.6,x:2,y:-56.5},5,cjs.Ease.get(-0.99)).to({rotation:4.7,x:1.6,y:-56.6},3).wait(7).to({rotation:0,x:-0.2,y:-56.8},5).wait(1).to({rotation:3,x:1,y:-57.7},3).to({rotation:5.7,x:2.1,y:-55.9},3).to({rotation:4.9,x:1.8,y:-56.4},3).wait(13).to({rotation:0,x:-0.2,y:-56.8},5).wait(21).to({y:-56.2},3).to({y:-56.8},3).to({y:-56},3).to({y:-56.8},4).wait(5).to({rotation:-2,x:-1.2,y:-55.5},6).to({rotation:0,x:-0.2,y:-56.8},6).wait(1).to({rotation:-5.5,x:-1.2,y:-57.2},7).wait(4).to({rotation:0,x:-0.2,y:-56.8},8).wait(1).to({rotation:5.2,x:2.2,y:-56.6},7).wait(4).to({rotation:0,x:-0.2,y:-56.8},8).wait(1).to({rotation:2.7,x:0.9,y:-57.1},2,cjs.Ease.get(-0.99)).to({regY:0.1,rotation:1.4},3,cjs.Ease.get(1)).wait(7).to({regY:0,rotation:0,x:-0.2,y:-56.8},3).wait(1).to({scaleY:1.01,skewX:-11.6,skewY:-3,x:-0.1,y:-57.1},4).to({scaleY:1,skewX:0,skewY:0,x:-0.2,y:-56.8},3).to({regY:0.1,rotation:3.4,x:1.4,y:-56.4},1).to({regY:0,rotation:-9.3,x:7.5,y:-57.3},4).to({rotation:-5.5,x:0.2,y:-56.8},4).to({rotation:0.5,x:1.6,y:-55.2},4).to({rotation:-1.5,x:2.6,y:-56.3},3).to({rotation:3.7,x:3.6,y:-55.3},4).to({rotation:0,x:-0.2,y:-56.8},5).wait(1).to({regY:0.1,rotation:-2.7,x:-0.9,y:-56.3},4).to({rotation:-1.8,x:-0.4,y:-56.5},4,cjs.Ease.get(1)).wait(7).to({regY:0,rotation:0,x:-0.2,y:-56.8},4).wait(34).to({rotation:-3.2,x:-1.7,y:-56.7},4).to({rotation:1.5,x:0.3,y:-56.6},3).to({rotation:-0.1,x:-0.3,y:-56.7},3).to({regY:0.1,rotation:-0.8,x:-0.6,y:-56.8},1).to({rotation:0.2,x:0,y:-56.7},4).wait(14).to({rotation:0.2},0).to({regY:0,rotation:0,x:-0.2,y:-56.8},4).to({_off:true},5).wait(8).to({x:0.1,y:-58.3,_off:false},0).wait(9).to({y:-55.5},8).to({y:-58.3},8).to({_off:true},31).wait(302));

	// ・item_back_lower
	this.instance_17 = new lib.item_back_lower_3();
	this.instance_17.setTransform(-0.9,-39.2);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(1).to({_off:false},0).wait(9).to({y:-40.1},8).to({y:-39.1},8).wait(37).to({rotation:-1.5,x:2.3,y:-36.8},3).to({rotation:-12,x:-4,y:-51.6},5).to({rotation:-16.2,x:-6.8,y:-40.7},4).to({rotation:-15.2,x:-6.3,y:-41.4},3).wait(3).to({rotation:0,x:-0.8,y:-39.1},5).wait(3).to({rotation:-4.9,x:-1.5,y:-36.2},4).to({rotation:5.5,x:-4.1,y:-38.8},5).wait(3).to({rotation:0,x:-0.8,y:-39.1},5).wait(1).to({rotation:-4.9,x:-1.5,y:-36.2},4).to({rotation:5.5,x:-4.1,y:-38.8},5).wait(3).to({rotation:0,x:-0.8,y:-39.1},5).wait(21).to({rotation:5.2,x:0},7).wait(4).to({rotation:0,x:-0.8},8).wait(21).to({rotation:5.2,x:0},7).wait(4).to({rotation:0,x:-0.8},8).wait(1).to({rotation:2.7,x:-0.4,y:-39.5},2,cjs.Ease.get(-0.99)).wait(10).to({rotation:0,x:-0.8,y:-39.1},3).wait(1).to({y:-33.7},4).to({rotation:-9.2,x:-2.1,y:-41.2},5,cjs.Ease.get(-0.99)).to({rotation:-5.2,x:-1.7,y:-40},4,cjs.Ease.get(1)).wait(6).to({rotation:0,x:-0.8,y:-39.1},4).wait(1).to({rotation:10.2,x:4.3,y:-46.9},5).to({rotation:11.4,x:5.2,y:-40.9},4).to({rotation:10.2,x:4.3},4).wait(5).to({rotation:0,x:-0.8,y:-39.1},5).wait(25).to({y:-36.6},2).to({y:-43.8},2,cjs.Ease.get(-0.99)).to({y:-38.1},2,cjs.Ease.get(1)).to({y:-43.8},2,cjs.Ease.get(-0.99)).to({y:-39.1},2,cjs.Ease.get(1)).wait(8).to({rotation:-2,x:-1.2,y:-37.8},6).to({rotation:0,x:-0.8,y:-39.1},6).wait(1).to({rotation:-4.1,x:-2.3,y:-36.8},4).to({rotation:0.7,x:-1.1,y:-39.6},3).to({rotation:0,x:-0.8,y:-39.1},1).to({rotation:2.2,x:1,y:-40.6},4).to({rotation:-1.4,x:-1.6,y:-39.3},4).to({rotation:-0.3,x:1,y:-39.6},4).to({rotation:3,x:-0.6,y:-39.1},3).to({rotation:1.7,x:0.3,y:-40.1},4).to({rotation:0,x:-0.8,y:-39.1},5).wait(1).to({rotation:-4.7,x:-0.6,y:-38.7},4).to({rotation:-1.8,x:-0.5,y:-38.9},4,cjs.Ease.get(1)).wait(7).to({rotation:0,x:-0.8,y:-39.1},4).wait(1).to({rotation:-5.7,x:-2.3,y:-40.1},4,cjs.Ease.get(1)).to({rotation:4.7,x:-0.4,y:-38},4).to({rotation:2.2,x:-0.5,y:-38.6},3).wait(7).to({rotation:0,x:-0.8,y:-39.1},4).wait(1).to({rotation:2.5,x:0.7,y:-39.4},0).wait(1).to({rotation:3.5,x:1.3,y:-39.5},0).wait(7).to({rotation:0,x:-0.8,y:-39.1},5).wait(1).to({rotation:-1.5,x:-2.2,y:-37.9},4,cjs.Ease.get(1)).to({rotation:1.2,x:-0.7,y:-39},5,cjs.Ease.get(1)).to({rotation:-1,x:-1,y:-39.1},4,cjs.Ease.get(-0.99)).to({rotation:1.2,x:-0.7,y:-39},5,cjs.Ease.get(1)).to({rotation:-1,x:-1,y:-39.1},4,cjs.Ease.get(-0.99)).to({rotation:0.4,x:-0.8,y:-39},5,cjs.Ease.get(1)).to({rotation:0,y:-39.1},3,cjs.Ease.get(-0.99)).wait(20).to({rotation:-1.2,x:-1.8,y:-37.6},3,cjs.Ease.get(1)).to({rotation:0,x:-0.8,y:-42.2},4).to({rotation:1,x:-0.7,y:-38.4},4).to({rotation:0,x:-0.8,y:-39.1},2).wait(2).to({y:-38.7},10).to({y:-39.1},11).wait(56).to({rotation:-3.4,x:-0.9,y:-38.8},5).to({rotation:5.5,x:-0.7,y:-39.6},4).to({rotation:5.1,x:-0.6,y:-39.7},5).to({rotation:0,x:-0.8,y:-39.1},5).wait(1).to({rotation:-3.4,x:-0.9,y:-38.8},5).to({rotation:5.5,x:-0.7,y:-39.6},4).to({rotation:5.1,x:-0.6,y:-39.7},5).to({rotation:0,x:-0.8,y:-39.1},5).wait(21).to({rotation:5.2,x:0},7).wait(4).to({rotation:0,x:-0.8},8).wait(1).to({rotation:-2.5,x:-1.2,y:-39.2},4).to({rotation:5.6,x:-0.2,y:-39},5,cjs.Ease.get(-0.99)).to({rotation:4.7,x:-0.3},3).wait(7).to({rotation:0,x:-0.8,y:-39.1},5).wait(1).to({rotation:3,x:-0.4,y:-40.1},3).to({rotation:5.7,x:0,y:-38.3},3).to({rotation:4.9,x:-0.1,y:-38.8},3).wait(13).to({rotation:0,x:-0.8,y:-39.1},5).wait(21).to({y:-38.5},3).to({y:-39.1},3).to({y:-38.3},3).to({y:-39.1},4).wait(5).to({rotation:-2,x:-1.2,y:-37.8},6).to({rotation:0,x:-0.8,y:-39.1},6).wait(21).to({rotation:5.2,x:0},7).wait(4).to({rotation:0,x:-0.8},8).wait(1).to({rotation:2.7,x:-0.4,y:-39.5},2,cjs.Ease.get(-0.99)).wait(10).to({rotation:0,x:-0.8,y:-39.1},3).wait(1).to({rotation:-4.1,x:-1.7,y:-39},4).to({rotation:0.7,x:-1.1,y:-39.6},3).to({rotation:0,x:-0.8,y:-39.1},1).to({rotation:2.2,x:0,y:-40.6},4).to({rotation:-1.4,x:-1,y:-39.3},4).to({rotation:-0.3,x:0,y:-39.6},4).to({rotation:3,x:-0.6,y:-39.1},3).to({rotation:1.7,x:0.3,y:-40.1},4).to({rotation:0,x:-0.8,y:-39.1},5).wait(1).to({rotation:-4.7,x:-0.6,y:-38.7},4).to({rotation:-1.8,x:-0.5,y:-38.9},4,cjs.Ease.get(1)).wait(7).to({rotation:0,x:-0.8,y:-39.1},4).wait(34).to({rotation:-3.2,x:-1.3,y:-39},4).to({rotation:1.5,x:-0.6},3).to({rotation:-0.8,x:-0.9,y:-39.1},4).to({rotation:0.2,x:-0.7,y:-39},4).wait(14).to({rotation:0.2},0).to({rotation:0,x:-0.8,y:-39.1},4).to({_off:true},5).wait(8).to({_off:false},0).wait(9).to({y:-37.6},8).to({y:-39.1},8).to({_off:true},31).wait(302));

	// ・hair_tail_left
	this.instance_18 = new lib.hair_tail_left_3();
	this.instance_18.setTransform(29.1,-131.7,1,1,0,0,0,0,-0.3);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(1).to({_off:false},0).wait(9).to({regY:0,rotation:-1.2,x:29.4,y:-132},8).to({rotation:0,x:29.1,y:-131.3},8).wait(2).to({rotation:-4.5,x:23,y:-133.7},7).to({rotation:0,x:29.1,y:-131.3},9).wait(2).to({rotation:-4.5,x:23,y:-133.7},7).to({rotation:0,x:29.1,y:-131.3},9).wait(1).to({rotation:-0.1,x:23.3,y:-127.4},3).to({rotation:9.7,x:23.1,y:-136.3},5).to({rotation:-6,x:14.4,y:-128.7},4).to({rotation:-2.8,y:-130.2},3).wait(3).to({rotation:0,x:29.1,y:-131.3},5).wait(3).to({rotation:-4.9,x:20,y:-130.7},4).to({rotation:5.5,x:34.6,y:-127.7},5).wait(3).to({rotation:0,x:29.1,y:-131.3},5).wait(1).to({rotation:-4.9,x:20,y:-130.7},4).to({rotation:5.5,x:34.6,y:-127.7},5).wait(3).to({rotation:0,x:29.1,y:-131.3},5).wait(1).to({rotation:-7.4,x:19.8,y:-135},7).wait(4).to({rotation:0,x:29.1,y:-131.3},8).wait(1).to({rotation:12.8,x:44.3,y:-122.9},7).wait(4).to({rotation:0,x:29.1,y:-131.3},8).wait(1).to({rotation:-7.4,x:19.8,y:-135},7).wait(4).to({rotation:0,x:29.1,y:-131.3},8).wait(1).to({rotation:12.8,x:44.3,y:-122.9},7).wait(4).to({rotation:0,x:29.1,y:-131.3},8).wait(1).to({regY:-0.2,y:-131.6},0).to({rotation:4,x:35,y:-129.8},2,cjs.Ease.get(-0.99)).to({regX:0,regY:-0.1,rotation:-0.8,x:32.2,y:-130.8},3,cjs.Ease.get(1)).to({regX:0,regY:-0.2,rotation:2.5,x:32.3,y:-130.9},3).wait(4).to({rotation:0,x:29.1,y:-131.6},3).wait(1).to({x:24.6,y:-127.1},4).to({regY:-0.1,rotation:-11,x:18.9,y:-136.1},5,cjs.Ease.get(-0.99)).to({rotation:0.3,x:19.3,y:-134.9},4,cjs.Ease.get(1)).to({rotation:-2.5},4).wait(2).to({regY:-0.2,rotation:0,x:29.1,y:-131.6},4).wait(1).to({regY:0,y:-131.3},0).to({rotation:13.4,x:50.2,y:-132.4},5).to({rotation:7.8,x:52.9,y:-125.4},4).to({rotation:10.2,x:50.2,y:-126.4},4).wait(5).to({rotation:0,x:29.1,y:-131.3},5).wait(25).to({y:-128.8},2).to({scaleY:0.94,rotation:1.7,y:-136.1},2,cjs.Ease.get(-0.99)).to({scaleY:1,rotation:-2.5,y:-130.3},2,cjs.Ease.get(1)).to({scaleY:0.97,rotation:1.5,y:-136.1},2,cjs.Ease.get(-0.99)).to({scaleY:1,rotation:-3,y:-131.3},2,cjs.Ease.get(1)).to({rotation:0},2).wait(6).to({rotation:-5.1,x:21.7,y:-132.6},6).to({rotation:0,x:29.1,y:-131.3},6).wait(1).to({rotation:6.3,x:18.4},4).to({rotation:1.4,x:30.5,y:-129.8},3).to({rotation:2,x:31.9,y:-129.2},1).to({rotation:-10.1,x:27.5,y:-133.4},4).to({rotation:0.5,x:20.6,y:-134.2},4).to({rotation:10.7,x:35,y:-131.8},4).to({rotation:-1,x:30.3,y:-133},3).to({rotation:0,x:31.2,y:-131.8},4).to({x:29.1,y:-131.3},5).wait(1).to({regY:-0.2,y:-131.6},0).to({rotation:-5.4,x:23.3,y:-133.1},4).to({rotation:-1.2,x:25,y:-132.8},4,cjs.Ease.get(1)).to({rotation:-3},2).wait(5).to({rotation:0,x:29.1,y:-131.6},4).wait(1).to({rotation:-4.7,x:17.8,y:-135.3},4,cjs.Ease.get(1)).to({rotation:6.2,x:35.1,y:-128},4).to({regY:-0.1,rotation:-4.6,x:33.1,y:-129.8},3).to({rotation:0.9,x:33},3).wait(4).to({rotation:0.9},0).to({regY:-0.2,rotation:0,x:29.1,y:-131.6},4).wait(1).to({rotation:2.3,x:34.9,y:-130.5},0).wait(1).to({rotation:5.7,x:37,y:-130},0).to({rotation:7.2},1,cjs.Ease.get(1)).to({rotation:3.5},3).wait(3).to({rotation:0,x:29.1,y:-131.6},5).wait(1).to({rotation:0,x:24.9,y:-131.2},4,cjs.Ease.get(1)).to({rotation:1.2,x:31.2,y:-130.9},5,cjs.Ease.get(1)).to({rotation:-1,x:27,y:-132.2},4,cjs.Ease.get(-0.99)).to({rotation:1.2,x:31.2,y:-130.9},5,cjs.Ease.get(1)).to({rotation:-1,x:27,y:-132.2},4,cjs.Ease.get(-0.99)).to({rotation:0.4,x:29.9,y:-131.3},5,cjs.Ease.get(1)).to({rotation:0,x:29.1,y:-131.6},3,cjs.Ease.get(-0.99)).wait(11).wait(9).to({regY:0,y:-131.3},0).to({rotation:5,x:25.8,y:-130.6},3,cjs.Ease.get(1)).to({rotation:-3.5,x:29.1,y:-134.4},4).to({rotation:1,x:30.9,y:-130.1},4).to({rotation:0,x:29.1,y:-131.3},2).wait(2).to({rotation:-1.4,x:27.1,y:-132.3},10).to({rotation:0,x:29.1,y:-131.3},11).wait(1).to({rotation:-4.5,x:23,y:-133.7},7).to({rotation:0,x:29.1,y:-131.3},9).wait(1).to({rotation:-3.2,x:23,y:-133.7},9).to({rotation:0,x:29.1,y:-131.3},9).wait(20).to({rotation:-3.4,x:23.2,y:-132.8},5).to({rotation:5.5,x:38,y:-128.5},4).to({rotation:5.1,x:37.4,y:-128.9},5).to({rotation:0,x:29.1,y:-131.3},5).wait(1).to({rotation:-3.4,x:23.2,y:-132.8},5).to({rotation:5.5,x:38,y:-128.5},4).to({rotation:5.1,x:37.4,y:-128.9},5).to({rotation:0,x:29.1,y:-131.3},5).wait(1).to({rotation:-7.4,x:19.8,y:-135},7).wait(4).to({rotation:0,x:29.1,y:-131.3},8).wait(1).to({rotation:12.8,x:44.3,y:-122.9},7).wait(4).to({rotation:0,x:29.1,y:-131.3},8).wait(1).to({rotation:-5.4,x:24.4,y:-132.2},4).to({rotation:10.1,x:41.5,y:-125.8},5,cjs.Ease.get(-0.99)).to({rotation:2.4,x:40,y:-126.5},3).to({rotation:6},2).wait(5).to({rotation:4.3},0).to({rotation:0,x:29.1,y:-131.3},5).wait(1).to({rotation:9,x:34.5,y:-130.5},3).to({rotation:12.4,x:38.9,y:-127.2},3).to({rotation:2.5,x:37.7,y:-128.1},3).to({rotation:4.9},3).wait(10).to({rotation:0,x:29.1,y:-131.3},5).wait(21).to({rotation:-3,y:-130.7},3).to({rotation:0,y:-131.3},3).to({rotation:-2.3,y:-130.5},3).to({rotation:0,y:-131.3},4).wait(5).to({rotation:-5.1,x:21.7,y:-132.6},6).to({rotation:0,x:29.1,y:-131.3},6).wait(1).to({rotation:-7.4,x:19.8,y:-135},7).wait(4).to({rotation:0,x:29.1,y:-131.3},8).wait(1).to({rotation:12.8,x:44.3,y:-122.9},7).wait(4).to({rotation:0,x:29.1,y:-131.3},8).wait(1).to({regY:-0.2,y:-131.6},0).to({rotation:4,x:35,y:-129.8},2,cjs.Ease.get(-0.99)).to({regX:0,regY:-0.1,rotation:-0.8,x:32.2,y:-130.8},3,cjs.Ease.get(1)).to({regX:0,regY:-0.2,rotation:2.5,x:32.3,y:-130.9},3).wait(4).to({rotation:0,x:29.1,y:-131.6},3).wait(1).to({regY:0,y:-131.3},0).to({rotation:-0.9,x:19,y:-133.5},4).to({rotation:5.9,x:32.3,y:-127.9},3).to({rotation:7.3,x:35.6,y:-126.2},1).to({rotation:-10.1,x:26.4,y:-134.1},4).to({rotation:0.5,x:20,y:-134.2},4).to({rotation:6.5,x:31,y:-130.2},4).to({rotation:-1,x:29.9,y:-133},3).to({rotation:0,x:31.6,y:-132.6},4).to({x:29.1,y:-131.3},5).wait(1).to({regY:-0.2,y:-131.6},0).to({rotation:-5.4,x:23.3,y:-133.1},4).to({rotation:-1.2,x:25,y:-132.8},4,cjs.Ease.get(1)).to({rotation:-3},2).wait(5).to({rotation:0,x:29.1,y:-131.6},4).wait(34).to({rotation:-3.2,x:23.1,y:-133.1},4).to({rotation:1.5,x:31.7,y:-130.6},3).to({rotation:-0.8,x:27.4,y:-132.1},4).to({rotation:0.2,x:29.5,y:-131.4},4).wait(14).to({rotation:0.2},0).to({rotation:0,x:29.1,y:-131.6},4).to({_off:true},5).wait(366));

	// ・hair_tail_left
	this.instance_19 = new lib.hair_tail_left_small();
	this.instance_19.setTransform(28.9,-115.9);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(920).wait(8).to({_off:false},0).wait(9).to({rotation:-3.8,x:28.1,y:-116.2},8).to({rotation:0,x:28.9,y:-115.8},8).to({_off:true},31).wait(302));

	// ・hair_tail_center
	this.instance_20 = new lib.hair_tail_center_3();
	this.instance_20.setTransform(14.5,-135);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(1).to({_off:false},0).wait(9).to({rotation:-1.2,y:-133.4},8).to({rotation:0,y:-134.9},8).wait(2).to({rotation:-4.5,x:8.2,y:-136.1},7).to({rotation:0,x:14.5,y:-134.9},9).wait(2).to({rotation:-4.5,x:8.2,y:-136.1},7).to({rotation:0,x:14.5,y:-134.9},9).wait(1).to({x:12,y:-129.9},3).to({rotation:-4,x:7.9,y:-143},5).to({rotation:4.3,x:0,y:-132.3},4).to({rotation:-2.7,y:-133.8},3).wait(3).to({rotation:0,x:14.5,y:-134.9},5).wait(3).to({rotation:-4.9,x:5.2,y:-133},4).to({rotation:5.5,x:20.4,y:-132.7},5).wait(3).to({rotation:0,x:14.5,y:-134.9},5).wait(1).to({rotation:-4.9,x:5.2,y:-133},4).to({rotation:5.5,x:20.4,y:-132.7},5).wait(3).to({rotation:0,x:14.5,y:-134.9},5).wait(1).to({rotation:-7.4,x:4.9,y:-136.6},7).wait(4).to({rotation:0,x:14.5,y:-134.9},8).wait(1).to({rotation:10.6,x:27.2,y:-130.5},7).wait(4).to({rotation:0,x:14.5,y:-134.9},8).wait(1).to({rotation:-7.4,x:4.9,y:-136.6},7).wait(4).to({rotation:0,x:14.5,y:-134.9},8).wait(1).to({rotation:10.6,x:27.2,y:-130.5},7).wait(4).to({rotation:0,x:14.5,y:-134.9},8).wait(1).to({rotation:3.7,x:20.6,y:-134.1},2,cjs.Ease.get(-0.99)).to({rotation:1.8,x:17.8,y:-134.7},3,cjs.Ease.get(1)).wait(7).to({rotation:0,x:14.5,y:-134.9},3).wait(1).to({rotation:1.4,x:9.9,y:-129.8},4).to({rotation:-5.2,x:4.2,y:-138.2},5,cjs.Ease.get(-0.99)).to({rotation:-5.2,x:4.6,y:-137},4,cjs.Ease.get(1)).wait(6).to({rotation:0,x:14.5,y:-134.9},4).wait(1).to({rotation:10.2,x:36.6,y:-138.5},5).to({rotation:11.4,x:39.4,y:-131.8},4).to({rotation:10.2,x:36.6,y:-132.5},4).wait(5).to({rotation:0,x:14.5,y:-134.9},5).wait(25).to({y:-132.4},2).to({y:-139.7},2,cjs.Ease.get(-0.99)).to({y:-133.9},2,cjs.Ease.get(1)).to({y:-139.7},2,cjs.Ease.get(-0.99)).to({y:-134.9},2,cjs.Ease.get(1)).wait(8).to({rotation:-5.1,x:6.8,y:-134.8},6).to({rotation:0,x:14.5,y:-134.9},6).wait(1).to({rotation:-2.8,x:6.1,y:-133.3},4).to({rotation:-2.1,x:13.6,y:-135.1},3).to({rotation:2,x:17.6,y:-135.7},1).to({rotation:-12.8,x:7.5,y:-137.9},4).to({rotation:-3,x:2.5,y:-134.8},4).to({rotation:1.2,x:20.5,y:-135.7},4).to({rotation:-1,x:18.1,y:-136.3},3).to({rotation:0,x:16.6,y:-135.4},4).to({x:14.5,y:-134.9},5).wait(1).to({rotation:-4.9,x:8.5,y:-135.4},4).to({rotation:-3,x:10.2},4,cjs.Ease.get(1)).wait(7).to({rotation:0,x:14.5,y:-134.9},4).wait(1).to({rotation:-5.7,x:3,y:-137.1},4).to({rotation:3.4,x:20.7,y:-132.3},4).to({rotation:2.2,x:18.6,y:-133.8},3).wait(7).to({rotation:0,x:14.5,y:-134.9},4).wait(1).to({rotation:2.5,x:20.4,y:-134.4},0).wait(1).to({rotation:3.5,x:22.6,y:-134.2},0).wait(7).to({rotation:0,x:14.5,y:-134.9},5).wait(1).to({rotation:-1.5,x:10.2,y:-134.1},4,cjs.Ease.get(1)).to({rotation:1.2,x:16.7,y:-134.5},5,cjs.Ease.get(1)).to({rotation:-1,x:12.3,y:-135.2},4,cjs.Ease.get(-0.99)).to({rotation:1.2,x:16.7,y:-134.5},5,cjs.Ease.get(1)).to({rotation:-1,x:12.3,y:-135.2},4,cjs.Ease.get(-0.99)).to({rotation:0.4,x:15.3,y:-134.8},5,cjs.Ease.get(1)).to({rotation:0,x:14.5,y:-134.9},3,cjs.Ease.get(-0.99)).wait(20).to({rotation:-1.2,x:11.1,y:-133.8},3,cjs.Ease.get(1)).to({rotation:0,x:14.5,y:-138},4).to({rotation:1,x:16.3,y:-134},4).to({rotation:0,x:14.5,y:-134.9},2).wait(2).to({rotation:-2.2,x:12.5,y:-134.2},10).to({rotation:0,x:14.5,y:-134.9},11).wait(1).to({rotation:-4.5,x:8.2,y:-136.1},7).to({rotation:0,x:14.5,y:-134.9},9).wait(1).to({rotation:-4.5,x:8.2,y:-136.1},9).to({rotation:0,x:14.5,y:-134.9},9).wait(20).to({rotation:-3.4,x:8.4,y:-135.5},5).to({rotation:5.5,x:23.8,y:-133.5},4).to({rotation:5.1,x:23.1,y:-133.8},5).to({rotation:0,x:14.5,y:-134.9},5).wait(1).to({rotation:-3.4,x:8.4,y:-135.5},5).to({rotation:5.5,x:23.8,y:-133.5},4).to({rotation:5.1,x:23.1,y:-133.8},5).to({rotation:0,x:14.5,y:-134.9},5).wait(1).to({rotation:-7.4,x:4.9,y:-136.6},7).wait(4).to({rotation:0,x:14.5,y:-134.9},8).wait(1).to({rotation:10.6,x:27.2,y:-130.5},7).wait(4).to({rotation:0,x:14.5,y:-134.9},8).wait(1).to({rotation:-2.5,x:9.6,y:-135.1},4).to({rotation:8.6,x:27.7,y:-131.5},5,cjs.Ease.get(-0.99)).to({rotation:7.7,x:26,y:-132},3).wait(7).to({rotation:0,x:14.5,y:-134.9},5).wait(1).to({rotation:3,x:20.1},3).to({rotation:5.7,x:24.7,y:-132.2},3).to({rotation:4.9,x:23.4,y:-132.9},3).wait(13).to({rotation:0,x:14.5,y:-134.9},5).wait(21).to({y:-134.3},3).to({y:-134.9},3).to({y:-134.1},3).to({y:-134.9},4).wait(5).to({rotation:-5.1,x:6.8,y:-134.8},6).to({rotation:0,x:14.5,y:-134.9},6).wait(1).to({rotation:-7.4,x:4.9,y:-136.6},7).wait(4).to({rotation:0,x:14.5,y:-134.9},8).wait(1).to({rotation:10.6,x:27.2,y:-130.5},7).wait(4).to({rotation:0,x:14.5,y:-134.9},8).wait(1).to({rotation:3.7,x:20.6,y:-134.1},2,cjs.Ease.get(-0.99)).to({rotation:1.8,x:17.8,y:-134.7},3,cjs.Ease.get(1)).wait(7).to({rotation:0,x:14.5,y:-134.9},3).wait(1).to({rotation:-2.8,x:1.9,y:-137.6},4).to({rotation:2.2,x:16,y:-134.5},3).to({rotation:7.3,x:19.5,y:-132},1).to({rotation:-12.8,x:8.5,y:-135.7},4).to({rotation:-3,x:2,y:-134.8},4).to({rotation:1.2,x:14.1,y:-134.6},4).to({rotation:-1,x:13.5,y:-136.3},3).to({rotation:0,x:17,y:-136.2},4).to({x:14.5,y:-134.9},5).wait(1).to({rotation:-4.9,x:8.5,y:-135.4},4).to({rotation:-3,x:10.2},4,cjs.Ease.get(1)).wait(7).to({rotation:0,x:14.5,y:-134.9},4).wait(34).to({rotation:-3.2,x:8.3,y:-135.6},4).to({rotation:1.5,x:17.2,y:-134.4},3).to({rotation:-0.8,x:12.7,y:-135.2},4).to({rotation:0.2,x:14.9,y:-134.9},4).wait(14).to({rotation:0.2},0).to({rotation:0,x:14.5},4).to({_off:true},5).wait(8).to({y:-134.8,_off:false},0).wait(9).to({rotation:-1.2,x:13,y:-135.1},8).to({rotation:0,x:14.5,y:-134.8},8).to({_off:true},31).wait(302));

	// ・hair_tail_right
	this.instance_21 = new lib.hair_tail_right_3();
	this.instance_21.setTransform(-17.1,-134.7);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(1).to({_off:false},0).wait(9).to({rotation:1.5,x:-16,y:-134.9},8).to({rotation:0,x:-17,y:-134.6},8).wait(2).to({rotation:-4.5,x:-23.3,y:-133.2},7).to({rotation:0,x:-17,y:-134.6},9).wait(2).to({rotation:-4.5,x:-23.3,y:-133.2},7).to({rotation:0,x:-17,y:-134.6},9).wait(1).to({x:-22.7,y:-125.6},3).to({rotation:9.1,x:-21.5,y:-144.8},5).to({rotation:-7,x:-31.7,y:-131.9},4).to({rotation:-2.5,y:-133.4},3).to({rotation:-2.5},3).to({rotation:0,x:-17,y:-134.6},5).wait(3).to({rotation:-4.9,x:-26.2,y:-129.9},4).to({rotation:5.5,x:-11,y:-135.5},5).wait(3).to({rotation:0,x:-17,y:-134.6},5).wait(1).to({rotation:-4.9,x:-26.2,y:-129.9},4).to({rotation:5.5,x:-11,y:-135.5},5).wait(3).to({rotation:0,x:-17,y:-134.6},5).wait(1).to({rotation:-7.4,x:-26.4,y:-132.1},7).wait(4).to({rotation:0,x:-17,y:-134.6},8).wait(1).to({rotation:10.6,x:-3.9,y:-136},7).wait(4).to({rotation:0,x:-17,y:-134.6},8).wait(1).to({rotation:-7.4,x:-26.4,y:-132.1},7).wait(4).to({rotation:0,x:-17,y:-134.6},8).wait(1).to({rotation:10.6,x:-3.9,y:-136},7).wait(4).to({rotation:0,x:-17,y:-134.6},8).wait(1).to({rotation:5,x:-10.9,y:-135.9},2,cjs.Ease.get(-0.99)).to({rotation:0.2,x:-13.8,y:-135.4},3,cjs.Ease.get(1)).to({rotation:2.6},3).wait(4).to({rotation:0,x:-17,y:-134.6},3).wait(1).to({rotation:-2,x:-21.6,y:-128.1},4).to({rotation:-9.2,x:-27.2,y:-134.8},5,cjs.Ease.get(-0.99)).to({rotation:1.1,x:-26.8,y:-133.6},4,cjs.Ease.get(1)).to({rotation:-1.2},4).wait(2).to({rotation:-1.2},0).to({rotation:0,x:-17,y:-134.6},4).wait(1).to({rotation:14.5,x:5.3,y:-143.8},5).to({rotation:8.2,x:8.2,y:-137.8},4).to({rotation:10.2,x:5.3},4).wait(5).to({rotation:0,x:-17,y:-134.6},5).wait(25).to({y:-132.1},2).to({scaleY:0.93,rotation:-0.3,y:-139.4},2,cjs.Ease.get(-0.99)).to({scaleY:1,rotation:2.2,y:-133.6},2,cjs.Ease.get(1)).to({scaleY:0.98,rotation:-0.8,y:-139.4},2,cjs.Ease.get(-0.99)).to({scaleY:1,rotation:3.2,y:-134.6},2,cjs.Ease.get(1)).to({rotation:0},2).wait(6).to({rotation:-5.1,x:-24.5,y:-131.5},6).to({rotation:0,x:-17,y:-134.6},6).wait(1).to({rotation:-10.7,x:-26.6,y:-130.5},4).to({rotation:5.5,x:-15.2,y:-136.6},3).to({rotation:2,x:-14,y:-136.5},1).to({rotation:-17,x:-19.7,y:-132.5},4).to({rotation:0,x:-25.6,y:-132.2},4).to({rotation:8.5,x:-11,y:-136.1},4).to({rotation:-1,x:-15.7,y:-134},3).to({rotation:0,x:-14.9,y:-135.1},4).to({x:-17,y:-134.6},5).wait(1).to({rotation:-5.2,x:-22.9,y:-132.8},4).to({rotation:-2.2,x:-21.2,y:-133.3},4,cjs.Ease.get(1)).to({rotation:-3},2).wait(5).to({rotation:0,x:-17,y:-134.6},4).wait(1).to({rotation:-3.5,x:-28.3,y:-133.5},4).to({rotation:5.4,x:-10.9,y:-133.9},4).to({rotation:-0.8,x:-13,y:-134.7},3).to({rotation:1.2},3).wait(4).to({rotation:1.2},0).to({rotation:0,x:-17,y:-134.6},4).wait(1).to({rotation:2.5,x:-11.1,y:-135.6},0).wait(1).to({rotation:4.9,x:-8.9,y:-135.9},0).to({rotation:6.2},1,cjs.Ease.get(1)).to({rotation:3.5},3).wait(3).to({rotation:0,x:-17,y:-134.6},5).wait(1).to({rotation:0.5,x:-21.3,y:-132.9},4,cjs.Ease.get(1)).to({rotation:1.2,x:-14.9,y:-134.9},5,cjs.Ease.get(1)).to({rotation:-1,x:-19.3,y:-134.3},4,cjs.Ease.get(-0.99)).to({rotation:1.2,x:-14.9,y:-134.9},5,cjs.Ease.get(1)).to({rotation:-1,x:-19.3,y:-134.3},4,cjs.Ease.get(-0.99)).to({rotation:0.4,x:-16.2,y:-134.7},5,cjs.Ease.get(1)).to({rotation:0,x:-17,y:-134.6},3,cjs.Ease.get(-0.99)).wait(20).to({rotation:2.8,x:-20.4,y:-132.7},3,cjs.Ease.get(1)).to({rotation:-5.8,x:-17,y:-137.7},4).to({rotation:1,x:-15.2,y:-134.2},4).to({rotation:0,x:-17,y:-134.6},2).wait(2).to({rotation:-0.2,x:-19.1,y:-134.1},10).to({rotation:0,x:-17,y:-134.6},11).wait(1).to({rotation:-4.5,x:-23.3,y:-133.2},7).to({rotation:0,x:-17,y:-134.6},9).wait(1).to({rotation:-2.5,x:-23.3,y:-133.2},9).to({rotation:0,x:-17,y:-134.6},9).wait(20).to({rotation:-3.4,x:-23.1,y:-133.2},5).to({rotation:5.5,x:-7.6,y:-136.3},4).to({rotation:5.1,x:-8.3},5).to({rotation:0,x:-17,y:-134.6},5).wait(1).to({rotation:-3.4,x:-23.1,y:-133.2},5).to({rotation:5.5,x:-7.6,y:-136.3},4).to({rotation:5.1,x:-8.3},5).to({rotation:0,x:-17,y:-134.6},5).wait(1).to({rotation:-7.4,x:-26.4,y:-132.1},7).wait(4).to({rotation:0,x:-17,y:-134.6},8).wait(1).to({rotation:10.6,x:-3.9,y:-136},7).wait(4).to({rotation:0,x:-17,y:-134.6},8).wait(1).to({rotation:-5.1,x:-22,y:-133.3},4).to({rotation:10.1,x:-3.7,y:-136},5,cjs.Ease.get(-0.99)).to({rotation:4.2,x:-5.4,y:-135.9},3).to({rotation:6.2},2).wait(5).to({rotation:0,x:-17,y:-134.6},5).wait(1).to({rotation:6.8,x:-11.4,y:-136.3},3).to({rotation:8.1,x:-6.8,y:-135},3).to({rotation:2.7,x:-8.1,y:-135.4},3).to({rotation:4.9},3).wait(10).to({rotation:0,x:-17,y:-134.6},5).wait(21).to({rotation:3.5,y:-134},3).to({rotation:0,y:-134.6},3).to({rotation:2.5,y:-133.8},3).to({rotation:0,y:-134.6},4).wait(5).to({rotation:-5.1,x:-24.5,y:-131.5},6).to({rotation:0,x:-17,y:-134.6},6).wait(1).to({rotation:-7.4,x:-26.4,y:-132.1},7).wait(4).to({rotation:0,x:-17,y:-134.6},8).wait(1).to({rotation:10.6,x:-3.9,y:-136},7).wait(4).to({rotation:0,x:-17,y:-134.6},8).wait(1).to({rotation:5,x:-10.9,y:-135.9},2,cjs.Ease.get(-0.99)).to({rotation:0.2,x:-13.8,y:-135.4},3,cjs.Ease.get(1)).to({rotation:2.6},3).wait(4).to({rotation:0,x:-17,y:-134.6},3).wait(1).to({rotation:-7.5,x:-27.9,y:-133.2},4).to({rotation:3.3,x:-13.8,y:-138.8},3).to({rotation:8.5,x:-9.4,y:-137.8},1).to({rotation:-10.3,x:-20.8,y:-133.2},4).to({rotation:-1.5,x:-25.3,y:-132.2},4).to({rotation:5.8,x:-12.8,y:-136.5},4).to({rotation:-1,x:-16.1,y:-134},3).to({rotation:0,x:-14.5,y:-135.9},4).to({x:-17,y:-134.6},5).wait(1).to({rotation:-5.2,x:-22.9,y:-132.8},4).to({rotation:-2.2,x:-21.2,y:-133.3},4,cjs.Ease.get(1)).to({rotation:-3},2).wait(5).to({rotation:0,x:-17,y:-134.6},4).wait(34).to({rotation:-3.2,x:-23.2,y:-133.4},4).to({rotation:1.5,x:-14.3,y:-134.9},3).to({rotation:-0.8,x:-18.8,y:-134.4},4).to({rotation:0.2,x:-16.5,y:-134.7},4).wait(14).to({rotation:0.2},0).to({rotation:0,x:-17,y:-134.6},4).to({_off:true},5).wait(366));

	// ・hair_tail_right
	this.instance_22 = new lib.hair_tail_right_small();
	this.instance_22.setTransform(-27,-115.7);
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(920).wait(8).to({_off:false},0).wait(9).to({rotation:1.7,x:-24.7,y:-116.5},8).to({rotation:0,x:-26.9,y:-115.6},8).to({_off:true},31).wait(302));

	// ・hair_cue_left
	this.instance_23 = new lib.hair_cue_left_3();
	this.instance_23.setTransform(19.3,-85.4);
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(1).to({_off:false},0).wait(9).to({y:-84.1},8).to({y:-85.3},8).wait(2).to({rotation:-4.5,x:16.9,y:-87},7).to({rotation:0,x:19.3,y:-85.3},9).wait(2).to({rotation:-4.5,x:16.9,y:-87},7).to({rotation:0,x:19.3,y:-85.3},9).wait(1).to({y:-82.8},3).to({rotation:8.4,x:7.9,y:-91.5},5).to({rotation:-4.5,x:2.1,y:-81.4},4).to({rotation:0,y:-82.9},3).wait(3).to({x:19.3,y:-85.3},5).wait(3).to({rotation:-4.9,x:14.4,y:-84},4).to({rotation:5.5,x:20.4,y:-82.9},5).wait(3).to({rotation:0,x:19.3,y:-85.3},5).wait(1).to({rotation:-4.9,x:14.4,y:-84},4).to({rotation:5.5,x:20.4,y:-82.9},5).wait(3).to({rotation:0,x:19.3,y:-85.3},5).wait(1).to({rotation:-7.4,x:16.1,y:-88.1},7).wait(4).to({rotation:0,x:19.3,y:-85.3},8).wait(1).to({rotation:12.8,x:24.5,y:-80.1},7).wait(4).to({rotation:0,x:19.3,y:-85.3},8).wait(1).to({rotation:-7.4,x:16.1,y:-88.1},7).wait(4).to({rotation:0,x:19.3,y:-85.3},8).wait(1).to({rotation:12.8,x:24.5,y:-80.1},7).wait(4).to({rotation:0,x:19.3,y:-85.3},8).wait(1).to({rotation:3.7,x:22.2,y:-84.3},2,cjs.Ease.get(-0.99)).to({rotation:1.8,x:21,y:-85},3,cjs.Ease.get(1)).wait(7).to({rotation:0,x:19.3,y:-85.3},3).wait(1).to({rotation:-2.3,x:16.8,y:-80.4},4).to({rotation:-8,x:13.6,y:-89.2},5,cjs.Ease.get(-0.99)).to({rotation:-5.2,x:14,y:-88},4,cjs.Ease.get(1)).wait(6).to({rotation:0,x:19.3,y:-85.3},4).wait(1).to({rotation:10.9,x:32.4,y:-88.8},5).to({rotation:9.5,x:34.2,y:-82.3},4).to({rotation:10.2,x:32.4,y:-82.8},4).wait(5).to({rotation:0,x:19.3,y:-85.3},5).wait(25).to({y:-82.8},2).to({y:-90.1},2,cjs.Ease.get(-0.99)).to({y:-84.3},2,cjs.Ease.get(1)).to({y:-90.1},2,cjs.Ease.get(-0.99)).to({y:-85.3},2,cjs.Ease.get(1)).wait(8).to({rotation:-5.1,x:16.2,y:-86},6).to({rotation:0,x:19.3,y:-85.3},6).wait(1).to({rotation:6,x:14,y:-84},4).to({rotation:7.9,x:19.1,y:-84.5},3).to({rotation:2,x:20.9,y:-85.7},1).to({rotation:-17.8,x:24.7,y:-87.1},4).to({rotation:1.7,x:17.7,y:-87.3},4).to({rotation:7.7,x:24.4,y:-85.9},4).to({rotation:-1,x:23.7,y:-87},3).to({rotation:0,x:21.4,y:-85.8},4).to({x:19.3,y:-85.3},5).wait(1).to({rotation:-5.4,x:16.8,y:-86.3},4).to({rotation:-3,x:17.7,y:-86.2},4,cjs.Ease.get(1)).wait(7).to({rotation:0,x:19.3,y:-85.3},4).wait(1).to({rotation:-4.2,x:12.9,y:-88.3},4).to({rotation:5.2,x:22.5,y:-82.6},4).to({rotation:2.2,x:21.4,y:-84.1},3).wait(7).to({rotation:0,x:19.3,y:-85.3},4).wait(1).to({rotation:2.5,x:23,y:-84.7},0).wait(1).to({rotation:3.5,x:24.3,y:-84.5},0).wait(7).to({rotation:0,x:19.3,y:-85.3},5).wait(1).to({rotation:-1.5,x:16.5,y:-84.7},4,cjs.Ease.get(1)).to({rotation:1.2,x:20.4,y:-84.9},5,cjs.Ease.get(1)).to({rotation:-1,x:18.1,y:-85.8},4,cjs.Ease.get(-0.99)).to({rotation:1.2,x:20.4,y:-84.9},5,cjs.Ease.get(1)).to({rotation:-1,x:18.1,y:-85.8},4,cjs.Ease.get(-0.99)).to({rotation:0.4,x:19.7,y:-85.1},5,cjs.Ease.get(1)).to({rotation:0,x:19.3,y:-85.3},3,cjs.Ease.get(-0.99)).wait(20).to({rotation:-1.2,x:17.1,y:-84.4},3,cjs.Ease.get(1)).to({rotation:0,x:19.3,y:-88.4},4).to({rotation:1,x:20.2,y:-84.3},4).to({rotation:0,x:19.3,y:-85.3},2).wait(2).to({rotation:-1,x:18.2,y:-85.8},10).to({rotation:0,x:19.3,y:-85.3},11).wait(1).to({rotation:-4.5,x:16.9,y:-87},7).to({rotation:0,x:19.3,y:-85.3},9).wait(1).to({rotation:-4.5,x:16.9,y:-87},9).to({rotation:0,x:19.3,y:-85.3},9).wait(20).to({rotation:-3.4,x:16.3,y:-86.3},5).to({rotation:5.5,x:23.8,y:-83.7},4).to({rotation:5.1,x:23.5,y:-84},5).to({rotation:0,x:19.3,y:-85.3},5).wait(1).to({rotation:-3.4,x:16.3,y:-86.3},5).to({rotation:5.5,x:23.8,y:-83.7},4).to({rotation:5.1,x:23.5,y:-84},5).to({rotation:0,x:19.3,y:-85.3},5).wait(1).to({rotation:-7.4,x:16.1,y:-88.1},7).wait(4).to({rotation:0,x:19.3,y:-85.3},8).wait(1).to({rotation:12.8,x:24.5,y:-80.1},7).wait(4).to({rotation:0,x:19.3,y:-85.3},8).wait(1).to({rotation:-2.5,x:16.6,y:-85.8},4).to({rotation:8.6,x:24.9,y:-81.8},5,cjs.Ease.get(-0.99)).to({rotation:7.7,x:24.1,y:-82.2},3).wait(7).to({rotation:0,x:19.3,y:-85.3},5).wait(1).to({rotation:7,x:22.2,y:-85.1},3).to({rotation:5.7,x:24.5,y:-82.4},3).to({rotation:4.9,x:23.9,y:-83.1},3).wait(13).to({rotation:0,x:19.3,y:-85.3},5).wait(21).to({rotation:-0.7,y:-84.7},3).to({rotation:0,y:-85.3},3).to({rotation:-0.8,y:-84.5},3).to({rotation:0,y:-85.3},4).wait(5).to({rotation:-5.1,x:16.2,y:-86},6).to({rotation:0,x:19.3,y:-85.3},6).wait(1).to({rotation:-7.4,x:16.1,y:-88.1},7).wait(4).to({rotation:0,x:19.3,y:-85.3},8).wait(1).to({rotation:12.8,x:24.5,y:-80.1},7).wait(4).to({rotation:0,x:19.3,y:-85.3},8).wait(1).to({rotation:3.7,x:22.2,y:-84.3},2,cjs.Ease.get(-0.99)).to({rotation:1.8,x:21,y:-85},3,cjs.Ease.get(1)).wait(7).to({rotation:0,x:19.3,y:-85.3},3).wait(1).to({rotation:6,x:14.6,y:-86.2},4).to({rotation:7.9,x:19.1,y:-84.5},3).to({rotation:7.3,x:20.7,y:-84},1).to({rotation:-17.8,x:23.6,y:-87.8},4).to({rotation:1.7,x:17.2,y:-87.3},4).to({rotation:7.7,x:22.6,y:-86.3},4).to({rotation:-1,x:23.3,y:-87},3).to({rotation:0,x:21.8,y:-86.6},4).to({x:19.3,y:-85.3},5).wait(1).to({rotation:-5.4,x:16.8,y:-86.3},4).to({rotation:-3,x:17.7,y:-86.2},4,cjs.Ease.get(1)).wait(7).to({rotation:0,x:19.3,y:-85.3},4).wait(34).to({rotation:-3.2,x:16,y:-86.4},4).to({rotation:1.5,x:20.7,y:-84.7},3).to({rotation:-0.8,x:18.3,y:-85.7},4).to({rotation:0.2,x:19.5,y:-85.2},4).wait(14).to({rotation:0.2},0).to({rotation:0,x:19.3,y:-85.3},4).to({_off:true},5).wait(8).to({x:19.5,y:-85.2,_off:false},0).wait(9).to({rotation:-4.3,y:-86.2},8).to({rotation:0,y:-85.2},8).to({_off:true},31).wait(302));

	// ・hair_cue_center
	this.instance_24 = new lib.hair_cue_center_1();
	this.instance_24.setTransform(13.3,-82.2);
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(1).to({_off:false},0).wait(9).to({y:-80.9},8).to({y:-82.1},8).wait(2).to({rotation:-4.5,x:11.3,y:-83.4},7).to({rotation:0,x:13.3,y:-82.1},9).wait(2).to({rotation:-4.5,x:11.3,y:-83.4},7).to({rotation:0,x:13.3,y:-82.1},9).wait(1).to({y:-79.6},3).to({rotation:8.9,x:3.4,y:-88.9},5).to({rotation:-4,x:3.8,y:-83.1},4).to({rotation:0},3).wait(3).to({x:13.3,y:-82.1},5).wait(3).to({rotation:-4.9,x:8.8,y:-80.3},4).to({rotation:5.5,x:14.2},5).wait(3).to({rotation:0,x:13.3,y:-82.1},5).wait(1).to({rotation:-4.9,x:8.8,y:-80.3},4).to({rotation:5.5,x:14.2},5).wait(3).to({rotation:0,x:13.3,y:-82.1},5).wait(1).to({rotation:-7.4,x:10.7,y:-84.2},7).wait(4).to({rotation:0,x:13.3,y:-82.1},8).wait(1).to({rotation:15.8,x:20.8,y:-77.2},7).wait(4).to({rotation:0,x:13.3,y:-82.1},8).wait(1).to({rotation:-7.4,x:10.7,y:-84.2},7).wait(4).to({rotation:0,x:13.3,y:-82.1},8).wait(1).to({rotation:15.8,x:20.8,y:-77.2},7).wait(4).to({rotation:0,x:13.3,y:-82.1},8).wait(1).to({rotation:3.3,x:16,y:-81.5},2,cjs.Ease.get(-0.99)).to({rotation:0.7,x:15,y:-81.9},3,cjs.Ease.get(1)).to({rotation:1.8},3).wait(4).to({rotation:0,x:13.3,y:-82.1},3).wait(1).to({rotation:-2.3,x:11,y:-77},4).to({rotation:-11.7,x:8,y:-85.5},5,cjs.Ease.get(-0.99)).to({rotation:-5.2,x:8.4,y:-84.3},4,cjs.Ease.get(1)).wait(6).to({rotation:0,x:13.3,y:-82.1},4).wait(1).to({rotation:11.2,x:26,y:-86.7},5).to({rotation:8.7,x:27.8,y:-80.3},4).to({rotation:10.2,x:26,y:-80.7},4).wait(5).to({rotation:0,x:13.3,y:-82.1},5).wait(25).to({y:-79.6},2).to({y:-86.9},2,cjs.Ease.get(-0.99)).to({y:-81.1},2,cjs.Ease.get(1)).to({y:-86.9},2,cjs.Ease.get(-0.99)).to({y:-82.1},2,cjs.Ease.get(1)).wait(8).to({rotation:-5.1,x:10.6,y:-82.3},6).to({rotation:0,x:13.3,y:-82.1},6).wait(1).to({rotation:-2.8,x:11.9,y:-82.6},4).to({rotation:2.2,x:12.7,y:-81.8},3).to({rotation:2,x:14.5,y:-83},1).to({rotation:-12.8,x:14.6,y:-86},4).to({rotation:-3,x:12.8,y:-84},4).to({rotation:1.2,x:18.1,y:-83},4).to({rotation:-1,x:18,y:-83.5},3).to({rotation:0,x:15.4,y:-82.6},4).to({x:13.3,y:-82.1},5).wait(1).to({rotation:-5.1,x:11.2,y:-82.6},4).to({rotation:-2.3,x:12},4,cjs.Ease.get(1)).to({rotation:-3},2).wait(5).to({rotation:0,x:13.3,y:-82.1},4).wait(1).to({rotation:-4.7,x:7.3,y:-84.5},4).to({rotation:6.7,x:16.3,y:-79.8},4).to({rotation:0.8,x:15.3,y:-81.1},3).to({rotation:2.2},3).wait(4).to({rotation:0,x:13.3,y:-82.1},4).wait(1).to({rotation:2.5,x:16.9,y:-81.8},0).wait(1).to({rotation:3.5,x:18.2,y:-81.6},0).wait(7).to({rotation:0,x:13.3,y:-82.1},5).wait(1).to({rotation:-1.5,x:10.6,y:-81.4},4,cjs.Ease.get(1)).to({rotation:1.2,x:14.4,y:-81.8},5,cjs.Ease.get(1)).to({rotation:-1,x:12.2,y:-82.5},4,cjs.Ease.get(-0.99)).to({rotation:1.2,x:14.4,y:-81.8},5,cjs.Ease.get(1)).to({rotation:-1,x:12.2,y:-82.5},4,cjs.Ease.get(-0.99)).to({rotation:0.4,x:13.7,y:-82},5,cjs.Ease.get(1)).to({rotation:0,x:13.3,y:-82.1},3,cjs.Ease.get(-0.99)).wait(20).to({rotation:-1.2,x:11.2,y:-81},3,cjs.Ease.get(1)).to({rotation:0,x:13.3,y:-85.2},4).to({rotation:1,x:14.2,y:-81.2},4).to({rotation:0,x:13.3,y:-82.1},2).wait(2).to({rotation:-1,x:12.3,y:-82.4},10).to({rotation:0,x:13.3,y:-82.1},11).wait(1).to({rotation:-4.5,x:11.3,y:-83.4},7).to({rotation:0,x:13.3,y:-82.1},9).wait(1).to({rotation:-4.5,x:11.3,y:-83.4},9).to({rotation:0,x:13.3,y:-82.1},9).wait(20).to({rotation:-3.4,x:10.6,y:-82.7},5).to({rotation:5.5,x:17.6,y:-81.1},4).to({rotation:5.1,x:17.3,y:-81.3},5).to({rotation:0,x:13.3,y:-82.1},5).wait(1).to({rotation:-3.4,x:10.6,y:-82.7},5).to({rotation:5.5,x:17.6,y:-81.1},4).to({rotation:5.1,x:17.3,y:-81.3},5).to({rotation:0,x:13.3,y:-82.1},5).wait(1).to({rotation:-7.4,x:10.7,y:-84.2},7).wait(4).to({rotation:0,x:13.3,y:-82.1},8).wait(1).to({rotation:15.8,x:20.8,y:-77.2},7).wait(4).to({rotation:0,x:13.3,y:-82.1},8).wait(1).to({rotation:-2.5,x:10.8,y:-82.3},4).to({rotation:8.6,x:18.6,y:-79.5},5,cjs.Ease.get(-0.99)).to({rotation:7.7,x:17.8,y:-79.9},3).wait(7).to({rotation:0,x:13.3,y:-82.1},5).wait(1).to({rotation:3,x:16,y:-82.3},3).to({rotation:5.7,x:18.3,y:-79.8},3).to({rotation:4.9,x:17.7,y:-80.4},3).wait(13).to({rotation:0,x:13.3,y:-82.1},5).wait(21).to({y:-81.5},3).to({y:-82.1},3).to({y:-81.3},3).to({y:-82.1},4).wait(5).to({rotation:-5.1,x:10.6,y:-82.3},6).to({rotation:0,x:13.3,y:-82.1},6).wait(1).to({rotation:-7.4,x:10.7,y:-84.2},7).wait(4).to({rotation:0,x:13.3,y:-82.1},8).wait(1).to({rotation:15.8,x:20.8,y:-77.2},7).wait(4).to({rotation:0,x:13.3,y:-82.1},8).wait(1).to({rotation:3.3,x:16,y:-81.5},2,cjs.Ease.get(-0.99)).to({rotation:0.7,x:15,y:-81.9},3,cjs.Ease.get(1)).to({rotation:1.8},3).wait(4).to({rotation:0,x:13.3,y:-82.1},3).wait(1).to({rotation:-2.8,x:12.5,y:-84.8},4).to({rotation:2.2,x:12.7,y:-81.8},3).to({rotation:7.3,x:14.1,y:-81.9},1).to({rotation:-12.8,x:13.5,y:-86.7},4).to({rotation:-3,x:12.2,y:-84},4).to({rotation:1.2,x:16.3,y:-83.4},4).to({rotation:-1,x:17.6,y:-83.5},3).to({rotation:0,x:15.8,y:-83.4},4).to({x:13.3,y:-82.1},5).wait(1).to({rotation:-5.1,x:11.2,y:-82.6},4).to({rotation:-2.3,x:12},4,cjs.Ease.get(1)).to({rotation:-3},2).wait(5).to({rotation:0,x:13.3,y:-82.1},4).wait(34).to({rotation:-3.2,x:10.3,y:-82.8},4).to({rotation:1.5,x:14.7,y:-81.6},3).to({rotation:-0.8,x:12.4,y:-82.4},4).to({rotation:0.2,x:13.5,y:-82.1},4).wait(14).to({rotation:0.2},0).to({rotation:0,x:13.3},4).to({_off:true},5).wait(8).to({x:10,y:-81.6,_off:false},0).wait(9).to({y:-82.3},8).to({y:-81.6},8).to({_off:true},31).wait(302));

	// ・hair_cue_right
	this.instance_25 = new lib.hair_cue_right_3();
	this.instance_25.setTransform(-15.5,-85.6,1,1,0,0,0,0.1,-0.2);
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(1).to({_off:false},0).wait(9).to({regY:-0.3,y:-84.2},8).to({y:-85.5},8).wait(2).to({rotation:-4.5,x:-17.7,y:-84.3},7).to({rotation:0,x:-15.4,y:-85.5},9).wait(2).to({rotation:-4.5,x:-17.7,y:-84.3},7).to({rotation:0,x:-15.4,y:-85.5},9).wait(1).to({x:-15.9,y:-78},3).to({regY:-0.4,rotation:-8.1,x:-27.1,y:-96.7},5).to({regY:-0.3,rotation:2,x:-33.2,y:-84.1},4).to({rotation:0,x:-30.9,y:-85.8},3).wait(3).to({x:-15.4,y:-85.5},5).wait(3).to({rotation:-4.9,x:-20.3,y:-81},4).to({regX:0,rotation:5.5,x:-14.2,y:-86.4},5).wait(3).to({regX:0.1,rotation:0,x:-15.4,y:-85.5},5).wait(1).to({rotation:-4.9,x:-20.3,y:-81},4).to({regX:0,rotation:5.5,x:-14.2,y:-86.4},5).wait(3).to({regX:0.1,rotation:0,x:-15.4,y:-85.5},5).wait(1).to({regX:0,rotation:-7.4,x:-18.4,y:-83.6},7).wait(4).to({regX:0.1,rotation:0,x:-15.4,y:-85.5},8).wait(1).to({regX:0,regY:-0.4,rotation:10.6,x:-11.4,y:-87.6},7).wait(4).to({regX:0.1,regY:-0.3,rotation:0,x:-15.4,y:-85.5},8).wait(1).to({regX:0,rotation:-7.4,x:-18.4,y:-83.6},7).wait(4).to({regX:0.1,rotation:0,x:-15.4,y:-85.5},8).wait(1).to({regX:0,regY:-0.4,rotation:10.6,x:-11.4,y:-87.6},7).wait(4).to({regX:0.1,regY:-0.3,rotation:0,x:-15.4,y:-85.5},8).wait(1).to({regY:-0.1},0).to({rotation:3.7,x:-12.5,y:-86.8},2,cjs.Ease.get(-0.99)).to({rotation:1.8,x:-13.7,y:-86.2},3,cjs.Ease.get(1)).wait(7).to({rotation:0,x:-15.4,y:-85.5},3).wait(1).to({rotation:-2.3,x:-17.9,y:-79},4).to({regY:-0.2,rotation:-11,x:-21,y:-86.1},5,cjs.Ease.get(-0.99)).to({regY:-0.1,rotation:-5.2,x:-20.6,y:-84.8},4,cjs.Ease.get(1)).wait(6).to({rotation:0,x:-15.4,y:-85.5},4).wait(1).to({regY:-0.3},0).to({rotation:11.4,x:-1.7,y:-95.2},5).to({rotation:8.7,x:0,y:-89.4},4).to({rotation:10.2,x:-1.7,y:-89.2},4).wait(5).to({rotation:0,x:-15.4,y:-85.5},5).wait(25).to({y:-83},2).to({y:-90.2},2,cjs.Ease.get(-0.99)).to({y:-84.5},2,cjs.Ease.get(1)).to({y:-90.2},2,cjs.Ease.get(-0.99)).to({y:-85.5},2,cjs.Ease.get(1)).wait(8).to({rotation:-5.1,x:-18.3,y:-82.8},6).to({rotation:0,x:-15.4,y:-85.5},6).wait(1).to({regX:0,rotation:-11.2,x:-20.2,y:-82.1},4).to({regX:0.1,rotation:-6.5,x:-14.1,y:-84.8},3).to({rotation:2,x:-13.8,y:-87.5},1).to({regX:0,rotation:-16.8,x:-9.8,y:-84.2},4).to({rotation:4,x:-16.8,y:-84.5},4).to({regX:0.1,rotation:6.7,x:-10.3,y:-87.1},4).to({rotation:-1,x:-11,y:-86.2},3).to({rotation:0,x:-13.3,y:-86},4).to({x:-15.4,y:-85.5},5).wait(1).to({regY:-0.1},0).to({rotation:-5.6,x:-17.8,y:-83.9},4).to({regX:0,rotation:-3,x:-17,y:-84.4},4,cjs.Ease.get(1)).wait(7).to({regX:0.1,rotation:0,x:-15.4,y:-85.5},4).wait(1).to({rotation:-5.7,x:-21.6,y:-84.8},4).to({regX:0,rotation:4.9,x:-12.3},4).to({regX:0.1,rotation:2.2,x:-13.3,y:-85.6},3).wait(7).to({rotation:0,x:-15.4,y:-85.5},4).wait(1).to({regY:-0.2,rotation:2.5,x:-11.7,y:-86.5},0).wait(1).to({regY:-0.1,rotation:3.5,x:-10.3,y:-86.7},0).wait(7).to({rotation:0,x:-15.4,y:-85.5},5).wait(1).to({rotation:-1.5,x:-18.2,y:-83.9},4,cjs.Ease.get(1)).to({rotation:1.2,x:-14.3,y:-85.8},5,cjs.Ease.get(1)).to({rotation:-1,x:-16.6,y:-85.2},4,cjs.Ease.get(-0.99)).to({rotation:1.2,x:-14.3,y:-85.8},5,cjs.Ease.get(1)).to({rotation:-1,x:-16.6,y:-85.2},4,cjs.Ease.get(-0.99)).to({rotation:0.4,x:-15,y:-85.5},5,cjs.Ease.get(1)).to({rotation:0,x:-15.4},3,cjs.Ease.get(-0.99)).wait(11).wait(9).to({regY:-0.3},0).to({rotation:-1.2,x:-17.6,y:-83.6},3,cjs.Ease.get(1)).to({rotation:0,x:-15.4,y:-88.6},4).to({rotation:1,x:-14.5,y:-85},4).to({rotation:0,x:-15.4,y:-85.5},2).wait(2).to({rotation:-1,x:-16.5,y:-85.2},10).to({rotation:0,x:-15.4,y:-85.5},11).wait(1).to({rotation:-4.5,x:-17.7,y:-84.3},7).to({rotation:0,x:-15.4,y:-85.5},9).wait(1).to({rotation:-4.5,x:-17.7,y:-84.3},9).to({rotation:0,x:-15.4,y:-85.5},9).wait(20).to({rotation:-3.4,x:-18.5,y:-84.2},5).to({regX:0,rotation:5.5,x:-10.8,y:-87.2},4).to({rotation:5.1,x:-11.1},5).to({regX:0.1,rotation:0,x:-15.4,y:-85.5},5).wait(1).to({rotation:-3.4,x:-18.5,y:-84.2},5).to({regX:0,rotation:5.5,x:-10.8,y:-87.2},4).to({rotation:5.1,x:-11.1},5).to({regX:0.1,rotation:0,x:-15.4,y:-85.5},5).wait(1).to({regX:0,rotation:-7.4,x:-18.4,y:-83.6},7).wait(4).to({regX:0.1,rotation:0,x:-15.4,y:-85.5},8).wait(1).to({regX:0,regY:-0.4,rotation:10.6,x:-11.4,y:-87.6},7).wait(4).to({regX:0.1,regY:-0.3,rotation:0,x:-15.4,y:-85.5},8).wait(1).to({regY:-0.4,rotation:-2.5,x:-18,y:-84.4},4).to({regX:0,regY:-0.3,rotation:8.6,x:-9.6,y:-87.2},5,cjs.Ease.get(-0.99)).to({regX:0.1,rotation:7.7,x:-10.4,y:-87.1},3).wait(7).to({rotation:0,x:-15.4,y:-85.5},5).wait(1).to({regX:0,rotation:3,x:-12.6,y:-87.2},3).to({regX:0.1,rotation:5.7,x:-10,y:-86},3).to({rotation:4.9,x:-10.7,y:-86.3},3).wait(13).to({rotation:0,x:-15.4,y:-85.5},5).wait(21).to({rotation:3.4,x:-15.5,y:-84.9},3).to({rotation:0,x:-15.4,y:-85.5},3).to({rotation:2.2,y:-84.7},3).to({rotation:0,y:-85.5},4).wait(5).to({rotation:-5.1,x:-18.3,y:-82.8},6).to({rotation:0,x:-15.4,y:-85.5},6).wait(1).to({regX:0,rotation:-7.4,x:-18.4,y:-83.6},7).wait(4).to({regX:0.1,rotation:0,x:-15.4,y:-85.5},8).wait(1).to({regX:0,regY:-0.4,rotation:10.6,x:-11.4,y:-87.6},7).wait(4).to({regX:0.1,regY:-0.3,rotation:0,x:-15.4,y:-85.5},8).wait(1).to({regY:-0.1},0).to({rotation:3.7,x:-12.5,y:-86.8},2,cjs.Ease.get(-0.99)).to({rotation:1.8,x:-13.7,y:-86.2},3,cjs.Ease.get(1)).wait(7).to({rotation:0,x:-15.4,y:-85.5},3).wait(1).to({regY:-0.3},0).to({regX:0,rotation:-11.2,x:-19.6,y:-84.3},4).to({rotation:-2.1,x:-15.6,y:-86.4},3).to({regX:0.1,rotation:7.3,x:-13.7,y:-89.1},1).to({regX:0,rotation:-16.8,x:-10.9,y:-84.9},4).to({rotation:4,x:-17.3,y:-84.5},4).to({regX:0.1,rotation:6.7,x:-12.1,y:-87.5},4).to({rotation:-1,x:-11.4,y:-86.2},3).to({rotation:0,x:-12.9,y:-86.8},4).to({x:-15.4,y:-85.5},5).wait(1).to({regY:-0.1},0).to({rotation:-5.6,x:-17.8,y:-83.9},4).to({regX:0,rotation:-3,x:-17,y:-84.4},4,cjs.Ease.get(1)).wait(7).to({regX:0.1,rotation:0,x:-15.4,y:-85.5},4).wait(34).to({rotation:-3.2,x:-18.6,y:-84.4},4).to({regX:0,rotation:1.5,x:-14.1,y:-85.7},3).to({regX:0.1,rotation:-0.8,x:-16.4,y:-85.2},4).to({rotation:0.2,x:-15.2,y:-85.5},4).wait(14).to({rotation:0.2},0).to({rotation:0,x:-15.4},4).to({_off:true},5).wait(8).to({regY:-0.3,x:-15.2,_off:false},0).wait(9).to({rotation:6.2,x:-14.2,y:-83.6},8).to({rotation:0,x:-15.2,y:-85.5},8).to({_off:true},31).wait(302));

	// shadow
	this.instance_26 = new lib.shadow();
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(1).to({_off:false},0).wait(9).to({scaleX:1.02,scaleY:1.02},8).to({scaleX:1,scaleY:1},8).wait(40).to({scaleX:1.36,x:-8.4},5).to({scaleX:1.24,scaleY:0.94,x:-7.8},4).to({scaleX:1.32,scaleY:1},3).wait(3).to({scaleX:1,x:0},5).wait(135).to({scaleX:1.04},4).to({scaleX:1.07,x:1},5,cjs.Ease.get(-0.99)).wait(10).to({scaleX:1,x:0},4).wait(1).to({scaleX:0.88,scaleY:0.88},5).to({scaleX:1,scaleY:1},4).wait(41).to({scaleX:0.82,scaleY:0.82},2).to({scaleX:1,scaleY:1},2).to({scaleX:0.82,scaleY:0.82},2).to({scaleX:1,scaleY:1},2).wait(8).to({scaleX:1.04},6).to({scaleX:1},6).wait(1).to({scaleX:1.11},3).to({scaleX:1},2).wait(1).to({scaleX:1.03,x:-0.6},3).to({scaleX:1,x:0},3).to({scaleX:1.04,x:-0.8},3).to({scaleX:1.06,x:-1.4},2).to({scaleX:1,x:0},3).wait(37).to({scaleX:1.02,x:0.8},4).wait(10).to({scaleX:1,x:0},4).wait(68).to({scaleX:0.83,scaleY:0.83},4).to({alpha:0.012},4).wait(25).to({_off:true},420).wait(8).to({scaleX:1,scaleY:1,alpha:1,_off:false},0).wait(9).to({scaleX:1.02,scaleY:1.02},8).to({scaleX:1,scaleY:1},8).to({_off:true},31).wait(302));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.character_container_core = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{stay2:5,stay1:11,"sit_down":15});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_10 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}
	this.frame_25 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10).call(this.frame_10).wait(4).call(this.frame_14).wait(11).call(this.frame_25).wait(12));

	// c
	this.c = new lib.character_motion_base();

	this.timeline.addTween(cjs.Tween.get(this.c).wait(5).wait(6).to({x:-6.2,y:3.4},0).wait(7).to({x:0,y:0},7).wait(13));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.character_container = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.visible=false;
		
		//初期化
		this.param={};
		this.param.small_character_flg=0;//0:ノーマル, 1:小さい子
		this.param.big_character_flg=0;//0:ノーマル, 1:きらり
		
		this.param.chara_num=0;//話している人数 : 1~5人
		this.param.motion_act="";//動き
		this.param.mode=1;//1:通常, 2:モニターアップ
		
		this.postfix="";//smallならば"_small"がつく
		
		//モーション終わりに返すcallbackの受け皿
		this.param.motion_finish_callback=function(){};
		
		
		//初期設定用関数
		this.init = function(param) {
			this.param = param;
			
			//小さい子対応
			if(this.param.small_character_flg){
				this.postfix="_small";
			}
			else{
				this.postfix="";
			}
			
			//きらり対応
			if (this.param.big_character_flg) {
				this.gotoAndStop(1);
			} else {
				this.gotoAndStop(0);
			}
			
			//座標設定
			this.place_set(this.param.chara_num, this.param.mode);
			
			//初期モーション
			this.motion_set(this.param.motion_act);
			//console.log(this.param.motion_act + this.postfix);
			
			this.visible=true;
		
		}
		
		
		//内部からコールバックを呼び出して引数を埋め込む
		this.callback_set = function(){
			
			this.param.motion_finish_callback(this.param.motion_act);
			
		}
		
		
		//モーション用関数
		this.motion_set = function(motion_act){
			this.param.motion_act = motion_act;
			
			//立ち・座りの位置調整
			if(motion_act.indexOf('_sit') >= 0){
				//座ってる状態は位置を固定
				this.core.gotoAndPlay("stay2");
			}
			else if(motion_act == 'sit_down'){
				//座る動作時
				this.core.gotoAndPlay("sit_down");
			}
			else if(this.param.mode == 2){
				//モニターモード時
				this.core.gotoAndPlay("stay2");
			}
			else {
				//それ以外
				this.core.gotoAndPlay("stay1");
			}
			
			this.core.c.gotoAndPlay(motion_act);
			
		}
		
		
			
		//通常時 座標設定用関数
		this.place_set = function(ch_num, mode_type){
			
			if(mode_type === 1){
				switch(ch_num){
					case 1:
						this.scaleX = this.scaleY = 2.20;
						this.x=151;
						this.y=589;
						break;
					case 2:
						this.scaleX = this.scaleY = 2.10;
						this.x=123;
						this.y=679;
						break;
					case 3:
						this.scaleX = this.scaleY = 1.75;
						this.x=112;
						this.y=670;
						break;
					case 4:
						this.scaleX = this.scaleY = 1.65;
						this.x=111;
						this.y=673;
						break;
					case 5:
						this.scaleX = this.scaleY = 1.53;
						this.x=99;
						this.y=650;
						break;
				}
			}
			else if(mode_type === 2){
				this.scaleX = this.scaleY = 1.70;
				this.x=83;
				this.y=890;
			}
			
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// container
	this.core = new lib.character_container_core();
	this.core.setTransform(0,-84,1,1,0,0,0,0,-84.1);

	this.timeline.addTween(cjs.Tween.get(this.core).wait(1).to({regY:0,scaleX:1.1,scaleY:1.1,y:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);

})(lib2 = lib2||{}, images = images||{}, createjs = createjs||{});
var lib2, images, createjs;