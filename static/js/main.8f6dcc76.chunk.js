(this.webpackJsonpakweather=this.webpackJsonpakweather||[]).push([[0],{12:function(e,a,t){},15:function(e,a,t){"use strict";t.r(a);var s=t(1),c=t.n(s),n=t(6),r=t.n(n),o=(t(12),t(3)),i=t(5),m=t.n(i),l=t(7),j=t(2),b=t(0);var u=function(e){var a=e.tempinfo,t=Object(s.useState)(),c=Object(j.a)(t,2),n=c[0],r=c[1],o=a.temp,i=a.weathermood,m=a.name,l=a.speed,u=a.country,f=a.temp_min,d=a.temp_max;return Object(s.useEffect)((function(){if(i)switch(i){case"Clouds":case"Atmosphere":r("fas fa-cloud");break;case"Haze":case"Smoke":r("fas fa-smog");break;default:r("fas fa-sun");break;case"Rain":r("fas fa-cloud-rain");break;case"Overcast":r("fas fa-cloud-sun-rain");break;case"Partially cloud":r("fas fa-cloud-sun");break;case"Drizzle":r("fas fa-cloud-showers-heavy");break;case"Storm":case"Thunderstorm":r("fas fa-poo-storm");break;case"Snow":r("fas fa-snowflake");break;case"Moon":r("fas fa-moon")}}),[i]),Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"box",children:[Object(b.jsx)("div",{className:"wave one"}),Object(b.jsx)("div",{className:"wave two"}),Object(b.jsx)("div",{className:"wave three"}),Object(b.jsx)("h1",{className:"templogo",children:Object(b.jsx)("i",{class:"".concat(n)})}),Object(b.jsxs)("div",{className:"weatherinfo",children:[Object(b.jsxs)("h3",{className:"location",children:[Object(b.jsx)("i",{class:"fas fa-map-marker-alt"})," ",m,", ",u]}),Object(b.jsxs)("h1",{className:"temprature",children:[o," \xb0 C , \xa0 ",i]}),Object(b.jsxs)("h3",{className:"wind",children:["WIND : ",l," km/h"]}),Object(b.jsxs)("h3",{className:"minmax",children:["MIN : ",f,", \xa0 MAX : ",d]})]})]})})};var f=function(){var e,a=Object(s.useState)("goa"),t=Object(j.a)(a,2),c=t[0],n=t[1],r=Object(s.useState)({}),i=Object(j.a)(r,2),f=i[0],d=i[1],h=function(){var e=Object(l.a)(m.a.mark((function e(){var a,t,s,n,r,o,i,l,j,b;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a="https://api.openweathermap.org/data/2.5/weather?q=".concat(c,"&units=metric&appid=3b5b770eb1c757c9294345a09164e446"),e.next=4,fetch(a);case 4:return t=e.sent,e.next=7,t.json();case 7:s=e.sent,n=s.main.temp,r=s.weather[0].main,o=s.name,i=s.wind.speed,l=s.sys.country,j=s.main.temp_min,b=s.main.temp_max,d({temp:n,weathermood:r,name:o,speed:i,country:l,temp_min:j,temp_max:b}),e.next=22;break;case 19:e.prev=19,e.t0=e.catch(0),console.log(e.t0);case 22:case"end":return e.stop()}}),e,null,[[0,19]])})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){h()}),[]),Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"mdiv",children:[Object(b.jsxs)("h1",{className:"titelname",children:[Object(b.jsx)("i",{className:"far fa-snowflake"}),"\xa0 AK Global Weather \xa0",Object(b.jsx)("i",{className:"far fa-snowflake"})]}),Object(b.jsxs)("div",{className:"cdiv",children:[Object(b.jsxs)("div",{className:"inputbtn",children:[Object(b.jsx)("input",{className:"input",type:"search",placeholder:"Enter Your Location",id:"search",autoFocus:!0,value:c,onChange:function(e){return n(e.target.value)}}),Object(b.jsx)("button",(e={className:"btn"},Object(o.a)(e,"className","btn"),Object(o.a)(e,"onClick",h),Object(o.a)(e,"children","Search"),e))]}),Object(b.jsx)(u,{tempinfo:f})]})]})})};r.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(f,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.8f6dcc76.chunk.js.map