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
					itemsCoincide: "Robotek je prišel domov",
					itemsDontCoincide: "Robotek ni prišel domov",
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
		maxInstructions: 10,
		includeBlocks: {						//dovoljeni ukazi 
			groupByCategory: true,
			generatedBlocks: {
				robot:  [
					//"moveSimple",
					"forwardSimple",
					"turn",			//samo levo in desno
					//"turnAround",
					"sensorBool"
					
				],
				// robot:  ["left","right","north","west","east","south","changeRobot", "pickTransportable","dropTransportable"],
			},
			standardBlocks: {
				includeAll: false,
				wholeCategories: ["logic"],
				singleBlocks: ['controls_repeat_ext'],
				excludedBlocks: [],
			},
		},
		startingExample: { //vnaprej podana koda ukazov
			blockly: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id="g[RG~e=aB:orky#Iq!_T" deletable="false" movable="false" editable="false" x="0" y="0"></block><additional>{}</additional></xml>',
		},					
		checkEndEveryTurn: false,		//kako pogosto preverjamo uspešnost rešitve
		checkEndCondition:  (context, lastTurn) => { robotEndConditions.checkItemCoincidence(context, lastTurn, {category: "dom"},{category: "robot"}).checkReachGreenArea(context, lastTurn)},
		computeGrade: robotGradeFunctions.allOrNothing,
			
		border: 0.05,
		backgroundColour: "white",
		backgroundTile: false,
		borderColour: "grey",

		cellSide: 60,	
		numberOfRobots: 1,
		// only categories: robot, obstacle, transportable, coin, button --> are HARDCODED
		itemTypes: {
			robot0: { img: ["green_robot2.png"], side: 60, nbStates: 9, zOrder: 8, category: {'robot': true}, },
			obstacle: { num: 2, img:["dirt.png"], zOrder: 1, category: {'obstacle': true}},
			dom: {num:3, img:["finish2.png"],zOrder: 8, category:{"dom":true}},
		},

		ignoreInvalidMoves: false,
	};

	subTask.data = {
		easy: [
			{
				tiles: [
					[2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
					[2, 2, 2, 2, 2, 2, 3, 2, 2, 2],
					[2, 2, 2, 2, 2, 2, 1, 2, 2, 2],
					[2, 2, 2, 2, 1, 1, 1, 2, 2, 2],
					[2, 2, 2, 2, 1, 2, 2, 2, 2, 2],
					[2, 2, 2, 2, 1, 2, 2, 2, 2, 2],
					[2, 2, 2, 2, 1, 2, 2, 2, 2, 2],
					[2, 2, 2, 2, 1, 2, 2, 2, 2, 2],
					[2, 2, 2, 2, 1, 2, 2, 2, 2, 2],
					[2, 2, 2, 2, 2, 2, 2, 2, 2, 2]				
					
				],
				initItems: [
					{ row: 8, col: 4, dir: 6, type: "robot0" },
				],
			},
			{
				
				tiles: [
					[2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
					[2, 2, 2, 2, 3, 2, 2, 2, 2, 2],
					[2, 2, 2, 2, 1, 2, 2, 2, 2, 2],
					[2, 2, 2, 2, 1, 2, 2, 2, 2, 2],
					[2, 2, 2, 2, 1, 2, 2, 2, 2, 2],
					[2, 2, 2, 2, 1, 2, 2, 2, 2, 2],
					[2, 2, 2, 2, 1, 2, 2, 2, 2, 2],
					[2, 2, 2, 2, 1, 2, 2, 2, 2, 2],
					[2, 2, 2, 2, 1, 2, 2, 2, 2, 2],
					[2, 2, 2, 2, 2, 2, 2, 2, 2, 2]			
									
				],
				initItems: [
					{ row: 8, col: 4, dir: 6, type: "robot0" },

				],
			},
		],
	};

	initBlocklySubTask(subTask);	//klic programskega orodja Blockly
}