// Outback Javascript
$(document).ready(function () {
  // Main navigation menu
  var dropdownLink = $(".sf-dropdown");
  var dropdownMenu = $(".sf-dropdown-menu");
  // Hide the menu on page load
  dropdownMenu.hide();
  // When clicking menu link, show the nested sub menu.
  dropdownLink.click(function () {
    dropdownMenu.slideUp('medium');
    $(this).find(dropdownMenu).slideToggle('medium');
  });

  // This below commented code may not work.
  // It is for if we ever try a third level menu.
  // var subMenu = $('li.sf-dropdown > ul > li');
  // subMenu.click(function () {
  //   $(".sf-dropdown-menu").hide();
  //   $(this).find("ul").slideToggle(200);
  //   var href = $(this).attr('href');
  //   // Delay setting the location
  //   setTimeout(function() {window.location = href}, 5000);
  //   return false;
  // });
});

$(document).ready(function () {
  // Mobile navigation
  var dropdownSelect = $(".navselect");
  var dropdownButton = $(".mobilenav-button");
  var dropdownLength = $(".navselect > option").length;
  var pageBody = $(".ob-main");
  // Hide the menu on page load
  dropdownSelect.hide();
  // When clicking menu button, hide the button and show the menu.
  dropdownButton.click(function (e) {
   dropdownSelect.toggle().focus().attr('size', dropdownLength);
  });
  // When clicking menu, hide the clicked menu and show the button.
  dropdownSelect.click(function () {
    dropdownSelect.hide();
    dropdownButton.show();
  });
  // Follow link from the selected option value
  dropdownSelect.change(function () {
    window.location = $(this).find("option:selected").val();
  });
});

// TODO Create PHP Pages - DONE
// TODO Create Sample Content Page Areas for Luis to use when making pages
// TODO Create Contact Form Areas for Luis to use when making forms
// TODO Implement Tipue Search or Google API search
// http://www.tipue.com/beaty/
// http://www.tipue.com/search/
