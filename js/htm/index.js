/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */


$(function(){

	$('#splash').html(DCtv('rem3',gM('zzllrr Mather'))).after('<div id=Caps hidden><canvas id=caps hidden></canvas><img id=capsimg />'+dc
	
	
	);



	$('#logo').addClass('seled').text(gM('zzllrr Mather')).after(
		Arrf(function(i){
			return SCtv('subhead" id="'+i,+gM(i))
		},ZLR('hotkey API about')).join('')
	);
	
	var toolnames=ZLR('solve graphic show wiki course drill topic pitfall unsolved thought refer');
	$('#toolnav').append(Arrf(function(i){
		return '<label><input type=radio name=tool value='+i+' id='+i+' hidden /><span>'+gM(i)+sc+'</label>'
	},toolnames).join(''));

	$('#searchBy').html(optgrp(gM('Search'), Options(ZLR('Subject Concept QuestionType'),1).join(''))).on('change',function(){
		$('#search').change();
	});
	$('#subject').after(Arrf(function(i){
		return DCtv('ground" id="'+i+'Ground',DCtv('ground0')+DCtv('ground1')+DCtv('ground2')+DCtv('tasks'))
	},toolnames).join(''));
	
	$('.subhead').on('click',function(e){
		var me=$(this).addClass('seled'), id=this.id,shft=e.shiftKey;
		me.siblings('.subhead').removeClass('seled');
		if(id=='logo'){
			$('#navbody').show();
			if(shft){
				window.open('index.html');
			}else{
				OH('');
			}
		}else{
			$('#menu > .toggle').click();
			$('#navbody').hide();
			OH(navhead[id]);
			if(navheadThen[id]){
				navheadThen[id]()
			}
		}

		$('#iContent').toggle(id=='logo');

	});
	

	$('#menu').nextAll().hide();



	

	$('#input0Tool input,#preview').not('.Clear').attr('tip',function(){return this.id});



	$('[tip]').attr('title',function(){return gM($(this).attr('tip'))});
	
	$('#search').attr('placeholder',gM('search')).on('change keyup',function(){
		var by=$('#searchBy').val(), v=$(this).val().trim(), sR=$('#searchResults'), rA=[], u={}, lA=[], hA=[];
		if(by=='Subject'){
			ZLR(subject0).forEach(function(x){
				var x1=gM(x), x2=gM(x,'',lang.en), xc=subjects[x];;
				if(!v || v && (x1+x2).indexOf(v)>-1){
					hA.push(SCtv('sechResult" data-i="'+x,x1));
					
					if(xc){
						xc.forEach(function(y){
							if(!/99/.test(y)){
								lA.push('<option value="'+gM(y)+'" label="'+x1+'"></option>');
							}
						});
						
					}else{
						lA.push('<option value="'+x1+'"></option>');
					}
				}else if(v && xc){
					xc.forEach(function(y){
						if(!/99/.test(y)){
							var y1=gM(y), y2=gM(y,'',lang.en);
							if((y1+y2).indexOf(v)>-1){
								lA.push('<option value="'+gM(y)+'" label="'+x1+'"></option>');
								hA.push(SCtv('sechResult" data-i="'+x+'.'+y,x1));
							}
						}
					});
					
				}
				
			});

		}
		if(by=='Concept'){
			ZLR(concept0).forEach(function(x){
				var x1=gM(x), x2=gM(x,'',lang.en), xc=concepts[x];;
				if(!v || v && (x1+x2).indexOf(v)>-1){
					hA.push(SCtv('sechResult" data-i="'+x,x1));
					
					if(xc){
						xc.forEach(function(y){
							if(!/99/.test(y)){
								lA.push('<option value="'+gM(y)+'" label="'+x1+'"></option>');
							}
						});
						
					}else{
						lA.push('<option value="'+x1+'"></option>');
					}
				}else if(v && xc){
					xc.forEach(function(y){
						if(!/99/.test(y)){
							var y1=gM(y), y2=gM(y,'',lang.en);
							if((y1+y2).indexOf(v)>-1){
								lA.push('<option value="'+gM(y)+'" label="'+x1+'"></option>');
								hA.push(SCtv('sechResult" data-i="'+x+'.'+y,x1));
							}
						}
					});
					
				}
				
			});
		}
		if(by=='QuestionType'){
			ZLR(question0).forEach(function(x){
				var x1=gM(x), x2=gM(x,'',lang.en), xc=questions[x];;
				if(!v || v && (x1+x2).indexOf(v)>-1){
					hA.push(SCtv('sechResult" data-i="'+x,x1));
					
					if(xc){
						xc.forEach(function(y){
							if(!/99/.test(y)){
								lA.push('<option value="'+gM(y)+'" label="'+x1+'"></option>');
							}
						});
						
					}else{
						lA.push('<option value="'+x1+'"></option>');
					}
				}else if(v && xc){
					xc.forEach(function(y){
						if(!/99/.test(y)){
							var y1=gM(y), y2=gM(y,'',lang.en);
							if((y1+y2).indexOf(v)>-1){
								lA.push('<option value="'+gM(y)+'" label="'+x1+'"></option>');
								hA.push(SCtv('sechResult" data-i="'+x+'.'+y,x1));
							}
						}
					});
					
				}
				
			});
		}


		$('#searchlist').html(lA.join(''));
		sR.html(hA.join(''));
		if(hA.length==1){
			sR.find('.sechResult').click();
		}
	});


	var sbj0=$('#subject0'), sbj1=$('#subject1'), sbj2=$('#subject2');
	sbj0.html(optgrp(gM('Subject Classification GB'),'<option value=0>'+gM('Level-1 Discipline')+'</option>'+
		Arrf(function(i){return '<option value='+i+'>'+i+' '+gM(i)+'</option>'},ZLR(subject0)).join(''))
	).on('change', function(){//改变sbj1
		var me=$(this), v=me.val();
		$('#input0Tip, #input1Tip').add($('#'+$('[name=tool]:checked').attr('id')+'Ground .tasks')).empty();
		if(v=='0'){
			sbj1.empty().hide();
		}else{
			var t=subjects[v]?Arrf(function(i){return '<option value='+i+'>'+i+' '+gM(i)+'</option>'},subjects[v]).join(''):'';
			if(t){
				sbj1.html(optgrp(gM('Level-2 Discipline'),t)).show();
			}else{
				sbj1.empty().hide();
			}
		}
		$('#subject .ground0 .level[data-i='+v+']').addClass('seled').siblings().removeClass('seled');
		$('#subject .ground1').html(subjects[v]?jdetail(subjects[v]):'');
		$('#subject .ground1 .level').eq(0).addClass('seled');
		$('#solveGround').children().empty();
	});



	
	
	
	$('#subject .ground0').html(jdetail(ZLR(subject0)));
	



	$('#input0Tip').attr('title',gM('Help')+' | '+gM('Example')).on('click','button',function(){
		var t=$(this).attr('data-tool'),i0=$('#input0'),tl=$(this).parents('.inputTip').attr('data-tool');
		if(tl=='Matrix' && t=='line Merge'){
			i0.val(function(i,x){return '['+Arrf(function(s){
					var isfsi=/=\s*[^0]/.test(s), a=s, b=isfsi?exp2coe(s,'='):'';
					if(/x\d/i.test(s)){
						var deg=+max(s.match(/x\d/ig).join(',').replace(/x/ig,'').split(','));
						a=Arrf(function(x){return exp2coe(s,'x'+deg)}, seqA(1,deg)).join(' ')
					}else if(/.+[xyz].+[xyz]/i.test(s)){
						a=[exp2coe(s,'x','yz'),exp2coe(s,'y','xz'),exp2coe(s,'z','xy')].join(' ')
					}else{
						a=s
					}
					return (a+' '+b).trim()
				
				},x.replace(/\t/g,' ').trim().split('\n')).join(';')+']'});
		}
		
		
	})
	
	
	$('.ground1').on('change keyup mouseup','.editorText', function(){
		L[$(this).parents('.ground1').prev().children('.level.seled').attr('data-i').toLowerCase()]=$(this).val()
	}).on('click','.editorText + .Clear', function(){
		$(this).prev().val('')
	});

	$('#iClear').on('click',function(){
		if($('#input0').val()==''){
			$('#previewOff').click();
		}else{
			$('#input0').val('');
			$('#input0Preview').empty().removeAttr('style');
		}
	});
	$('#iClear2').on('click',function(){
		$('#input2').val('');
	});
	$('#cClear').on('click',function(){
		$('#input1').val('');
	});
	$('#tClear').on('click',function(){
		var t=$('.iTextLaTeXon .seled');
		if(t.length){
			t.click();
		}else if($('#input0Tip > .inputTip').length>1){
			$('#input0Tip > .inputTip').last().prevAll().remove()
		}else{
			$('#input0Tip').empty();
		}
	});

	$('#iTextFold').on('click',function(){
		$(this).text(function(i,v){
			if(/less/.test(v)){
				$('#previewOff').click();
				$('#iTextPreview').prevAll().hide();
				
				$(this).addClass('seled');

				return 'unfold_more'
			}
			$('#iTextMain').show();

			if($('#preview').is('.seled')){
				$('#previewTool').show();
			}
			$(this).removeClass('seled');

			return 'unfold_less'
		})
	});



	$('#navHide').on('click',function(){
		var isup=/up/.test($(this).text());
		$('#nav').toggle();
		$(this).text(function(i,v){
			$(this).toggleClass('seled',isup);
			return 'keyboard_arrow_'+(isup?'down':'up')
		});
		
	});

	$('#zMatherHide').on('click',function(){
		$('#zMatherOn').click();
	});

	$('#displayOverCanvas').on('click',function(){
		OverCanvas($('#input0').val());
		//toolTip(gM('copiedtip'));
	});



//输出编辑
	$('#previewOff').on('click',function(){
		$('#preview.seled').removeClass('seled');
		$('#input0Preview, #previewTool').hide();
	});


	
	$('body').on('keydown',function(e){
		var k=e.keyCode, shft=e.shiftKey, ctrl=e.ctrlKey, alt=e.altKey, act=document.activeElement, 
		node=act.tagName.toLowerCase(), me=$(act),id=me.attr('id')||'';
//console.log(k,node);

		if(node=='input' && k==13){
			/*if(id=='input0'){
				$('#go').click();
			}
			*/
			return

		}
		if(node=='textarea'){
			if(ctrl && k==69){act.value='';return false}
			var iv=me.val(), sS=act.selectionStart, sE=act.selectionEnd,
			A=[iv.substr(0,sS),iv.substring(sS,sE),iv.substr(sE)],t=sS, iT=$('#input0Type').val();
			if(k==9 && !alt){
			
				consolelog(A);
				if(shft){
					A[1]=A[1].replace(/^\t/,'').replace(/\n\t/g,'\n');
				}else{
					A[1]='\t'+A[1].replace(/\n/g,'\n\t');
					t++;
				}
				me.val(A.join(''));
				act.selectionStart=t;
				act.selectionEnd=t;
				return false
			}
			
			consolelog(k);
			if(ctrl && iT=='Markdown' && id=='input0' && [73,66,85,81,75].indexOf(k)>-1){
				consolelog(sS,iv,sE);
				if(k==73){
					if(sS==sE){
						A[1]='**';
					}else{
						A[1]='*'+A[1]+'*'
					}
					t++
				}
				if(k==66){
					if(sS==sE){
						A[1]='** **'
					}else{
						A[1]='**'+A[1]+'**'
					}
					t+=2
				}
				if(k==85){
					if(sS==sE){
						A[1]='__ __'
					}else{
						A[1]='__'+A[1]+'__'
					}
					t+=2;
					
				}
				if(k==81){
					if(sS==sE){
						A[1]='\n> '
					}else{
						A[1]='\n> '+A[1]
					}
					t+=3
				}
				
				if(k==75){
					if(sS==sE){
						A[1]='[](http:// '+gM('Title')+')';
						t++;
					}else{
						A[1]='['+A[1]+'](http:// '+gM('Title')+')'
						t+=10+A[1].length;
					}
				}
				
				me.val(A.join(''));
				act.selectionStart=t;
				act.selectionEnd=t;
				
				if(k==85){
					return false
				}

			}
			
			
		}

		if(/^(input|textarea)$/.test(node)){
			if(ctrl){
				if(k==13){
					if(/^input[01]/.test(id)){
						$('#go').click();
					}
					if(id=='TextBox'){
						$('#TextBoxGo').click();
					}
				}
				if(k==83){//s

					return false
				}
			}
			if(shft){
				if(k==13){
					$('#preview').click();
				}	
			}
		}

		if(alt){
			if(k==50 || k==98){
				var t=getSelection().toString();
				if(t){saveText(t, gM('zzllrr Mather')+'_'+Time.now()+'.txt')}
			}
		}




	}).on('click','.subtabhead',function(e){
		var me=$(this).addClass('seled'), pa=me.parent(), i=me.index(),shft=e.shiftKey;
		me.siblings('.subtabhead').removeClass('seled');
		pa.parent().find('.subtab').hide().eq(i).show();


	}).on('click', '.sbsTbl td, .sbsTbl .td',function(e){
		var p=$('#input0Type').val();
		if(/Canvas|JavaScript|HTML/.test(p)){
			p='JavaScript';
		}
		sbsTbltd(this,e,'input'+$('#input1.seled').length,p);

	}).on('mouseover', '.sbsTbl:not(.sbsiTbl) td, .sbsTbl:not(.sbsiTbl) .td',function(e){
		var me=$(this),t=me.attr('title');
		if(!t && me.parents('#sbs').length || me.is('.Sts.td') && !/^\$.+\$/.test(t)){
		}else{
			toolTip(gM(me.parents('.iTextLaTeX').attr('id')+'ontip'));
		}

	}).on('mouseover', '.task',function(e){
		var me=$(this);
		toolTip(me.attr('data-tip')+' | '+gM('tasktip'));

	}).on('mouseover', '#oHTML th:eq(0)',function(e){
		toolTip(gM('thtip'));

	}).on('mouseover', '#input0Type',function(e){
		var v=$(this).val();
		toolTip({'LaTeX':gM('Formula Snippet'),
			'Ascii_Math':'ASCII '+gM('Character'),
			'Unicode_Math':'Unicode '+gM('Character'),
			'JavaScript':'JavaScript '+gM('Snippet'),
			'Markdown':'Markdown '+gM('Snippet'),
			'HTML':'HTML '+gM('Snippet'),
			'Presentation_MathML':gM('Presentation Markup')+' MathML '+gM('Snippet'),
			'Content_MathML':gM('Content Markup')+' MathML '+gM('Snippet'),
			
		}[v]||v);


	}).on('mouseover', '[tip]:not(#tileTool),[hotkey]',function(e){
		var me=$(this),hk=me.attr('hotkey')||'';

		toolTip(gM(me.attr('tip')||this.id||'')+(hk?' | '+gM('Hotkey')+' '+hk:''));

	}).on('click','.Mele', function(){
		var t=$(this).text(),o=Meleo[t]||t;
		if(t!='HTML'){
			textareaAdd(XML.wrapE(t),'#showGround .editorText',1,t.length+3);
		}
		if($('#input0Type option[value='+o+']').length && $('#input0Type').val()!=o){
			$('#input0Type').val(o).change();
			$('#navHide.seled').click();
			$('#iTextFold.seled').click();
		}

	}).on('click','.eg', function(e){

		var me=$(this),t=me.attr('data-eg'),shft=e.shiftKey,
		i1=me.parents('.inputTip').parent().attr('id'),isjs=me.is('.js'), isnode=me.is('.node'),tbt=me.parents('#TextBoxTool').length;
		if(isjs){
			t+=';\n'
		}else if(isnode){
			t=XML.wrapE(t)
		}else{
			t=t.replace(/&&/g,'\n')
		}
		if(!i1 && !tbt){
			copy2clipboard(t)
			return
		}
		
		i1=tbt?'svgTEXTBox':i1.replace(/\D/g,'');
		var is2=me.is('.eg2'),i=tbt?$('#TextBox'):$('#input'+i1),iv=i.val();

		
		if(is2){
			var td=$('#sbsTbl td').filter(function(){return $(this).text()==t}).eq(0);
			if(td.length){
				i.click();
				td.click();
				return
			}else if(!isjs){
				if(/\.\d/.test(t)){
					t=t.replace(/\.(\d+)/,'[$1]')	//这里要确认.何时需要替换为[]?
				}
				

			}
		}else if(i1 && iv && !shft){
			
		}else{
			i.val(t);
			if(!tbt && $('#preview.seled').length){
				preDisplay()
			}
			return
		
		}
		
		var sS=i[0].selectionStart, sE=i[0].selectionEnd;
		i.val(iv.substr(0,sS)+t+(sE==iv.length?'':iv.substr(sE)));
		var s2=sS+t.length;
		i.focus();
		i[0].selectionStart=s2;
		i[0].selectionEnd=s2;
		
		if(!tbt && $('#preview.seled').length){
			preDisplay()
		}

	}).on('click','[name=tool]',function(){
		var x=this.id;
		L.tool=x;
		toolSwitch(x);

	}).on('click','#subject .ground0 .level',function(){
		var me=$(this).toggleClass('seled'),i=me.attr('data-i');
		me.siblings().removeClass('seled');
		if(me.is('.seled')){
			$('#subject0').val(i).change();
		}

	}).on('click','#subject .ground1 .level',function(){
		var me=$(this).toggleClass('seled'),i=me.attr('data-i');
		me.siblings().removeClass('seled');
		if(me.is('.seled')){
			$('#subject1').val(i).change();
		}else{
			//$('#'+$('[name=tool]:checked').val()+'Ground').children().empty()
		}


	}).on('click','.ground .level,.task',function(e){

		var me=$(this),mei=me.attr('data-i'),eg=me.attr('data-eg'),tip=me.attr('data-tip'),mtool=me.attr('data-tool'), shft=e.shiftKey,
		pa=me.parent(),p=pa.parents('.ground'),
		tool=p.attr('id').split('Ground')[0],tt=tooltip[tool]||{}, issolve=tool=='solve', istask=me.is('.task');

		if(!istask){
			pa.nextAll().add('#oHTML').empty();
		}
		
		if(me.is('.seled')){
			me.removeClass('seled');
			$('.inputTip[data-uri^="'+muri+'"]').remove();
			
		}else{
			me.addClass('seled');
			if(!istask){
				me.siblings().removeClass('seled');
			}
			var fm=furi(me), muri=fm[0].join('/'),lvl=fm[0].length,v=issolve?$('#subject2').val():'';


			var ttip=tooltip[v],tipOpr=tooltip[v+' Operation'],str='',str2='',
			ev=eval(tool), evs=eval(tool+'s'), eT=eval(tool+'Then');
			
			if(ttip && $('#input0Tip .inputTip[data-tool="'+v+'"]').length<1){
				$('#input0Tip').append(detail(gM(v), ttip, '', 'class=inputTip data-tool="'+v+'"'));
				if(tipOpr){
					$('#input0Tip').append(detail(gM(v+' Operation'), tipOpr, '', 'class=inputTip data-tool="'+v+'"'));
				}
			}

			for(var i=0;i<lvl;i++){
				
				var u0=fm[0].slice(0,i+1).join('/'),m0=fm[0][i],tip0=tt[u0],tip1=tt[u0+' Condition'];
consolelog(u0, tip0);
				if(tip0 && $('#input0Tip .inputTip[data-uri="'+u0+'"][data-tool="'+m0+'"]').length<1){
					$('#input0Tip').append(detail(gM(m0), tip0, '', 'class=inputTip data-tool="'+m0+'" data-uri="'+u0+'"'))
					if(tip1){
						$('#input1Tip').append(detail(gM(m0+' Condition'), tip1, '', 'class=inputTip data-tool="'+m0+'" data-uri="'+u0+'"'))
					}
				}
			}

consolelog('路径',fm);

			if(issolve){
				evs=solves[$('#subject1').val()||$('#subject0').val()];
				if(evs){
					evs=evs.sbj2[v][fm[1][0]];
				}
			}


consolelog('uri = ',muri);

			var A=evs[fm[0][0]];
			
			if(A && !istask){
consolelog('A = ',A);
				if(isStr(A)){


				}else{

					if(lvl>1){
						A=A[fm[1][1]];
						if(isObj(A)){
							A=A[fm[0][1]]
						}
consolelog('此时A = ',A);
						if(lvl==3){
							A=A[fm[1][2]];
							if(isObj(A)){
								A=A[fm[0][2]]
							}
						}
						
					}
consolelog('最终A = ',A);
					if(!isStr(A)){
						for(var i=0,l=A.length;i<l;i++){
							if(isStr(A[i])){
								if(issolve){
									str2+=jdetail(A[i],'','task')
								}else{
									str+=jdetail(A[i])
								}
								
							}else{
								$.each(A[i], function(k,v){
									consolelog('A[i]=',k,v);
									if(issolve && (!isArr(v) || lvl==3)){
										if(isArr(v)){
											str2+=jdetail(A[i],'','task')
										}else{
											str2+=jdetail(k,'','task')
										}
									
									}else if(lvl==3){
										str+=jdetail(k,'','task')
									}else{
										str+=jdetail(k)
									}

								});
							}
						}

						pa.next().html(str)
					}
				}

				if(issolve){
					$('#solveGround .tasks').html(str2);
					
				}else if(isStr(A)){
					OH(ev[A] || ev[fm[0].slice(-2).join(' ')]  || ev[fm[0].slice(-2).reverse().join(' ')] || ev[fm[0].join(' ')] || ev[muri] )
				}
			}

			var B=eT[muri];
			if(B){B()}
			
			
			if(shft){//(v.trim()?v.trim()+'\n':'')+
				$('#input0').val(eg||$('#input0Tip .eg').not('.eg2').attr('data-eg')||'');
			}
			
			if(issolve && istask && eg && $('#input0Tip .inputTip[data-uri="'+muri+'"]').length<1){
				var hasC=me.children('.katex').length;
				$('#input0Tip').append(detail(hasC?me.html():tip, 
					(hasC && mtool!=tip?tip+br:'')+(me.attr('title')?me.attr('title').replace(/\n/g,br)+br:'')+sceg(eg),
					 1, 'class=inputTip data-uri="'+muri+'" data-tool="'+fm[0].slice(-1).join('')+'"'));
			}
			
		}


	}).on('click','.tasknameOff', function(){
		var me=$(this),p=me.parent(),pp=p.parent(),t=p.text();
		if(!p.siblings().length){
			pp.parent().removeAttr('open')
		}
		p.parent().nextAll('.task.seled').filter(function(){return $(this).text()==t}).click();

	}).on('click','.tool', function(e){
		var me=$(this).toggleClass('seled'),id=me.attr('id'),se=me.is('.seled');


		if(/on/.test(id)){
			$('#'+id.replace(/on$/,'')).toggle();
			if(id=='Condon'){
				$('#input1').val('');
				$('#cClear').toggle();
			}else if(/sbs|funcs|struc/.test(id)){
				me.siblings('.seled').removeClass('seled').each(function(){
					$('#'+this.id.replace(/on$/,'')).hide();
				});

			}
		}

		if(id=='preview'){
			var v=$('#input0').val().trim();
			if(se){// && v
				preDisplay();
			}else{
				$('#previewOff').click()
				
			}
			//$('.inputTip').removeAttr('open');
		}


	}).on('click','.oClear',function(){
		
	//	bodyFocus();
		
		if($(this).is('#oHClear')){
			if($('#oHTML').html()==''){
				if($('#capsimg+div').next().length){
					$('#noteEraser').click();
				}else{
					$('#clear').click();
				}
			}else{
				$('#oHTML').empty();
			}
			

		}else{
			
			$('#oHTML').empty();
		}

		$('#zMatherOn:contains(down)').click();
		
		/*
		if(graphic){
			graphic.close()
		}
	

		*/
	})




	$('#zMatherOn').on('click',function(){
		var me=$(this), isup=/up/.test(me.text());
		$('#zMather').toggle();
		me.text('keyboard_arrow_'+(isup?'down':'up'));
	});
	
	$('#downloadPreview').on('click',function(e){
		var v1=$('#input0Preview').html();
		saveText(csslib.katex+csslib.markdown+v1,
			gM('zzllrr Mather')+Time.now()+'.html'
		);
		
	});


	$('#lineSplit').on('click',function(){
		var t=$('[name=tool]:checked').val();
		if(t=='solve'){
			$('#input0').val(function(i,v){return v.replace(/(\\\\)*\n/g,'\\\\\n')});
			if($('#preview.seled').length){
				preDisplay()
			}
		}
		if(t=='graphic'){
			$('#input0').val(function(i,v){return v.replace(/&&/g,'\n')});
		}
			
	});
	$('#lineMerge').on('click',function(){
		var t=$('[name=tool]:checked').val();
		if(t=='solve'){
			$('#input0').val(function(i,v){return v.replace(/\n+/g,'').replace(/\\\\/g,'')});
			if($('#preview.seled').length){
				preDisplay()
			}
		}
		if(t=='graphic'){
			$('#input0').val(function(i,v){return v.replace(/\n+/g,'&&')});
		}
		
	});

	$('#DownloadFile').on('click',function(e){
		var k=e.keyCode, shft=e.shiftKey, ctrl=e.ctrlKey,
			v0=$('#input0').val(),v1=$('#input0Preview').html(),
			tp0=$('#input0Type').val().toLowerCase(),
			tp=$('#output0Type').val().toLowerCase(),
			ismd=/markdown/.test(tp0), isjs=/js/.test(tp0), ishtml=/html/.test(tp0), issvg=/svg/.test(tp0),isxml=/xml/.test(tp0), ismathml=/mathml/.test(tp0);

		if(ishtml){
			v0=csslib.katex+v0;
		}
		if(ismathml){
			//v0='<math xmlns="'+xmlns+'" xmlns:xlink="'+xmlnsxlink'">'+v0+'</math>';
			v0='<math xmlns="'+xmml+'">'+v0+'</math>';
		}
		if(isxml){
			v0=XML.head+v0;
		}

		if(issvg){
			v0=svgAs('#input0Preview svg');
		}
		saveText(v0,
			gM('zzllrr Mather')+Time.now()+'.'+ZLR('md js html svg xml mathml txt')[[ismd,isjs,ishtml,issvg,isxml,ismathml,true].indexOf(true)]
		)
	})


	$('#input0').on('click',function(){//.on('mouseover', function(){this.focus()})
		$('#input1').removeClass('seled');
		$(this).addClass('seled');
		var p=$('#input0Type').val();
		L[p]=$(this).val();
		
	}).on('change keyup mouseover',function(){//mouseout 
		var v=$(this).val(),p=$('#input0Type').val(), l0=(L[p]||'').trim(),vt=v.trim();
		L[p]=v;
		
		if(l0!=vt && $('#preview').is('.seled') && vt){

			preDisplay();
		}
	});
	
	$('#input1').on('click',function(){
		$('#input0').removeClass('seled');
		$(this).addClass('seled');
	});

	
	
	$('#input0Type').html(optgrp(gM('Input Format')+':',
		OptGrps(jSon('[{"'+
		gM('Math Formula')+' | '+gM('Editor')+
		'":"LaTeX Ascii_Math Unicode_Math Content_MathML Presentation_MathML"},{"'+
		gM('Webpage Grammar')+' | '+gM('Editor')+
		'":"Markdown HTML CSS"},{"'+
		gM('Graphics')+
		'":"Canvas SVG Echarts"},{"'+
		gM('Show')+
		'":"Slide VR AR"},{"'+

		gM('Calculator')+' | '+gM('Script')+
		'":"JavaScript"},{"'+
		gM('Data')+' | '+gM('File')+
		'":"TXT TSV CSV XML YAML JSON"}]'))
		)
	).on('change', function(){
		var v=$(this).val(), it=$('#input0Tip > [data-tool="'+v+'"]'), tv=tooltip[v];
		if(v=='Echarts'){
			tv=tooltip.graphic['Statistics/Echarts']
		}

		var i=ZLR('LaTeX Ascii_Math Unicode_Math Presentation_MathML Content_MathML').indexOf(v);
		$('#output0Type').html(optgrp(gM('Output Format')+':', Options(Set.opr1('取',ZLR('HTML Ascii_Math Unicode_Math LaTeX Presentation_MathML Content_MathML'),
			i<0?[[0]]:[[0,2,4],[0,2,3,4,5], [0,1,3,4,5], [0,2,3,5], [0,2,3,4]][i])
		)));
		$('.inputTypeTip').remove();

		var opti=$(this).find('option[value='+v+']').parent().index();

		if(tv && it.length<1){
			$('#input0Tip').append(detail(v,tv,'','class="inputTip inputTypeTip" data-tool='+v));


			$('.inputTip.inputTypeTip').last().prevAll().remove();

		}
		
		
		if($('#navHide.seled').length<1 && /[23]/.test(opti)){

			$('#navHide').click()
		}

		$('#input0').val(L[v]||'');
		if($('#preview.seled').length){
			preDisplay()
		}
	});
	$('#output0Type').html(optgrp(gM('Output Format')+':', Options(ZLR('HTML Ascii_Math Unicode_Math Presentation_MathML')))).on('change', function(){
		if($('#preview.seled').length){
			preDisplay()
		}

	});
	
	$('#send2textBox').on('click',function(){
		var v=$('#input0').val();
		if(v.trim()){
			textareaAdd(v,'#'+L.tool+'Ground .ground1 .editorText')
		}
	});
	$('#UploadFile').on('click',function(){
		$('#inputFile').click()
	});
	$('#inputFile').on('change',function(){
		var v=$(this).val();
		if(v){
			var files=this.files, fl=files.length;
			for(var i=0;i<fl;i++){
				var f=files[i], s=f.size, ext=f.type.replace(/text[/]/,'');

consolelog(f);
				if(/^text[/]/.test(f.type) || !ext){
					if(!s){s='?KB'}else{
						s=sizeKB(s)
					}

					var reader=new FileReader();
					reader.onload = function(e){
						//var txt = this.result;
						var txt=e.target.result;
						consolelog('txt',txt);
						textareaAdd(txt,'#input0',1);
					};
					//reader.readAsDataURL(f);
					reader.readAsText(f);
					

				}
			}
		}
	});

	$('#oHTML').on('click','.katex',function(e){
		
		copy2clipboard($(this).find('annotation').eq(0).text());
		var shft=e.shiftKey;
		/*
		if(shft){
			OverCanvas($(this).find('annotation').eq(0).text());
			toolTip(gM('copied2Canvastip'));
			Scroll('scrollB');
		}
		*/
		
	}).on('click','svg[id]',function(e){
		var shft=e.shiftKey;
		if(shft){
			var zi=[],Z,me=$(this);
			$('#Caps').children('svg,textarea,span').each(function(){zi.push(+$(this).css('z-index')||2000)});
			Z=max(zi)+1;
			me.clone().appendTo('#Caps');
			$('#Caps').find('#'+this.id).attr({'id':'graphic'+Time.now5()+(Math.random()+'').substr(2)})
				.css({'position':'absolute', 'z-index':Z,'top':$('#Caps').position().top,'height':me.height()})
			//L.drawShapeNow='';

			$('#Pointer').click();
			toolTip(gM('copied2Canvastip'));
			//Scroll('scrollB');
		}
		
	}).on('mouseover','.katex, svg[id]',function(e){
		toolTip(gM('copytip'))
		
	})

	$('#panel').on('click','#night ~ i',function(){
		var me=$(this),id=this.id,pa=me.parent(),tog=me.toggleClass('toggle').is('.toggle');

		if(/^svgs$/.test(id)){

			$('#zzllrrCanvas').removeClass('toggle').nextAll().hide();
			if(tog){
				$('#zMatherOn:contains(up)').click();
				$('#Caps').fadeIn();
			}else{
				if(!$('#tileTool').is(':visible')){
					$('#tileTool').fadeIn();
					me.addClass('toggle');

					tog=true;
				}else{
					$('#zMatherOn:contains(down)').click();
				}
			}
			
			
			$('#oHTML').toggle(!tog);
		}
		me.siblings('.toggle').removeClass('toggle');
		pa.nextAll('[for='+id+']').toggle(tog);
		pa.nextAll().not('[for='+id+']').hide();
	});


	
	$(window).resize(function(){
		caps.repaint();
	});
	
	$(document).scroll( function() {
		caps.repaint();
	});
	
	var uo=H_o(sch);//	?tool=&subtool=	

	
	if(!uo.tool){
		uo.tool=L.tool || 'solve'
	}
	
	$('[name=tool][value='+uo.tool+']').click();
	

	/*
		


		href('./','文件列表')+hr+
		href(Hs+'en.wikipedia.org/wiki/List_of_unsolved_problems_in_mathematics','未解难题（Wikipedia）')
	
	var u='index.html?topic=wiki&s0='+fn0($('#subject2 .seled').val()||$('#subject2 .tool').val()||'数');

	*/
	$('#input0Type').change();
	
	$('#search').change();
});

