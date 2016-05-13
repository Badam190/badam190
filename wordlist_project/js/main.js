var words = new Array (
	"the", "are", "as", "with", "at", "be", "this", "one", "had", "by", "but", "not", 
	"all", "were", "can", "if", "will",  "other" );	

var word_connectors = new Array (
	"of", "and", "a", "to", "in", "is", "that", "was", 
	"for", "on", "onto", "into", "are", "as", "with", "at", "be", "this", "have", "from", "or", "between");
 
var verbs = new Array ("located", "experiment",
"received","provide","trade","compare","suggested","entered","tied",
"lifted","wash", "block", "spread","settled","repeated","agreed","prepared", 
"stretched","experience","allow","fear","bought", "led","track", "laughed","count",
"smiled","fraction","killed","surprise","remain","wrote","shouted","design","joined",
"control","visit","caught","direct","increase", "called","take",
"know","lie","think", "belong","enjoy","except", "expect","sense","consider",
"send","create","arried","effect","view","say","help","tell","follow", "came","play",
"point", "answer","study","learn","add", "found","keep","start", "thought","saw",
"left","open","begin","walk","grow","took","eat","told","covered","hold","lost","sent",
"wear","save", "choose","touch","express","practice","report","rise","stick","suppose",
"fell","gave","wait","correct","became","decided","rest","stay","ran","brought",
"explain","check","rule","include","built","test","divided","return","believe","dance",
"love","rain","exercise","written","finished","discovered","lay","meet", "raised",
"represent","describe","cross","speak", "solve", "appear", "said","would", "like",
"write", "go","see", "could", "been", "sit", "find", "did", "get", "come", "made",  "may",
"part", "back", "give", "want", "show", "form", "set", "put", "does", "must", "turn", "ask", "went" , "read" , "change" , "need" ,
"move", "try" ,"spell" ,"should" , "light" ,"might", "seem" , "got" , "run" ,"began" , 
"carry", "hear" , "let" , "talk" ,"stop" , "second", "cut" , "list" , 
"being", "leae" , "stand", "mark" ,"room", "knew" , "heard" , "order" , 
"become", "happened" , "measure" ,"remember", "reached" , "listen" , "step" , 
"pulled", "draw" , "seen" , "cried" , "notice", "sing" , "produce" ,"fall" ,
"done", "shown","feel","contain" , "stood", "force","surface", "note" ,
"base", "understand", "bring", "use", "shape", "clear", "filled" , "power", 
"size",  "an", "out", "make", "line", "end", "miss", "complete", "known", "circle", "bill", "felt", "picked", 
"mind", "cause", "wish", "drop", "developed", "site", "sum" , "sat" , "reason",
"kept", "interest", "race", "job" , "edge", "record", "gone" , "root", "shall", 
"held", "result", "pushed", "soil", "copy" ,"spring", "type", "lead", "section", 
"amount", "scale", "speed", "trip" , "died",  "beat" , "wire", "pay" , "fit" , 
"guess", "indicate", "blow", "value", "lie", "spot", "position", "sight", 
"process", "action", "chance", "score", "details", "underline" );

var adverb = new Array ( "up", "now","again",  "off" ,"away", "near", "never","often","once","almost","sometimes",
"finally","quickly","carefully","ago","yet","perhaps", "suddenly" ,"probably" ,"already",
"instead","quite","exactly","else","thus","modern" ,"rather" ,"particular" ,
"especially","no" ,"down" ,"over" ,"new","most" ,"every" ,"through" ,"too" ,"also", 
"around" ,"why" ,"below" ,"close" , "together", "far" ,"ever" ,"today" ,
"however" ,"inside" ,"either" ,"least" , "maybe" ,"fair"  ,"ahead" ,"forward"  );

