
$(function () {
  var strName = 'mamori017'
  var strTitle = 'mamori017.github.io'
  var apiUrl = 'https://api.github.com/users/mamori017'
  var dt = new Date();

  // Title
  var title = new Vue({
    el:'#title',
      data:{text:strTitle}
  })

  // Navbar title
  var navtitle = new Vue({
    el:'#nav-title',
      data:{text:strTitle}
  })

  // Get GitHub user info
  $.get(apiUrl).then(function (lists) {
    user.lists = lists;
  });

  var user =  new Vue({
    el:'#user',
    data:{
      head:'User',
      lists:[]
    }
  });

  // Get GitHub repositories info
  $.get(apiUrl + '/repos').then(function (lists) {
    repo.lists = lists;
  });

  var repo =  new Vue({
    el:'#repo',
    data:{
      head:'Repository',
      lists:[]
    }
  });

  // Navigation bar
  Vue.component('elem', {
    template: '<nav class="navbar navbar-inverse navbar-fixed-top"><div class="navbar-header"><a class="navbar-brand"><div id="nav-title">' + strTitle + '</div></a></div></nav>'
  })

  var navigation = new Vue({
    el: '#navigation',
  })

  // Footer
  Vue.component('elem', extendElem)
  var footer = new Vue({
    el: '#footer'
  })

  var extendElem = Vue.extend({
    template: '<p class="text-muted text-center">&copy;&nbsp;'+ dt.getFullYear() + '&nbsp;' + strName + '</p>'
  })

  // NextTick
  Vue.nextTick(function() {
    console.log('nextTick');
  })

});

