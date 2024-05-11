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
					success: "Čestitamo, ",
					failure: "Ojoj, ",
					itemsCoincide: "prispel si na cilj.",
					itemsDontCoincide: "cilja nisi dosegel. Poskusi še enkrat.",
				},
			},
		},

		localBlocks: function(context, strings){
			// CUSTOM: first you can define functions for blocks, which need to be attached to "context.robot"
			// this way you can either override existing function definitions from blocklyRobot_lib.js or add new ones.
			// If you are creating new ones, you need to additionaly do the following things:
			// - add strings in languageStrings for keys: "label", "code", "description" and optionaly more,
			// - you need to define the visual design of the block using "customBlocks"
			// If you are making a new function, good advice, always staring with something that works!!
			// - 1st copy an existing block from blocklyRobot_lib.js inside here,
			// - use console.log() and Web Developer Tools to print values in the console, for debugging
			

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
		maxInstructions: 0,
		includeBlocks: {						//dovoljeni ukazi 
			groupByCategory: true,
			generatedBlocks: {
				robot:  [
					"moveSimple",
					"forwardSimple",
					"turn",
					"create",
					"sensorValue",
					"sensorBool",
				],
				// robot:  ["left","right","north","west","east","south","changeRobot", "pickTransportable","dropTransportable"],
			},
			standardBlocks: {
				includeAll: false,
				wholeCategories: ["variables", "logic", "loops",'colour','functions'],
				singleBlocks: ["controls_repeat_ext", "math_number", "math_arithmetic"],
				excludedBlocks: [],
			},
		},
		startingExample: { //vnaprej podana koda ukazov
			blockly: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id=".s-gR[p,s/H,}|xSU2/4" deletable="false" movable="false" editable="false" x="0" y="0"><next><block type="controls_whileUntil" id="YS{i3uWZul9`Ix:pS7F~"><field name="MODE">UNTIL</field><value name="BOOL"><block type="sensorBool" id="MULBSBmG:zs8)tmP.a@H"><field name="PARAM_0">0</field><field name="PARAM_2">category</field><field name="PARAM_1">obstacle</field></block></value><statement name="DO"><block type="controls_whileUntil" id="#gyGWwCBu6)RH+6zPXlg"><field name="MODE">UNTIL</field><value name="BOOL"><block type="logic_operation" id="{zfu[;M+nDXYv{Asez?H" inline="false"><field name="OP">OR</field><value name="A"><block type="sensorBool" id="NIEmtK;svE``YqY#Lq|O"><field name="PARAM_0">0</field><field name="PARAM_2">category</field><field name="PARAM_1">obstacle</field></block></value><value name="B"><block type="sensorBool" id="K`2*~aMA3tbYr4[RZpY{"><field name="PARAM_0">under</field><field name="PARAM_2">undefined</field><field name="PARAM_1">colour</field></block></value></block></value><statement name="DO"><block type="forwardSimple" id="9+JdH,`G?GulQOn!W8tU"></block></statement><next><block type="controls_if" id="?*2aO#)IeF!jqG#X)gem"><value name="IF0"><block type="sensorBool" id="_YyCYHp5ai=eV*I{~lGT"><field name="PARAM_0">0</field><field name="PARAM_2">category</field><field name="PARAM_1">obstacle</field></block></value><statement name="DO0"><block type="controls_flow_statements" id="EDLvE:yT?N7,ds1lAaMT"><field name="FLOW">BREAK</field></block></statement><next><block type="procedures_callnoreturn" id="Ccg)D[qHCKZ!,0,-ys.v"><mutation name="odreagiraj"></mutation><next><block type="controls_whileUntil" id="bf:9tpVnATlNKDLc,Jr|"><field name="MODE">UNTIL</field><value name="BOOL"><block type="sensorBool" id="3=IZ])3TvS*uCAVln#d9"><field name="PARAM_0">under</field><field name="PARAM_2">category</field><field name="PARAM_1">button</field></block></value><statement name="DO"><block type="forwardSimple" id="?mn.6Z7We@GIWmN6*tw@"></block></statement><next><block type="turn" id="B~sg-VJAy;Iet0JTYhPQ"><field name="PARAM_0">4</field><next><block type="controls_whileUntil" id="uO_Q(4Je@0AUknGk3z6/"><field name="MODE">UNTIL</field><value name="BOOL"><block type="sensorBool" id="3,2pY_kc3~Gr#/5BIEaR"><field name="PARAM_0">under</field><field name="PARAM_2">undefined</field><field name="PARAM_1">colour</field></block></value><statement name="DO"><block type="forwardSimple" id="KE70@s/1{PQ_QH)@;e3J"></block></statement><next><block type="procedures_callnoreturn" id="jlJjT(2St*8d(+X*:rC`"><mutation name="odreagiraj"></mutation></block></next></block></next></block></next></block></next></block></next></block></next></block></statement></block></next></block><block type="procedures_defnoreturn" id="vq2zc#=:N|V*e_L]8D?U" x="353" y="188"><field name="NAME">odreagiraj</field><comment pinned="false" h="80" w="160">Opiši to funkcijo...</comment><statement name="STACK"><block type="controls_if" id="7J6m[]phaJbew-bAyJ-{"><mutation else="1"></mutation><value name="IF0"><block type="logic_compare" id=";.4#!S7p4Z1xJrF!C5#!"><field name="OP">EQ</field><value name="A"><block type="sensorValue" id="/z+Ds(Y2(;Qm|iH:o,sc"><field name="PARAM_2">colour</field><field name="PARAM_1">nonspecific</field><field name="PARAM_0">under</field></block></value><value name="B"><block type="colour_picker" id=",HcONjJ/8al(CcIm3Yv#"><field name="COLOUR">#ff0000</field></block></value></block></value><statement name="DO0"><block type="moveSimple" id="#_|3wZGFIF:Z:d0@IY+@"><field name="PARAM_0">E</field></block></statement><statement name="ELSE"><block type="controls_if" id="Jp[Rf:Dku/KB?:UfR.!l"><mutation else="1"></mutation><value name="IF0"><block type="logic_compare" id="/3dCVg#kJ_gJQwE~le(S"><field name="OP">EQ</field><value name="A"><block type="sensorValue" id=".h|A-]{ri(,k+*Hjgz_d"><field name="PARAM_2">colour</field><field name="PARAM_1">nonspecific</field><field name="PARAM_0">under</field></block></value><value name="B"><block type="colour_picker" id="@7QII6~4H{,hOdikN{b,"><field name="COLOUR">#ffff00</field></block></value></block></value><statement name="DO0"><block type="moveSimple" id="ep]1x3zWyo[]vL=74xHW"><field name="PARAM_0">S</field></block></statement><statement name="ELSE"><block type="controls_if" id="m#fz(~x(Xkn/+BH:tj(/"><mutation else="1"></mutation><value name="IF0"><block type="logic_compare" id="Y@TT)#RfYEUdxORds8a{"><field name="OP">EQ</field><value name="A"><block type="sensorValue" id="sRtYWUE[km4:U[vkg(vg"><field name="PARAM_2">colour</field><field name="PARAM_1">nonspecific</field><field name="PARAM_0">under</field></block></value><value name="B"><block type="colour_picker" id="]4SVGjLNb6Nvx|(nxz*r"><field name="COLOUR">#3333ff</field></block></value></block></value><statement name="DO0"><block type="moveSimple" id="HXM=qt)20lEPgyo.1`q:"><field name="PARAM_0">N</field></block></statement><statement name="ELSE"><block type="moveSimple" id="1a@R:+A/rE;TbPs=}/pZ"><field name="PARAM_0">W</field></block></statement></block></statement></block></statement></block></statement></block><additional>{}</additional></xml>',
		},					
		checkEndEveryTurn: false,		//kako pogosto preverjamo uspešnost rešitve
		checkEndCondition: (context, lastTurn) => { robotEndConditions.checkItemCoincidence(context, lastTurn, {type: "robot0"}, {type: "goal"}) },
		computeGrade: robotGradeFunctions.allOrNothing,
			
		border: 0.05,
		backgroundColour: false,
		backgroundTile: 'grass.png',
		borderColour: false,

		cellSide: 60,	
		numberOfRobots: 1,
		// only categories: robot, obstacle, transportable, coin, button --> are HARDCODED
		itemTypes: {
			robot0: { img: "tabornik_all_8_sides.png", side: 60, nbStates: 9, offsetX: 0, zOrder: 8, category: {'robot': true}, },
			goal: { num: 4, img: "flag.png", side: 60, category: {"goal":true} },
			number: { zOrder: 5, category: {'number':true}  },
			paint: { zOrder: 3, id:1, colour: '#ffff00' },
			paint1: { num: 11, zOrder: 3, id:1, colour: ['#ffff00','#ff0000'] },
			paint2: { num: 12, zOrder: 3, id:2, colour: ['#3333ff','#ffff00'] },
			paint3: { num: 13, zOrder: 3, id:3, colour: ['#ff0000','#006600'] },
			paint4: { num: 14, zOrder: 3, id:4, colour: ['#006600','#3333ff'] },
			obstacle: { num: 2, img: "tree_transparent.png", zOrder: 8, category: {'obstacle':true},},
			button: {img: ["button_unpressed.png","button_pressed.png"], zOrder: 1, category: {'button':true}, },
		}, 
		ignoreInvalidMoves: false,
	};

	subTask.data = {
		easy: [
			{
				tiles: [
					[1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
					[2, 2, 1, 1, 2, 4, 2, 1, 1, 2, 2],
					[2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
					[1, 1, 1, 11, 1, 1, 1, 1, 12, 1, 1],
					[1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1],
					[1, 2, 2, 1, 2, 1, 2, 2, 1, 1, 1],
					[2, 2, 1, 1, 1, 1, 2, 2, 1, 1, 1],
					[1, 1, 1, 1, 1, 14, 1, 1, 13, 1, 2],
					[1, 1, 2, 2, 2, 1, 1, 1, 1, 2, 1],
					[1, 2, 1, 2, 1, 2, 1, 1, 2, 1, 2],
				],
				initItems: [
					{ row: 3, col: 0, dir: 0, type: "robot0" },
					{ row: 6, col: 3, type: "button", id:1 },
					{ row: 1, col: 8, type: "button", id:2 },
					{ row: 7, col: 9, type: "button", id:3 }, 
					{ row: 7, col: 1, type: "button", id:4 },
				],
			},
			{
				tiles: [
					[1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
					[2, 2, 1, 1, 2, 1, 2, 1, 1, 2, 2],
					[2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
					[1, 1, 1, 11, 1, 1, 1, 13, 1, 4, 2],
					[1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2],
					[1, 2, 2, 1, 2, 1, 2, 2, 1, 2, 2],
					[2, 2, 1, 1, 1, 1, 2, 2, 1, 2, 1],
				],
				initItems: [
					{ row: 1, col: 3, dir: 2, type: "robot0" },
					{ row: 6, col: 3, type: "button", id:1 },
					{ row: 3, col: 5, type: "button", id:3 },
				],
			},
			// {
			// 	tiles: [
			// 		[1, 101, 102, 1, 104, 102, 1, 1],
			// 		[1, 106, 1, 1, 1, 103, 1, 1],
			// 		[1, 101, 1, 1, 1, 1, 1, 1],
			// 		[1, 104, 1, 1, 1, 1, 1, 1],
			// 		[1, 1, 1, 1, 1, 105, 1, 1],
			// 		[1, 1, 1, 106, 101, 103, 1, 1],
			// 		[1, 1, 1, 1, 1, 1, 1, 1],
			// 		[1, 1, 1, 1, 1, 1, 1, 1],
			// 	],
			// 	initItems: [
			// 		{ row: 3, col: 0, dir: 0, type: "robot0" },
			// 		{ row: 0, col: 2, dir: 0, type: "checkpoint" },
			// 		{ row: 0, col: 4, dir: 0, type: "checkpoint" },
			// 		{ row: 0, col: 5, dir: 0, type: "checkpoint" },
			// 		{ row: 1, col: 1, dir: 0, type: "checkpoint" },
			// 		{ row: 1, col: 5, dir: 0, type: "checkpoint" },
			// 		{ row: 2, col: 1, dir: 0, type: "checkpoint" },
			// 		{ row: 3, col: 1, dir: 0, type: "checkpoint" },
			// 		{ row: 4, col: 5, dir: 0, type: "checkpoint" },
			// 		{ row: 5, col: 3, dir: 0, type: "checkpoint" },
			// 		{ row: 5, col: 4, dir: 0, type: "checkpoint" },
			// 		{ row: 5, col: 5, dir: 0, type: "checkpoint" },
			// 		{ row: 5, col: 2, dir: 0, type: "cilj" },

			// 	],
			// },
		],
	};

	initBlocklySubTask(subTask);	//klic programskega orodja Blockly
}