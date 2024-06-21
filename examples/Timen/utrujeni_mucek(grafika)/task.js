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
					itemsExist: "Mucek je lačen",
					itemsDontExist: "Mucek se je najedel",
					itemsCoincide: "Mucek je doma ",
					itemsDontCoincide: "Mucek ni doma",
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
			groupByCategory: true,
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
				wholeCategories: ["loops"],
				singleBlocks: [],
				excludedBlocks: [],
			},
		},
		startingExample: { //vnaprej podana koda ukazov
			blockly: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id="g[RG~e=aB:orky#Iq!_T" deletable="false" movable="false" editable="false" x="0" y="0"><next><block type="move" id="MbM_//]ZWK/@+4!}{tp!"><field name="PARAM_0">W</field><value name="PARAM_1"><shadow type="math_number" id="iP0c0F0+dX!Z;Pn.etLj"><field name="NUM">5</field></shadow></value><next><block type="move" id="_kaJD:UP#)5)vZqPd]!-"><field name="PARAM_0">S</field><value name="PARAM_1"><shadow type="math_number" id="PjVch_|saW)#,UQUOLJN"><field name="NUM">4</field></shadow></value><next><block type="move" id="5ZnXRO;M2~qH,F5/rp(#"><field name="PARAM_0">W</field><value name="PARAM_1"><shadow type="math_number" id=")eGaY5#7MhjeTll(1JIu"><field name="NUM">2</field></shadow></value><next><block type="move" id="SHn*CFTJxpy8(yq41On+"><field name="PARAM_0">N</field><value name="PARAM_1"><shadow type="math_number" id="t:KcCHdRRRh,IG;sVu0U"><field name="NUM">4</field></shadow></value></block></next></block></next></block></next></block></next></block><additional>{}</additional></xml>',
		},					
		checkEndEveryTurn: false,		//kako pogosto preverjamo uspešnost rešitve
		checkEndCondition:  (context, lastTurn) => { 
			robotEndConditions.checkCombiner(context, lastTurn, [
				(context, lastTurn) => { robotEndConditions.checkItemExistence(context, lastTurn, {category: "coin"}, {}, exist=false) }, 
				(context, lastTurn) => { robotEndConditions.checkItemCoincidence(context, lastTurn, {type: "robot0"}, {category: "konec"}) },
			])
		},
			
		border: 0.05,
		backgroundColour: "white",
		backgroundTile: false,
		borderColour: "grey",

		cellSide: 80,	
		numberOfRobots: 1,
		// only categories: robot, obstacle, transportable, coin, button --> are HARDCODED
		itemTypes: {
			robot0: { img: ["pisek_all_8_sides.png"], side: 70, nbStates: 9, offsetX: 2, zOrder: 8, category: {'robot': true}, },
			coin: {num:3, img:["egg.png"],zOrder: 2, category:{"coin":true}},
			coin2: {num:4, img:["nest_original.png"], nbStates: 8,zOrder: 8, category:{"konec":true}},
			//holeR: { num: 41, img: "nest_red.png", zOrder: 6, category: {'hole':true}},
			// kako naj preverim pravilno zaporedje pobirnaja stvari===================================================================
			obstacle: { num: 2, img: "rock_formation.png",  zOrder: 8, category: {'obstacle':true}, },
		
		}, 
		ignoreInvalidMoves: false,
	};

	subTask.data = {
		easy: [
			{
				tiles: [
					[4, 2, 1, 1, 3, 1, 1, 1],
					[1, 2, 1, 1, 1, 1, 1, 1],
					[1, 2, 1, 1, 1, 1, 1, 1],
					[1, 2, 1, 1, 1, 1, 1, 1],
					[1, 1, 1, 1, 1, 1, 1, 1],
					[1, 1, 1, 1, 1, 1, 1, 1],
					[1, 1, 1, 1, 1, 1, 1, 1],
					[1, 1, 1, 1, 1, 1, 1, 1],
				],
				initItems: [
					{ row: 0, col: 7, dir: 0, type: "robot0" },
					
					
				],
			},
			
		],
	};

	initBlocklySubTask(subTask);	//klic programskega orodja Blockly
}