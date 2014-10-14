

<html>
	<head>
	
	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
	<script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min.js"></script>
	
	<script src="assets/js/main.js"></script>
	<script src="assets/js/Bitcrusher.min.js"></script>
	
	<link rel="stylesheet" href="assets/css/dark-hive/jquery-ui-1.10.3.custom.min.css"/>
	
	<link rel="stylesheet" href="assets/css/style.min.css"/>
	
	</head>

	<body>
		
		<canvas id="spectrumAnalyzer" width="400" height="150"></canvas>
		
		<frameset>
			<div id="radio">
				<input type="radio" id="osc1Sine" name="osc1" value="sine" checked=true/><label for="osc1Sine">Sine</label>
				<input type="radio" id="osc1Noise" name="osc1" value="noise"/><label for="osc1Noise">Noise</label>
			</div>
			
		</frameset>
		
		<button id="playButton">Play</button>
		
		<button id="pauseButton">Pause</button>
		
	</body>
</html>
