(function($){
	'use strict';
	
    let typing = true;
    function setupTypewriter(t, speed, stringtype) {
        
        var HTML = stringtype;
	    t.innerHTML = "";

	    var cursorPosition = 0,
	        tag = "",
	        writingTag = false,
	        tagOpen = false,
	        typeSpeed = speed || 100,
        tempTypeSpeed = 0;

	    var type = function() {
        
	        if (writingTag === true) {
	            tag += HTML[cursorPosition];
	        }

	        if (HTML[cursorPosition] === "<") {
	            tempTypeSpeed = 0;
	            if (tagOpen) {
	                tagOpen = false;
	                writingTag = true;
	            } else {
	                tag = "";
	                tagOpen = true;
	                writingTag = true;
	                tag += HTML[cursorPosition];
	            }
	        }
	        if (!writingTag && tagOpen) {
	            tag.innerHTML += HTML[cursorPosition];
	        }
	        if (!writingTag && !tagOpen) {
	            if (HTML[cursorPosition] === " ") {
	                tempTypeSpeed = 0;
	            }
	            else {
	                tempTypeSpeed = (Math.random() * typeSpeed) + 50;
	            }
	            t.innerHTML += HTML[cursorPosition];
	        }
	        if (writingTag === true && HTML[cursorPosition] === ">") {
	            tempTypeSpeed = (Math.random() * typeSpeed) + 50;
	            writingTag = false;
	            if (tagOpen) {
	                var newSpan = document.createElement("span");
	                t.appendChild(newSpan);
	                newSpan.innerHTML = tag;
	                tag = newSpan.firstChild;
	            }
	        }

	        cursorPosition += 1;
	        if (cursorPosition < HTML.length - 1) {
                setTimeout(type, tempTypeSpeed);
                
                if(cursorPosition + 1 === HTML.length - 1)
                    typing = false;
	        }
	    };

	    return {
	        type: type
	    };
    }
    
    let txt = $('#string-type').html();
	setupTypewriter(document.getElementById('typewriter'), 300, txt).type();
    
    $('.btn-reload-code').click(function (){ 
        if(!typing){
            setupTypewriter(document.getElementById('typewriter'), 300, txt).type();
            typing = true;
        }
    });

    const skills = {
		strongskills : ["Asp.net MVC","Asp.net Core","Web API","C#","Javascript","html5","css3","SQL","Bootstrap","Jquery"],
		mediumskills : ["React JS","Vue.js","Elasticsearch","Dotnetnuke","Postgresql","DHTMLX","PHP","LESS","SignalR"],
		sourceskills : ["SVN","Source Tree","Git"],
		moreskills : ["Jenkins","Gulp/Grunt","Google Analytics","Webpack"],
		softkills : ["Communication","Team work","Creativity"]
    };
	// binding skills
	let strTemplate = ``;
	for(const [key, value] of Object.entries(skills)){
		let skill = value;
		skill.forEach(element => {
			strTemplate += `<li><span class='${key}'>${element}</span></li>`;
		});
	}
	$('.bag-skill').html(strTemplate);
	
	var canvas = document.getElementById("ab-img");
	var ctx = canvas.getContext("2d");
	canvas.width = 100;
	canvas.height = 100;
	var imgAb = new Image();
	imgAb.onload = drawImageActualSize;
	imgAb.src = 'images/ab-img.png';

	function drawImageActualSize(){
		canvas.width = this.naturalWidth;
		canvas.height = this.naturalHeight;
  		ctx.drawImage(this, 0, 0, this.width, this.height);
	}

	canvas.addEventListener('mousedown', function(e){
		getCursorPosition(canvas, e);
	});

	// canvas.addEventListener('mousemove', function(e){
	// 	getCursorPosition(canvas, e);
	// });

	function getCursorPosition(canvas, event){
		const rect = canvas.getBoundingClientRect();
		const x = event.clientX - rect.left;
		const y = event.clientY - rect.top;
		console.log('x : ' + x + ',y : ' + y);
	};

	setTimeout(() => {
		AOS.init();
	}, 1000);

})(jQuery)