import {start_singleplayer} from './singleplayer.js'
import {start_multiplayer} from './multiplayer.js'

function play(menu, canvas, fun, corner){
    menu.style.display = 'none';
    canvas.style.display = 'block'
    fun(corner)
} 

function win(canvas, win){
    canvas.style.display = 'none';
    win.style.display = 'block'
}

function back_to_menu(){
    window.location = location
}

function mute_off(btn_mute_on, btn_mute_off, sound){
    btn_mute_on.style.display = 'none';
    btn_mute_off.style.display = 'block';
    sound.play()
    sound.volume = 0.3
}

function mute_on(btn_mute_on, btn_mute_off, sound){
    btn_mute_on.style.display = 'block';
    btn_mute_off.style.display = 'none';
    sound.volume = 0
}

const blueWinEvent = new CustomEvent('blue_win', {bubbles: true})
const redWinEvent = new CustomEvent('red_win', {bubbles: true})
const menu = document.getElementById('menu');
const btn_blue_single = document.getElementById('menu-button-blue-single');
const btn_red_single = document.getElementById('menu-button-red-single');
const btn_blue_multi = document.getElementById('menu-button-blue-multiplayer');
const btn_red_multi = document.getElementById('menu-button-red-multiplayer');
const canvas = document.getElementById('canvas');
const win_blue = document.getElementById('win-blue');
const win_red = document.getElementById('win-red');
const btn_back_to_menu_blue = document.getElementById('back-to-menu-button-blue');
const btn_back_to_menu_red = document.getElementById('back-to-menu-button-red');
const btn_mute_on = document.getElementById('mute-button-on');
const btn_mute_off = document.getElementById('mute-button-off');
const soundtrack = new Audio()
soundtrack.src = 'static/first_kick.mp3'
soundtrack.loop = true

btn_blue_single.addEventListener('click', function(){play(menu, canvas, start_singleplayer, 'BLUE')});
btn_red_single.addEventListener('click', function(){play(menu, canvas, start_singleplayer, 'RED')});
btn_blue_multi.addEventListener('click', function(){play(menu, canvas, start_multiplayer, 'BLUE')});
btn_red_multi.addEventListener('click', function(){play(menu,canvas,  start_multiplayer, 'RED')})
btn_back_to_menu_blue.addEventListener('click', function(){back_to_menu()})
btn_back_to_menu_red.addEventListener('click', function(){back_to_menu()})
btn_mute_on.addEventListener('click', function(){mute_off(btn_mute_on,btn_mute_off, soundtrack)})
btn_mute_off.addEventListener('click', function(){mute_on(btn_mute_on,btn_mute_off, soundtrack)})

window.addEventListener('blue_win', function(){
    win(canvas, win_blue)
})

window.addEventListener('red_win', function(){
    win(canvas, win_red)
})

export{blueWinEvent, redWinEvent}
