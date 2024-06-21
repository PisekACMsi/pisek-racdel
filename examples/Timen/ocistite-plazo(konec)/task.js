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
				label:{sensorBool:"Smeti Spodaj"},//languegae za novi delček
				code:{sensorBool:"SmetiSpodaj"},
				description:{sensorBool:"Pove ali stojimo na smethe"},

				startingBlockName: "Program",	
				categories: {				
				   actions: "Gibanje",
				},
				messages:{
					itemsDontCoincide: "Pišek ni pravilno pospravil vseh barvnih jajc. Poskusi še enkrat.",
					itemsCoincide: "Pišek je pravilno pospravil vsa barvna jajca.",
					notTransporting: "Pišek skuša spustiti jajce, vendar ga ne nosi.",
				},
				options:{
					move: {
					   north: "gor",
					   south: "dol",
					   east: "desno",
					   west: "levo",
					}
				},
			},
		},

		localBlocks: function(context, strings, infos){
		
			var customBlocks = {	// don't attach it to context!! just return it
				robot: {
					tools: [
						{  	name: "sensorBool", 
							yieldsValue: true,
							handler: (callback) => { context.robot.sensorBool("under", "transportable", "category" ,callback) },
							
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
					"forwardSimple",
					"transport",
					"turn",
					"sensorBool", 					
				],
				// robot:  ["left","right","north","west","east","south","changeRobot", "pickTransportable","dropTransportable"],
			},
			standardBlocks: {
				includeAll: false,
				wholeCategories: ["logic","loops"],
				singleBlocks: [],
				excludedBlocks: [],
			},
		},
		startingExample: { //vnaprej podana koda ukazov
			blockly: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id="?PYegoooe[j?}[Q@H/0J" deletable="false" movable="false" editable="false" x="0" y="0"><next><block type="forwardSimple" id="ON9984ntOnHoCYp0;,n]"><next><block type="forwardSimple" id="-/U#~e#8DTCD:6/TjXas"><next><block type="forwardSimple" id="8[9Ck/czyfQ-:i|tTh15"><next><block type="turn" id="fga_WcXee8~_e/lPix!e"><field name="PARAM_0">-2</field><next><block type="controls_repeat_ext" id="(HOv}/96_39[W?t8DXxx"><value name="TIMES"><shadow type="math_number" id="u2T=h|dxSQAfCL8,q_kL"><field name="NUM">8</field></shadow></value><statement name="DO"><block type="controls_repeat_ext" id="c}mjJ}miH_;VGuM!osoC"><value name="TIMES"><shadow type="math_number" id="97GM*,p{jz4fAS5K*HX}"><field name="NUM">7</field></shadow></value><statement name="DO"><block type="forwardSimple" id=")LS(jf3ASHoSviV*XEq@"><next><block type="controls_if" id="Vc4EQG;Y##7KRFaU67T0"><value name="IF0"><block type="sensorBool" id="E4N=jK3[K_:Pv#9RBHxx"></block></value><statement name="DO0"><block type="transport" id="#9Sz+X#Lt9kVkQS(~44-"><field name="PARAM_0">pick</field></block></statement></block></next></block></statement><next><block type="turn" id="HHf|Tk`V]CjhX3tuf!Y0"><field name="PARAM_0">-2</field><next><block type="turn" id="mW|KXQ;:yJRUDa67SMHt"><field name="PARAM_0">-2</field></block></next></block></next></block></statement></block></next></block></next></block></next></block></next></block></next></block><additional>{}</additional></xml>',
			
			
		},					
		checkEndEveryTurn: false,		//kako pogosto preverjamo uspešnost rešitve
		checkEndCondition:  (context, lastTurn) => { robotEndConditions.checkItemCoincidence(context, lastTurn, {type: "marbleR"}, {category: "hole"}) },
		computeGrade: robotGradeFunctions.allOrNothing,
			
		border: 0.01,
		backgroundColour: false,
		backgroundTile: 'makadamskacesta2_robot.png',
		borderColour: 'lightgrey',

		cellSide: 60,	
		numberOfRobots: 1,
		// only categories: robot, obstacle, transportable, coin, button --> are HARDCODED
		itemTypes: {
			robot0: { img: ["pisek_all_8_sides.png"], side: 80, nbStates: 9, offsetX: -7, zOrder: 8, category: {'robot': true}, },
			marbleR: { num: 3, img: "rock.png", zOrder: 7, category: {'transportable':true}},			
			holeR: { num: 4, img: "kos.png",side: 80,offsetX: -8,offsetY: 7 ,zOrder: 6, category: {'hole':true}},
			}, 
		ignoreInvalidMoves: false,
	};

	subTask.data = {
		easy: [

			{
				tiles: [
					[1, 1, 1, 1, 1, 1, 1, 3],
					[3, 1, 1, 3, 1, 1, 1, 1],
					[1, 1, 1, 1, 1, 1, 1, 1],
					[1, 1, 3, 1, 1, 1, 3, 1],
					[4, 1, 1, 1, 1, 1, 1, 1],
					[1, 1, 1, 1, 1, 1, 1, 1],
					[1, 1, 3, 1, 1, 3, 1, 1],
					[3, 1, 1, 1, 1, 1, 1, 1]
				],
				initItems: [
					{ row: 4, col: 0, value: 0, dir: 2, type: "robot0"},
				],
			},
			{
				tiles: [
					[1, 1, 1, 3, 1, 1, 1, 1],
					[1, 3, 1, 1, 1, 1, 3, 1],
					[1, 1, 1, 1, 3, 1, 1, 1],
					[1, 1, 3, 1, 1, 1, 1, 1],
					[4, 1, 1, 1, 3, 1, 3, 1],
					[1, 1, 3, 1, 1, 1, 1, 1],
					[1, 1, 1, 3, 1, 1, 1, 1],
					[1, 3, 1, 1, 1, 1, 3, 1]
				],
				initItems: [
					{ row: 4, col: 0, value: 0, dir: 2, type: "robot0"},
				],
			},
		],
	};

	initBlocklySubTask(subTask);	//klic programskega orodja Blockly
}