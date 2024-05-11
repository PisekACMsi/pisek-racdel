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
					itemsExist: "Keglji so še vedno na stezi.",
					itemsDontExist: "Kegljev ni več na stezi.",
				},
			},
		},
		// CUSTOM: here you can override and add new blocks, the same way as in blocklyRobot_lib.js
		// context is the same object as inside the function "getContext"
		// strings is equaly the same object string inside "getContext" (is already set to the active language)

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
					"move",
					"moveSimple",
					"forward",
					"forwardSimple",
					"turn",
					"turnAround",
					// "jump",
					// "transport",
					// "destroy",
					// "create",
					// "wait",
					// "nitems",
					// "sensorRowCol",
				],
				// robot:  ["left","right","north","west","east","south","changeRobot", "pickTransportable","dropTransportable"],
			},
			standardBlocks: {
				includeAll: false,
				wholeCategories: [],
				singleBlocks: ["controls_repeat","controls_repeat_ext"],
				excludedBlocks: [],
			},
		},
		startingExample: { //vnaprej podana koda ukazov
			// blockly: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id="Yx#}`-PvOO]HA4c0m7]F" deletable="false" movable="false" editable="false" x="0" y="0"><next><block type="move" id="4,KCbSD;_m-pZxtufj95"><field name="PARAM_0">S</field><value name="PARAM_1"><shadow type="math_number" id="CIspNjAYb7a*vulaV1{P"><field name="NUM">4</field></shadow></value><next><block type="move" id="s1lWGFlqeqK]gPc3tilb"><field name="PARAM_0">W</field><value name="PARAM_1"><shadow type="math_number" id="yq8-SW:u2.g~@}3QWTA0"><field name="NUM">4</field></shadow></value></block></next></block></next></block><additional>{}</additional></xml>',
			blockly: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id="Yx#}`-PvOO]HA4c0m7]F" deletable="false" movable="false" editable="false" x="0" y="0"><next><block type="move" id="4,KCbSD;_m-pZxtufj95"><field name="PARAM_0">E</field><value name="PARAM_1"><shadow type="math_number" id="CIspNjAYb7a*vulaV1{P"><field name="NUM">3</field></shadow></value><next><block type="move" id="s1lWGFlqeqK]gPc3tilb"><field name="PARAM_0">NW</field><value name="PARAM_1"><shadow type="math_number" id="yq8-SW:u2.g~@}3QWTA0"><field name="NUM">5</field></shadow></value><next><block type="move" id="}pY2pu2}UpAjg~+JYQLq"><field name="PARAM_0">E</field><value name="PARAM_1"><shadow type="math_number" id="{N?+_Imy*IsroA[l:sJ)"><field name="NUM">4</field></shadow></value><next><block type="move" id="txqN!bj4}b)oBiIoP_b,"><field name="PARAM_0">SW</field><value name="PARAM_1"><shadow type="math_number" id="mEZiF9Z//mcTnu5mGhYX"><field name="NUM">1</field></shadow></value><next><block type="move" id="#ANz)O@R!Jg#+)11D9jp"><field name="PARAM_0">W</field><value name="PARAM_1"><shadow type="math_number" id="ZDY~eqpH[a3c/|!`!idr"><field name="NUM">1</field></shadow></value></block></next></block></next></block></next></block></next></block></next></block><additional>{}</additional></xml>',
			// blockly: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id="Yx#}`-PvOO]HA4c0m7]F" deletable="false" movable="false" editable="false" x="0" y="0"><next><block type="move" id="4,KCbSD;_m-pZxtufj95"><field name="PARAM_0">W</field><value name="PARAM_1"><shadow type="math_number" id="CIspNjAYb7a*vulaV1{P"><field name="NUM">3</field></shadow></value><next><block type="destroy" id="KKQSCxKu;sV}+gJe?9=)"><field name="PARAM_1">obstacle</field><field name="PARAM_0">2</field><next><block type="move" id="XWv:_2Qbckm|{-94@`u,"><field name="PARAM_0">N</field><value name="PARAM_1"><shadow type="math_number" id="oR6vzE-h~{7oseb?hIAf"><field name="NUM">1</field></shadow></value></block></next></block></next></block></next></block><additional>{}</additional></xml>', 
		},					
		checkEndEveryTurn: false,		//kako pogosto preverjamo uspešnost rešitve
		checkEndCondition:  (context, lastTurn) => { robotEndConditions.checkItemExistence(context, lastTurn, {category: "coin"}, {}, exist=false) },
		computeGrade: robotGradeFunctions.allOrNothing,
			
		border: 0.05,
		backgroundColour: false,
		backgroundTile: 'wooden_floor_vertical.png',
		borderColour: false,

		cellSide: 60,	
		numberOfRobots: 1,
		// only categories: robot, obstacle, transportable, coin, button --> are HARDCODED
		itemTypes: {
			robot0: { img: ["happy_ball_all_8_sides.png"], side: 80, nbStates: 8, offsetX: -10, zOrder: 8,
						category: {'robot': true}, },
			pin: { num: 2, img: "bowling_pin.png", zOrder: 2, category: {'coin':true}, },
			button: { num: 4, img: ["button_unpressed.png","button_unpressed.png"], zOrder: 2, category: {'button':true}, id:1},
			obstacle: { num: 3, img: ["orange_floor.png","yellow_floor.png"], zOrder: 3, category: [{'obstacle':true},{'obstacle':false}], id:1},
		}, 
		ignoreInvalidMoves: false,
	};

	subTask.data = {
		easy: [
			{
				tiles: [
					[1, 2, 2, 2, 2, 2, 1],
					[1, 1, 2, 2, 2, 1, 1],
					[1, 1, 1, 2, 1, 1, 1],
					[1, 1, 1, 1, 1, 1, 1],
					[3, 3, 3, 3, 3, 3, 3],
					[1, 1, 1, 1, 1, 1, 4],
				],
				initItems: [
					{ row: 5, col: 3, dir: 0, type: "robot0" },
				],
			},
		],
	};

	initBlocklySubTask(subTask);	//klic programskega orodja Blockly
}