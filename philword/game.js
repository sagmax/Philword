var mas2 = [
    ["Кто изображен на фотографии? ", "АРИСТОТЕЛЬ", "аристотель1"],
    ["Кто изображен на фотографии? ", "ДЕМОКРИТ", "демокрит1"],
    ["Кто изображен на фотографии? ", "ГЕРАКЛИТ",  "гераклит1"],
    ["Кто изображен на фотографии? ", "ПЛАТОН", "платон1"],
    ["Кто изображен на фотографии? ", "СОКРАТ", "сократ1"],    
    ]

var score, current, question, answer, quest;
var c = 1
var alph = ["Й","Ц","У","К","Е","Н","Г","Ш","Щ","З","Х","Ъ","Ф","Ы","В","А","П","Р","О","Л","Д","Ж","Э","Я","Ч","С","М","И","Т","Ь","Б","Ю"]
var ar = ["Й","Ц","У","К","Е","Н","Г","Ш","Щ","З","Х","Ъ","Ф","Ы","В","А","П","Р","О","Л","Д","Ж","Э","Я","Ч","С","М","И","Т","Ь","Б","Ю"]
var end = false;

function arrayDoubRandElement(arr) {
    var rand = Math.floor(Math.random() * arr.length);
    return arr[rand][1];
}
function arrayRandElement(arr) {
    var rand = Math.floor(Math.random() * arr.length);
    return arr[rand][0];
}

function selectPhoto () {
    let photo = arrayDoubRandElement(mas2)
    answer = photo
    let x;
    for (let i=0; i < mas2.length; i++){
        if(mas2[i][1] == answer){
            x = i
        }   
    }
    question = mas2[x][0]
    quest = mas2[x][2]
    mas2.splice(x,1)    
}


function GenerateQuestion () {
    document.getElementById("question").innerText = question;
}

function GenerateImg () {    
    let widthDiv = 400
    let Image = "/Img/"+answer+".jpg"
    let item = $("<div></div>")
    item.addClass("elementImg")
    item.attr('id', 'elementImg')
    item.css("height", widthDiv+"px")
    item.css("width", widthDiv+"px")
    item.css("background-image", 'url('+Image+')')
    item.css("background-size", ' contain')
    item.css("background-repeat",' no-repeat')
    
    $("#mainImage").append(item);    
}

function GenerateImg1 () {    
    let widthDiv = 400
    let Image = "/Img/"+quest+".jpg"
    let item = $("<div></div>")
    item.addClass("elementImg1")
    item.attr('id', 'elementImg1')
    item.css("height", widthDiv-220+"px")
    item.css("width", widthDiv+"px")
    item.css("background-image", 'url('+Image+')')
    item.css("background-size", ' contain')
    item.css("background-repeat",' no-repeat')
    
    $("#mainImage").append(item);    
}

function GenerateStr () {
    let widthDiv = 35
    for (let i=0; i < answer.length; i++){
        let item = $("<input>")
        item.addClass("elementStr"+i)
        item.attr('id', 'elementStr'+i)
        item.css("width", widthDiv+"px")
        if (answer.length < 8) {
            item.css('margin-left', '5%')
            $("#answ").append(item);
            
        } else if (answer.length >= 8 && answer.length < 10){
            item.css('margin-left', '2%')
            $("#answ").append(item);
        }
        else if (answer.length >= 10){
            $("#answ").append(item);
        }
        
    }
}

function GenerateKeyboard () {
    let widthDiv = 100
    let key = $("<div></div>")
    key.addClass("key")
    key.attr('id', 'key')
    $("#keyboard").append(key);
    for (let i=0; i < alph.length; i++){
        let item = $("<input>")
        let item2 = $("<br>")
        item.addClass("elementKey"+alph[i])
        item.attr('id', 'elementKey'+alph[i])
        item.attr('type', 'button')
        item.attr('value', alph[i])
        item.attr('onclick', `defin("${alph[i]}")`)
        item.css("width", widthDiv+"px")    
        if (alph[i] == "Ъ"){
            $("#key").append(item2)
        }
        if (alph[i] == "Э"){
            $("#key").append(item2)
            item.css('margin-left', 50 + 'px')
        }
        $("#key").append(item);
    }
}

