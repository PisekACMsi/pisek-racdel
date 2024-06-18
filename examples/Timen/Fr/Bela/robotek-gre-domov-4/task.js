function initTask(subTask) {
    subTask.gridInfos = {				//podatki za urejevalnik in vizualno okno
		userTaskData: {
			title: document.title,
			subject: $(".exerciseText").first().text(),
			about: {
				authors: "Razvojna skupina Pišek",
				license: "CC BY-NC 4.0",
			}
		},
		// local library
		// CUSTOM: here you can override the translation from blocklyRobot_lib.js
		// the dictionary tree can be incomplete (have missing values),
		// but the architecture needs to be the same as: "localLanguageStrings"
		languageStrings: {
			sl: {
				startingBlockName: "Program",	
				categories: {				
				   actions: "Gibanje",
				},
				messages:{
					itemsExist: "Robotek ni prišel domov",
				},
	
			},
		},

		localBlocks: function(context, strings){
			var customBlocks = {};
			return customBlocks;
		},

		hideControls: {					//gumbi na urejevalniku
			restart: false,
			saveOrLoad: false,			//gumba za shranjevanje in nalaganje kode ukazov
			loadBestAnswer: false,
			speedSlider: false,
			backToFirst: false,
			nextStep: false,
			goToEnd: false,
		},
		introMaxHeight: "33%",				//maksimalna velikost prostora za navodila
		maxListSize: 100, 						//max. dolžina seznama
		scrollbars: true,
		zoom: {
			controls: true,
			scale: 1,
		},
		actionDelay: 400,				//parameter za časovni zamik med izvajanjem ukazov -  ne deulje??
		blocklyColourTheme: "bwinf",	//izbira seta barv za bloke ukazov
		maxInstructions: 16,
		includeBlocks: {						//dovoljeni ukazi 
			groupByCategory: true,
			generatedBlocks: {
				robot:  [
					"move",
					"forward",// vse smeri
					"turn",
					"turnAround",
					
				],
				// robot:  ["left","right","north","west","east","south","changeRobot", "pickTransportable","dropTransportable"],
			},
			standardBlocks: {
				includeAll: false,
				wholeCategories: [],
				singleBlocks: [],
				excludedBlocks: [],
			},
		},
		startingExample: { //vnaprej podana koda ukazov
			blockly: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id="g[RG~e=aB:orky#Iq!_T" deletable="false" movable="false" editable="false" x="0" y="0"><next><block type="move" id="MbM_//]ZWK/@+4!}{tp!"><field name="PARAM_0">E</field><value name="PARAM_1"><shadow type="math_number" id="iP0c0F0+dX!Z;Pn.etLj"><field name="NUM">1</field></shadow></value><next><block type="controls_repeat_ext" id="k*L/LO+iDjO0A@Bp,/J~"><value name="TIMES"><shadow type="math_number" id=",xJxwac#Ir/zb9K9e3Fw"><field name="NUM">2</field></shadow></value><statement name="DO"><block type="move" id="w7H+#qrT3)qQy]2_1T_m"><field name="PARAM_0">S</field><value name="PARAM_1"><shadow type="math_number" id="f7gS/X2P[[V`1_;Hwqe1"><field name="NUM">1</field></shadow></value></block></statement><next><block type="controls_repeat_ext" id="=4z--0}Kb6=r(x08u9_{"><value name="TIMES"><shadow type="math_number" id="Vpp2hmADGIK8.mo()tj0"><field name="NUM">2</field></shadow></value><statement name="DO"><block type="controls_repeat_ext" id=".]b@wUApPwxFX{W#zKbJ"><value name="TIMES"><shadow type="math_number" id="m5;=R}7:x0v~mYF4lh+x"><field name="NUM">2</field></shadow></value><statement name="DO"><block type="move" id="n9wiOYO;/AdohYa7hn`7"><field name="PARAM_0">E</field><value name="PARAM_1"><shadow type="math_number" id="-LP!.l|(QOT*vd2!(Pa;"><field name="NUM">1</field></shadow></value></block></statement><next><block type="move" id="XIZ!!ml|m[CDUI9bgUye"><field name="PARAM_0">N</field><value name="PARAM_1"><shadow type="math_number" id="]x!kG*:*Vv!`_5!]X5m3"><field name="NUM">1</field></shadow></value><next><block type="controls_repeat_ext" id="j7-xSn.D(zj4B8m#AyP5"><value name="TIMES"><shadow type="math_number" id="SqyzOVR@0H{bEf4](/F["><field name="NUM">2</field></shadow></value><statement name="DO"><block type="move" id=":mkm{iH89T}Fj~Hy)Hd2"><field name="PARAM_0">E</field><value name="PARAM_1"><shadow type="math_number" id="B@v1fHgm~4ri!/SFzy)z"><field name="NUM">1</field></shadow></value></block></statement><next><block type="controls_repeat_ext" id=":~;z[~y[]H*rt2k{OMZ#"><value name="TIMES"><shadow type="math_number" id="B}1}FD92H]2]`#o:K[eY"><field name="NUM">4</field></shadow></value><statement name="DO"><block type="move" id="MoAbL}tkJ)xcAC26}Pnz"><field name="PARAM_0">S</field><value name="PARAM_1"><shadow type="math_number" id="wr.:iWGnm#(WRm{m~6Zw"><field name="NUM">1</field></shadow></value></block></statement></block></next></block></next></block></next></block></statement><next><block type="controls_repeat_ext" id="1)A[W_r8NN::qGS.c*rX"><value name="TIMES"><shadow type="math_number" id="~P6073;K7d;,!rr;9b=n"><field name="NUM">3</field></shadow></value><statement name="DO"><block type="move" id="DbFL;9pWX#cz01~f)p{8"><field name="PARAM_0">E</field><value name="PARAM_1"><shadow type="math_number" id="cP0:3=ouTgj@A:Vw;Vz?"><field name="NUM">1</field></shadow></value></block></statement></block></next></block></next></block></next></block></next></block><additional>{}</additional></xml>',
		},					
		checkEndEveryTurn: false,		//kako pogosto preverjamo uspešnost rešitve
		checkEndCondition:  (context, lastTurn) => { robotEndConditions.checkItemExistence(context, lastTurn, {category: "coin", value: 0}, {}, exist=false).checkReachGreenArea(context, lastTurn)},
		computeGrade: robotGradeFunctions.allOrNothing,
			
		border: 0.05,
		backgroundColour: "white",
		backgroundTile: false,
		borderColour: "grey",

		cellSide: 80,	
		numberOfRobots: 1,
		// only categories: robot, obstacle, transportable, coin, button --> are HARDCODED
		itemTypes: {
			robot0: {img: ["green_robot2.png"], side: 60, nbStates: 9, zOrder: 8, category: {'robot': true}, },
			obstacle: { num: 2, img:["dirt.png"], zOrder: 1, category: {'obstacle': true}},
			coin: {num:3, img:["finish2.png"],zOrder: 8, category:{"coin":true}},
		},

		ignoreInvalidMoves: false,
	};

	subTask.data = {
		easy: [
			{
				tiles: [
					[2, 2, 2, 2, 2, 2, 2, 2, 2],
					[2, 2, 1, 1, 1, 2, 2, 2, 2],
					[2, 2, 1, 2, 1, 1, 2, 2, 2],
					[2, 2, 1, 2, 2, 1, 2, 2, 2],
					[2, 2, 2, 3, 1, 1, 2, 2, 2],
					[2, 2, 2, 2, 2, 2, 2, 2, 2],						
					
				],
				initItems: [
					{ row: 4, col: 3, dir: 0, type: "robot0" },

				],
			},
		],
	};

	initBlocklySubTask(subTask);	//klic programskega orodja Blockly
}