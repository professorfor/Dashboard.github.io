

const sideMenu = document.querySelector("aside");
let menuBtn = document.getElementById("menu-btn");
let closeBtn = document.querySelector("#close-btn");
let themeToggler = document.querySelector(".theme-toggler");


// show sidebar 
menuBtn.addEventListener("click", ()=>{
    sideMenu.style.display = "block";

})

// close sidebar 
closeBtn.addEventListener("click", ()=>{
    sideMenu.style.display = "none";
})


// change theme color 

themeToggler.addEventListener("click", ()=>{
    document.body.classList.toggle('dark-theme-variables');

    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
    
})


// Fill orders in table 

Orders.forEach(order => {
    const tr = document.createElement('tr');
    const trContent = `  <tr>
                            <td>${order.ProductName}</td>
                            <td>${order.ProductNumber}</td>
                            <td>${order.PaymentsStatus}</td>
                            <td class="${order.Shipping === 'Declined' ? 'danger': order.Shipping === 'Pending'? 'warning': 'primary'}">${order.Shipping}</td>
                            <td class="primary">Details</td>
                         </tr> `;

    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);

})
