var elementsClass;
var titleId;
var selectedMarkElementClass;
var dataSelectedAttribute; 


function Integration(elementsClass, titleId, selectedMarkElementClass, dataSelectedAttribute)
{
   this.elementsClass = elementsClass;
   this.titleId = titleId;
   this.selectedMarkElementClass = selectedMarkElementClass;
   this.dataSelectedAttribute = dataSelectedAttribute;
   setEvents();
}

function setEvents()
{
   $(this.elementsClass).click(function(){      
      select($(this).attr("value"));
   });
}

function select(value){
   var markedElement = $(this.elementsClass).filter(function(){return this.value==value});
   markedElement.attr(dataSelectedAttribute,"true");
   markedElement.find(selectedMarkElementClass).show();
   
   var notSelectedElements = $(this.elementsClass).filter(function(){return this.value!=value});
   notSelectedElements.attr(dataSelectedAttribute,"false");
   notSelectedElements.find(selectedMarkElementClass).hide();
}

function getSelectedElement()
{
   return $(elementsClass).filter(function(){return $(this).attr(dataSelectedAttribute) =="true"});
}