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
					itemsExist: "Robotka ni pobarvala vseh polij",
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
		maxInstructions: 20,
		includeBlocks: {						//dovoljeni ukazi 
			groupByCategory: true,
			generatedBlocks: {
				robot:  [
					"move",
					//"forward",		//samo levo in barvanje
					//"turn",
					//"turnAround",
					
				],
				// robot:  ["left","right","north","west","east","south","changeRobot", "pickTransportable","dropTransportable"],
			},
			standardBlocks: {
				includeAll: false,
				wholeCategories: ["loops","colour"],
				singleBlocks: [],
				excludedBlocks: [],
			},
		},
		startingExample: { //vnaprej podana koda ukazov
			blockly: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id="g[RG~e=aB:orky#Iq!_T" deletable="false" movable="false" editable="false" x="0" y="0"></block><additional>{}</additional></xml>',
		},					
		checkEndEveryTurn: false,		//kako pogosto preverjamo uspešnost rešitve
		checkEndCondition:  (context, lastTurn) => { robotEndConditions.checkItemExistence(context, lastTurn, {category: "coin", value: 0}, {}, exist=false).checkReachGreenArea(context, lastTurn)},
		computeGrade: robotGradeFunctions.allOrNothing,
			
		border: 0.025,
		backgroundColour: "black",
		backgroundTile: "dirt.png",
		borderColour: "black",

		cellSide: 80,	
		numberOfRobots: 1,
		// only categories: robot, obstacle, transportable, coin, button --> are HARDCODED
		itemTypes: {
			robot0: {img: ["green_robot2.png"], side: 60, nbStates: 9, zOrder: 8, category: {'robot': true}, },
			flor: {num:2, img:["dirt_dot.png"],zOrder: 8},
			coin: {num:3, img:["finish2.png"],zOrder: 8, category:{"coin":true}},
			//paint: { num: 4, zOrder: 3, colour: "magenta" },
		},

		ignoreInvalidMoves: false,
	};

	subTask.data = {
		easy: [
			{
				tiles: [
					[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
					[1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1],
					[1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 1, 1, 1, 1, 1],
					[1, 1, 1, 1, 2, 2, 1, 1, 1, 2, 2, 1, 1, 1, 1],
					[1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1],
					[1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1],
					[1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1],
					[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
					
				],
				initItems: [
					{ row: 6, col: 0, dir: 0, type: "robot0",id:1 },
					//{ row: 1,col:3 ,value: 0, type: "paintC", id:1},

				],
			},
		],
	};

	initBlocklySubTask(subTask);	//klic programskega orodja Blockly
}