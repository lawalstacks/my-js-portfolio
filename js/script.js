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

/**
 * setting primary tabs and content interactive 
 */
 
 const $tabBtn = document.querySelectorAll("[data-tab-btn]");
 
 let [lastActiveTab] = document.querySelectorAll("[data-tab-content]");
 
 let [lastActiveTabBtn] = $tabBtn;
 
 
 $tabBtn.forEach((item) => {
   item.addEventListener('click', function(){
   lastActiveTab.classList.remove("active");
   lastActiveTabBtn.classList.remove("active");
   
   const $tabContent = document.querySelector(`[data-tab-content = "${item.dataset.tabBtn}"]`);
   $tabContent.classList.add("active");
   this.classList.add("active");
   
   lastActiveTab = $tabContent;
   lastActiveTabBtn = this;
   })
 })