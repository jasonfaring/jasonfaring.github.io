/////////////////////////////////////////////////////////////////////////////////
//April 8 2024
//by jasonxx
/////////////////////////////////////////////////////////////////////////////////
//start editing here
const application_name = "Visual Novel";
const application_short_name = "VN";
const version = "v1.0";

const background_path = "data/assets/background/";
const characters_path = "data/assets/characters/";
const music_path = "data/assets/music/";

const music_volume = 0.2;

const charname_colors = {
	L:"pink",
	C:"yellow",
	R:"lightgreen",
	N:"lightblue"
}

const arr = [
	`${background_path}city1.jpg`,
	`${background_path}city2.jpg`,
	`${background_path}city3.jpg`,
	`${background_path}city4.jpg`,
	`${background_path}clinic1.jpg`,
	`${background_path}clinic2.jpg`,
	`${background_path}school1.jpg`,
	`${background_path}school2.jpg`,
	`${background_path}sroom1.jpg`,
	`${background_path}sroom2.jpg`,
	`${background_path}room1.jpg`,
	`${background_path}room2.jpg`,
	`${background_path}store1.jpg`,
	`${background_path}store2.jpg`,
	`${background_path}street1.jpg`,
	`${background_path}street2.jpg`,
	`${background_path}street3.jpg`,
	`${background_path}street4.jpg`,
	`${background_path}office1.jpg`,
	`${background_path}office2.jpg`,
	`${background_path}office3.jpg`,
	`${characters_path}char1/angry.png`,
	`${characters_path}char1/laugh.png`,
	`${characters_path}char1/normal.png`,
	`${characters_path}char1/sad.png`,
	`${characters_path}char1/smile.png`,
	`${characters_path}char1/smile2.png`,
	`${characters_path}char2/angry.png`,
	`${characters_path}char2/laugh.png`,
	`${characters_path}char2/normal.png`,
	`${characters_path}char2/sad.png`,
	`${characters_path}char2/smile.png`,
	`${characters_path}char2/smile2.png`,
	`${characters_path}char3/angry.png`,
	`${characters_path}char3/laugh.png`,
	`${characters_path}char3/normal.png`,
	`${characters_path}char3/sad.png`,
	`${characters_path}char3/smile.png`,
	`${characters_path}char3/smile2.png`,
]

const images = preloadImages(arr);
//console.dir(images);

//HELP
//List of functions and usages

//function el() is short for shortening of getElement like in jquery
//document.getElementById();
//document.getElementsByClassName();
//document.getElementsByTagName();
//usage: el('#element_id'); //# for selecting id name
//usage: el('.element_class'); //. for selecting class name
//usage: el('tag'); // for selecting tag name

//html element id to target
// title_area - main title div 
// play_butt - play button
// L - Left character
// R - Right character
// C - Center character
// dialogue_area - dialogue div
// words - dialogue text area
// menu_area - main menu div
// back and next - back and next dialogue
// menu_action_button - area where action buttons are created between back and next button
// title_hero - title text
// sub_title_hero - subtitle text

//show_hide function
//usage: show_hide('L'); // toggle show/hide left character
//usage: show_hide('dialogue_area','hide'); // force hide dialogue div

//Available animation classes to use
//animate_shake_x
//animate_shake_y
//animate_pulse

//animate_char function
//usage: animate_char(location_LCR,animation_class);

// L - load on the Left
// C - load on the Center
// R - load on the Right
//example to load any image or any character
//usage: load_image(location_LCR,image/character_folder,image_filename);

//load background
//usage: load_a_background(background_filename);

//toggle show or hide an element
//usage: show_hide(element_id);

//slide element
//usage: slide(element_id,height_px);

//force to show only or hide only an element
//usage with second parameter: show_hide(element_id,hide/show);

//load speach show animate character and narrator
//usage: load_speach(location_LCRN,image/character_folder,image_filename,charname,dialogue,animation);

//play and stopping audio
//usage: play_audio(filename);
//usage: stop_audio();

//auto add function to a button
//usage: add_onclick_evt(button_element_id,function_as_a_text);

//add button between back and next
//usage: add_function_button(butt_id,butt_title,function_as_a_text);

//remove all buttons
//usage: remove_function_button();

//to reset all elements back to default state
//usage: reset();

//the heart of the application
//story_class() - accepts character and story object to form a story flow 