var toolSwitch=function(x){
	var G='#'+x+'Ground';
	$('.ground:not('+G+')').hide();

	$(G).show();
	$('#subject').toggle(/^solve|course|drill/.test(x));

	
	if(/graphic|show/.test(x)){
		$('#preview.seled').click();
	}
	
	if(x=='show'){
		$('#iTextFold').not('.seled').click()
	}

	if(/solve|graphic/.test(x)){
		$('#iTextFold.seled').click()
	}

	if($(G).children().eq(0).html()==''){
		$(G).find('.ground0').html(
			jdetail(eval(x+'s')['index']||'')
			
			
		);
	}
	$('#send2textBox').toggle(/show/.test(x));
};



var preDisplay=function(){
	var iv=$('#input0Type').val(),ov=$('#output0Type').val(),i=iv[0],o=ov[0],v=$('#input0').val().trim(),w=$('#input0Preview');


	if(iv==ov && ov!='HTML'){
		w.add('#previewTool').hide();
		
	}else if(iv=='LaTeX' && o!='H'){
		var x=v;

		if(o=='P'){
			katex.render(kx(sub2n(v,1)), w[0], {
			    throwOnError: false,
			    displayMode: true
			});
			x=XML.wrapE('code',XML.encode(w.find('.katex-mathml').html().replace(/math/,'math xmlns="'+xmml+'"')));
			
		}
		w.html(x).add('#previewTool').show();

		
	}else if(o=='H'){
		w.add('#previewTool').show();
		all2html(iv,v,w);
	}
};

function OverCanvas(t){

	var iT=$('#input0Type').val();
	L.drawShapeNow='';
	$('#TextBoxType').val(iT);
	$('#TextBox').val(t);
	$('#TextBoxGo').click();
	$('#Pointer').click();


}
function toolTip(s){
	var ts = (L.timeids_tip || '').trim();
	if (ts) {
		Arrfc([clearTimeout, Number], ZLR(ts));
	}
	$('#bar').html(SCtv('toolTip',s));
	L.timeids_tip=setTimeout(function(){
		$('#bar').empty();
	},3000);
}
function furi(o){
	var g=o.parents('.ground');
	
	var turi=[],iuri=[];
	g.find('.level.seled').each(function(){
		var t=$(this);
		turi.push(t.attr('data-i'));
		iuri.push(t.index());
	});
	if(o.is('.task') || o.is('.level:not(.seled)')){
		turi.push(o.attr('data-tool')||o.attr('data-i'));
		iuri.push(o.index());
	}
	return [turi,iuri];
}