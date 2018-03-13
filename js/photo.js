window.onload = function() {
	var boxs = document.querySelectorAll(".box");
	var content = document.getElementById("content");

	var rot = ['rotateX(180deg)', 'rotateX(-180deg)', 'rotateY(180deg)', 'rotateY(-180deg)'];
	var colors = ['#F7E8ED', '#F2D9E6', '#ECC6DE', '#E0ECF5', '#DDF4DE', '#F0F1D5', '#EEDECD', '#B8E6B3', '#ABE3D8', '#E0E1F5', '#F7E8ED', '#F2D9E6', '#E0ECF5', '#DDF4DE', '#F0F1D5', '#EEDECD', '#B8E6B3', '#ABE3D8', '#DFD1F0', '#6161616'];
	//0 1 2 3
	//console.log(Math.random());
	//console.log(Math.random()*3)
	for(var i = 0; i < boxs.length; i++) {
		boxs[i].onmouseenter = function() {
			var css = rot[Math.round(Math.random() * (rot.length - 1))];
			this.style.transform = 'perspective(1000px) translateZ(150px)' + css;

			document.body.style.background = colors[Math.round(Math.random() * (colors.length - 1))];
		};

		boxs[i].onmouseleave = function() {
			this.style.transform = '';
		};
	}

	document.onmousemove = function(ev) {
		/*
		 * 效果分析
		 * 	1、鼠标往右走，旋转Y轴的正值。往左走，旋转Y轴的负值			横向(clientX)上旋转Y轴
		 * 	2、鼠标往上走，旋转X轴的正值。往下走，旋转X轴的负值			纵向(clientY)上旋转X轴
		 * 	3、旋转是以屏幕的中心为基准点，左与右，上与下旋转的度数都是对应的
		 * 		-4	-3	-2	-1	0	1	2	3	4			想要的
		 * 		0	1	2	3	4	5	6	7	8			实际的
		 * 	
		 */

		/*var deg=ev.clientX-window.innerWidth/2;
		console.log(deg);*/

		/*var deg=ev.clientX/window.innerWidth-0.5;
		console.log(deg);*/

		//旋转X轴
		var x = (0.5 - ev.clientY / window.innerHeight) * 15;

		//旋转Y轴
		var y = (ev.clientX / window.innerWidth - 0.5) * 15;
//		content.style.transform = 'perspective(1000px) rotateX(' + x + 'deg) rotateY(' + y + 'deg)';
	};
};