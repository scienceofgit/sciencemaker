/*
This program is written by: Dipankar Kumar Roy(B.Sc in computer Sc.).
COPYRIGHT:(student can use this program).
*/
class node //create node for tree
{
    constructor(value,left,right,pos_x,pos_y)
    {
        this.value=value;
        this.left=left;
        this.right=right;
        this.pos_x=pos_x;
        this.pos_y=pos_y;
    }
}
class s_node //multiple value link list
{
    constructor(value,next)
    {
        this.value=value;
        this.next=next;
    }
}

function create_node(value)//cteate new node
{
    new_node = new node(value,null,null);
    return new_node;
}

function insert_node(ref,value)//insert node
{
if(ref==null){ref=create_node(value);}
else if(ref.value>value){ref.left=insert_node(ref.left,value);}
else if(ref.value<value){ref.right=insert_node(ref.right,value);}
else {console.log(value+" is duplicate key");}
return ref;
}

function create_node1(value)//cteate new node numb
{
    new_node = new node(value,null,null);
    return new_node;
}

function insert_node1(ref,value)//insert node numb
{
if(ref==null){ref=create_node1(value);}
else if(parseFloat(ref.value)>parseFloat(value)){ref.left=insert_node1(ref.left,value);}
else if(parseFloat(ref.value)<parseFloat(value)){ref.right=insert_node1(ref.right,value);}
else {console.log(value+" is duplicate key");}
return ref;
}

var s="";
function inorder(ref)//inorder view
{
if(ref)
{
    inorder(ref.left);
    s=s+ref.value+"\t";
    inorder(ref.right);
}
return s;
}

function postorder(ref)//postorder view
{
if(ref)
{
    postorder(ref.left);
    postorder(ref.right);
    s=s+ref.value+"\t";
}
return s;
}

function preorder(ref)//preorder view
{
if(ref)
{
    s=s+ref.value+"\t";
    preorder(ref.left);
    preorder(ref.right);
}
return s;
}

function height(tree)//height of a tree
{
if(!tree)
{
return 0;
}
else
{
   var leftheihgt=height(tree.left);
    var rightheihgt=height(tree.right);
    if(leftheihgt>rightheihgt){return leftheihgt+1;}
    else{return rightheihgt+1;}
}
}

function left_h(tree)
{
    if(!tree)
    {
    return 0;
    }
    else
    {
       var l_heihgt=left_h(tree.left);
        return l_heihgt+1;
        
    }   
}

function right_h(tree)
{
    if(!tree)
    {
    return 0;
    }
    else
    {
       var r_heihgt=right_h(tree.right);
        return r_heihgt+1;
        
    }   
}
//----------------------------------------------------------------------

function create_s_node()//create string node
{
    new_node = new s_node("",null);
    return new_node;
}

function s_create(str)//string link list
{
    var s_root=null;
    for(i=0;i<str.length;i++)
    {
        if(!s_root&&str[i]!=","){s_root=create_s_node();p=s_root;p.value=str[i]}
        else{
            if(str[i] == ","){p.next=create_s_node();p=p.next}
            else
            {
              p.value= p.value.concat(str[i]);
            }
        }
    }
    return s_root;
}

function draw_tree(tree,t_length)
{
    var t_l=t_length*15*2;
    var t_l2=t_length*13;
    if(tree)
    {
        draw_tree(tree.left,t_length);
        h=height(tree);
        s=s+"<circle cx='"+((tree.pos_x)*t_l)+"' cy='"+((root_h-tree.pos_y+1)*t_l)+"' r='"+t_length*12+"' stroke='black' stroke-width='3' fill='red' /><text x='"+(((tree.pos_x)*t_l)-6)+"' y='"+(((root_h-tree.pos_y+1)*t_l)+4)+"' fill='black'>"+tree.value+"</text>" ;
        if(tree.left)
        {
           var m_l=Math.pow((((tree.pos_y)-(tree.left.pos_y))/((tree.pos_x)-(tree.left.pos_x))),2);
           var d_x=t_l2*(1/Math.sqrt(1+m_l))
           var d_y=t_l2*(Math.sqrt(m_l)/Math.sqrt(1+m_l))
            s=s+"<line x1='"+((tree.pos_x)*t_l-d_x)+"' y1='"+((root_h-tree.pos_y+1)*t_l+d_y)+"' x2='"+((tree.left.pos_x)*t_l+d_x)+"' y2='"+((root_h-tree.left.pos_y+1)*t_l-d_y)+"' style='stroke:rgb(255,0,0);stroke-width:2;z-index:-1' />"
        }
        if(tree.right)
        {
           var m_l2=Math.pow((((tree.pos_y)-(tree.right.pos_y))/((tree.pos_x)-(tree.right.pos_x))),2);
           var d_x=t_l2*(1/Math.sqrt(1+m_l2))
           var d_y=t_l2*(Math.sqrt(m_l2)/Math.sqrt(1+m_l2))
            s=s+"<line x1='"+((tree.pos_x)*t_l+d_x)+"' y1='"+((root_h-tree.pos_y+1)*t_l+d_y)+"' x2='"+((tree.right.pos_x)*t_l-d_x)+"' y2='"+((root_h-tree.right.pos_y+1)*t_l-d_y)+"' style='stroke:rgb(255,0,0);stroke-width:2;z-index:-1' />"
        }

        draw_tree(tree.right,t_length);
        return s;
    }
    }

