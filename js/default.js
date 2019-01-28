$(function () {
  var apiUrl = "https://api.github.com/users/";
  var account = "mamori017";
  var dt = new Date();
  var githuburl = "https://github.com/";
  var githubrepoparam = "tab=repositories";
  var sort = "sort=updated";
  var formUrl = "https://mamori017.wufoo.com/forms/mamori017/";

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

  // about
  var about = new Vue({
    el:"#about",
    data:{
      head:"About",
      about:"Software engineer and Otaku. I mostly use .Net Framework.",
      lists:[]
    }
  });

  // Social
  var content = new Vue({
    el: '#link',
    data: {
      head:"SNS",
      items: []
    },
    beforeCreate: function () {
      axios.get('./content/content.json')
          .then(function (response) {
            content.items = response.data;
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
      more:githuburl  + account + "?" + githubrepoparam + "&" + sort
    }
  });

  $.get(apiUrl + account + "/repos?" + sort).then(function (lists) {
    repos.lists = lists;
  });

  // contact
  var contact = new Vue({
    el:"#contact",
    data:{
      head:"Contact",
      about:"Please contact me with this form.",
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
