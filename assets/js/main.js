
var context;
var audioEngine;

var canvas, canvas_context;

$(document).ready(function () {
	

	var audioContext = new webkitAudioContext();
	
	audioEngine = new AudioEngine(audioContext);
	
	$("#playButton").button().click(function () {
		audioEngine.play();
	});
	
	$("#pauseButton").button().click(function () {
		audioEngine.pause();
	});
	
	
	$( "#radio" ).buttonset();
	
	// Oscillator Buttons
	$("#osc1Sine").click(function () {
		audioEngine.osc1 = new SineWaveOscillator();
	});
	$("#osc1Noise").click(function () {
		audioEngine.osc1 = new NoiseOscillator();
	});
	
	
	
	
	// Key Down Listeners
	$(window).keydown( function (event) {
		
		audioEngine.noteIsOn = true;
		
		console.log(event.which);
		
		if ( event.which == 90 ) {
			audioEngine.frequency = audioEngine.frequencyTable.c;
		} else if ( event.which == 83 ) {
			audioEngine.frequency = audioEngine.frequencyTable.c1;
		} else if ( event.which == 88 ) {
			audioEngine.frequency = audioEngine.frequencyTable.d;
		} else if ( event.which == 68 ) {
			audioEngine.frequency = audioEngine.frequencyTable.d1;
		} else if ( event.which == 67 ) {
			audioEngine.frequency = audioEngine.frequencyTable.e;
		}
	});
	
	$(window).keyup( function (event) {
		
		audioEngine.noteIsOn = false;
		
	});
	
	
	createSpectrumAnalyzer();
	
});



function createSpectrumAnalyzer () {
	
	canvas = document.getElementById("spectrumAnalyzer");
	canvas_context = canvas.getContext("2d");
	
	// Render every 50ms
	window.setInterval(updateSpectrumAnalyzer, 50);
	
	// Start the music
	//audioEngine.source_node.noteOn(0);
}


function updateSpectrumAnalyzer () {
	  // This graph has 30 bars.
	  var num_bars = 30;
	
	
	
		FFTData = new Uint8Array(audioEngine.analyzer.frequencyBinCount);
        audioEngine.analyzer.getByteFrequencyData(FFTData);
        

	  // Clear the canvas
	  canvas_context.fillStyle = "rgba(0, 0, 0, 0.1)";
	  canvas_context.fillRect(0, 0, canvas.width, canvas.height);
	  
	  canvas_context.fillStyle = "#FFFFFF";
	  for (var i=0;i<FFTData.length;i++) {
	  	
	  	var x = (i / FFTData.length) * canvas.width;
	  	var y = FFTData[i] + canvas.height/2;
	  	
	  	canvas_context.fillRect(x, y, 1, 1);
	  	
	  }
	
	 
	

};


