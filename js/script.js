/**
 * @copyright lawalstacks.js 2024
 * @author lawalstacks<quazeemastic@gmail.com>
 */

"use strict";

const $themeBtn = document.querySelector("[data-theme-btn");
const $HTML = document.documentElement;

let isDark = window.matchMedia("(prefers-color-scheme)").matches;

if(sessionStorage.getItem("theme")){
  $HTML.dataset.theme = sessionStorage.getItem("theme");
}else{
  $HTML.dataset.theme = isDark ? "dark" : "light";
  sessionStorage.setItem("theme", $HTML.dataset.theme);
}

const changeTheme = () => {
$HTML.dataset.theme = sessionStorage.getItem("theme") === "light" ? "dark" : "light";
  sessionStorage.setItem("theme",$HTML.dataset.theme);

}

$themeBtn.addEventListener("click", changeTheme);