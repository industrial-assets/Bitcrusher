
	/*
	 *	Noise
	 * 	----------------------------
	 * 	Noise Oscillator 
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
		
		
		var NoiseOscillator = function () {
			
			this.$init();
			
		};
		
		var p = NoiseOscillator.prototype;
		
		
		p.$init = function () {
			
			// constructor code
			
		};
		
		p.process = function () {
			
			var d = Math.random();
			
			return d;
			
		};
		
		BitCrusher.NoiseOscillator = NoiseOscillator;
	
	}());