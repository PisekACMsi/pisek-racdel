function initTask(subTask) {
    subTask.gridInfos = {				//podatki za urejevalnik in vizualno 
		userTaskData: {
			title: document.title,
			subject: $(".exerciseText").first().text(),
			about: {
				authors: "Razvojna skupina <a href='mailto:pisek@acm.si'>Pišek</a>",
				license: "CC BY-NC 4.0",
			}
		},
		// local library
		// CUSTOM: here you can override the translation from blocklyRobot_lib.js
		// the dictionary tree can be incomplete (have missing values),
		// but the architecture needs to be the same as: "localLanguageStrings"
		languageStrings: {
			sl: {
				startingBlockName: "Program 2",	
				categories: {				
				   actions: "Gibanje",
				},
				label: {								
					changeRobot: "zamenjaj vlogo %1 HAHA", 
					colour: "LOL %1",
				},
				options:{
					pick: "poberi UPS",
				},
				messages:{
					itemsExist: "Kovanci so na mreži.",
					itemsDontExist: "Kovancev ni na mreži.",
				},
			},
		},
		// CUSTOM: here you can override and add new blocks, the same way as in blocklyRobot_lib.js
		// context is the same object as inside the function "getContext"
		// strings is equaly the same object string inside "getContext" (is already set to the active language)
		
		localBlocks: function(context, strings, infos){
			// CUSTOM: first you can define functions for blocks, which need to be attached to "context.robot"
			// this way you can either override existing function definitions from blocklyRobot_lib.js or add new ones.
			// If you are creating new ones, you need to additionaly do the following things:
			// - add strings in languageStrings for keys: "label", "code", "description" and optionaly more,
			// - you need to define the visual design of the block using "customBlocks"
			// If you are making a new function, good advice, always staring with something that works!!
			// - 1st copy an existing block from blocklyRobot_lib.js inside here,
			// - use console.log() and Web Developer Tools to print values in the console, for debugging
			
			
			// CUSTOM: here you can specify the visual design of blockly block, the same way as in blocklyRobot_lib.js
			// this way you can either override the visual design of existing blocks (such as options in dropdown field)
			// or define design for new blocks
			/* structure is as follows:
				{
					group: [{
						name: "someName",
						category: "categoryName",
						// yieldsValue: optional true: Makes a block with return value rather than simple command
						// params: optional array of parameter types. The value 'null' denotes /any/ type. For specific types, see the Blockly documentation ([1,2])
						// handler: optional handler function. Otherwise the function context.group.someName will be used
						// blocklyJson: optional Blockly JSON objects
						// blocklyInit: optional function for Blockly.Blocks[name].init
						//   if not defined, it will be defined to call 'this.jsonInit(blocklyJson);
						// blocklyXml: optional Blockly xml string, 
						// 	 you need this if you want to implicitly attach "shadow blocks", check library for examples
						// codeGenerators: optional object:
						//   { Python: function that generates Python code
						//     JavaScript: function that generates JS code
						//   }
					}]
				}
				[1] https://developers.google.com/blockly/guides/create-custom-blocks/define-blocks
				[2] https://developers.google.com/blockly/guides/create-custom-blocks/type-checks
			*/
			var customBlocks = {	// don't attach it to context!! just return it
				robot: {
					tools: [
						{  	name: "sensorRowCol", 
							yieldsValue: true,
							blocklyJson: {
								"args0": [
									{
										"type": "field_dropdown", 
										"name": "PARAM_0", 
										"options": [
										[strings["options"]["tools"]["row"], "row"],
										[strings["options"]["tools"]["col"], "col"],
										],
									},
									{
										"type": "field_dropdown", 
										"name": "PARAM_1", 
										"options": [
										[strings["options"]["tools"]["bool"]["obstacle"], "obstacle"],
										[strings["options"]["tools"]["bool"]["transportable"], "transportable"],
										[strings["options"]["tools"]["bool"]["robot"], "robot"],
										[strings["options"]["tools"]["bool"]["number"], "number"],
										[strings["options"]["tools"]["bool"]["colour"], "colour"],
										[strings["options"]["tools"]["bool"]["transOrder"], "transOrder"],
										],
									},
									{
										"type": "field_dropdown", 
										"name": "PARAM_2", 
										"options": [
										[strings["options"]["tools"]["bool"]["category"], "category"],
										[strings["options"]["tools"]["bool"]["has"], "undefined"],
										],
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
					"move",
					"moveSimple",
					"forward",
					"forwardSimple",
					"turn",
					"turnAround",
					"jump",
					"changeRobot",
					"transport",
					"sensorBool",
					"sensorValue",
					"alterValue",
					"destroy",
					"create",
					"wait",
					"nitems",
					"sensorRowCol",
				],
				// robot:  ["left","right","north","west","east","south","changeRobot", "pickTransportable","dropTransportable"],
			},
			standardBlocks: {
				includeAll: true,
				wholeCategories: ["logic","colour"],
				singleBlocks: ["controls_repeat","controls_repeat_ext","math_number","text"],
				excludedBlocks: [],
			},
		},
		startingExample: { //vnaprej podana koda ukazov
			blockly: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id="Yx#}`-PvOO]HA4c0m7]F" deletable="false" movable="false" editable="false" x="0" y="0"><next><block type="move" id="CoO|[q[@qpAx1_*bS`Or"><field name="PARAM_0">S</field><value name="PARAM_1"><shadow type="math_number" id="Hyc?21Pdl93/lRnSQ;yk"><field name="NUM">5</field></shadow></value><next><block type="move" id=".0,k.*t.-0!PhL2?iW=S"><field name="PARAM_0">W</field><value name="PARAM_1"><shadow type="math_number" id="Eoy,Bt|qklJL]F[A_HUS"><field name="NUM">5</field></shadow></value><next><block type="move" id="-0w[|/Bnh{6lzt*/qE/1"><field name="PARAM_0">N</field><value name="PARAM_1"><shadow type="math_number" id=")T;FmigiJI@U(YA2/T+["><field name="NUM">1</field></shadow></value></block></next></block></next></block></next></block><block type="controls_repeat_ext" id="2E]Uhs@W}KrbH3PJF36*" x="20" y="155"><value name="TIMES"><shadow type="math_number" id="z_GWSb[:HQjB|Qf]0C9N"><field name="NUM">3</field></shadow></value><statement name="DO"><block type="moveSimple" id="yar~u.Qkhzs]q=@VlZ9c"><field name="PARAM_0">S</field></block></statement><next><block type="controls_repeat_ext" id="z@Gfs[CGcB6T{G-72W|z"><value name="TIMES"><shadow type="math_number" id="73LZY(lJ1blr[EH[s;W*"><field name="NUM">4</field></shadow></value><statement name="DO"><block type="moveSimple" id="#-0m.#:qs#=w*PlCX[qW"><field name="PARAM_0">W</field></block></statement></block></next></block><additional>{}</additional></xml>',
			// blockly: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id="Yx#}`-PvOO]HA4c0m7]F" deletable="false" movable="false" editable="false" x="0" y="0"><next><block type="move" id="4,KCbSD;_m-pZxtufj95"><field name="PARAM_0">S</field><value name="PARAM_1"><shadow type="math_number" id="CIspNjAYb7a*vulaV1{P"><field name="NUM">2</field></shadow></value><next><block type="controls_repeat_ext" id="xz}GE@0Jjd*qSArjsPK7"><value name="TIMES"><shadow type="math_number" id="tt~vC4c`SoXp*D0{g`g4"><field name="NUM">10</field></shadow></value><statement name="DO"><block type="move" id="WeEDtrj7~6yjk(UWz0-I"><field name="PARAM_0">NW</field><value name="PARAM_1"><shadow type="math_number" id="opp6D`R,=GUHmyGwa.R?"><field name="NUM">2</field></shadow></value><next><block type="move" id="@1V??r6T.~WNU!1eUDFK"><field name="PARAM_0">W</field><value name="PARAM_1"><shadow type="math_number" id="0{K)gjXQYd/@ACLa1Zth"><field name="NUM">2</field></shadow></value><next><block type="move" id="z)fMk;vuUbh5Da[KR*xj"><field name="PARAM_0">SW</field><value name="PARAM_1"><shadow type="math_number" id="wB9]`B@g|8|}GB/1Tm@!"><field name="NUM">2</field></shadow></value><next><block type="move" id="GeZy`Ver;W!z`XSw45r`"><field name="PARAM_0">S</field><value name="PARAM_1"><shadow type="math_number" id="sZB.rV,77Bqvtrj0kOBO"><field name="NUM">2</field></shadow></value><next><block type="move" id="M17`JoUY;BMn/l@i}fsy"><field name="PARAM_0">SE</field><value name="PARAM_1"><shadow type="math_number" id="Hd_3qqIk*y;,]lM_qE@,"><field name="NUM">2</field></shadow></value><next><block type="move" id="k}eq{We-_F/f])5ibq*S"><field name="PARAM_0">E</field><value name="PARAM_1"><shadow type="math_number" id="gu?bUo7P.xnCNvY|6aH#"><field name="NUM">2</field></shadow></value><next><block type="move" id="R/G.u-]Ep6Moi)~0{B}7"><field name="PARAM_0">NE</field><value name="PARAM_1"><shadow type="math_number" id="c1;Ku-whH9kw@[,TwuQK"><field name="NUM">2</field></shadow></value><next><block type="move" id="O9,[~_q4s8-*m-C/wuRr"><field name="PARAM_0">N</field><value name="PARAM_1"><shadow type="math_number" id="QI=mOSVV5;~2s5DK@fCD"><field name="NUM">2</field></shadow></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></statement></block></next></block></next></block><additional>{}</additional></xml>',
			// blockly: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id="Yx#}`-PvOO]HA4c0m7]F" deletable="false" movable="false" editable="false" x="0" y="0"><next><block type="move" id="4,KCbSD;_m-pZxtufj95"><field name="PARAM_0">W</field><value name="PARAM_1"><shadow type="math_number" id="CIspNjAYb7a*vulaV1{P"><field name="NUM">3</field></shadow></value><next><block type="destroy" id="KKQSCxKu;sV}+gJe?9=)"><field name="PARAM_1">obstacle</field><field name="PARAM_0">2</field><next><block type="move" id="XWv:_2Qbckm|{-94@`u,"><field name="PARAM_0">N</field><value name="PARAM_1"><shadow type="math_number" id="oR6vzE-h~{7oseb?hIAf"><field name="NUM">1</field></shadow></value></block></next></block></next></block></next></block><additional>{}</additional></xml>', 
		},					
		checkEndEveryTurn: false,		//kako pogosto preverjamo uspešnost rešitve
		// checkEndCondition:  (context, lastTurn) => { robotEndConditions.checkItemExistence(context, lastTurn, {category: "coin"}, {}, exist=false) },
		checkEndCondition:  (context, lastTurn) => { 
			robotEndConditions.checkCombiner(context, lastTurn, [
				(context, lastTurn) => { robotEndConditions.checkItemExistence(context, lastTurn, {category: "coin"}, {}, exist=false) }, 
				(context, lastTurn) => { robotEndConditions.checkItemCoincidence(context, lastTurn, {type: "robot0"}, {category: "goal"}) },
			])
		},
		computeGrade: robotGradeFunctions.allOrNothing,
			
		// border: 0.,
		border: 0.05,
		backgroundColour: "pink",
		// backgroundTile: false,
		backgroundTile: "grass.png",
		borderColour: "red",
		showLabels: true,

		cellSide: 60,	
		numberOfRobots: 2,
		// only categories: robot, obstacle, transportable, coin, button --> are HARDCODED
		itemTypes: {
			robot0: { img: ["girl_all_8_sides.png", "girl_with_ball_all_8_sides.png"], side: 80, nbStates: 8, offsetX: -14, zOrder: 8,
						category: {'robot': true}, },
			robot1: { img: ["miha_all_8_sides.png","miha_with_dog_all_8_sides.png"], side: 80, nbStates: 9, offsetX: -14, zOrder: 8,
						category: {'robot': true, 'transportable':true}, transOrder: 0, },
			number: { zOrder: 2, id: 1, category: {'number':true},  },
			obstacle: { num: 2, img: "rocks.png",  zOrder: 8, category: {'obstacle':true}, },
			coin: { num: 5, img: "star.png", zOrder: 2, category: {'coin':true}, },
			paint: { num: 3, zOrder: 3, colour: "magenta" },
			paintC: { num: 31, zOrder: 3, colour: ["magenta",'blue','#33ff33'], },
			button: {num: 4, img: ["button_unpressed.png","button_pressed.png"], id:1, zOrder: 1, category: {'button':true}, },
			door: {num: 6, img: ["red_floor.png","orange_floor.png"], id:1, zOrder: 1, category: [{'obstacle':true}, {}], },
			marble1: {num: 8, img: "ball.png", zOrder: 2, transOrder: 0, category: {'transportable':true}, },
			marble2: {num: 9, img: ["egg_blue.png","egg_red.png","egg.png"], zOrder: 2, category: {'transportable':true}, },
			marble3: {num: 10, img: "flag2.png", zOrder: 2, category: {'transportable':true}, },
		}, 
		ignoreInvalidMoves: false,
	};

	subTask.data = {
		easy: [
			{
				tiles: [
					[2, 2, 31, 2, 1, 1, 1],
					[1, 1, 8, 1, 8, 2, 3],
					[1, 1, 10, 10, 10, 10, 1],
					[1, 1, 6, 6, 4, 1, 5],
					[1, 1, 1, 2, 1, 1, 5],
					[1, 1, 1, 2, 1, 2, 5],
					[1, 1, 1, 1, 1, 1, 1],
					[1, 2, 1, 1, 1, 1, 1],
					[1, 2, 2, 1, 8, 8, 8],
				],
				initItems: [
					{ row: 1, col: 6, value: 0, dir: 2, type: "robot0", id:1},
					{ row: 0, col: 6, value: 13, type: "number", id:1},
					{ row: 0, col: 5, value: 0, type: "paintC", id:1},
					{ row: 0, col: 4, value: 0, type: "marble2", id:1},
					{ row: 2, col: 6, id: 1, value: 1, type: "button" },
					{ row: 2, col: 1, dir: 3, rank: 1, type: "robot1", id:2 },
					// { row: 4, col: 5, value: 13, id:2, type: "number" },
					// { row: 5, col: 5, value: 15, type: "number" },
					// { row: 3, col: 1, id: 2, value: 1, type: "button" },
					// { row: 3, col: 0, id: 2, value:1, type: "door" },
					{ row: 3, col: 1, id: 1, value: 1, type: "button" },
					{ row: 3, col: 0, id: 1, value: 1, type: "door" },
					{ row: 1, col: 5, value: 0, transOrder: 0, type: "marble2" },
					{ row: 1, col: 3, value: 1, transOrder: 1, type: "marble2" },
					{ row: 1, col: 1, value: 2, transOrder: 2, type: "marble2" },
					{ row: 1, col: 0, type: "paint", colour:'gold' },
					{ row: 5, col: 1, type: "paint", colour:'#33ff33', category: {"goal": true} },
					// { row: 6, col: 2, type: "paint", colour:'green', category: {"goal": true, "transportable":true} },
					{ row: 7, col: 4, type: "marble2", value: 2 },
					{ row: 7, col: 5, type: "marble2", value: 2 },
					{ row: 7, col: 6, type: "marble2", value: 2 },
				],
			},
			// {
			// 	tiles: [
			// 		[2, 2, 3, 2, 1, 1, 1],
			// 		[1, 1, 8, 1, 8, 1, 1],
			// 		[1, 1, 10, 10, 10, 10, 5],
			// 		[1, 1, 1, 1, 1, 1, 5],
			// 		[1, 1, 1, 1, 1, 1, 5],
			// 		[1, 1, 1, 1, 1, 1, 5],
			// 		[1, 1, 1, 1, 1, 1, 1],
			// 		[1, 1, 1, 1, 1, 1, 1],
			// 		[1, 2, 1, 1, 1, 1, 1],
			// 		[1, 2, 2, 1, 1, 1, 1],
			// 	],
			// 	initItems: [
			// 		{ row: 1, col: 6, value: 0, dir: 2, type: "robot0", id:1},
			// 		{ row: 2, col: 1, dir: 3, rank: 1, type: "robot1", id:2 },
			// 		{ row: 4, col: 5, value: 13, id:2, type: "number" },
			// 		{ row: 5, col: 5, value: 15, type: "number" },
			// 		{ row: 3, col: 1, id: 2, value: 1, id:2, type: "button" },
			// 		{ row: 5, col: 1, type: "paint", colour:'green', category: "goal" },
			// 	],
			// },
		],
	};

	initBlocklySubTask(subTask);	//klic programskega orodja Blockly
}