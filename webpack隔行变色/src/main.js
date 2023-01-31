//入口处引入jquery
import $ from 'jquery'
// const $ = require('jquery')
// $('#changColor li:nth-child(2n)').css('color', 'red')
// $('#changColor li:nth-child(2n-1)').css('color', 'green')
$('#changColor li:odd').css('color', 'red')
$('#changColor li:even').css('color', 'green')
import "./css/list.css"
import "./less/font.less"