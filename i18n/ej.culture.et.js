ej.addCulture( "et", {
	name: "et",
	englishName: "Estonian",
	nativeName: "eesti",
	language: "et",
	numberFormat: {
		",": " ",
		".": ",",
		"NaN": "avaldamatu",
		negativeInfinity: "miinuslõpmatus",
		positiveInfinity: "plusslõpmatus",
		percent: {
			pattern: ["-n%","n%"],
			",": " ",
			".": ","
		},
		currency: {
			pattern: ["-n $","n $"],
			",": " ",
			symbol: "€"
		}
	},
	calendars: {
		standard: {
			"/": ".",
			firstDay: 1,
			days: {
				names: ["pühapäev","esmaspäev","teisipäev","kolmapäev","neljapäev","reede","laupäev"],
				namesAbbr: ["P","E","T","K","N","R","L"],
				namesShort: ["P","E","T","K","N","R","L"]
			},
			months: {
				names: ["jaanuar","veebruar","märts","aprill","mai","juuni","juuli","august","september","oktoober","november","detsember",""],
				namesAbbr: ["jaan","veebr","märts","apr","mai","juuni","juuli","aug","sept","okt","nov","dets",""]
			},
			AM: ["EL","el","EL"],
			PM: ["PL","pl","PL"],
			patterns: {
				d: "d.MM.yyyy",
				D: "d. MMMM yyyy",
				t: "H:mm",
				T: "H:mm:ss",
				f: "d. MMMM yyyy H:mm",
				F: "d. MMMM yyyy H:mm:ss",
				M: "dd. MMMM"
			}
		}
	}
});