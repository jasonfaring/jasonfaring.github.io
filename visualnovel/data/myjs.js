//Set music file names
const music_files = {
	slow:'hope.mp3',
	normal:'frozen_winter.mp3',
	fast:'dramatic_boi.mp3'
};






/////////////////////////////////////////////////////////////////////////////////////////////
// Dont edit beyond this line
// April 8 2024
// By jasonxx

//Music
class music_load {
  constructor(filename=false) {
    this.filename = filename;
    this.current_music = new Audio(`data/assets/music/${this.filename}`);
  }
  play_dis(loop=false){
	this.current_music.play();
	this.current_music.loop = loop;
  }
  stop_dis(){
  	this.current_music.pause();
    this.current_music.currentTime = 0;
  }
}
const slow_music = new music_load(music_files.slow);
const normal_music = new music_load(music_files.normal);
const fast_music = new music_load(music_files.fast);

function stop_all_music(){
	slow_music.stop_dis();normal_music.stop_dis();fast_music.stop_dis();
}

//Background
function load_a_background(filename=false){
	document.getElementsByTagName('body')[0].style.backgroundImage  = `url('data/assets/background/${filename}')`;
}

//create some basic elements
function auto_create_basic_element(){
	let dis_body = document.getElementsByTagName("body")[0];

	let dis_div_cover = document.createElement("div");
	dis_div_cover.className = "cover";
	dis_div_cover.id = "cover";
	dis_body.insertBefore(dis_div_cover, dis_body.children[0]);

	let dis_div_char = document.createElement("div");
	dis_div_char.className = "char";
	dis_div_char.id = "char";
	dis_body.insertBefore(dis_div_char, dis_body.children[1]);

	let dis_div_dia = document.createElement("div");
	dis_div_dia.className = "dialogue";
	dis_div_dia.id = "dialogue";
	dis_body.insertBefore(dis_div_dia, dis_body.children[2]);

	let dis_div_title_page = document.createElement("div");
	dis_div_title_page.className = "title_page";
	dis_div_title_page.id = "title_page";
	dis_body.insertBefore(dis_div_title_page, dis_body.children[3]);
	
	let dis_div_ending_page = document.createElement("div");
	dis_div_ending_page.className = "ending_page";
	dis_div_ending_page.id = "ending_page";
	dis_body.insertBefore(dis_div_ending_page, dis_body.children[4]);

	//construct characters div
	//pla take note char1 char2 are the character folders
	document.getElementById('char').innerHTML = `
		<div class="row">
			<div class="col charA"><div id="char1" class="char_img"></div></div>
			<div  class="col charB"><div id="char2" class="char_img"></div></div>
		</div>
	`;

	//construct dialogue div
	//pla take note char1 char2 are the character folders
	document.getElementById('dialogue').innerHTML = `
		<div id="dialogue_text_area" class="">
			<div id="char_name" class="text_dialogue" style="text-align:left; font-size:25px; padding:10px 50px;">Char Name :</div>
			<div id="words" class="text_dialogue" style="text-align:center; padding:10px 50px;">
				...
			</div>
			<br>
		</div>
	`;
}


function load_character(char_folder_name,filename){
	let dis_char = document.getElementById(char_folder_name);
	dis_char.style.backgroundImage  = `url('data/assets/${char_folder_name}/${filename}')`;
}

function animate_char(char,animation_class){
	let dis_char = document.getElementById(char);
	dis_char.className = "cleanstate";
	dis_char.classList.add("char_img");
	dis_char.classList.add(animation_class);
	setTimeout(function(){
		dis_char.setAttribute('class','');
		dis_char.classList.add("char_img");
	}, 1000);
}

function show_hide_diag(what){
	if(what == 'show'){
		document.getElementById('dialogue_text_area').style.opacity = '1';
	}else{
		document.getElementById('dialogue_text_area').style.opacity = '0';
	}
}


function load_speach(char,charname,speech,emotion,animation='animate__pulse'){
	document.getElementById('char_name').innerHTML = `${charname}:`;
	document.getElementById('words').innerHTML = '';
	animate_char(char,animation);
	load_character(char,emotion);

	let input_this_speech = '';
	let count = speech.length;
	
	const timer = ms => new Promise(res => setTimeout(res, ms))
	async function load () {
		for (var i = 0; i < count; i++) {
			document.getElementById('words').innerHTML += speech[i];
			await timer(30);
		}
	}
	load();
}