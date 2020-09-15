/*
 JavaScript Language Transformations and Templating  | JSL2
 
 http://jsl.codemax.net/jsl2.1.js
 http://jsl.codemax.net/jsl/about
 
 version: 2.1a
 author	: dr. G.Metaxas
 Copyright 2017 Ambianti B.V.
 
	Permission is hereby granted, free of charge, to any person obtaining a copy of this software and 
	associated documentation files (the "Software"), to deal in the Software without restriction, 
	including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, 
	and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, 
	subject to the following conditions:
	
	The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
	
	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, 
	INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. 
	IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, 
	WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE 
	SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
	
*/

(function(exports){
	var clientSide=!exports;
	var refLastId=0;

	
	if(clientSide){
		exports=function(){
			if(arguments.length==1){
				return exports[arguments[0]];
			};
			return exports;
		};
	};
	
	var typeIsPrimitive={
		"boolean"	:true,
		"number"	:true,
		"string"	:true,
		"symbol"	:true,
	};
	// var typeIsEnumerated={
	// 	"boolean"	:true,
	// 	"number"	:true,	
	// };
	var typeIsObjectOrFunction={
		"object"	:true,		
		"function"	:true		
	};
	
	function flatJoin(array,separator){
		while(Array.isArray(array)){
			for(var i=0;i<array.length;i++){
				array[i]=flatJoin(array[i],separator);
			}
			array=array.join(separator||"");
		}
		return array;
	}
	
	exports.init=function(jslNs,htmlNs){
		if(!htmlNs){
			htmlNs=jslNs;
		}
		
		jslNs.options={
			release	  :false,
			optimize  :false,
			namespace :'jsl',
			capitalize:true,
			jsldottags:false,
			producexml:false,
			forceJSON :false,
			autocdata :true,
			fnametoid :true
		};
		var optionDescription={
			release	  :function(value){
				var ns=tagnamespace;
				return ns.P(value?'minimize the output size':'include comments in the output');
			},
			optimize  :function(value){
				var ns=tagnamespace;
				return ns.P('optimize event listeners for ',value?'speed':'readability');
			},
			namespace :function(value){
				var ns=tagnamespace;
				return ns.P('The JSL module should be stored in a variable named "',value,'"');			
			},
			capitalize:function(value){
				var ns=tagnamespace;
				return (
					ns.P(
						(value?'tag-function names in capitals(e.g. HTML,HEAD,BODY etc.)':'tag-function names in lowercase(e.g. html,head,body etc.)'),
					)
				);				
			},
			jsldottags:function(value){
				var ns=tagnamespace;
				return value?ns.P('places the tag-functions in the jsl namespace'):ns.P('places the tag-functions in the global namespace');
			},
			producexml:function(value){
				var ns=tagnamespace;
				return value?ns.P('produces xml parsable code'):ns.P('produces html5 code');
			},
			forceJSON :function(value){
				var ns=tagnamespace;
				return value?ns.P('forces client-side to marshal parameters using JSON as in server-side'):ns.P('produces more efficient code on the client-side using references');
			},
			autocdata :function(value){
				var ns=tagnamespace;
				return value?ns.P('extract function-argument comments automatically and use them as content'):ns.P('disable automatic function-argument comment extraction');				
			},
			fnametoid :function(value){
				var ns=tagnamespace;
				return value?ns.P('use function-argument name as attribute \'id\''):ns.P('disable function-argument name as attribute \'id\'');				
			},
		}
		jslNs.describe=function(option,value){
			return option&&optionDescription[option]&&optionDescription[option](value);
		}
		
		jslNs.version=2;
		
		if(scriptTag()){	
			const bool={true:true,false:false,yes:true,no:false};
			try{
				var src=scriptTag().getAttribute('src');
				var ver=/jsl(\d+(?:\.\d+){0,1})\.js(?:\?(.*)){0,1}/.exec(src||"");				
				var opt=(ver[2]||'').split('&');				
				for(var i=0;i<opt.length;i++){
					var prop=opt[i].split('=');
					var b=bool[prop[1]];
					jslNs.options[prop[0]]=(b===!!b)?b:prop[1];
				};
				jslNs.version=parseFloat(ver[1]);	
			}catch(e){
				console.error("jsl initiazliztion error",e);		
			}
		}
		
		console.info("jsl version:",jslNs.version," options:",jslNs.options);	
		
		
		jslNs.o2r=function(object,searchDuplicates){
			if(searchDuplicates){
				for(var i=0;i<refLastId;i++){
					if(exports[i] ===  object){
						return i;
					}
				}
			}
			refLastId++;
			exports[refLastId]=object;
			return refLastId;
		}
		jslNs.r2o=function(refId){
			var object=exports[refId];
			return object;
		}
		
		function valueToCascadingStyleSheet(o){
			var t=typeof o;
			while(t == "function"){
				//console.warn("value is function. makes no sense as style sheet, so we will expand it");
				o=o();
				t=typeof o;
				if(!clientSide){
					//on the server side, perhaps we have a function that returns a function which should be used in the client
					break;
				}				
			}
			if(t!="object"){
				//o is literal, let's hope it is well formated CSS
				return o;
			}
			if(Array.isArray(o)){
				//o is an array, let's hope the combination of its items is valid CSS 
				let str="";
				for(i=0;i<o.length;i++){
					str+=valueToCascadingStyleSheet(o[i]);
				}
				return str;
			}
			//o is an object, let's treat its property as a CSS rule
			var str="";
			for(var m in o)if(o.hasOwnProperty(m)){
				str+="\n\n"+m+"{\n\t"+valueToCSSstyle(o[m])+"\n}";
			}
			return str;
		}
		
		function valueToCSSstyle(o){
			var t;
			while((t=typeof o)=="function"){
				//o is a function, it makes no sense a style declaration so let's expand it and hope for the best
				o=o();
				if(!clientSide){
					//on the server side, perhaps we have a function that returns a function which should be used in the client
					break;
				}				
			};
			if(t!="object"){
				//o is a literal, let's hope it is a valid style declaration
				return o+";";
			}
			if(Array.isArray(o)){
				//o is an array, let's hope it's items resolves to a valid style declaration, so that we can merge them 
				str="";
				for(i=0;i<o.length;i++){
					str+=valueToCSSstyle(o);
				}
				return str;
			}
			var str="";
			for(var m in o)if(o.hasOwnProperty(m)){
				var v=o[m];
				if(Array.isArray(v)){//maybe something like a font-family declaration ["arial","sans serif"]...
					v=v.join(" ");
				};
				/*convert javascript css camelCase propertyNames to css property-names*/
				str+=(m=="cssFloat"?"float":(m.replace(/([A-Z])/g,"-$1").toLowerCase()))+":"+v+"; ";
			}
			return str;
		}	
		jslNs._valueToCSSstyle=valueToCSSstyle;
		
		var enumeratedBooleanAttributes={
			contenteditable:true,
			spellcheck:true
		}
		
		function objectToElementAttributes(tagName,o,isArray,attributeBag,body){
			var keys=Object.keys(o);
			if(isArray){//we already used the faster way of enumerating the array's items
				keys=keys.slice(o.length);
			}
			var remaining=keys.length,i=0;
			while(remaining--){
				var m=keys[i++];
				var v=o[m];
				var t=typeof v;
				if((t=='boolean')&& !enumeratedBooleanAttributes[m]){
					//contenteditable, spellcheck are enumerated attributes so don't treat them like Boolean
					//what about data-* attributes? we can use a regular expression to test /^data-/.test(m))
					//	but it is faster, and seems proper to treat data-* properties with Boolean values as Boolean attributes
					if(v){
						v=jsl.options.producexml?m:"";
					}else {//don't add the value in the attribute-bag
						continue;
					}					
				}else
				if(!isNaN(parseInt(m))){
					tagArgumentProcess(tagName,v,attributeBag,body);
					continue;
				}else
				if(m=="style"){
					v=valueToCSSstyle(v);
				}else{											
					switch(t){
						case "object"://objects in attributes make sense only as JSON 
							if(/^data\-/.test(m)){
								v=JSON.stringify(v);	
							}else{
								if(Array.isArray(v)){
									v=v.join(' ');
								}else{
									v=v.toString();
								}
							};
						break;
						case "function"://functions in attributes make sense only as events...
							v=jslNs.listener(v);
						break;						
					}
				};
				if(!attributeBag[m]){
					attributeBag[m]=[];
				};
				attributeBag[m].push(v);
			}
		}
		jslNs._objectToElementAttributes=objectToElementAttributes;
		
		function tagArgumentProcess(tagName,argV,atts,body){
			var argT=typeof argV;
			if(argT=="function"){//[function-arguments]	
				if(tagName=='script'){//a function inside a script implies that we want to generate a script in the output
					if(argV.name){
						//console.log(argV.name," script ",typeof(htmlNs[argV.name]));
						htmlNs[argV.name]=htmlNs[argV.name]||argV;
						body.push(argV.toString()+";\n");						
					}else{
						body.push(jslNs.javascript(argV));
					}
					//no return here, the function might have properties
				}else{
					/**<p>if we wanted a string we could have used argV.toString()</p>
					<p>if we wanted to call the function we could have called the function</p>
					<p>let's do something else;-) extract its cdata.</p>
					*/					
					if(jslNs.options.fnametoid){
						if(argV.name && !atts.id){
							atts.id=[argV.name];
						}
					}
					if(jslNs.options.autocdata){
						body.push(jslNs.cdata(argV));
					}
					/**
						invoke the function with the arguments as we have them...<br/>
						this could allow for example a function to filter the body and attributes before they are joined</li>
					*/					
					argV(tagName,atts,body);
				}	
			};
			
		 	if(argV && typeIsObjectOrFunction[argT]){/*argV will become element attributes*/
				{//[array-arguments]	
					var isArray=Array.isArray(argV);
					if(isArray){
						for(var i=0;i<argV.length;i++){
							tagArgumentProcess(tagName,argV[i],atts,body);
						}
					};//no else here, the array might have named properties		
				}
				//now process the named properties 
				objectToElementAttributes(tagName,argV,isArray,atts,body);
			}else
			if( argV || argV==0){//same, but faster than (argV || typeIsEnumerated[argT] )
				body.push(argV);
			}
		}
		jslNs._tagArgumentProcess=tagArgumentProcess;
		
		function tagExec(tagName,singleton,orgArgs){
			var str="<"+tagName,body=[],atts={
					/*intermediate storage, each attribute as array of values that we will merge later*/
			};	
			var lastArg=orgArgs[orgArgs.length-1];
			for(var i=0;i<orgArgs.length;i++){
				tagArgumentProcess(tagName,orgArgs[i],atts,body);
			}			
			
			for(var m in atts)if(atts.hasOwnProperty(m)){
				if((atts[m]=="")&&(!jsl.options.producexml)){
					str+=" "+m;	
				}else{
					str+=" "+m+"=\""+atts[m].join(" ").replace(/"/g, '&quot;')+"\"";			
				}
			}
			
			body=body.join('');	
			if(singleton){
				if(body){
					console.warn("tag \""+tagName+"\" is a singleton and should not have any content");
				}else{
					if(lastArg !== jslNs.OPEN){
						str+="/>";
					};
					return str;					
				}			
			}
						
			var closeTag=(lastArg === jslNs.OPEN)?"":"</"+tagName+">";
			//console.log("\nstr:",str,"\nbody:",body,"\ncloseTag:",closeTag);	
			str+='>'+body+closeTag;
			/*[hidden]
			if(body){
				if(body.match(/>$/g)){
					//console.log("A");						
					str+=">"+body.replace(/\n/g,"\n\t")+"\n"+closeTag;	
					//str+=">"+body.replace(/(\n\s*)(?=<)/g,"$1\t")+'\n'+closeTag;		
				}else{
					//console.log("B");						
					//str+=">"+body+closeTag;	
				}
			}else{
				console.log("C");											
				str+=">"+closeTag;	
			}*/
					
			return str;
		}
		jslNs._tagExec=tagExec;

		function tagGen(tagName,singleton){
			return function(){			
				return tagExec(tagName,singleton,arguments);				
			}
		}


		var defs={
			a:{}, abbr:{}, address:{}, area:{singleton:true}, article:{}, aside:{}, audio:{}, 
			b:{}, base:{singleton:true}, bdi:{}, bdo:{}, blockquote:{}, body:{}, br:{singleton:true}, button:{}, 
			canvas:{}, caption:{}, cite:{}, code:{}, col:{singleton:true}, colgroup:{}, 
			data:{}, datalist:{}, dd:{}, del:{}, dfn:{}, div:{}, dl:{}, dt:{}, details:{},
			em:{}, embed:{singleton:true}, 
			fieldset:{}, figcaption:{}, figure:{}, footer:{}, form:{}, 
			h1:{}, h2:{}, h3:{}, h4:{}, h5:{},h6:{}, head:{}, header:{}, hr:{singleton:true}, html:{}, 
			i:{}, iframe:{}, img:{singleton:true}, input:{singleton:true}, ins:{}, 
			kbd:{}, keygen:{singleton:true}, 
			label:{}, legend:{}, li:{}, link:{singleton:true}, 
			main:{}, map:{}, mark:{}, meta:{singleton:true}, meter:{}, 
			nav:{}, noscript:{}, 
			object:{}, ol:{}, optgroup:{}, option:{}, output:{}, 
			p:{}, param:{singleton:true}, pre:{}, progress:{}, picture:{}, 
			q:{}, 
			rb:{}, rp:{}, rt:{}, rtc:{}, ruby:{}, 
			s:{}, samp:{}, script:{}, section:{}, select:{}, small:{}, source:{singleton:true}, span:{}, strong:{}, style:{}, sub:{}, sup:{}, summary:{},
			table:{}, tbody:{}, td:{}, template:{}, textarea:{}, tfoot:{}, th:{}, thead:{}, time:{}, title:{}, tr:{}, track:{singleton:true}, 
			u:{}, ul:{}, 
			"var":{}, video:{}, 
			wbr:{singleton:true}, 
		};
		
		var tagnamespace=jslNs.options.jsldottags?jslNs:htmlNs;
		jslNs.tags={};
		jslNs.defs=defs;
		for(var t in defs)if(defs.hasOwnProperty(t)){		
			var n=jslNs.options.capitalize?t.toUpperCase():t, s=defs[t].singleton||false;
			(jslNs.tags[n]=tagnamespace[n]=tagGen(t,s)).singleton=s;			
		};
		
		jslNs.register=function(tagName,singleton,namespace){
			namespace=namespace||tagnamespace;
			tagName=tagName.toLowerCase();
			var funcName=jslNs.options.capitalize?tagName.toUpperCase():tagName;
			var f=namespace[funcName]=tagGen(tagName,singleton);
			if(singleton)f.singleton=true;
			return f;
		}
		
		jslNs.OPEN=function(){return arguments;};		
		
		
		
		jslNs.CSS=function(){
			var str="\n/*jsl.CSS*/\n";
			for(var i=0;i<arguments.length;i++){
				str+=valueToCascadingStyleSheet(arguments[i]);
			}
			return str+"\n";
		}
		
		/*not to be confused with the native Array.forEach*/
		jslNs.forEach=function(collection,callback,options){
			var returnAsArray=(options !== false);
			//console.log("jslNs.forEach",collection,callback,returnAsArray);
			if(Array.isArray(collection)){
				var results=[];
				//console.log(results);
				for(var i=0;i<collection.length;i++){
					var cbResult=callback(collection[i],i,collection,results);
					if(typeof(cbResult)!='undefined'){
						results.push(cbResult);
					}
				}		
				return results;
			};
			
			if(collection && typeIsObjectOrFunction[typeof collection]){/*all other objects(and functions)*/				
				if(returnAsArray){
					var keys=Object.keys(collection);
					var results=[];
					for(var i=0;i<keys.length;i++){
						var m=keys[i],cbResult;
						try{
							cbResult=callback(collection[m],m,collection,results,i,keys.length);	
						}catch(e1){
							cbResult=callback(e1,m,collection,results,i);	
						}	
						if(typeof(cbResult)!='undefined'){
							results.push(cbResult);
						}						
					}
					return results;	
				}
				//return as an object with the same members..
				var results={};
				for(var m in collection)if(collection.hasOwnProperty(m)){
					var cbResult=callback(collection[m],m,collection,results);
					if(typeof(cbResult)!='undefined'){
						results[m]=cbResult;
					}
				}
				return results;	
			}			
			console.warn("jsl.forEach requires an iterable collection!",typeof collection);
			return callback(collection);
		};

		jslNs.transform=function(/*the arguments specify the fragment*/){
			var fragment="";
			for(var i=0;i<arguments.length;i++){
				var v=arguments[i];
				if((v === null)||(v == undefined)){
					//skip void argument
				}else{
					if(typeof v == 'function'){/*this is undocumented, and it better stay...  call v like this?*/
						v=v();
					};
					if(Array.isArray(v)){
						v=flatJoin(v);
					}
					fragment+=v;			
				}
			}
			if(/^<html/.test(fragment)){
				fragment='<!DOCTYPE html>'+fragment;
			}
			if(!clientSide){//[server-side] nodejs server-side
				if(((this==jslNs)||(!this))&&(!jslNs.target)){
					return fragment;//i.e. this.transform(...)	
				}
				var target=this == jslNs?jslNs.target:this;
				if(typeof target == 'object'){
					if(target.write){//i.e. jsl.transform.call(response,...);
						target.write(fragment);
						return true;
					}else
					if(this.exports){//this is a module
						this.exports=fragment;
						return;
					}
				}
				throw new Error('I don\'t know what to do with this');
			}
			
			if((this==jslNs)&&(!jslNs.target)){
				var s1=scriptTag();
				if(s1 && (s1.ownerDocument.readyState=="loading")){//the page is still loading, so we can call document.write
					//console.warn("appening fragment using write:",fragment.slice(0,60)+'...');
					s1.ownerDocument.write(fragment);								
				}else{/*after the page is loaded, we can no longer use document.write*/
					//console.warn("appening fragment using insertBefore:",fragment.slice(0,60)+'...');
					var q=document.createRange().createContextualFragment(fragment);
					document.body.insertBefore(q,s1);	
					//[hidden]insertAdjacentHTML doesn't execute the script tags								
					//console.warn("appening fragment using insertAdjacentHTML:",fragment.slice(0,60)+'...');								
					//[hidden]document.body.insertAdjacentHTML("beforeEnd",fragment);
				}
				if(s1){		
					//console.warn(s1);
					s1.outerHTML="";
				}
			}else{//we invoke transform with a diferent this binding... e.g. jsl.transform.call("body > main",P("new paragraph"))..
				var target=this == jslNs?jslNs.target:this;
				if(typeof target == 'string'){//in strict mode a string this is not boxed
					target=document.querySelector(target);
				}else
				if(target.constructor==String){
					target=document.querySelector(target.valueOf());
				};
				//console.warn("appening fragment to target:",target,"fragment:",fragment.slice(0,60)+'...');
				//[hidden]target.insertAdjacentHTML("beforeend",fragment);
				var q=document.createRange().createContextualFragment(fragment);	
				if(target.write){
					target.write(fragment);
				}else
				if(target!=window){/*target==window implies that the calling statement was jsl.transform.call(null,...)*/
					target.insertBefore(q,null);					
				};
				return q;
			};
		}
		
		/*experimental helper to have "inline" scripts with jsl that are aware of their dom placement*/
		function scriptTag(){
			/*
				as the dom tree is loading when we invoke this from within a <script> element X,
					X should be the last of <script> elements...				
			*/
			if(!clientSide){
				return null;
			}
			if(document.readyState!="loading"){
				/*in runtime we can not identify the script source that invoked jsl.transform or any other function*/
				return null;
			}
			var scriptTags = document.getElementsByTagName('script');
			return scriptTags[scriptTags.length - 1];		
		}	
		
		jslNs.javascript=function(/*param0...paramN-1,method*/){				
			var s='';				
			var a=new Array(arguments.length-1);
			for(var i=0;i<a.length;i++){
				s+=', ';
				var v=arguments[i],t=typeof v;
				//console.info(v,t);
				if(v && //not null
					(
						(t=='object') || //objects(including arrays)
						((t=='function')&&(!t.hasOwnProperty('prototype'))) //bound functions 
					)
				){//need reference
					if(clientSide && !jsl.options.forceJSON){//client side doesn't need to make a persistent state of the object
						var r=exports.o2r(v,v.name);
						s+=jslNs.options.namespace+'['+r+']'+(jslNs.options.release?"":(v.name?'/*'+v.name+'*/':''));
					}else{//server side must make a persistent state of the object. bound functions will not make it....
						if(t=='function'){
							throw new Error('server side bound function that needs to be executed on the client!');
						}
						s+=JSON.stringify(v);
					}
				}else
				if(t=='string'){//strings
					s+=JSON.stringify(v);
				}else{//numbers, functions converted to string
					s+=v;
				};
			}
			var f=arguments[arguments.length-1];
			//console.log(f.name,(htmlNs[f.name]==f),f.hasOwnProperty('prototype'));
			if(f.name && (htmlNs[f.name]==f) && f.hasOwnProperty('prototype')){
				f=f.name;
			}else
			if(f.hasOwnProperty('prototype') && clientSide && jslNs.options.optimize){
				var r=exports.o2r(f,true);
				f=jslNs.options.namespace+'['+r+']'+(f.name?'/*'+f.name+'*/':'');
			}else{
				f=f.toString();
			}
			var e=/\n(.*)\}$/g.exec(f);
			return '\r\n'+(e?e[1]:'')+'('+f+').call(this'+s+');\r\n';		
		}
		

		jslNs.choose=function(acase,cases){
			if((typeIsPrimitive[typeof acase])&&(typeof cases == "object")){//treat cases as a hashmap of results
				return (cases[acase])||cases.default;	
			};
			//return the first non void argument
			for(var i=0;i<arguments.length;i++){
				var result=arguments[i];
				if(result){
					return result;
				}
			}
		}
		jslNs.when=function(test,etrue,efalse){
			return test?etrue:efalse;
		}
		
		/*extracts the first multilit comments of the functions provided as arguments
			handy to produce html content without using strings;)
			we rely ofcourse that the javascript engine will keep the 
			comments in the function.toString()
			;)
		*/
		let extractComments=(raw,auto)=>function(){
			/*
				cdata raw=false,auto=true
				tdata raw=false,auto=false
				rdata raw=true, auto=false
			*/
			var a=new Array(arguments.length);
			for(var i=0;i<a.length;i++){
				var s=(arguments[i]||'').toString();			
				if(typeof arguments[i] == 'function'){
					var e=/(?:[^\/])+\/\*([^]+?)(?=\*\/)\*\//.exec(s);
					if(!e){
						console.warn('extraction failed!',s.slice(0,40));
					}else{
						s=(e?e[1]:s);
						if(auto && (raw=(e=/^(\*+)/.exec(s))) ){
							s=s.slice(e[1].length);
						}
						if(!raw){
							s=s.replace(/</g,'&lt;');//'<![CDATA['+ a + ']]>';;					
						}											
					}
				};
				a[i]=s;
			}
			return a;
		};
		
		jslNs.cdata=extractComments(false,true);
		jslNs.tdata=extractComments(false,false);
		jslNs.rdata=extractComments(true,false);
		
		jslNs.listener=function(/*param0...paramN-1,method*/){				
				var s='';				
				var a=new Array(arguments.length-1);
				for(var i=0;i<a.length;i++){
					s+=', ';
					var v=arguments[i],t=typeof v;
					//console.info(v,t);
					if(v && //not null
						(
							(t=='object') || //objects(including arrays)
							((t=='function')&&(!t.hasOwnProperty('prototype'))) //bound functions 
						)
					){//need reference
						if(clientSide){//client side doesn't need to make a persistent state of the object
							var r=exports.o2r(v,v.name);
							s+=jslNs.options.namespace+'['+r+']'+(jslNs.options.release?"":(v.name?'/*'+v.name+'*/':''));
						}else{//server side must make a persistent state of the object. bound functions will not make it....
							if(t=='function'){								
								//[hidden]throw new Error('server side bound function that needs to be executed on the client!');
								console.log('server side bound function(',v.name,') that needs to be executed on the client!');
								s+=v.toString();
							}else{
								s+=JSON.stringify(v);
							}
						}
					}else
					if(t=='string'){//strings
						s+=JSON.stringify(v);
					}else{//numbers, functions converted to string
						s+=v;
					};
				}				
				var f=arguments[arguments.length-1];
				//console.log("listener for",f.name,(htmlNs[f.name]==f),f.hasOwnProperty('prototype'));
				if(f.name && (htmlNs[f.name]==f) && f.hasOwnProperty('prototype')){
					f=f.name;
				}else				
				if(f.hasOwnProperty('prototype') && clientSide && jslNs.options.optimize){
					var r=exports.o2r(f,true);
					f='(' + jslNs.options.namespace+'['+r+']'+(f.name?'/*'+f.name+'*/':'') + ')';
				}else{
					f='('+f.toString()+')';
				}
				return (f+'.call(this,event'+s+');').replace(/</g,'&lt;');
		}
		
		jslNs.merge=function(){
			return Array.prototype.slice.call(arguments);
		}	
		
		jslNs.isSingleton=function(tagName){
			return (defs[tagName]||{}).singleton;
		}
		
		if(!clientSide){			
			htmlNs[jslNs.options.namespace]=jslNs;
			
			jslNs.reload=function(jslScript,paths){
				//console.log("JSL:",module.paths);
				var path=require.resolve(jslScript,paths||module.paths);				
				delete require.cache[path];
				return require(path);
			};
			
			jslNs.execute=function(jslScript,request,response){
				var result=jslNs.reload(jslScript);
				if(typeof result=='string'){
					response.status(200).send(result);
					return true;
				}else
				if(typeof result=='function'){
					return result(request,response);
				};
				return 500;
			}
				
		}
	
	};
	
	
	
	if(clientSide){
		exports.init(exports,this,true);
        if(this) {
            this[exports.options.namespace]=exports;
        }
        else if(window){
            window[exports.options.namespace]=exports;
        }
	};
	
})(typeof exports === 'undefined'? null: exports);