//other functions
//save_ls(key,val) - save loacl storage key + value
//get_ls(key) - get local storage key value 
//remove_ls() - remove local storage
//getRandomInt(max) - get random number of max
//change_tab_title(titlename) - chanage tab title
//preloadImage(img) and preloadImages(imgarr) - preload all images
//auto_create_basic_element() - auto create basic div audio,cover,dialogue,char,title
//sleep(ms) - sleep for ms it is async function to run

/////////////////////////////////////////////////////////////////////////////////
//do not edit beyon this line
const main_w = window.innerWidth;
const main_h = window.innerHeight;
change_tab_title(application_name);

const version_detils = `
${application_name} ${version}
A very simple visual novel creator for javascript, javascript coding is needed to customize some features but basically you only need to input your own story and change some assets, and enjoy. Modular scenes and animation are coming soon...

By Jasonxx.
`;

function el(el){
	let sign = el.charAt(0);
	switch(sign){
		case "#":
			return document.getElementById(el.slice(1));
		break;
		case ".":
			return document.getElementsByClassName(el.slice(1));
		break;
		default:
			return document.getElementsByTagName(el);
		break;
	}
	
}

//local storage save get
function save_ls(key,val){
  localStorage.setItem(key, val);
}

function get_ls(key){
  if(localStorage.getItem(key) === null){
    localStorage.setItem(key, "");
  }
  return localStorage.getItem(key);
}

function remove_ls(){
  localStorage.clear();
}

function getRandomInt(max){
  return Math.floor(Math.random() * max);
}

function change_tab_title(text){
	document.title = text;
}
function load_a_background(filename=false){
	if(filename == false){
		return false;
	}else{
		el('body')[0].style.backgroundImage  = `url('${background_path}${filename}')`;
	}
}

function preloadImage(url){
	const img = new Image();
	img.src = url;
	return img;
}
function preloadImages(images) {
	for (var i = 0; i < images.length; i++) {
		images[i] = preloadImage(images[i]);
	}
	return images;
}

//create some basic elements
function auto_create_basic_element(){
	let dis_body = el("body")[0];

	let div0 = document.createElement("div");
	div0.className = "audio";
	div0.id = "audio";
	dis_body.insertBefore(div0, dis_body.children[0]);

	let div1 = document.createElement("div");
	div1.className = "cover";
	div1.id = "cover";
	dis_body.insertBefore(div1, dis_body.children[1]);

	let div4 = document.createElement("div");
	div4.className = "dialogue";
	div4.id = "dialogue";
	dis_body.insertBefore(div4, dis_body.children[2]);

	let div3 = document.createElement("div");
	div3.className = "char";
	div3.id = "char";
	dis_body.insertBefore(div3, dis_body.children[3]);

	let div2 = document.createElement("div");
	div2.className = "title";
	div2.id = "title";
	dis_body.insertBefore(div2, dis_body.children[4]);


	el('#audio').innerHTML = `
		<audio id="audio_tag" src=""></audio>
	`;

	el('#title').innerHTML = `
		<div display_data="show" id="title_area" class="title_area">
			<div>
				<span id="title_hero" class="title_hero text_shadow">Story Title</span><br>
				<small id="sub_title_hero" class="sub_title_hero text_shadow">Sub title</small>
			</div>
			<br>
			<button id="play_butt" class="play_butt box_shadow" onclick=""><i class="fa fa-play"></i></button>
		</div>
	`;

	el('#char').innerHTML = `
		<div class="LCR">
			<div display_data="show" id="L" class="char_img"></div>
			<div display_data="show" id="R" class="char_img"></div>
			<div display_data="show" id="C" class="char_img"></div>
		</div>
	`;

	el('#dialogue').innerHTML = `
		<div display_data="show" id="dialogue_area" class="dialogue_area">
			<div id="words" class="text_dialogue text_shadow" style="text-align:left; padding:10px 50px;">
				<b>Kate: </b>Hi to all... Good day.
			</div>
		</div>
	`;
}

function load_image(loc="",folder_name="",filename=""){
	if(loc != "" && folder_name != "" && filename != ""){
		el("#"+loc).style.backgroundImage = `url('${characters_path}${folder_name}/${filename}')`;
	}
}

