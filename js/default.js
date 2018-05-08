
$(function () {
  // Title
  var title = new Vue({
    el:'#title',
      data:{text:'mamori017.github.io'}
  })

  // Navbar title
  var navtitle = new Vue({
    el:'#nav-title',
      data:{text:'mamori017.github.io'}
  })

  // Get GitHub user info
  $.get('https://api.github.com/users/mamori017').then(function (lists) {
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
  $.get('https://api.github.com/users/mamori017/repos').then(function (lists) {
    repo.lists = lists;
  });

  var repo =  new Vue({
    el:'#repo',
    data:{
      head:'Repository',
      lists:[]
    }
  });
});