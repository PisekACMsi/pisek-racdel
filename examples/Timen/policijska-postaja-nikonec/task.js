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

				label:{sensorBool1:"ovira spredaj "},//languegae za novi delček
				code:{sensorBool1:"oviraSpredaj"},
				description:{sensorBool1:"Preveri ali je ovira spredaj"},

				label:{sensorBool2:"ovira desno"},//languegae za novi delček
				code:{sensorBool2:"oviraDesno"},
				description:{sensorBool2:"Preveri ali je ovira desno"},

				label:{sensorBool3:"ovira levo"},//languegae za novi delček
				code:{sensorBool3:"oviraLevo"},
				description:{sensorBool3:"Preveri ali je ovira levo"},

				startingBlockName: "Program",	
				categories: {				
				   actions: "Gibanje",
				},
				messages:{
					itemsExist: "Psiček ni pobral vseh pribolškov in šel k Marku",
					itemsDontExist: "Tačko je pri marku in gresta lahko domov",
				},
	
			},
		},

		localBlocks: function(context, strings, infos){
		
			var customBlocks = {	// don't attach it to context!! just return it
				robot: {
					tools: [

						{  	name: "sensorBool1", 
							yieldsValue: true,
							handler: (callback) => { context.robot.sensorBool("0", "obstacle", "category" ,callback) },
						},
						{  	name: "sensorBool2", 
							yieldsValue: true,
							handler: (callback) => { context.robot.sensorBool("2", "obstacle", "category" ,callback) },
						},
						{  	name: "sensorBool3", 
							yieldsValue: true,
							handler: (callback) => { context.robot.sensorBool("-2", "obstacle", "category" ,callback) },
						},
						
					],
				},
			};
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
					"move",
					"forward",
					"turn",
					"turnAround",
					"sensorBool1",
					"sensorBool2",
				],
				// robot:  ["left","right","north","west","east","south","changeRobot", "pickTransportable","dropTransportable"],
			},
			standardBlocks: {
				includeAll: false,
				wholeCategories: ["loops"],
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
			
		border: 0.05,
		backgroundColour: "white",
		backgroundTile: false,
		borderColour: "grey",

		cellSide: 80,	
		numberOfRobots: 1,
		// only categories: robot, obstacle, transportable, coin, button --> are HARDCODED
		itemTypes: {
			robot0: { img: ["car.png"], side: 60, nbStates: 8, zOrder: 8, category: {'robot': true}, },
			obstacle: { num: 2, img: "dirt.png", zOrder: 1, category: {'obstacle': true}},
			coin :{ num:3,img:["finish_transparent.png"],side: 80,zOrder: 2, category:{"coin":true}},
		}, 
		ignoreInvalidMoves: false,
	};

	subTask.data = {
		easy: [
			{
				tiles: [
					
					[2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
					[2, 1, 1, 1, 2, 2, 2, 2, 2, 2],
					[2, 1, 2, 1, 2, 2, 1, 1, 1, 2],
					[2, 1, 2, 1, 2, 2, 1, 2, 1, 2],
					[2, 1, 2, 1, 2, 2, 1, 2, 1, 2],
					[2, 1, 2, 1, 1, 1, 1, 2, 1, 2],
					[2, 1, 2, 2, 2, 2, 2, 2, 3, 2]			
					],
					
				initItems: [
					{ row: 6, col: 1, dir: 0, type: "robot0" },
					
					
				],
			},
			{
				tiles: [
					[2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
					[2, 2, 2, 2, 2, 1, 1, 1, 2, 2],
					[2, 1, 1, 1, 2, 1, 2, 1, 2, 2],
					[2, 1, 2, 1, 2, 1, 2, 1, 2, 2],
					[2, 1, 2, 1, 2, 1, 2, 1, 2, 2],
					[2, 1, 2, 1, 1, 1, 2, 1, 2, 2],
					[2, 1, 2, 2, 2, 2, 2, 3, 2, 2]
				],
									
				initItems: [
					{ row: 6, col: 1, dir: 0, type: "robot0" },
					
					
				],
			},
			{
				tiles: [
					[2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
					[2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
					[2, 2, 2, 2, 2, 2, 1, 1, 1, 2],
					[2, 2, 1, 1, 1, 2, 1, 2, 1, 2],
					[2, 2, 1, 2, 1, 2, 1, 2, 1, 2],
					[2, 2, 1, 2, 1, 1, 1, 2, 1, 2],
					[2, 2, 1, 2, 2, 2, 2, 2, 3, 2]
				],
									
				initItems: [
					{ row: 6, col: 2, dir: 0, type: "robot0" },
					
					
				],
			},
		],
	};

	initBlocklySubTask(subTask);	//klic programskega orodja Blockly
}