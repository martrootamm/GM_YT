// ==UserScript==
// @name        GPlus
// @namespace   GPlus
// @description Google Plus font fix for long texts (Windows XP)
// @updateURL https://github.com/juneyourtech/GM_YT/raw/master/GPlus.user.js
// @include     https://plus.google.com/*
// @version     0.1.1
// @grant       GM_addStyle
// ==/UserScript==
// Notes:
//   * is a wildcard character
//   .tld is magic that matches all top-level domains (e.g. .com, .co.uk, .us, etc.)

//BODY, FONTS

GM_addStyle("HTML > BODY {font-family:\'Arial\',\'Roboto\',\'sans-serif\';}") //

GM_addStyle("DIV.dn {font-size:12px; line-height:1.5em; color:black;}") //

GM_addStyle("DIV.b-i {left:0px !important; background-color:black; color:white; text-rendering:optimizespeed; text-transform:none;}") //
