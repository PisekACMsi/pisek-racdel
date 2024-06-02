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
				messages:{
					itemsExist: "Robot ni pobral vseh vzorcev. Poskusi še enkrat.",
					itemsDontExist: "Robot je pobral vse vzorce.",
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
					"moveSimple",
				],
				// robot:  ["left","right","north","west","east","south","changeRobot", "pickTransportable","dropTransportable"],
			},
			standardBlocks: {
				includeAll: false,
				wholeCategories: [],
				singleBlocks: ["controls_repeat_ext"],
				excludedBlocks: [],
			},
		},
		startingExample: { //vnaprej podana koda ukazov
			// blockly: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id="Yx#}`-PvOO]HA4c0m7]F" deletable="false" movable="false" editable="false" x="0" y="0"><next><block type="moveSimple" id="P4][R0M*7=a|}TnK268k"><field name="PARAM_0">S</field><next><block type="controls_repeat_ext" id="!QLU{1J7tpUesT#RQEcO"><value name="TIMES"><shadow type="math_number" id="L,*Ezo0e@?_}u#2Za|tE"><field name="NUM">3</field></shadow></value><statement name="DO"><block type="controls_repeat_ext" id="~ax3O=s`Kz{4(.7gUJwH"><value name="TIMES"><shadow type="math_number" id="H81lKCg+H*9/+s36=e@Q"><field name="NUM">8</field></shadow></value><statement name="DO"><block type="moveSimple" id="wWI4g5~)ZJ!8|b=dEt4h"><field name="PARAM_0">E</field></block></statement></block></statement></block></next></block></next></block><additional>{}</additional></xml>',
			blockly: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id="Yx#}`-PvOO]HA4c0m7]F" deletable="false" movable="false" editable="false" x="0" y="0"><next><block type="moveSimple" id="P4][R0M*7=a|}TnK268k"><field name="PARAM_0">S</field><next><block type="controls_repeat_ext" id="n4outcQqRh9,/a(M=TNH"><value name="TIMES"><shadow type="math_number" id="21]deS`9Nbq-C13E_yYI"><field name="NUM">2</field></shadow></value><statement name="DO"><block type="moveSimple" id="EV0{z8D_aKh(Kaazp_6i"><field name="PARAM_0">E</field></block></statement><next><block type="controls_repeat_ext" id="w}?Mw;3M~;vxC(lBgoK:"><value name="TIMES"><shadow type="math_number" id="G!7u!fw;w!nXG!x:_b;T"><field name="NUM">2</field></shadow></value><statement name="DO"><block type="moveSimple" id="cFT;/WZ#ca.|Hfqb@X?l"><field name="PARAM_0">S</field></block></statement><next><block type="moveSimple" id="o(s7oLrD=9O8.EtI10_Z"><field name="PARAM_0">E</field><next><block type="move" id="~C)aSrvO+uxag.LL/A1j"><field name="PARAM_0">W</field><value name="PARAM_1"><shadow type="math_number" id="Cu;)XfN,Yb2:F,*U{t04"><field name="NUM">2</field></shadow></value><next><block type="move" id="M:4LD(uI?BaPr3GdZ1`l"><field name="PARAM_0">E</field><value name="PARAM_1"><shadow type="math_number" id="LA8LNxo|@ZJE`(V#jo?{"><field name="NUM">1</field></shadow></value><next><block type="move" id="dCyibzu}?4ffe-A/xiU]"><field name="PARAM_0">N</field><value name="PARAM_1"><shadow type="math_number" id="Pe2eWf|~x6Dz-~|;8?`]"><field name="NUM">2</field></shadow></value><next><block type="move" id="f486b@cfV#|_OinU`mlG"><field name="PARAM_0">E</field><value name="PARAM_1"><shadow type="math_number" id="5K)*=_E.VQ`75p.feD|G"><field name="NUM">3</field></shadow></value><next><block type="move" id="Z)L]V[B=_NoZ0S`YGi8a"><field name="PARAM_0">S</field><value name="PARAM_1"><shadow type="math_number" id="6j.}MO_t?!rO`DD!*h_P"><field name="NUM">4</field></shadow></value><next><block type="move" id="QazhS+lUQK.NprN#LhnV"><field name="PARAM_0">W</field><value name="PARAM_1"><shadow type="math_number" id="9oz3UPlK_}-[X{j/AAQY"><field name="NUM">1</field></shadow></value><next><block type="move" id="YvE)GTaN)l-k4=NSIE{F"><field name="PARAM_0">S</field><value name="PARAM_1"><shadow type="math_number" id="#l6-`Nx],8nN71P|Jc-?"><field name="NUM">4</field></shadow></value><next><block type="moveSimple" id="G3R3-Le`,Ue=}ovbX[R2"><field name="PARAM_0">W</field><next><block type="move" id="0q+MxY9pS0av9p`.o~rq"><field name="PARAM_0">E</field><value name="PARAM_1"><shadow type="math_number" id="#deXyc01sn0x5:e[4:d~"><field name="NUM">3</field></shadow></value><next><block type="move" id="N!vcr.4f-KNQlsr8(QQ0"><field name="PARAM_0">W</field><value name="PARAM_1"><shadow type="math_number" id="44|0WfHZK;3lofUe?{?G"><field name="NUM">2</field></shadow></value><next><block type="move" id="NwbR.F=,nHyO!Lv@sjQw"><field name="PARAM_0">N</field><value name="PARAM_1"><shadow type="math_number" id="w*hm/#Z98.QO:qr_A4-O"><field name="NUM">2</field></shadow></value><next><block type="move" id="xKlmKfRKB_m)NhO7pR8~"><field name="PARAM_0">E</field><value name="PARAM_1"><shadow type="math_number" id="|=FXbU}sklw-xBCiEYlu"><field name="NUM">2</field></shadow></value><next><block type="move" id="Sn}Amr7F45n3)oL_rsoO"><field name="PARAM_0">W</field><value name="PARAM_1"><shadow type="math_number" id="7xgPZ=3JV{3Fn:;FR@{="><field name="NUM">2</field></shadow></value><next><block type="move" id="R6eWH!hdb=DNJ{+cg,`S"><field name="PARAM_0">N</field><value name="PARAM_1"><shadow type="math_number" id="=x!SI~V,CeRhgqT6.|Q~"><field name="NUM">2</field></shadow></value><next><block type="move" id="!nZ6dSL38elj+{L#EMaG"><field name="PARAM_0">W</field><value name="PARAM_1"><shadow type="math_number" id="Rrc5~4hfx`0~Rb!K~pi9"><field name="NUM">4</field></shadow></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block><additional>{}</additional></xml>',
		},					
		checkEndEveryTurn: false,		//kako pogosto preverjamo uspešnost rešitve
		// checkEndCondition:  (context, lastTurn) => { robotEndConditions.checkItemExistence(context, lastTurn, {category: "coin"}, {}, exist=false) },
		checkEndCondition:  (context, lastTurn) => { robotEndConditions.checkItemExistence(context, lastTurn, {category: "coin"}, {}, exist=false) }, 
		computeGrade: robotGradeFunctions.allOrNothing,
			
		// border: 0.,
		border: 0,
		backgroundColour: "white",
		// backgroundTile: false,
		backgroundTile: "makadamskacesta2_robot.png",
		borderColour: "black",
		showLabels: true,

		cellSide: 60,	
		numberOfRobots: 1,
		// only categories: robot, obstacle, transportable, coin, button --> are HARDCODED
		itemTypes: {
			robot0: { img: "_graphics/pixelated/tabornik_all_8_sides.png", side: 80, nbStates: 8, offsetX: -14, zOrder: 8, category: {'robot': true}, dir:3},
			obstacle: { num: 2, img: "kamni_robot.png",  zOrder: 8, category: {'obstacle':true}, },
			obstacle2: { num: 3, img: "pesek_s_kamni_robot.png",  zOrder: 8, category: {'obstacle':true}, },
			coin: { num: 6, img: "kapsula_robot.png", zOrder: 8, category: {'coin':true}, },
			button: { num: 7, img: ["stikalo_robot_rdece.png", "stikalo_robot_zeleno.png"], zOrder: 8, category: {'button':true}, },
			door: { num: 8, img: ["vrata_robot.png", "makadamskacesta2_robot.png"], zOrder: 8, category: [{'obstacle':true}, {'obstacle':false}]},
			door2: { num: 9, img: ["makadamskacesta2_robot.png","kamni_robot.png"], zOrder: 8, category: [{'obstacle':false}, {'obstacle':true}]},
			door3: { num: 10, img: ["kamni_robot.png", "makadamskacesta2_robot.png"], zOrder: 8, category: [{'obstacle':true}, {'obstacle':false}]},

		
			


		}, 
		ignoreInvalidMoves: false,
	};

	subTask.data = {
		easy: [
			{
				tiles: [
					[1, 1, 1, 1, 1, 2, 1, 2, 3, 1, 1, 1, 1],
					[1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1],
					[1, 1, 1, 1, 1, 3, 2, 3, 1, 2, 2, 1, 3],
					[1, 1, 1, 1, 1, 1, 3, 6, 1, 1, 3, 1, 2],
					[3, 2, 2, 3, 1, 2, 1, 2, 3, 2, 3, 6, 1],
					[1, 1, 1, 1, 1, 1, 1, 1, 6, 1, 1, 1, 1],
					[2, 1, 2, 2, 3, 2, 2, 3, 3, 2, 1, 2, 3],
					[3, 6, 2, 1, 1, 1, 1, 1, 1, 3, 1, 1, 6],
					[1, 3, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 2],
					[1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1]
					
				],
			   	initItems: [
					{ row: 0, col: 6, dir: 2, type: "robot0"},

					{ row: 3, col: 9, type: "button", id: 1},
					{ row: 0, col: 9, type: "door2",id:1},
					{ row: 1, col: 9, type: "door3",id:1},

					{ row: 9, col: 11, type: "door", id: 2},
					{ row: 9, col: 9, type: "button", id: 2},
					{ row: 7, col: 11, type: "door3", id:2},

					{ row: 5, col: 7, type: "door", id: 2},
					{ row: 9, col: 12, type: "button", id: 3},
														
				],
			},
		 ],
	};

	initBlocklySubTask(subTask);	//klic programskega orodja Blockly
}