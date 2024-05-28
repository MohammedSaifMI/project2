let b1=document.getElementById("b1")
let b2=document.getElementById("b2")
let b3=document.getElementById("b3")
let clear=document.getElementById("clear")
let tarr=[]
let ttd=document.getElementById("total")



b1.addEventListener(
    "click",()=>{
        let n1 = Number(document.getElementById("n1").value) 
        document.getElementById("n1").value = n1+1
        document.getElementById("n2").value= " "
        document.getElementById("n3").value= " "
        document.getElementById("q1").value= " "
        document.getElementById("p1").value= " "


    }
)

b2.addEventListener(
    "click",()=>{
        let n3=document.getElementById("n3").value
        if (n3=="Chocolate") {
          document.getElementById("p1").value = 10
        }
        else if (n3=="Milk") {
          document.getElementById("p1").value = 30
        }
        else if (n3=="Oil") {
            document.getElementById("p1").value = 90
        }
        else if (n3=="Rice") {
            document.getElementById("p1").value =110
        }
        else if (n3=="Dal") {
            document.getElementById("p1").value = 45
        }
        else
        {
          document.getElementById("p1").value = "---Nil---"
            
        }
    }
)
let totalsum;
b3.addEventListener(
    "click",()=>{

        let n1=document.getElementById("n1").value
        let n2=document.getElementById("n2").value
        let n3=document.getElementById("n3").value
        let q1=document.getElementById("q1").value
        let p1=document.getElementById("p1").value
        let amt=q1*p1
        let gst= (amt*2)/100
        let disc=(amt*5)/100
        let total=amt-gst+disc

        tarr.push(total)
        console.log(tarr);

        let totalsum = tarr.reduce((x,y) => x + y);
        ttd.textContent = totalsum;



        let new_Row = document.createElement("tr");

        let bno=document.createElement("td")
        bno.innerText = n1        
        new_Row.appendChild(bno)
        
        let cname=document.createElement("td")
        cname.innerText = n2 
        new_Row.appendChild(cname)
        
        let prd=document.createElement("td")
        prd.innerText = n3
        new_Row.appendChild(prd)

        let quantity=document.createElement("td")
        quantity.innerText = q1
        new_Row.appendChild(quantity)

        
        let perp=document.createElement("td")
        perp.innerText = p1
        new_Row.appendChild(perp)

        let amount=document.createElement("td")
        amount.innerText = amt
        new_Row.appendChild(amount)

        let GST=document.createElement("td")
        GST.innerText = gst
        new_Row.appendChild(GST)

        let discount=document.createElement("td")
        discount.innerText = disc
        new_Row.appendChild(discount)
        
        let tot=document.createElement("td")
        tot.innerText = total
        new_Row.appendChild(tot)


        let deletebtn=document.createElement("button")
        deletebtn.classList.add("active")
        deletebtn.innerHTML=`<i class="fa-solid fa-trash"></i>`
        deletebtn.addEventListener("click",()=>{
            new_Row.remove()

            let remo = tarr.findIndex(item=>item===total);
            tarr.splice(remo, 1);
         
            if(tarr.length>=1)
                {
                    totalsum = tarr.reduce((x,y) => x + y)||[0];
                    ttd.innerText = totalsum;
                }
                else
                {
                    ttd.innerText = 0;
                }

        })

        let delbtn=document.createElement("td")
        delbtn.appendChild(deletebtn)
        new_Row.appendChild(delbtn)
        
    
        document.getElementById("table").appendChild(new_Row)
    });
        

clear.addEventListener(
    "click",()=>{
        document.getElementById("n1").value=" "
        document.getElementById("n2").value=" "
        document.getElementById("n3").value=" "
        document.getElementById("q1").value=" "
        document.getElementById("p1").value=" "
        document.getElementById("table").innerHTML=" "

        totalsum = tarr.reduce((x,y) => x + y);
        ttd.textContent = totalsum;


    }

)
    
function printbill() {
    document.getElementById("mainform").classList.add("d-none")
    window.print()
    document.getElementById("mainform").classList.remove("d-none")

}