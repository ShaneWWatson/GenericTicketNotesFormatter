function unhide(idLoc) {
	"use strict";
	var selectedValue = document.getElementById(idLoc).options[document.getElementById(idLoc).selectedIndex].value
	if (selectedValue === "Option1") {
			document.getElementById(selectedValue).className = "large";
	}
    switch(selectedValue) { 	
    case 'Option2':
    	document.getElementById('Option1').className = "hide";
    	document.getElementById('Summary').value = "Telecom: " + document.getElementById('EnteredSummary').value;
    	break;
    
    case 'Blank':
    	document.getElementById('Option1').className = "hide";
    	break;
    	
    case 'OptionA1':
    	document.getElementById('Summary').value = "Tech - WindowsXP: " + document.getElementById('EnteredSummary').value;
    	break;
    	
    case 'OptionB1':
    	document.getElementById('Summary').value = "Tech - Windows Vista: " + document.getElementById('EnteredSummary').value;
    	break;
    	
    case 'OptionC1':
    	document.getElementById('Summary').value = "Tech - Windows7: " + document.getElementById('EnteredSummary').value;
    	break;
    	
    case 'OptionD1':
    	document.getElementById('Summary').value = "Tech - OSX: " + document.getElementById('EnteredSummary').value;
    	break;
    	
    default:
    	break;
    }
}