const hobbies = "・音楽鑑賞\n・読書\n・散歩\n・絵 ...etc ";
const showshobbies = document.getElementById("showhobbies")

const  myhobbies = document.getElementById("myhobbies")
myhobbies.onmouseover = function (){
    showshobbies.textContent = hobbies
    
}

const myprofile = document.getElementById("myprofile")
const profile1 = document.getElementById("profile1")
const profile2 = document.getElementById("profile2")
myprofile.onmouseover = function(){
    profile.textContent = "・大阪出身\n・大阪大学外国語学部イタリア語専攻\n・きまぐれ\n・ピアノの会"
}

var pics_src = new Array("pictures/alberobello.jpg","pictures/Amalfi.jpg","pictures/dromiti.jpg","pictures/firenze.jpg","pictures/Napoli.jpg","pictures/Pisa.jpg","pictures/Siracusa.jpg","pictures/venezia.jpg","pictures/Verona.jpg")
    var num = 0;
//var pics_name = new Array("アルベロベッロ","アマルフィ","ドローミティ","フィレンツェ","ナポリ","ピサ","ヴェネィア","ヴェローナ")
//   var i =0;
function slideshow(){
    if(num == 7 ){
        num = 0;
    }else{
        num ++;
    }
    document.getElementById("Italia").src=pics_src[num];
    const names = document.getElementById("names");
    names.textContent =pics_names[i]}

//var pics = [{image:"pictures/alberobello.jpg",text:"アルベロベッロ"},
    //{image:"pictures/Amalfi.jpg",text:"アマルフィ"},
    //{image:"pictures/dromiti.jpg",text:"ドロミーティ"},
    //{image:"pictures/firenze.jpg",text:"フィレンツェ"},
    //{image:"pictures/Napoli.jpg",text:"ナポリ"},
    //{image:"pictures/Pisa.jpg",text:"ピサ"},
    //{image:"pictures/Siracusa.jpg",text:"シラクサ"},
    //{image:"pictures/venezia.jpg",text:"ヴェネツィア"},
//    {image:"pictures/Verona.jpg",text:"ヴェローナ"}];
//    var n = 0;
//const pic = document.getElementById("Italia")
//const sito = document.getElementById("names")
//pic.textContent = pics[0].text;
//sito.src = `./pictures/${pics[0].image}`;
//pic.onclick = function s(){
    if(n == 7){
        n = 0;
    }else{
        n ++;
    }
    pic.textContent= `./pictures/${pics[n].image}`;
    sito.textContent = pics[n].text;
//}
