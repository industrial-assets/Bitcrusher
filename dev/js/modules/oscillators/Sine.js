
	/*
	 *	SineWaveOscillator
	 * 	----------------------------
	 * 	Sine Wave Oscillator 
	 *
	 * 
	 * 	Written By John Bower, 2013
	 * 	john@industrialassets.co.uk
	 * 
	 * 	http://www.industrialassets.co.uk
	 * 
	 */
	
    this.BitCrusher = this.BitCrusher || {};
	
	(function() {
		
		
		var SineWaveOscillator = function () {
			
			this.$init();
			
		};
		
		var p = SineWaveOscillator.prototype;
		
		
		p.$init = function () {
			
			// constructor code
			
		};
		
		p.process = function (block, frequency, context) {
			
			var d = Math.sin(block / (context.sampleRate / (frequency * 2 * Math.PI)));
			
			return d;
			
		};
		
		BitCrusher.SineWaveOscillator = SineWaveOscillator;
	
	}());