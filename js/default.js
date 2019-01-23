$(function () {
  var apiUrl = "https://api.github.com/users/";
  var account = "mamori017"
  var dt = new Date();

  // GitHub user info
  var user = new Vue({
    el:"#user",
    data:{
      lists:[]
    }
  });

  $.get(apiUrl + account).then(function (lists) {
    user.lists = lists;
  });

  // GitHub repository
  var repos = new Vue({
    el:"#repo",
    data:{
      head:"Recent update repository",
      lists:[]
    }
  });

  $.get(apiUrl + account + "/repos?sort=updated").then(function (lists) {
    repos.lists = lists;
  });

  var navigation = new Vue({
    el: '#navigation',
  })

  // Navigation bar

  // Navigation bar
  var navElem = Vue.extend({
    template: "<nav class='navbar navbar-inverse navbar-fixed-top'><div class='navbar-header'><a class='navbar-brand'><div id='nav-title'>" + account + "</div></a></div></nav>"
  });

  Vue.component("elem", navElem)
  var nav = new Vue({
    el: "#navigation"
  });


  // Footer
  var footerElem = Vue.extend({
    template: "<p class='text-center'>&copy;&nbsp;"+ dt.getFullYear() + "&nbsp;" + account + "</p>"
  });

  Vue.component("elem", footerElem)
  var footer = new Vue({
    el: "#footer"
  });
});
