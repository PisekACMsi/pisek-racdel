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

				startingBlockName: "Program",	
				categories: {				
				   actions: "Gibanje",
				},
				messages:{
					itemsExist: "Eva ni uzela zoge in zadela gol",
					itemsDontExist: "Eva je zadela gol in Tačko je doma",
					//itemsCoincide: "Marko je prišel do zelene zastavice. ",
					itemsDontCoincide: "Eva ni zadela gola",
				},
				options:{
					robotName0: "Eva", 
					robotName1: "Tačko", 
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
					"move",  //kako se lahko robot premika
					"turn",
					"turnAround",
					"changeRobot",
					"transport",
					"sensorValue",
					"sensorNumber",
				],
				// robot:  ["left","right","north","west","east","south","changeRobot", "pickTransportable","dropTransportable"],
			},
			standardBlocks: {  //če dodajam iz francoskega že narejene delčke(obsataj file teh definicij)===============================
				includeAll: false,
				wholeCategories: [],//dodamo celotno kategorijo(lopps, functions,text)================
				singleBlocks: ["controls_repeat_ext"],//posamezne delčke kot controls_if, list_getIndex, list_sort...
				excludedBlocks: [],//iz dosedanjega nabora delčkov lahko izključimo posamezne delčke====================
			},
		},
		startingExample: { //vnaprej podana koda ukazov
			blockly: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id="uyoWZ+ya}o|EQ}sL~P~6" deletable="false" movable="false" editable="false" x="0" y="0"></block><block type="changeRobot" id="~TtmT}(Er)j?f!fJ-8Ij" x="133" y="28"><field name="PARAM_0">robot0</field></block><block type="move" id="cKZrqjEzk+SYoi9_!!DK" x="3" y="92"><field name="PARAM_0">S</field><value name="PARAM_1"><shadow type="math_number" id="KI[#rbH+sI3Zvo*ty1_-"><field name="NUM">6</field></shadow></value><next><block type="move" id="?*Jc3{O,*Qvz**G?jS6!"><field name="PARAM_0">W</field><value name="PARAM_1"><shadow type="math_number" id="HR-XfVXb!q?RFcuu#.!X"><field name="NUM">1</field></shadow></value></block></next></block><block type="move" id="`zh@fNi@}?.-{W#J{}Fh" x="342" y="104"><field name="PARAM_0">W</field><value name="PARAM_1"><shadow type="math_number" id="VTF@pUk:b,+NoUWaKDMD"><field name="NUM">3</field></shadow></value><next><block type="move" id=")l2ZntcYmQvDv/8sFs/~"><field name="PARAM_0">N</field><value name="PARAM_1"><shadow type="math_number" id="fuijY##X-#52hS@:5u)C"><field name="NUM">6</field></shadow></value></block></next></block><block type="move" id="}1?Zh3EKViIMa2p-L#xj" x="197" y="214"><field name="PARAM_0">W</field><value name="PARAM_1"><shadow type="math_number" id="(To6-.0JR1sIk@rh|L49"><field name="NUM">3</field></shadow></value><next><block type="changeRobot" id="@QqFepcbtR!y3XHFz!SJ"><field name="PARAM_0">robot1</field></block></next></block><block type="move" id="oVcV7s@`2BF,t(ZmXIBu" x="29" y="311"><field name="PARAM_0">E</field><value name="PARAM_1"><shadow type="math_number" id=";Etv{(c+e}Bx,)Hy.E@D"><field name="NUM">5</field></shadow></value><next><block type="move" id="D]dL)h44_i?c*C7]2*.0"><field name="PARAM_0">NE</field><value name="PARAM_1"><shadow type="math_number" id="ggS!zN!?[d{oncw};b+*"><field name="NUM">1</field></shadow></value></block></next></block><block type="transport" id="~B-cecp:4`qI(w)34V.w" x="37" y="448"><field name="PARAM_0">pick</field></block><additional>{}</additional></xml>',
			// blockly: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id="Yx#}`-PvOO]HA4c0m7]F" deletable="false" movable="false" editable="false" x="0" y="0"><next><block type="move" id="4,KCbSD;_m-pZxtufj95"><field name="PARAM_0">S</field><value name="PARAM_1"><shadow type="math_number" id="CIspNjAYb7a*vulaV1{P"><field name="NUM">2</field></shadow></value><next><block type="controls_repeat_ext" id="xz}GE@0Jjd*qSArjsPK7"><value name="TIMES"><shadow type="math_number" id="tt~vC4c`SoXp*D0{g`g4"><field name="NUM">10</field></shadow></value><statement name="DO"><block type="move" id="WeEDtrj7~6yjk(UWz0-I"><field name="PARAM_0">NW</field><value name="PARAM_1"><shadow type="math_number" id="opp6D`R,=GUHmyGwa.R?"><field name="NUM">2</field></shadow></value><next><block type="move" id="@1V??r6T.~WNU!1eUDFK"><field name="PARAM_0">W</field><value name="PARAM_1"><shadow type="math_number" id="0{K)gjXQYd/@ACLa1Zth"><field name="NUM">2</field></shadow></value><next><block type="move" id="z)fMk;vuUbh5Da[KR*xj"><field name="PARAM_0">SW</field><value name="PARAM_1"><shadow type="math_number" id="wB9]`B@g|8|}GB/1Tm@!"><field name="NUM">2</field></shadow></value><next><block type="move" id="GeZy`Ver;W!z`XSw45r`"><field name="PARAM_0">S</field><value name="PARAM_1"><shadow type="math_number" id="sZB.rV,77Bqvtrj0kOBO"><field name="NUM">2</field></shadow></value><next><block type="move" id="M17`JoUY;BMn/l@i}fsy"><field name="PARAM_0">SE</field><value name="PARAM_1"><shadow type="math_number" id="Hd_3qqIk*y;,]lM_qE@,"><field name="NUM">2</field></shadow></value><next><block type="move" id="k}eq{We-_F/f])5ibq*S"><field name="PARAM_0">E</field><value name="PARAM_1"><shadow type="math_number" id="gu?bUo7P.xnCNvY|6aH#"><field name="NUM">2</field></shadow></value><next><block type="move" id="R/G.u-]Ep6Moi)~0{B}7"><field name="PARAM_0">NE</field><value name="PARAM_1"><shadow type="math_number" id="c1;Ku-whH9kw@[,TwuQK"><field name="NUM">2</field></shadow></value><next><block type="move" id="O9,[~_q4s8-*m-C/wuRr"><field name="PARAM_0">N</field><value name="PARAM_1"><shadow type="math_number" id="QI=mOSVV5;~2s5DK@fCD"><field name="NUM">2</field></shadow></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></statement></block></next></block></next></block><additional>{}</additional></xml>',
			// blockly: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id="Yx#}`-PvOO]HA4c0m7]F" deletable="false" movable="false" editable="false" x="0" y="0"><next><block type="move" id="4,KCbSD;_m-pZxtufj95"><field name="PARAM_0">W</field><value name="PARAM_1"><shadow type="math_number" id="CIspNjAYb7a*vulaV1{P"><field name="NUM">3</field></shadow></value><next><block type="destroy" id="KKQSCxKu;sV}+gJe?9=)"><field name="PARAM_1">obstacle</field><field name="PARAM_0">2</field><next><block type="move" id="XWv:_2Qbckm|{-94@`u,"><field name="PARAM_0">N</field><value name="PARAM_1"><shadow type="math_number" id="oR6vzE-h~{7oseb?hIAf"><field name="NUM">1</field></shadow></value></block></next></block></next></block></next></block><additional>{}</additional></xml>', 
		},					
		checkEndEveryTurn: false,		                              //kako pogosto preverjamo uspešnost rešitve
		checkEndCondition:  (context, lastTurn) => {                  // funkcija za preverjanje vspešnosti
			robotEndConditions.checkItemExistence(context, lastTurn, {category:"coin"}, {}, exist=false) // vse možnosti najdemo v blocklyRobot_lib.js(2069) var robotEndConditions
			//za kombinirane uporabljamo funvkije primer: na datoteki kombinacija \\ Več pogojev
		},
		computeGrade: robotGradeFunctions.allOrNothing,
			
		border: 0.01,
		backgroundColour: false,
		backgroundTile: '',
		borderColour: 'Wight',

		cellSide: 60,  	
		numberOfRobots: 2,
		// only categories: robot, obstacle, transportable, coin, button --> are HARDCODED

		// offsetX/y lahko grafiko mal prestavlamo (da je čes več polij)
		// zOrder če imamo več objektov na isti celici to definira klakšen bo vrstni red prikaza
		// isTransportable ali junak lahko pobere naš objekt
		// za size velikokrat uporabikar cellSize
		// nbStates upliva na pobiranje kako točno
		itemTypes: {                                                                                            
			robot0: { img: ["Kekec.png",   "Kekec.png"], side: 70, nbStates: 1, offsetX: -6, zOrder: 8, category: {'robot': true}, },
			obstacle: { num: 2, img: "Trava.png", zOrder: 3, category: {'obstacle': true}},
			obstacle2: { num: 3, img: "Mojca.png",offsetY: -20, zOrder: 4, category: {'obstacle': true}},
			//zakaj roze ne delajo
			roza1:{num: 4, img:"Roza1.png",zOrder: 4},
			roza2:{num: 5, img:"Roza2.png",zOrder: 4},
			roza3:{num: 6, img:"Roza3.png",zOrder: 4},
			roza4:{num: 7, img:"Roza4.png",zOrder: 4},
			roza5:{num: 8, img:"Roza5.png",zOrder: 4},
			strupenaroza1:{num: 9, img:"StrupenaRoza1.png",zOrder: 4},
			strupenaroza2:{num: 10, img:"StrupenaRoza2.png",zOrder: 4},
			strupenaroza3:{num: 11, img:"StrupenaRoza3.png",zOrder: 4},
			//button: { img: ["button_unpressed.png", "button_pressed.png"], zOrder: 2, category: {'button':true} },
			//door: { img: ["orange_floor.png", "grass4.png"], zOrder: 2, category: [{'obstacle':true}, {'obstacle':false}]},
			//goal: { num: 3, side: 80, img:"flag2.png" },
			//marble: {num: 4, img: ["ball.png"], zOrder: 1, category: {'transportable':true},transOrder: 0},
			//hole: {num: 5, img: ["goal.png"], zOrder: 1, },
			coin: {num:15, img:["hisa.png"],zOrder: 1, category:{"coin":true}},

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
					[2, 2, 2, 8, 2, 2, 3, 7, 2, 10, 2],
					[2, 2, 2, 1, 1, 9, 1, 1, 2, 5, 2],
					[2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2],
					[2, 1, 1, 11, 1, 1, 4, 1, 1, 1, 2],
					[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
					
				],
				initItems: [ //direktno dodamo elemente
					{ row: 7, col: 1, dir: 0, type: "robot0" },
					{row:8, col:1, type:"number",value:9}
				
				],
			},
		],
	};

	initBlocklySubTask(subTask);	//klic programskega orodja Blockly
}