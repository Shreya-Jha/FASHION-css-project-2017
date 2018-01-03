function fun()
{
	var n=document.registration.name.value;
	var nexp=/^[A-Za-z]{1}[A-Za-z\.\s]+$/;
	if(n=='')
	{
		alert("Name is Empty!");
		document.registration.name.focus();
		return false;
	}
	else if(!n.match(nexp))
	{
		alert("Name Invalid!");
		document.registration.name.focus();
		return false;
		}
	/*		var l=document.registration.em.value;
	var lexp=/^[A-Za-z]{1}[A-Za-z\.\s]+$/;
	if(l=='')
	{
		alert("Email  is Empty!");
		document.registration.em.focus();
		return false;
	}
	else if(!l.match(lexp))
	{
		alert("Email Invalid!");
		document.registration.em.focus();
		return false;
		}
*/
	
			var p=document.registration.pass.value;
	var pexp=/^[A-Za-z]{1}[A-Za-z\.\s]+$/;
	if(p=='')
	{
		alert("Password is Empty!");
		document.registration.pass.focus();
		return false;
	}
	else if(!p.match(pexp))
	{
		alert("password Invalid!");
		document.registration.pass.focus();
		return false;
		}
		
				var c=document.registration.cn.value;
	var cexp=/^[A-Za-z]{1}[A-Za-z\.\s]+$/;
	if(c=='')
	{
		alert("Company name is Empty!");
		document.registration.cn.focus();
		return false;
	}
	else if(!c.match(pexp))
	{
		alert("Company name Invalid!");
		document.registration.cn.focus();
		return false;
		}
		
		var m=document.registration.mess.value;
	var mexp=/^[A-Za-z]{1}[A-Za-z\.\s]+$/;
	if(m=='')
	{
		alert("message is Empty!");
		document.registration.mess.focus();
		return false;
	}
	else if(!m.match(mexp))
	{
		alert("message Invalid!");
		document.registration.mess.focus();
		return false;
		}


}
