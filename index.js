
var form = document.getElementById('survey-form')

let addarow = document.getElementById('tablerow')

var counts = 0
var valueofcount = []

function checks(){
    var checkedboxes = document.getElementsByClassName('foods')
   
    for(var i=0; i<checkedboxes.length; i++){
        if(checkedboxes[i].checked){
            counts++;
            valueofcount.push(' ' + checkedboxes[i].value)   
            console.log(counts)
            console.log(valueofcount)
        }
    }
        if(counts>=2){
            emptychecks()
            
        }
        else{
            counts = 0
            valueofcount = []
            alert('Please select minimum of two fooditems')
        }
    
   
   
}

function emptychecks(){
    var alldata = document.getElementsByClassName('emptycheck')
    var allok = true;
    for(var i=0; i<alldata.length; i++){
        if(alldata[i].value === ''){
            allok = false;
            break;
        }
    }


        if(!allok){
            
            alert(`Please fill ${alldata[i].id}`)
            counts = 0
            valueofcount = []
            console.log(alldata[i].id)
            
        }
        else{
            Addtotable()
        }
    }


function Addtotable(){
    var firstname = document.getElementById('firstname').value;
    var lastname = document.getElementById('lastname').value;
    var email = document.getElementById('email').value;
    var gender = document.getElementById('gender').value;
    var address = document.getElementById('address').value;
    var state = document.getElementById('state').value;
    var country = document.getElementById('country').value;
    var pincode = document.getElementById('pincode').value;

      
 let NewRow = document.createElement('tr');


let firstcolumn = document.createElement('td')  
firstcolumn.innerHTML = `${firstname}`
 NewRow.appendChild(firstcolumn)

let secondcolumn = document.createElement('td')   
 secondcolumn.innerHTML =`${lastname}`
 NewRow.appendChild(secondcolumn)   

let thirdcolumn = document.createElement('td')   
 thirdcolumn.innerHTML = `${address}`
 NewRow.appendChild(thirdcolumn)  

        
let fourthcolumn = document.createElement('td') 
fourthcolumn.innerHTML = `${pincode}`
NewRow.appendChild(fourthcolumn)
         
let fifthcolumn = document.createElement('td')  
 fifthcolumn.innerHTML = `${gender}`
 NewRow.appendChild(fifthcolumn)
       
let sixthcolumn = document.createElement('td')    
sixthcolumn.innerHTML = `${valueofcount}`
NewRow.appendChild(sixthcolumn)
 
 

 addarow.appendChild(NewRow)
document.getElementById('')
counts = 0
valueofcount = []

}


function customreset(){
    this.form.reset();
}