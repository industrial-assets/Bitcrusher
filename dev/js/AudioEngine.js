

this.BitCrusher = this.BitCrusher || {};

(function() {

		var AudioEngine = function(context) {

			this.$init(context);

		};

		var p = AudioEngine.prototype;

		p.$init = function(context) {
			
			this.osc1 = new BitCrusher.SineWaveOscillator();

			var targ = this;
			this.x = 0;
			// Initial sample number
			this.context = context;
			this.node = context.createScriptProcessor(1024, 1, 1);
			this.node.onaudioprocess = function(e) {
				targ.process(e);
			};
			
			
			this.source_node = context.createBufferSource();
			
			
			this.analyzer = context.createAnalyser();
			this.analyzer.fftSize = 2048; // 2048-point FFT
			this.node.connect(this.analyzer);
			this.analyzer.connect(context.destination);
			
			this.frequency = 440;
			
			this.noteIsOn = false;

		};

		p.process = function(e) {

			
			var data = e.outputBuffer.getChannelData(0);
			
			
			for (var i = 0; i < data.length; ++i) {
				
				if (!this.noteIsOn) {
					data[i] = 0;
				} else {
					data[i] = this.osc1.process(this.x++, this.frequency, this.context);
				}
				
			}
			
			// Update source node buffer with new data
			//this.source_node.buffer = e.outputBuffer;
			
		};

		p.play = function() {
			this.node.connect(this.context.destination);
		};

		p.pause = function() {
			this.node.disconnect();
		};
		
		
		p.frequencyTable = {
			c:261.63,
			c1:277.18,
			d:293.66,
			d1:311.13,
			e:329.63,
			f:349.23,
			f1:369.99,
			g:392.00,
			g1:415.30,
			a:440.00,
			a1:466.16,
			b:493.88
		};
		
		

		BitCrusher.AudioEngine = AudioEngine;

	}()); 