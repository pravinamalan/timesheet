const nxtBtnEl = document.getElementById('nxt-btn');
const previousBtnEl = document.getElementById('Previous-btn');
const cancelBtnEl = document.getElementById('cancel-btn');


const step1El = document.querySelector('.step1');
const step2El = document.querySelector('.step2');

//  
const progressEl = document.querySelector('.progress-bar-front');
const stepsEl = document.querySelectorAll(".step")
const step2PEl = document.querySelector('.step2-p');

let currentChecked = 1;


previousBtnEl.addEventListener('click',()=>{
  step1El.classList.remove('step1-hide');
  step2El.classList.remove('step2-show');
  currentChecked--;
  if(currentChecked>stepsEl.length){
      currentChecked = stepsEl.length;
  }
  updateStepProcesss();
});

nxtBtnEl.addEventListener('click',()=>{
    step1El.classList.add('step1-hide');
    step2El.classList.add('step2-show');
    currentChecked++;
    if(currentChecked>stepsEl.length){
        currentChecked = stepsEl.length;
    }
    updateStepProcess();
});

function updateStepProcess(){
    stepsEl.forEach((stepsEl, idx) => {
        if (idx < currentChecked) {
          // stepsEl.classList.add("checked");
          stepsEl.classList.add("checked");
          stepsEl.innerHTML = `
          <i class="fas fa-check"></i> <small>step1</small> `;
          step2PEl.innerHTML = `<p>2</p> <small>step2</small> `;
        } 
    });

  }

  function updateStepProcesss(){
    stepsEl.forEach((stepsEl, idx) => {
        if (idx < currentChecked) {
          stepsEl.innerHTML = `<p>1</p> <small>step1</small> `;
          step2PEl.innerHTML = `<p>2</p> <small>step2</small> `;
          step2PEl.classList.remove('checked');
        } 
    });

  }

// search filter
function myFunction() {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("search");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}


