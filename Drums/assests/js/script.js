// Start video
var s = 0;
function start_vid(){
  if(s == 0){
<<<<<<< HEAD
    $('#videoPage').append('<video autoplay controls ontimeupdate = "vid_con(this)" plays-inline class="main-video"><source src="./assests/video/finalvideo.mp4" type="video/mp4" /></video>');
=======
    $('#videoPage').append('<video autoplay controls ontimeupdate = "vid_con(this)" plays-inline class="main-video"><source src="https://media.githubusercontent.com/media/Yonathan-Wagaye/Yonathan-Wagaye.github.io/main/drums/assests/video/Final Video without the questions and with a bonus clip.mp4" type="video/mp4" /></video>');
>>>>>>> e890f05d89edb49cf6f6f530483b06489412b4c0
    s == 1;
  }
}
function vid_con(event){
  console.log(event.currentTime)
  if(event.currentTime > 205.3 && event.currentTime < 205.5){
    event.pause();
    $('#videoPage-cover').show();
    $('#videoPage-cover').addClass(' fade1-out');
    $('#videoPage').append('<a class="toquestion" href="#quiz">Click me</a>');
  }
  if(event.ended === true){
    $('li').addClass('slide');
    const element2 = document.getElementsByClassName('credit1')[0].offsetTop;
    window.scrollTo({
      top: element2,
      behavior: 'smooth'
    });
  }
}

// Get the question buttons
const btnA = document.getElementById('btnA');
const btnB = document.getElementById('btnB');
const btnC = document.getElementById('btnC');
const answerContainer = document.getElementById('answer-buttons');

// Function to check the selected answer
function checkAnswer(event) {
  const element1 = document.getElementById('answer-page').offsetTop;
  window.scrollTo({
    top: element1,
    behavior: 'smooth'
  });
  const selectedButton = event;
  if(selectedButton === btnA){
    $('#answer-page').append('<video autoplay controls plays-inline ontimeupdate = "end_vid(this)" class="answer-video"><source src="https://media.githubusercontent.com/media/Yonathan-Wagaye/Yonathan-Wagaye.github.io/main/drums/assests/video/Interactive Answer 1.mp4" type="video/mp4" /></video>')
  }else if(selectedButton === btnB){
    $('.answer-video').remove();
    $('#answer-page').append('<video autoplay controls plays-inline ontimeupdate = "end_vid(this)" class="answer-video"><source src="https://media.githubusercontent.com/media/Yonathan-Wagaye/Yonathan-Wagaye.github.io/main/drums/assests/video/Interactive Answer 2.mp4" type="video/mp4" /></video>')
  }else if(selectedButton === btnC){
    $('.answer-video').remove();
    $('#answer-page').append('<video autoplay controls plays-inline ontimeupdate = "end_vid(this)" class="answer-video"><source src="https://media.githubusercontent.com/media/Yonathan-Wagaye/Yonathan-Wagaye.github.io/main/drums/assests/video/Interactive Answer 3.mp4" type="video/mp4" /></video>')
  }
}

function end_vid(e){
  console.log(e.ended);
  if(e.ended === true){
    $('#videoPage-cover1').show();
    $('#videoPage-cover1').addClass(' fade1-out');
    $('#answer-page').append('<a class="toVideo" href="#videoPage" onclick = "video_play()">Go to Video</a>');
    $('#answer-page').append('<a class="Question" href="#quiz" onclick = "ask()">Go to ask questions</a>');
  }
}
function video_play(){
  $('a').remove();
  $('#videoPage-cover1').hide();
  $('#videoPage-cover').hide();
  document.getElementsByClassName('main-video')[0].currentTime = 205.5;
  document.getElementsByClassName('main-video')[0].play();
}
function ask(){
  $('#videoPage-cover1').hide();
  const element3 = document.getElementsByClassName('Quiz')[0].offsetTop;
  window.scrollTo({
    top: element3,
    behavior: 'smooth'
  });
}
