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
				
				label:{sensorBool:"Jajcek spodaj"},//languegae za novi delček
				code:{sensorBool:"jajcekSpodaj"},
				description:{sensorBool:"Prepozna ali se nahajamo na jajčku"},

				label:{transport:"Poberi Jajček"},//languegae za novi delček
				code:{transport:"poberi"},
				description:{transport:"povere jajcek"},

				startingBlockName: "Program",	
				categories: {				
				   actions: "Gibanje",
				},
				messages:{
					itemsExist: "Maša ni pobrala vseh jajčkov",
					itemsDontExist: "Maša je pobrala vsa jajčka",
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
						{  name: "transport",
							blocklyJson: {
							   "args0": [
								  {
									 "type": "field_dropdown", 
									 "name": "PARAM_0", 
									 "options": [
										[strings["options"]["pick"], "pick"],
										
									 ],
									 "check":"String",
								  },
							   ],
							},
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
					//"move",
					//"forward",
					"forwardSimple",
					"turn",
					"turnAround",
					
					"sensorBool",
					//"Poberi",
					"transport",
					
				],
				// robot:  ["left","right","north","west","east","south","changeRobot", "pickTransportable","dropTransportable"],
			},
			standardBlocks: {
				includeAll: false,
				wholeCategories: ["loops","logic"],
				singleBlocks: [],
				excludedBlocks: [],
			},
		},
		startingExample: { //vnaprej podana koda ukazov
			blockly:' <xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id="g[RG~e=aB:orky#Iq!_T" deletable="false" movable="false" editable="false" x="0" y="0"><next><block type="controls_repeat_ext" id="C?L2)Pi=W@77plT}!B.@"><value name="TIMES"><shadow type="math_number" id="J8`SCQhgK-9jpEZn}/@a"><field name="NUM">6</field></shadow></value><statement name="DO"><block type="controls_repeat_ext" id="g}HJ+bYmmt98r8qo(;~c"><value name="TIMES"><shadow type="math_number" id="xcLrc!f*haY?Venw6{S8"><field name="NUM">7</field></shadow></value><statement name="DO"><block type="forwardSimple" id="Gg84g*Tx-w(236o2Clee"><next><block type="controls_if" id="*Kb57sM=MjB2(A51NbXc"><value name="IF0"><block type="sensorBool" id="3_stRps5n8o`@O|O|A9,"></block></value><statement name="DO0"><block type="transport" id="cd-V.*(/akFCn|l-+1k5"><field name="PARAM_0">pick</field></block></statement></block></next></block></statement><next><block type="turnAround" id="Ryl[C#zzu}~]A7@9p[wE"><next><block type="controls_repeat_ext" id="cv`iB)4VQPc(nP{asjA:"><value name="TIMES"><shadow type="math_number" id="j]B*A77D+9Eq)!,~m4tH"><field name="NUM">7</field></shadow></value><statement name="DO"><block type="forwardSimple" id="rZO8SOL{1JDa2u3=yn.["></block></statement><next><block type="turn" id="9M@ccdr!_?vmJe7k0MBp"><field name="PARAM_0">2</field><next><block type="forwardSimple" id="l@PidCakMVk|=!XM7C#Y"><next><block type="turn" id="CONWrgvt)vpy1g?`GiE{"><field name="PARAM_0">2</field></block></next></block></next></block></next></block></next></block></next></block></statement></block></next></block><additional>{}</additional></xml>',
		},					
		checkEndEveryTurn: false,		//kako pogosto preverjamo uspešnost rešitve
		checkEndCondition:  (context, lastTurn) => { robotEndConditions.checkItemExistence(context, lastTurn, {category: "transportable", value: 0}, {}, exist=false).checkReachGreenArea(context, lastTurn)},
		computeGrade: robotGradeFunctions.allOrNothing,
			
		border: 0.005,
		backgroundColour: "white",
		backgroundTile: false,
		borderColour: "grey",

		cellSide: 80,	
		numberOfRobots: 1,
		// only categories: robot, obstacle, transportable, coin, button --> are HARDCODED
		itemTypes: {
			robot0: { img: ["girl_all_8_sides.png"], side: 70, nbStates: 8, zOrder: 8, category: {'robot': true}, },
			coin0: {num:2, img:["egg.png"],zOrder: 2, category:{'transportable':true}},
			coin1: {num:3, img:["egg_blue.png"],zOrder: 2, category:{'transportable':true}},
			coin2: {num:4, img:["egg_red.png"],zOrder: 2, category:{'transportable':true}},
			
		
		}, 
		ignoreInvalidMoves: false,
	};

	subTask.data = {
		easy: [
			{
				tiles: [
					[1, 1, 1, 1, 1, 1, 1, 1],
					[2, 1, 1, 3, 1, 2, 1, 1],
					[1, 1, 1, 1, 4, 1, 1, 4],
					[1, 1, 2, 1, 1, 2, 1, 1],
					[1, 3, 1, 1, 1, 1, 4, 3],
					[1, 1, 4, 1, 3, 1, 1, 1],
					[1, 2, 1, 1, 1, 3, 1, 1],
					[1, 1, 1, 1, 1, 1, 1, 1]
					
					
				],
				initItems: [
					{ row: 6, col: 0, dir: 0, type: "robot0" },
					
					
				],
			},
			{
				tiles: [
					[1, 1, 3, 1, 1, 1, 1, 1],
					[1, 2, 1, 1, 1, 3, 1, 2],
					[4, 1, 1, 3, 1, 1, 1, 2],
					[1, 1, 3, 1, 1, 1, 1, 1],
					[1, 1, 1, 4, 1, 1, 4, 1],
					[2, 1, 1, 1, 2, 1, 1, 1],
					[1, 1, 4, 1, 1, 1, 3, 1],
					[1, 1, 1, 1, 2, 1, 1, 1]
					
					
				],
				initItems: [
					{ row: 7, col: 0, dir: 0, type: "robot0" },
					
					
				],
			},
			
		],
	};

	initBlocklySubTask(subTask);	//klic programskega orodja Blockly
}