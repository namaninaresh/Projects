// Module UIControl ----- is for controlling UI and Updating All list
//Module BTNControl ------ is for getting input

//Module COntroller  ------- is Main Module, all events Occurs Here

//Date : 12/05/2020 10:10PM

let UIControl = (function () {
  var DOMStrings = {
    olClass: ".list",
  };
  return {
    getOl: function () {
      var ol = document.querySelector(DOMStrings.olClass);

      return ol;
    },
  };
})();

let BTNControl = (function () {
  var DOMStrings = {
    formName: "myform",
    inputName: "message",
    btnId: "submitButton",
  };
  return {
    getInput: function () {
      var message =
        document.forms[DOMStrings.formName].elements[DOMStrings.inputName]
          .value;
      return message;
    },
    getDOMString: function () {
      return DOMStrings;
    },
  };
})();

let Controller = (function () {
  var DOMStrings = BTNControl.getDOMString();
  var btn = document.getElementById(DOMStrings.btnId);
  var message;
  btn.addEventListener("click", process);

  document.addEventListener("keydown", function (event) {
    if (event.key === 13 || event.which === 13) {
      process();
    }
  });

  function process() {
    message = BTNControl.getInput();
    var error = document.querySelector("#error");
    if (message === "") {
      error.style.color = "red";
      error.innerHTML = "please enter a character";
      return;
    }
    error.innerHTML = "";
    var li = document.createElement("li");
    li.classList.add("list-group-item");

    var butt =
      "<a href='#' style='color:red;position:absolute;right:20px; text-decoration:none' class='remove'>X</a>";

    li.innerHTML = message + butt;
    var ol = UIControl.getOl();
    ol.append(li);
    document.forms[DOMStrings.formName].elements[DOMStrings.inputName].value =
      "";
  }

  UIControl.getOl().onclick = function (event) {
    console.log(event.target.parentElement.remove());
  };
})(BTNControl, UIControl);
