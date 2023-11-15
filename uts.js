// const inputList = document.getElementById("input-contact");

function tambah() {
    var inputElement = document.getElementById("input-contact");
    var inputElement2 = document.getElementById("input-contact2");
    var inputElement3 = document.getElementById("input-contact3");
    var inputValue = inputElement.value.trim();
    var inputValue2 = inputElement2.value.trim();
    var inputValue3 = inputElement3.value.trim();
    if (inputValue != "" && inputValue2 != "" && inputValue3 != "") {
      alert("Form Submitted");
      inputElement.value = "";
      inputElement2.value = "";
      inputElement3.value = "";
  
      // location.reload();
    } else {
      alert("mohon isi formulirnya dengan lengkap");
    }
  }