var adj = new Array ( "clear","filled", "complete","known", "fit", "long","only", "little", 
	"good", "old", "same" , "small" , "large" ,"big" ,"even" ,"different" ,"still" ,"last"  ,"few",
	"next" ,"hard", "important" ,"late","young" ,"real", "easy", "short",
	"better", "best" ,"fast" ,"slowly", "certain", "strong", "round", "common", "dry","deep","full", "hot","able", "dark", "special",  "heavy" ,
	"ready", "simple" ,"wide","beautiful" ,"happy", "soft" ,"tall" ,"bright", "broken", "tiny" , "possible", "bad", "alone", "single" ,"strange", "less" ,  
	"silent", "interesting" ,  "famous" ,  "exciting", "thick"  , "thin", "major" , "necessary" , "plural"  ,	"various" ,  "opposite" , 	"wrong" ,  "pretty",  
	"afraid" , "dead", "huge" , "similar" ,  "difficult" ,"total" ,"entire" 
);

var nouns = new Array ("rose", "gun", 
	"office", "company", "mall", "human", "God", "factors", "century", "phrase",
	"bed", "pounds", "fingers", "woman","board", "crowd", "elements", "money",
	"voice", "plan", "ground", "figure", "ten", "person", "fact","inches",
	"street","building","class","wheels","equation","energy","region", "mile",
	"night", "sea", "river", "state", "face", "watch", "girl", "dog", 
	"horse", "birds", "friends", "pattern", "map", "farm", "man","boy", "men", "land", "home",
	"picture", "house","page","letter","mother", "school", "father","city", "earth", "eyes","head","paper","car",
	"body","questions","fish","area","door", "minutes", "words","time",
	"people", "water","oil","work","place","things", "name","sentence", 
	"number", "need"  ,"move"  ,"try"  ,"spell"  ,"should" ,"light"  ,
	"stop","second"  ,"cut"  ,"list"  ,"stand" ,"mark"  ,"room"  ,"order"  ,
	"measure"  ,"step"  ,"fall"  ,"feel"  ,"surface"  , "note"  ,
	"base"  ,"understand","shape"  ,"power"  ,"size" , "an","out"  ,
	"make","line","end" ,"miss" ,"circle" ,"bill" ,"mind" ,"cause" ,"wish" ,"site" ,"sum" ,"reason",
	"interest","race","job" ,"edge","record","root","result","soil","copy" ,"spring",
	"type","lead","section","amount","scale","speed","trip" ,"beat" ,"wire" ,"guess",
	"value" ,"spot" ,"position" , "sight" ,"process" ,"chance" ,"score" ,"details" ,
	"about" ,"two" ,"way" ,"first" ,"day" ,"years" ,"three" ,"kind" ,"animal" ,
	"tree" ,"story" ,"while" ,"example"  ,"life" , "always" ,"group" ,"side" , 
	"feet", "four" ,"idea" ,"song" ,"color" ,"top" ,"hours" , "black",  
	"products"  ,"wind",  "space", "morning","vowel" ,"hundred" ,"numeral" , "table" ,
	"unit" ,"field","road","verb", "course", "ocean" ,"green", "week" ,"plane" ,
	"system" ,"thousands", "object" , "six" ,"ball" ,"material", "pair" , "syllables",
	"center" ,"members" ,"blue"  ,"window" , "difference","distance",  "heart",
	"wall", "forest", "legs", "main",  "winter", "length"   , "arms",  
	"brother",  "store"  ,"sign"  ,"million","weather" ,  "instruments" , 
	"third"  , "months", "paragraph", "metal"  , "son" ,"outside",  "everything","white" ,"temperature", 
	"solution",  "everyone", "method",  "solution" ,"age", "solution" , "solution" ,"moment" , "natural" , "lot",  "stone" ,
	"solution" , "hole" , "cat" ,"symbols" ,"decimal" ,"period" ,
	"solution" ,"bit" , "seen", "string" ,"movement", "branches" ,
	"rhythm" ,"eight" ,"nose" ,"death" ,"division"  );
	
var firstword = new Array ("you", "he",
"I","your","she","their","her","my", "his", "our", "it", "we", 
"they", "each", "do", "these","some","any", "another", 
"such", "when", "there", "which", "how", "why");

var pronouns = new Array ("you", "he",
"I","your","she","their","them","her","him", "my", "his", "mine", "our", 
"yourself", "themselves", "itself", "it","himself", "itself", "yourself", "we", 
"they","us", "each", "do", "these","some","me","our", "much", "any", "another", 
"such", "when", "there", "which", "how", "why");


