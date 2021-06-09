function mn()
{
    let lef_container=document.getElementById('left-container');
    if(lef_container.style.width!='220px')
    {

        // lef_container.style.display='block';
        lef_container.style.position='fixed';
        lef_container.style.width='220px';
        iflink();
    }
    else
    {
        
        lef_container.style.width='0px';
        elselink();
        // lef_container.style.display='none';
    }
}
function bnk(){
    let upgrade=document.getElementById('upgrad');
    if (upgrade.style.display!='block')
    {
        upgrade.style.display='block';
    }
    else
    {
        upgrade.style.display='none';
        upgrade.style.position='relative';
    }
}
function iflink()
{
    let link1=document.getElementById('link1');
    let link2=document.getElementById('link2');
    let link3=document.getElementById('link3');
    let link4=document.getElementById('link4');
    let link5=document.getElementById('link5');
    let link6=document.getElementById('link6');
    let link7=document.getElementById('link7');
    let link8=document.getElementById('link8');
    let link9=document.getElementById('link9');
    
    link1.style.opacity='1';
    link2.style.opacity='1';
    link3.style.opacity='1';
    link4.style.opacity='1';
    link5.style.opacity='1';
    link6.style.opacity='1';
    link7.style.opacity='1';
    link8.style.opacity='1';
    link9.style.opacity='1';
}
function elselink()
{
    let link1=document.getElementById('link1');
    let link2=document.getElementById('link2');
    let link3=document.getElementById('link3');
    let link4=document.getElementById('link4');
    let link5=document.getElementById('link5');
    let link6=document.getElementById('link6');
    let link7=document.getElementById('link7');
    let link8=document.getElementById('link8');
    let link9=document.getElementById('link9');
    
    link1.style.opacity='0';
    link2.style.opacity='0';
    link3.style.opacity='0';
    link4.style.opacity='0';
    link5.style.opacity='0';
    link6.style.opacity='0';
    link7.style.opacity='0';
    link8.style.opacity='0';
    link9.style.opacity='0';
}
function chk()
{
    let first = document.getElementById('first');
    if(first.style.opacity!='1')
    {
        first.style.opacity='1';
        first.style.position='relative';
    }
    else
    {
        first.style.position='fixed';
        first.style.opacity='0';
        
    }

}
function chk2()
{
    let first2 = document.getElementById('first2');
    if(first2.style.opacity!='1')
    {
        first2.style.opacity='1';
        first2.style.position='relative';
    }
    else
    {
        first2.style.position='fixed';
        first2.style.opacity='0';
        
    }

}
function chk3()
{
    let first3 = document.getElementById('first3');
    if(first3.style.opacity!='1')
    {
        first3.style.opacity='1';
        first3.style.position='relative';
    }
    else
    {
        first3.style.position='fixed';
        first3.style.opacity='0';
        
    }

}
function caret()
{
    let login= document.getElementById('login');
    if(login.style.display!='block')
    {
        login.style.display='block';
    }
    else
    {
        login.style.display='none';
    }
}