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
					itemsExist: "Izidor no pobral vseh ovcic poskusi še enkrat",
					itemsDontExist: "Izd je pobral vse očke sedaj gre lahko domov",
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
		maxInstructions: 0,
		includeBlocks: {						//dovoljeni ukazi 
			groupByCategory: false,
			generatedBlocks: {
				robot:  [
					"move",
					"forward",
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
			blockly: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id="g[RG~e=aB:orky#Iq!_T" deletable="false" movable="false" editable="false" x="0" y="0"><next><block type="move" id="mCa/}rIE!d!G-VegB4-F"><field name="PARAM_0">E</field><value name="PARAM_1"><shadow type="math_number" id="f9]G#,`VgOKZ(=][WIh3"><field name="NUM">2</field></shadow></value><next><block type="move" id="AlhW-rE@.?/?{;Ms!f`@"><field name="PARAM_0">S</field><value name="PARAM_1"><shadow type="math_number" id="KF@Pem,9VGabdtp*#nBq"><field name="NUM">2</field></shadow></value><next><block type="move" id="M9Eq[;z#Gl[CsZMv,exN"><field name="PARAM_0">W</field><value name="PARAM_1"><shadow type="math_number" id="d,],NF@}5M-OfhFTrTf0"><field name="NUM">4</field></shadow></value></block></next></block></next></block></next></block><additional>{}</additional></xml>',
		},					
		checkEndEveryTurn: false,		//kako pogosto preverjamo uspešnost rešitve
		checkEndCondition:  (context, lastTurn) => { robotEndConditions.checkItemExistence(context, lastTurn, {category: "coin", value: 9}, {}, exist=false).checkReachGreenArea(context, lastTurn)},
		computeGrade: robotGradeFunctions.allOrNothing,
			
		border: 0.05,
		backgroundColour: "white",
		backgroundTile: false,
		borderColour: "grey",

		cellSide: 80,	
		numberOfRobots: 1,
		// only categories: robot, obstacle, transportable, coin, button --> are HARDCODED
		itemTypes: {
			robot0: { img: ["bee_all_8_sides.png"], side: 60, nbStates: 8, zOrder: 8, category: {'robot': true}, },
			coin: {num:4, img:["flower.png"],zOrder: 2, category:{"coin":true}},
			coin2:{num:5, img:["flower_blue.png"],zOrder: 2, category:{"coin":true}},
		}, 
		ignoreInvalidMoves: false,
	};

	subTask.data = {
		easy: [
			{
				tiles: [
					[1, 1, 1, 4, 1, 1, 1],
					[1, 1, 5, 1, 1, 4, 1],
					[1, 4, 1, 1, 5, 1, 1],
					[1, 1, 1, 1, 1, 1, 1],
					[1, 5, 1, 4, 1, 1, 1],
					[1, 1, 4, 1, 1, 5, 1],
					
				],
				initItems: [
					{ row: 0, col: 6, dir: 0, type: "robot0" },
					
				],
			},
		],
	};

	initBlocklySubTask(subTask);	//klic programskega orodja Blockly
}