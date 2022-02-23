var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

    var count = 0;
    var countEl = document.getElementById("count");
    function plus(){
        count++;
        countEl.innerHTML = count;
        countEl.style.display = "block";
        document.getElementById("moins").style.display = "block";
    }
    function minus(){
      if (count > 0) {
        count--;
        countEl.innerHTML = count;
        
      }
      if (count == 0) {
        countEl.style.display = "none";
        document.getElementById("moins").style.display = "none";
      }
    }

