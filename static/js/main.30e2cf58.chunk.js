(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(19)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(7),i=n.n(c),o=(n(15),n(1)),s=n(2),p=n(4),l=n(3),m=n(5),u=n(8),d=(n(16),function(e){function t(){return Object(o.a)(this,t),Object(p.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e,t="".concat("https://assets.pokemon.com/assets/cms2/img/pokedex/detail/").concat((e=this.props.id)<=999?"00".concat(e).slice(-3):e,".png");return r.a.createElement("div",{className:"Pokecard"},r.a.createElement("h1",{className:"Pokecard-title"},this.props.name),r.a.createElement("img",{src:t,alt:"decorative image of Pokemon character"}),r.a.createElement("div",{className:"Pokecard-data"},"Type: ",this.props.type),r.a.createElement("div",{className:"Pokecard-data"},"Experience: ",this.props.exp))}}]),t}(a.Component)),h=(n(17),function(e){function t(){return Object(o.a)(this,t),Object(p.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e;return e=this.props.isWinner?r.a.createElement("h1",{className:"Pokedex-winner"},"Winning hand"):r.a.createElement("h1",{className:"Pokedex-loser"},"Losing hand"),r.a.createElement("div",{className:"Pokedex"},e,r.a.createElement("h4",null,"Total experience: ",this.props.exp),r.a.createElement("div",{className:"Pokedex-cards"},this.props.pokemon.map(function(e){return r.a.createElement(d,{id:e.id,name:e.name,type:e.type,exp:e.base_experience})})))}}]),t}(a.Component)),b=function(e){function t(){return Object(o.a)(this,t),Object(p.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){for(var e=[],t=Object(u.a)(this.props.pokemon);e.length<t.length;){var n=Math.floor(Math.random()*t.length),a=t.splice(n,1)[0];e.push(a)}var c=e.reduce(function(e,t){return e+t.base_experience},0),i=t.reduce(function(e,t){return e+t.base_experience},0);return r.a.createElement("div",null,r.a.createElement(h,{pokemon:e,exp:c,isWinner:c>i}),r.a.createElement(h,{pokemon:t,exp:i,isWinner:i>c}))}}]),t}(a.Component);b.defaultProps={pokemon:[{id:4,name:"Charmander",type:"fire",base_experience:62},{id:7,name:"Squirtle",type:"water",base_experience:63},{id:11,name:"Metapod",type:"bug",base_experience:72},{id:12,name:"Butterfree",type:"flying",base_experience:178},{id:25,name:"Pikachu",type:"electric",base_experience:112},{id:39,name:"Jigglypuff",type:"normal",base_experience:95}]};var f=b,k=(n(18),function(e){function t(){return Object(o.a)(this,t),Object(p.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(f,null))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.30e2cf58.chunk.js.map