
$(function () {
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

  // Footer
  /*
  Vue.component('elem', {
    template: '<p class="text-muted text-center">&copy;&nbsp;'+ dt.getFullYear() + '&nbsp;mamori017</p>'
  })
  var footer = new Vue({
    el: '#footer',
  })
  */
  var extendElem = Vue.extend({
    template: '<p class="text-muted text-center">&copy;&nbsp;'+ dt.getFullYear() + '&nbsp;mamori017</p>'
  })
  Vue.component('elem', extendElem)
  var footer = new Vue({
    el: '#footer'
  })

  Vue.nextTick(function() {
    console.log('nextTick');
  })

});

