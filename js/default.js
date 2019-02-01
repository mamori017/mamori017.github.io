$(function () {
  // Account
  var account = "mamori017";
  // GitHub API
  var apiUrl = "https://api.github.com/users/";
  // Repository
  var githubUrl = "https://github.com/";
  var githubRepoParam = "tab=repositories";
  var sort = "sort=updated";
  // Gists
  var gistUrl = "https://gist.github.com/";
  // Form
  var formUrl = "https://" + account + ".wufoo.com/forms/contact/";
  // Etc
  var dt = new Date();

  // GitHub user info
  $.get(apiUrl + account).then(function (lists) {
    user.lists = lists;
    about.lists = lists;
  });

  // Jumbotron
  var user = new Vue({
    el:"#jumbotron",
    data:{
      head: account,
      lists:[]
    }
  });

  // About
  var about = new Vue({
    el:"#about",
    data:{
      head:"About",
      about:"Software engineer and Otaku. I mostly use .Net Framework.",
      lists:[]
    }
  });

  // Social
  var social = new Vue({
    el: "#social",
    data: {
      head:"SNS",
      items: []
    },
    beforeCreate: function () {
      axios.get("./content/social.json")
          .then(function (response) {
            social.items = response.data;
          })
          .catch(function (error) {
              console.log(error);
          });
    }
  })

  // GitHub repository
  var repos = new Vue({
    el:"#repo",
    data:{
      head:"GitHub recent update",
      lists:[],
      more:githubUrl  + account + "?" + githubRepoParam + "&" + sort
    }
  });

  $.get(apiUrl + account + "/repos?" + sort).then(function (lists) {
    repos.lists = lists;
  });

  // GitHub Gists
  var gists = new Vue({
    el:"#gist",
    data:{
      head:"Gist recent update",
      lists:[],
      more:gistUrl + account
    }
  });

  $.get(apiUrl + account + "/gists").then(function (lists) {
    gists.lists = lists;
  });

  // Contact
  var contact = new Vue({
    el:"#contact",
    data:{
      head:"Contact",
      about:"Please contact me on this form, such as requests and messages. If you would like to contact by e-mail, please use mamori017 [at] outlook.jp.",
      url:formUrl,
    }
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
