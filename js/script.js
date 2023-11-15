function init(){
	var button = document.getElementById('entrybutton');

  function useralert(){
    var textbox = document.getElementById('entryinput');
    document.getElementById('textoutput').innerHTML = textbox.value;
    alert("Nathaniel Budz:  " + textbox.value);
  }

  button.addEventListener('click', useralert);
  }
  
window.addEventListener('load', init);
