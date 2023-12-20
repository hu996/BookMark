var sitename=document.getElementById('name');

var siteurl=document.getElementById('siteurl');
var displaydataintable=document.getElementById('tbody');
var updatewebsite=document.getElementById('update');
var submit=document.getElementById('submit');
var searchinput=document.getElementById('searchinput');



var listofsites=[];
if(localStorage.getItem('bookedsites') !=null){
    listofsites= JSON.parse(localStorage.getItem('bookedsites'));
    displayAllSites();
    counter()
}

var updatei='';


function AddSite(){
 
    if(sitename.value != '' && siteurl.value !=''){
        var site={
            name:sitename.value,
            Url:siteurl.value
        };
    
        listofsites.push(site);
        localStorage.setItem("bookedsites",JSON.stringify(listofsites));
        
        sitename.value='';
        siteurl.value='';
        // console.log(localStorage.getItem('bookedsites'));
        displayAllSites();
        counter()
    }
    else{
        var alert=document.getElementById('alert');
        alert.classList.remove('d-none');
    }
   
    
}


function displayAllSites(){

    var table=""
   
    for(var i=0;i<listofsites.length;i++){
        table +=`<tr class="text-center">
       <td>${i+1}</td>
       <td>${listofsites[i].name}</td>
       <td><a href="${listofsites[i].Url}" id='${i}'  class="btn btn-info btn-sm"> <i class="fa-solid fa-eye me-2">
       </i>Visit</a></td>

       <td ><button onclick='update(${i})' class="btn btn-primary btn-sm">Update</button></td> 

       <td><button class='btn btn-danger btn-sm' onclick="DelteWebSite(${i})">Delte</button></td>

      
   </tr>`
    }

    displaydataintable.innerHTML=table;
    
}


function DelteWebSite(index){
    listofsites.splice(index,1);
    localStorage.setItem("bookedsites",JSON.stringify(listofsites));
    displayAllSites();
    counter()
    searchinput.value='';

}


function counter(){
    document.getElementById('total').innerHTML= "Total :" + " " + listofsites.length;
}


/* this additional function to display soret yassin every day at 9:00 AM*/

// setTimeout(caller,79200000)


// //79200000  22 hour in milsecondes
// function caller(){
//     for(var i=0;i<listofsites.length;i++){
//      if(listofsites[i].name==='yassin'){
//         document.getElementById(i).click();
//      }
//     }
//  }
 

//  || listofsites[i].name==='rokia'




function search(val){

    if(val===''){
        displayAllSites();
    }
   
    else{
        var table=""
   for(var i=0;i<listofsites.length;i++){
    if(listofsites[i].name.toLowerCase().includes(val.toLowerCase())){

        table +=`<tr class="text-center">
        <td>${i+1}</td>
        <td>${listofsites[i].name}</td>
        <td><a href="${listofsites[i].Url}" target="_blank" id='${i}'  class="btn btn-info"> <i class="fa-solid fa-eye me-2">
        </i>Visit</a></td>
 
        <td><button class='btn btn-danger' onclick="DelteWebSite(${i})">Delte</button></td>
    </tr>`
    }
   }
   displaydataintable.innerHTML=table;
    }

}



function update(index){

   
    console.log(updatewebsite);
    sitename.value=listofsites[index].name;
    siteurl.value=listofsites[index].Url;

    updatewebsite.classList.remove('d-none');
    submit.classList.add('d-none');

    updatei=index;



}

function saveUpdate(){
var site={
    name:sitename.value,
    Url:siteurl.value
};

listofsites.splice(updatei,1,site);
localStorage.setItem('bookedsites',JSON.stringify(listofsites));
displayAllSites();
sitename.value='';
siteurl.value='';

updatewebsite.classList.add('d-none');
submit.classList.remove('d-none');


}


