function copyToClipboard() {
    elementId = document.getElementById("result");
    
    // Create a "hidden" input
    var aux = document.createElement("input");
  
    // Assign it the value of the specified element
    aux.setAttribute("value", elementId.value);
  
    // Append it to the body
    document.body.appendChild(aux);
  
    // Highlight its content
    aux.select();
  
    // Copy the highlighted text
    document.execCommand("copy");
  
    // Remove it from the body
    document.body.removeChild(aux);
    console.log("Sucess");
  }

  function makeURL() {
    elementId = document.getElementById("result");

    finalUrl = "https://api.whatsapp.com/send?";
    phone = document.getElementById("phone").value;
    msg = encodeURI (document.getElementById("message").value);
    if (phone == '') {
        finalUrl = finalUrl + "text=" + msg;
    }
    else {
        finalUrl = finalUrl + "phone=" + phone + "&" + "text=" + msg;
    }

    elementId.setAttribute("value", finalUrl);
  }
