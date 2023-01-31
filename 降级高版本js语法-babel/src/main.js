//入口处引入jquery
import $ from 'jquery'
// const $ = require('jquery')
// $('#changColor li:nth-child(2n)').css('color', 'red')
// $('#changColor li:nth-child(2n-1)').css('color', 'green')
$('#changColor li:odd').css('color', 'red')
$('#changColor li:even').css('color', 'green')
import "./css/list.css"
import "./less/font.less"
import imgObj from './assets/1.gif'
let theImg = document.createElement("img")
theImg.src = imgObj
document.body.appendChild(theImg)
import "./assets/fonts/iconfont.css"
let iObj = document.createElement('i')
iObj.className = "iconfont icon-weixin"
document.body.append(iObj)
let fn = () => {
    console.log(11111)
}
console.log(fn)