function ChangeImg() {
    
    for (let i = 0; i < mas2.length; i++) {
    
        if (c % 2 != 0){
            removePhoto()
            GenerateImg1()

        }
        else {
            removePhoto()
            GenerateImg()
        }
    }        
    c++
}
    

function GenerateScore () {
    document.getElementById("score").innerText = "Счет: Всего - " + score + ".   Текущий - " + current;
}

function defin(letter) {
    let tru = false
    for (let i=0; i < answer.length; i++){
        if (answer[i] == letter){
            $("#elementStr"+i).attr('value', letter);
            tru = true
        }
    }
    if (tru){
        $("#elementKey"+letter).css("background", "#73A353");
    }else{
        if (current > 0){
            current -= 10
        }
        document.getElementById("score").textContent = "Счет: Всего - " + score + ".   Текущий - " + current;
        $("#elementKey"+letter).css("background", "red");
    }
}

function removePhoto() {
    let element = document.getElementsByClassName("elementImg");
    let element1 = document.getElementsByClassName("elementImg1");
    while(element.length) {
        element[0].parentNode.removeChild(element[0]);
    }
    while(element1.length) {
        element1[0].parentNode.removeChild(element1[0]);
    }
}

function removeStr() {
    for (let i=0; i < answer.length; i++){
        let element2 = document.getElementsByClassName("elementStr"+i);
        while(element2.length) {
            element2[0].parentNode.removeChild(element2[0]);
        }
    }

}

function removeKeyboard() {
    let element = document.getElementsByClassName("key");
    while(element.length) {
        element[0].parentNode.removeChild(element[0]);
    }
}

function right() { 
    ar = ["Й","Ц","У","К","Е","Н","Г","Ш","Щ","З","Х","Ъ","Ф","Ы","В","А","П","Р","О","Л","Д","Ж","Э","Я","Ч","С","М","И","Т","Ь","Б","Ю"]
    let ans = ""
    for (let i=0; i < answer.length; i++){
        let answ = document.querySelector('.elementStr'+i).value;
        ans += answ
    }
    if (ans == answer){ 
        score += current;
        current = 100;
        document.getElementById("score").textContent = "Счет: Всего - " + score + ".   Текущий - " + current;
        if (mas2.length > 0){ 
            removePhoto();
            removeKeyboard();
            removeStr();
            selectPhoto();
            GenerateKeyboard();
            GenerateImg();
            GenerateQuestion();
            GenerateStr();
            
        }else{
            document.getElementById("txt").innerText =  "Поздравляем, вы набрали - " + score + " очков!!!";
            $('.imdiz-overlay').css({'visibility': 'visible', 'opacity': 1});
		    $('.imdiz-modal').css({'visibility': 'visible', 'opacity': 1});
            
            $('.imdiz-close').click(function(){
                $('.imdiz-overlay').css({'visibility': 'hidden', 'opacity': 0});
                $('.imdiz-modal').css({'visibility': 'hidden', 'opacity': 0});
            });
        }
    }else{
        alert("введите ответ")
    }
    
}


function help() {
    if (current > 50){
        current -= 50
    }else{
        current = 0
    }
    document.getElementById("score").textContent = "Счет: Всего - " + score + ".   Текущий - " + current;
    for (let i=0; i < answer.length; i++){
        if (ar.indexOf(answer[i]) != -1){
            ar.splice(ar.indexOf(answer[i]), 1)
        }
    }
    for (let i=0; i < 16; i++){
        let item = arrayRandElement(ar)
        $("#elementKey"+item).css("opacity", 0);
    }
}

function restart(){
    location.reload();
}

$( document ).ready(function() {
    score = 0;
    current = 100;    
    GenerateScore();
    selectPhoto();
    GenerateImg();
    GenerateStr();
    GenerateQuestion();
    GenerateKeyboard();
    butHelp();
});