//----------------------------------------------------------------------
function plot_e(tree)
{
   var plot_e1=parseFloat(((Math.pow(2,(height(tree)-1))-1)/2).toFixed(8));
   return plot_e1;
}
function n_plot(tree,x,y)
{
if(tree)
{
tree.pos_x=x;
tree.pos_y=y;
if(tree.left){mb=height(tree.left.right)}

if(tree.right){nb=height(tree.right.left)}

n_plot(tree.left,parseFloat((tree.pos_x-right_h(tree.left)-mb).toFixed(8)),parseFloat((tree.pos_y-1).toFixed(8)));
n_plot(tree.right,parseFloat((tree.pos_x+left_h(tree.right)+nb).toFixed(8)),parseFloat((tree.pos_y-1).toFixed(8)));
}
}
function plot(tree,move_x,move_y)
{
n_plot(tree,left_h(tree)+move_x,height(tree)+move_y);
}
//--------------------------------------------------------------------
var input_s="";
ref2=null;
function fn2(){
var str= document.getElementById("inputId2");
ll=s_create(str.value);
input_s=input_s+(str.value).replace(/,/gi, "\t")+"\t";
if(!parseFloat(ll.value))
{
if(!ref2)
{ref2=create_node(ll.value);ll=ll.next;}
while(ll!=null)
{
insert_node(ref2,ll.value);
ll=ll.next;
}
}
else
{
    if(!ref2)
    {ref2=create_node1(ll.value);ll=ll.next;}
    while(ll!=null)
    {
    insert_node1(ref2,ll.value);
    ll=ll.next;
    }
} 
    document.getElementById("input_s").innerHTML=input_s;
    document.getElementById("input").innerHTML="<span>Input: </span><input class='ip2' type='text' placeholder='a,b,c,d...' pattern='.{1,}' id='inputId2' value='' onchange=fn2()><button type='button' onclick=fn2()>insert</button>";
    plot(ref2,height(ref2)-1,0);
    s="";
    document.getElementById("inorder").innerHTML=inorder(ref2)
    s="";
    document.getElementById("postorder").innerHTML=postorder(ref2)
    s="";
    document.getElementById("preorder").innerHTML=preorder(ref2)
   view_tree(ref2);
}


function view_tree(tree)
{
    var text_length = parseFloat(document.getElementById("inputId3").value);
    s="";
    root_h=height(tree)
    document.getElementById("tree_view").innerHTML="<svg height='"+(text_length*15*2*(root_h+1))+"' width='"+(text_length*15*2*(Math.pow(2,root_h) )+text_length*15)+"'>"+draw_tree(tree,text_length)+"</svg>";
}

//========
function reset()
{   
    document.getElementById("tree_view").innerHTML="";
    document.getElementById("input").innerHTML="<span>Input: </span><input class='ip2' type='text' placeholder='a,b,c,d...' pattern='' id='inputId2' value='' onchange=fn2()><button type='button' onclick=fn2()>insert</button>"
    document.getElementById("t_length").innerHTML="<span>Tree font: </span><input class='ip3' type='numb' placeholder='numb' pattern='.{1,}' id='inputId3' value='1' maxlength='1' size='1' onchange=view_tree(ref2)>"
    delete ref2;
    ref2=null;
    input_s="";
    document.getElementById("input_s").innerHTML=input_s;
    s="";
    document.getElementById("inorder").innerHTML=inorder(ref2)
    s="";
    document.getElementById("postorder").innerHTML=postorder(ref2)
    s="";
    document.getElementById("preorder").innerHTML=preorder(ref2)
    
}
