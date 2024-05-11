function initTask(subTask) {
    subTask.gridInfos = {				//podatki za urejevalnik in vizualno 
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
					itemsExist: "Piki ni našel zvezdice. Poskusi še enkrat. ",
					itemsDontExist: "Piki je našel zvezdico. ",
					itemsCoincide: "Piki je na pravi poti pri zeleni zastavici.",
					itemsDontCoincide: "Piki ni na pravi poti pri zeleni zastavici. Poskusi še enkrat.",
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
			groupByCategory: false,
			generatedBlocks: {
				robot:  [
					"forwardSimple",
					"jump1d",
					"turnAround",
				],
				// robot:  ["left","right","north","west","east","south","changeRobot", "pickTransportable","dropTransportable"],
			},
			standardBlocks: {
				includeAll: false,
				wholeCategories: [],
				singleBlocks: ["controls_repeat_ext"],
				excludedBlocks: [],
			},
		},
		startingExample: { //vnaprej podana koda ukazov
			blockly: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id=",apZweBgOsN=jY/Ey|@I" deletable="false" movable="false" editable="false" x="0" y="0"><next><block type="controls_repeat_ext" id="v51~s}ErGH/!YuiSWB@e"><value name="TIMES"><shadow type="math_number" id="RhWW!7l/M+6Ex)))SwZs"><field name="NUM">7</field></shadow></value><statement name="DO"><block type="forwardSimple" id="!IOvq@z4UQnEhquh4_cy"></block></statement><next><block type="turnAround" id="@a]CD5q8@/I}?6LenExC"><next><block type="controls_repeat_ext" id="nXMF[,F.#J;G3{1O,o3C"><value name="TIMES"><shadow type="math_number" id="StBD7W;9*rSPj]]e8_1Q"><field name="NUM">4</field></shadow></value><statement name="DO"><block type="forwardSimple" id=";-=gYpRj)[q*F-sAhnPu"></block></statement><next><block type="jump1d" id="e_P):!DXoTUJ:)m`En24"><field name="PARAM_0">forward</field><next><block type="forwardSimple" id="q,}39B*67is0Kfpp4Nq7"><next><block type="turnAround" id="1=iZ@w+twRIayQXvB4F-"><next><block type="controls_repeat_ext" id="p1l+N/a0N`j2X5S#_WqA"><value name="TIMES"><shadow type="math_number" id="[+bow+`|s[ljam1O-]iU"><field name="NUM">6</field></shadow></value><statement name="DO"><block type="forwardSimple" id="b?M?dcjJh(ku*|Ik|fC["></block></statement><next><block type="controls_repeat_ext" id="5n~:}2RGyFBOos8G5G_i"><value name="TIMES"><shadow type="math_number" id="bF_HFJ7|wfNJ4KDd[?FJ"><field name="NUM">7</field></shadow></value><statement name="DO"><block type="jump1d" id=")hV=8:3dPzE+YlVEM|=v"><field name="PARAM_0">forward</field></block></statement></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block><additional>{}</additional></xml>',
		},					
		checkEndEveryTurn: false,		//kako pogosto preverjamo uspešnost rešitve
		checkEndCondition:  (context, lastTurn) => { 
			robotEndConditions.checkCombiner(context, lastTurn, [
				(context, lastTurn) => { robotEndConditions.checkItemExistence(context, lastTurn, {category: "coin"}, {}, exist=false) }, 
				(context, lastTurn) => { robotEndConditions.checkItemCoincidence(context, lastTurn, {type: "robot0"}, {category: "goal"}) },
			])
		},
		computeGrade: robotGradeFunctions.allOrNothing,
			
		border: 0.0,
		backgroundColour: 'lightblue',
		// backgroundTile: 'sand.png',
		borderColour: false,

		hasGravity: true,
		cellSide: 60,	
		numberOfRobots: 1,
		// only categories: robot, obstacle, transportable, coin, button --> are HARDCODED
		itemTypes: {
			robot0: { img: ["cowboy_all_8_sides.png"], side: 80, nbStates: 8, offsetX: -14, zOrder: 8,
						category: {'robot': true}, },
			obstacle: { num: 2, img: "dirt.png",  zOrder: 8, category: {'obstacle':true}, },
			obstacle2: { num: 3, img: "rock_formation_with_dirt.png",  zOrder: 8, category: {'obstacle':true}, },
			goal: { num: 5, img: "flag2.png", zOrder: 2, category: {'goal':true}, },
			back1: { num: 4, img: "land.png", zOrder: 2},
			coin: {num: 6, img: "star.png", zOrder: 3, category: {'coin':true} },
		}, 
		ignoreInvalidMoves: false,
	};

	subTask.data = {
		easy: [
			{
				tiles: [
					[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
					[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
					[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
					[3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
					[2, 3, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
					[2, 2, 2, 3, 3, 3, 1, 1, 1, 1, 1, 1, 1, 3, 3],
					[3, 3, 3, 2, 2, 3, 3, 1, 1, 1, 1, 3, 3, 3, 2],
					[3, 4, 3, 3, 3, 2, 3, 1, 1, 1, 3, 3, 2, 2, 2],
					[3, 4, 4, 4, 3, 3, 3, 1, 1, 3, 3, 2, 2, 2, 2],
					[3, 3, 3, 4, 4, 4, 1, 1, 3, 3, 2, 2, 2, 2, 2],
					[2, 2, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2],
					[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
				],
				initItems: [
					{ row: 2, col: 0, value: 0, dir: 0, type: "robot0", id:1},
					{ row: 4, col: 14, type: "goal" },
					{ row: 8, col: 1, type: "coin" },
				],
			},
		],
	};

	initBlocklySubTask(subTask);	//klic programskega orodja Blockly
}