var counter = 0;
var timeStart = 0;
var timer = setInterval(function () {
	timeStart++;
	var passedTime = timeStart;
	
	if (passedTime<10) {
		passedTime = "0" + timeStart;
	}
	$(".seconds").html(passedTime);

	counter++;
	console.log(counter);

	if (counter >= 30) {
		$(".pageone").css("display", "none");
	     clearInterval(addline);
	     clearInterval(addword); 
	     clearInterval(timer);
	     clearInterval(startbutton);
	     count_back();   
	 }

}, 1000);

var addline = setInterval(function () {
	$('.container').append("<div class='linewrap'> <div class='line'></div> </div>");
	 
	$('.line').fadeIn();
}, 2000);


$('.stopbutton').click(function () {
	$(".pageone").css("display", "none");
	clearInterval(stringywords);
	clearInterval(addline);
	clearInterval(timer);
	clearInterval(startbutton);
	count_back();

});

var count_back_timer;

function count_back() {
	count_back_timer = setInterval(function () {
	  current_count = $($('.seconds')[0]).html() - 1;
	  console.log(current_count.length)
	  if (current_count > -1) {
	  	current_count = current_count.toString().length == 1 ? '0' + current_count : current_count
	  	$('.seconds').html(current_count);
	  }	else {
	  	clearInterval(count_back_timer);
	  }  
	}, 1000);
}

// var startbutton = 0;
// $('.midbit').ready(function () {
// 	$('.startbutton').each(function() {
// 		if($(this).hasClass("disabled")){
// 			$(this).addAttr("href");
// 		}
// 	});
// });

var stringywords = setInterval(function () {
 	addword (typeOfword);
 	typeOfword ++;

}, 2000);

var typeOfword = 0;

var addword = function (typeOfword) {
	switch (typeOfword) {
	case 0:
		$("p").append(firstword[Math.floor(Math.random()*firstword.length)]), $("p").append(" ");
	break;

	case 1:
		$("p").append(verbs[Math.floor(Math.random()*verbs.length)]), $("p").append(" "); 
	break;

	case 2:
		$("p").append(word_connectors[Math.floor(Math.random()*word_connectors.length)]), $("p").append(" "); 
	break;

	case 3:
		$("p").append(nouns[Math.floor(Math.random()*nouns.length)]), $("p").append(" "); 
	break;

	case 4:
		$("p").append(word_connectors[Math.floor(Math.random()*word_connectors.length)]), $("p").append(" "); 
	break;

	case 5:
		$("p").append(adj[Math.floor(Math.random()*adj.length)]), $("p").append(" "); 
	break;

	case 6:
		$("p").append(nouns[Math.floor(Math.random()*nouns.length)]), $("p").append(" "); 
	break;

	case 7:
		$("p").append(words[Math.floor(Math.random()*words.length)]), $("p").append(" "); 
	break;

	case 8:
		$("p").append(word_connectors[Math.floor(Math.random()*word_connectors.length)]), $("p").append(" "); 
	break;

	case 9:
		$("p").append(pronouns[Math.floor(Math.random()*pronouns.length)]), $("p").append(" "); 
	break;

	case 10:
		$("p").append(verbs[Math.floor(Math.random()*verbs.length)]), $("p").append(" "); 
	break;

	case 11:
		$("p").append(words[Math.floor(Math.random()*words.length)]), $("p").append(" "); 
	break;

	case 12:
		$("p").append(adj[Math.floor(Math.random()*adj.length)]), $("p").append(" "); 
	break;

	case 13:
		$("p").append(verbs[Math.floor(Math.random()*verbs.length)]), $("p").append(" "); 
	break;

	case 14:
		$("p").append(nouns[Math.floor(Math.random()*nouns.length)]), $("p").append(" "); 
	break;


}
};

// need a function that works the same as timer but backwards ... and it needs to start at whatever timestart is when you pageone is revealed


// $("p").html(nouns[Math.floor(Math.random()*nouns.length)]);
// $("p").append(" ");

// $("p").html(words[Math.floor(Math.random()*words.length)]);
// $("p").append(" ");




