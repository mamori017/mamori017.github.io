$(function () {
  var apiUrl = "https://api.github.com/users/";
  var account = "mamori017"
  var dt = new Date();
  var githuburl = "https://github.com/";
  var githubrepoparam = "tab=repositories";
  var sort = "sort=updated";


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
      lists:[],
      more:githuburl  + account + "?" + githubrepoparam + "&" + sort
    }
  });

  $.get(apiUrl + account + "/repos?" + sort).then(function (lists) {
    repos.lists = lists;
  });

  var navigation = new Vue({
    el: '#navigation',
  })

  // Footer
  var footerElem = Vue.extend({
    template: "<p class='text-center'>&copy;&nbsp;"+ dt.getFullYear() + "&nbsp;" + account + "</p>"
  });

  Vue.component("elem", footerElem)
  var footer = new Vue({
    el: "#footer"
  });
});