function play_audio(filename=""){
	if(filename != ""){
		let dis_audio = el("#audio_tag");
		// dis_audio.muted = true;
		dis_audio.volume = music_volume;
		dis_audio.pause();
    dis_audio.currentTime = 0;
		dis_audio.src = `${music_path}${filename}`;
		dis_audio.loop = true;
		dis_audio.play();
	}
}

function stop_audio(){
	let dis_audio = el("#audio_tag");
	dis_audio.pause();
    dis_audio.currentTime = 0;
}

function animate_char(side_loc="",animation_class=""){
	if(side_loc == "" || animation_class == ""){
		return false;
	}else{
		let dis_char = el("#"+side_loc);
		dis_char.className = "cleanstate";
		dis_char.classList.add("char_img");
		dis_char.classList.add(animation_class);
		setTimeout(function(){
			dis_char.setAttribute('class','');
			dis_char.classList.add("char_img");
		}, 1000);
	}
}

function show_hide(elid,force="",compare=false){
	if(compare == elid){
		return false;
	}
	if(elid == 'service_menu_inner'){
		slide('service_menu_inner','500px');
	}
	let dis = el("#"+elid);
	if(force != ""){
		if(force == "show"){
			dis.style.visibility = "visible";
			dis.style.opacity = '1';
			dis.attributes.display_data.value = 'show';
		}
		if(force == "hide"){
			dis.style.opacity = '0';
			dis.attributes.display_data.value = 'hide';
			dis.style.visibility = "hidden";
		}
		return false;
	}
	if(dis.attributes.display_data.value == 'show'){
		dis.style.opacity = '0';
		dis.attributes.display_data.value = 'hide';
		dis.style.visibility = "hidden";
	}else{
		dis.style.visibility = "visible";
		dis.style.opacity = '1';
		dis.attributes.display_data.value = 'show';
	}

}

function slide(elid,h){
	let dis = el("#"+elid);
	if(dis.attributes.display_data.value == 'show'){
		dis.style.height = h;
	}else{
		dis.style.height = '0px';
	}
}

var still_talking = false;
function load_speach(side_loc,folder_name,filename,charname="",speech="",animation='animate_pulse'){

	if(still_talking == true){
		console.log("Still talking...");
		return false;
	}

	if(side_loc == "N" && folder_name == ""){
		//console.log('tets');
	}else if(side_loc == "N" && folder_name == "remove_all_character"){
		show_hide('L','hide');
		show_hide('R','hide');
		show_hide('C','hide');
	}else{
		show_hide(side_loc,'show');
		if(main_w <= 800){
			show_hide('L','hide',side_loc);
			show_hide('R','hide',side_loc);
			show_hide('C','hide',side_loc);
		}
		load_image(side_loc,folder_name,filename);
		animate_char(side_loc,animation);
	}
		
	show_hide('menu_area','show');
	show_hide('dialogue_area','show');
	if(speech != ""){
		if(charname == ""){
			el('#words').innerHTML = '';
		}else{
			el('#words').innerHTML = `<b style="color:`+charname_colors[side_loc]+`;">${charname}:</b> `;
		}
		let count = speech.length;
		const timer = ms => new Promise(res => setTimeout(res, ms));
		still_talking = true;
		async function load () {
			for (var i = 0; i < count; i++) {
				el('#words').innerHTML += speech[i];
				await timer(30);
				if(i == (count-2)){
					still_talking = false;
				}
				//console.log(still_talking);
			}
		}
		load();
	}
}

function add_onclick_evt(elid,func_text){
	el("#"+elid).setAttribute('onclick',func_text);
}
function add_function_button(id,butt_title,func_text){
	el("#menu_action_button").innerHTML += `<button id="${id}" class="secondary_butt" onclick="${func_text}">${butt_title}</button>`;
}
function remove_function_button(){
	el("#menu_action_button").innerHTML = '';
}

function reset(){
	//hide title area
	show_hide('title_area','hide');

	//remove all action button in menu
	remove_function_button();

	//force hide menu
	show_hide('menu_area','hide');

	//remove text in word
	el('#words').innerHTML = "";
	//force hide dialogue area
	show_hide('dialogue_area','hide');

	//force hide all characters
	show_hide('L','hide');
	show_hide('C','hide');
	show_hide('R','hide');
	
	//load blank
	load_a_background('black.png');

	//stop audio
	stop_audio();
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}