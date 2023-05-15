//variables for all dog lists 
var dogImage = (getColumn("Dogs", "Image"));
var dogNamesList = (getColumn("Dogs", "Name"));
var dogBreedGroupList = getColumn("Dogs", "Breed Group");
var dogHeightList = (getColumn("Dogs", "Maximum Height"));


//filtered important lists 
var filteredDogNamesList = [];
var filteredDogBreedGroupList = [];
var filteredDogHeightList = [];
var filteredDogImage = [];
var filteredDogNamesList1 = [];
var filteredDogBreedGroupList1 = [];
var filteredDogHeightList1 = [];
var filteredDogImage1 = [];

// code for next button
onEvent("nextButton1", "click", function( ) {
  setScreen("screen2");
});
onEvent("nextButton2", "click", function( ) {
  setScreen("screen3");
});
//code for back buttons 
onEvent("backButton1", "click", function( ) {
  setScreen("mainScreen");
});
onEvent("backButton2", "click", function( ) {
  setScreen("screen2");
});
// code to take user to main page
onEvent("mainPageButton", "click", function( ) {
  setScreen("mainScreen");
});
// code used for height
onEvent("heightDropdown", "change", function( ) {
  listSetup();
});

function filter() {
  filter2();
  var dogSize = getText("heightDropdown");
  filteredDogNamesList1 = [];
  filteredDogBreedGroupList1 = [];
  filteredDogHeightList1 = [];
  filteredDogImage1 = [];
  //dog sizes from small to large 
  for (var i = 0; i < filteredDogHeightList.length; i++) {
    if(filteredDogHeightList[i] < 16 && dogSize == "Small"){
      appendItem(filteredDogNamesList1, filteredDogNamesList[i]);
      appendItem(filteredDogImage1, filteredDogImage[i]);
    } else if(filteredDogHeightList[i] >= 16 && filteredDogHeightList[i] < 24 && dogSize == "Medium"){
      appendItem(filteredDogNamesList1, filteredDogNamesList[i]);
      appendItem(filteredDogImage1, filteredDogImage[i]);
    } else if(filteredDogHeightList[i] >= 24 && dogSize == "Large") {
      appendItem(filteredDogNamesList1, filteredDogNamesList[i]);
      appendItem(filteredDogImage1, filteredDogImage[i]);
    }
  }
  
  // prints the list of dogs that match the value in the dropdown
  console.log(dogSize + " Dogs:\n" + filteredDogNamesList); 
  }
// different breed groups of dogs
function filter2() {
  filteredDogNamesList = [];
  filteredDogHeightList = [];
  filteredDogImage = [];
  for (var i = 0; i < dogImage.length; i++) {
    if (dogBreedGroupList[i] == getText("breedGroupsDropdown")) {
      appendItem(filteredDogNamesList, dogNamesList[i]);
      appendItem(filteredDogHeightList, dogHeightList[i]);
      appendItem(filteredDogImage, dogImage[i]);
    }
  }
}

// sets up the screen elements
function updateScreen(){
  var randomIndex = randomNumber(0, filteredDogNamesList1.length-1);
  setText("nameOutput", filteredDogNamesList1[randomIndex]);
  setImageURL("dogImage3", filteredDogImage1[randomIndex]);
}

// sets up the lists and the screen
function listSetup(){
  filter();
  updateScreen();
}
