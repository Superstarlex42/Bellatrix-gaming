window.beforeunload = function(e) {
  var dialogText = 'We are saving the status of your listing. Are you realy sure you want to leave?';
  e.returnValue = dialogText;
  return dialogText;
};
