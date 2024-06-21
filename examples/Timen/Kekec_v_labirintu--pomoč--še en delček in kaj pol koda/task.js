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
		// CUSTOM: here you can override the tr anslation from blocklyRobot_lib.js
		// the dictionary tree can be incomplete (have missing values),
		// but the architecture needs to be the same as: "localLanguageStrings"
		languageStrings: {
			sl: {
				label:{sensorNumber:"številka spodaj"},//languegae za novi delček
				code:{sensorNumber:"stevilkaSpodaj"},
				description:{sensorNumber:"Vrne številko na polju"},

				//label:{sensorBool:"zdravilna roza"},//languegae za novi delček
				//code:{sensorBool:"zdravilnaRoza"},
				//description:{sensorBool:"Preveri ali se nahajamo na zdravilni rozi"},

				startingBlockName: "Program",	
				categories: {				
				   actions: "Gibanje",
				},
				messages:{
					itemsExist: "Nisi pobral vseh zdravilnih roz. ",
					itemsDontExist: "Pobral si vse zdravilne roze. ",
					itemsCoincide: "Prišel si do Pehte. ",
					itemsDontCoincide: "Nisi prišel do Pehte. ",
				},
				options:{
					robotName0: "Kekec", 
					
				},
			},
		},

		localBlocks: function(context, strings, infos){
		
			var customBlocks = {	// don't attach it to context!! just return it
				robot: {
					tools: [
						{  	name: "sensorNumber", 
							yieldsValue: true,
							handler: (callback) => { context.robot.sensorValue("under", "number","value" ,callback) },

							//name: "sensorBool", 
							//yieldsValue: true,
							//handler: (callback) => { context.robot.sensorBool("under", "transportable","category" ,callback) },
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
		//backgroundColour: "purple"
		maxInstructions: 100,    //omejitve stevila ukazov(0==neskončno delčkov)==================================================
		includeBlocks: {						//dovoljeni ukazi 
			groupByCategory: true,
			generatedBlocks: {//delčki iz blocklyRobot_lib.js
				robot:  [
					//"move",  //kako se lahko robot premika
					"turn",
					"forwardSimple",
					
					"transport",
					"sensorValue",
					"sensorNumber",
				],
				// robot:  ["left","right","north","west","east","south","changeRobot", "pickTransportable","dropTransportable"],
			},
			standardBlocks: {  //če dodajam iz francoskega že narejene delčke(obsataj file teh definicij)===============================
				includeAll: false,
				wholeCategories: ["loops","logic"],//dodamo celotno kategorijo(lopps, functions,text)================
				singleBlocks: ["controls_repeat_ext"],//posamezne delčke kot controls_if, list_getIndex, list_sort...
				excludedBlocks: [],//iz dosedanjega nabora delčkov lahko izključimo posamezne delčke====================
			},
		},
		startingExample: { //vnaprej podana koda ukazov
			blockly: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id="uyoWZ+ya}o|EQ}sL~P~6" deletable="false" movable="false" editable="false" x="0" y="0"><next><block type="turn" id="FxQm)l8(#gN6.z?t7)Es"><field name="PARAM_0">2</field><next><block type="forwardSimple" id="7VCW9f3j?O3:1)pdo/NA"><next><block type="controls_if" id="K!Ixah@a.bvyamhjSLmC"><value name="IF0"><block type="sensorNumber" id="Mu]8f9pZM5`jR5Mx+#Jf"></block></value><statement name="DO0"><block type="turn" id=";!3D,7Zw(Moyt,3th3l;"><field name="PARAM_0">-2</field><next><block type="forwardSimple" id="Sd/csGJswI~?o}lESqFD"></block></next></block></statement></block></next></block></next></block></next></block><additional>{}</additional></xml>',
			// blockly: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id="Yx#}`-PvOO]HA4c0m7]F" deletable="false" movable="false" editable="false" x="0" y="0"><next><block type="move" id="4,KCbSD;_m-pZxtufj95"><field name="PARAM_0">W</field><value name="PARAM_1"><shadow type="math_number" id="CIspNjAYb7a*vulaV1{P"><field name="NUM">3</field></shadow></value><next><block type="destroy" id="KKQSCxKu;sV}+gJe?9=)"><field name="PARAM_1">obstacle</field><field name="PARAM_0">2</field><next><block type="move" id="XWv:_2Qbckm|{-94@`u,"><field name="PARAM_0">N</field><value name="PARAM_1"><shadow type="math_number" id="oR6vzE-h~{7oseb?hIAf"><field name="NUM">1</field></shadow></value></block></next></block></next></block></next></block><additional>{}</additional></xml>', 
		},					
		checkEndCondition:  (context, lastTurn) => { 
			robotEndConditions.checkCombiner(context, lastTurn, [
				(context, lastTurn) => { robotEndConditions.checkItemExistence(context, lastTurn, {category: "transportable"}, {}, exist=false) }, 
				(context, lastTurn) => { robotEndConditions.checkItemCoincidence(context, lastTurn, {type: "robot0"}, {category: "hole"}) },
			])
		},
		computeGrade: robotGradeFunctions.allOrNothing,
			
		border: 0.01,
		backgroundColour: false,
		backgroundTile: '',
		borderColour: 'Wight',

		cellSide: 60,  	
		numberOfRobots: 1,
		// only categories: robot, obstacle, transportable, coin, button --> are HARDCODED

		// offsetX/y lahko grafiko mal prestavlamo (da je čes več polij)
		// zOrder če imamo več objektov na isti celici to definira klakšen bo vrstni red prikaza
		// isTransportable ali junak lahko pobere naš objekt
		// za size velikokrat uporabikar cellSize
		// nbStates upliva na pobiranje kako točno
		itemTypes: {                                                                                            
			robot0: { img: ["Kekec.png",   "Kekec.png"], side: 70, nbStates: 1, offsetX: -6, zOrder: 8, category: {'robot': true}, },
			obstacle: { num: 2, img: "Trava.png", zOrder: 3, category: {'obstacle': true}},
			mojca: { num: 3, img: "Mojca.png",offsetY: -20, zOrder: 4, category: {'obstacle': true}},
			//zakaj roze ne delajo
			roza1:{num: 4, img:"Roza1.png",zOrder: 4,category: {'transportable':true},},
			roza2:{num: 5, img:"Roza2.png",zOrder: 4,category: {'transportable':true},},
			roza3:{num: 6, img:"Roza3.png",zOrder: 4,category: {'transportable':true},},
			roza4:{num: 7, img:"Roza4.png",zOrder: 4,category: {'transportable':true},},
			roza5:{num: 8, img:"Roza5.png",zOrder: 4,category: {'transportable':true},},
			strupenaroza1:{num: 9, img:"StrupenaRoza1.png",zOrder: 4,category: { 'transportable':false},},
			strupenaroza2:{num: 10, img:"StrupenaRoza2.png",zOrder: 4,category: { 'transportable':false},},
			strupenaroza3:{num: 11, img:"StrupenaRoza3.png",zOrder: 4,category: { 'transportable':false},},
		
			hole: {num:15, img:["hisa.png"],zOrder: 2, category:{"hole":true}},

			number:{category:{"number":true}},
		}, 
		ignoreInvalidMoves: false,
	};

	subTask.data = {
		easy: [
			{
				tiles: [
					[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
					[2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 2],
					[2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2],
					[2, 2, 2, 9, 2, 1, 1, 1, 2, 6, 2],
					[2, 2, 2, 1, 2, 15, 2, 1, 2, 1, 2],
					[2, 2, 2, 8, 2, 2, 2, 7, 2, 10, 2],
					[2, 2, 2, 1, 1, 9, 1, 1, 2, 5, 2],
					[2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2],
					[2, 1, 1, 11, 1, 1, 4, 1, 1, 1, 2],
					[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
					
				],
				initItems: [ //direktno dodamo elemente
					{row: 7, col: 1, dir: 0, type: "robot0" },

					{row:8, col:1, type:"number",value:8},
					{row:8, col:9, type:"number",value:7},
					{row:1, col:9, type:"number",value:6},
					{row:1, col:3, type:"number",value:5},
					{row:6, col:3, type:"number",value:4},
					{row:6, col:7, type:"number",value:3},
					{row:3, col:7, type:"number",value:2},
					{row:3, col:5, type:"number",value:1},


					{row:5,col:6,type:"mojca"}
				
				],
			},
		],
	};

	initBlocklySubTask(subTask);	//klic programskega orodja Blockly
}