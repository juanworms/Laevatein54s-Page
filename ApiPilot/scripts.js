
  function submit(){
      //URL https://api.pilotsolution.net/webhooks/welcome.php?action=create&appkey=F25E1040-1F7D-49D7-855F-7C6D70323742&debug=1
      urlAPI = "https://api.pilotsolution.net/webhooks/welcome.php?";
      action = document.getElementById("action").value;
      appkey = document.getElementById("appkey").value;
      username = encodeURI(document.getElementById("pilot_firstname").value);
      phone = encodeURI(document.getElementById("pilot_phone").value);
      mail = encodeURI(document.getElementById("pilot_mail").value);
      contact_type = encodeURI(document.getElementById("pilot_contact_type_id").value);
      business_type = document.getElementById("pilot_business_type_id").value;
      marca = encodeURI(document.getElementById("pilot_car_brand").value);
      modelo = encodeURI(document.getElementById("pilot_car_model").value);
      origen = encodeURI(document.getElementById("pilot_suborigin_id").value);
      notas = encodeURI(document.getElementById("pilot_notes").value);
      resultwindow = document.getElementById("resultwindow");
      torequest = document.getElementById("torequest");
      if (username == '' || phone == ''){
        resultwindow.value = "Username y Telefono deben tener contenido"
        console.log("Nombre y usuario no pueden ser vacíos");
      }
      else {
        resultwindow.value = "Request enviada";
        torequest.value = urlAPI + "action=" + action + "&appkey=" + appkey + "&pilot_firstname=" + username + "&pilot_phone=" + phone + "&pilot_mail=" + mail + "&pilot_contact_type_id=" + contact_type + "&pilot_business_type_id=" + business_type + "&pilot_car_brand=" + marca + "&pilot_car_model=" + modelo + "&pilot_suborigin_id=" + origen + "&pilot_notes=" + notas;
        torequest.value =encodeURI(torequest.value);
        //enviarAPI(torequest);
      }
  }

function enviarAPI(torequest){
    fetch(torequest.value, {mode: 'no-cors'})
    .then(res => res.json())
    .then(data => {
        console.log(data)
        
    })   
}

function openInNewTab() {
  window.open(document.getElementById("torequest").value, '_blank').focus();
 }