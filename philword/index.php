<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Philword</title>
    <link rel="stylesheet" href="/wow.css">
    <link rel="stylesheet" href="/buttonstyles.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="/game.js"></script>
</head>

<body>
    
    <h1 id="question"> 
        
    </h1>

    <div id="score">

    </div>
    <div class="imgandinput">
        <div class="block">
            <div class="imgandhelp">
                <div id="mainImage">

                </div>
                <div class="eblan">
                    <div class="buthelp">
                        <button class="buttonHelp" id="buttonHelp" value="HELP" onclick="help()">HELP</button>
                    </div>
                    <div class="buthelp1">
                        <button class="buttonHelp" id="buttonHelp" value="CHANGE"  onclick="ChangeImg()">CHANGE</button>
                    </div> 
                    
                </div>           
            </div>    
        </div>
        <div class="answ">
                <div id="answ" >

                </div>
                <div class="wrapper">
                    <button class="button button1" id="button1" value="NEXT"  onclick="right()">NEXT &rarr;</button>
                </div>
        </div>
    </div>
    
    <div id="keyboard">
        
    </div>
   
   
    <div class="imdiz-overlay">

    </div>
	<div class="imdiz-modal">
	    <div class="txt" id="txt">

        </div>
        <button  id="restart" onclick="restart()">
            <h2>OK</h2>
            <!-- <input class="restart" id="restart"  type="button" value="RESTART"  onclick="restart()" /> -->
            <span class="first"></span>
            <span class="second"></span>
            <span class="third"></span>
            <span class="fourth"></span>
        </button>
	</div>

</body>

</html>