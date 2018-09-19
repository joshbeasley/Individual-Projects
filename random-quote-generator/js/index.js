$(document).ready(function(){
  
  var randomQuote;
  var rand;
  getQuote();
  
  function getQuote(){
    
    var quotes = ['Every day is a new opportunity. You can build on yesterday\'s success or put its failures behind and start over again. That\'s the way life is, with a new game every day, and that\'s the way baseball is. -Bob Feller','Love is the most important thing in the world, but baseball is pretty good, too. -Yogi Berra','There are three types of baseball players: Those who make it happen, those who watch it happen and those who wonder what happens. -Tommy Lasorda','Baseball is ninety percent mental and the other half is physical. -Yogi Berra','Do what you love to do and give it your very best. Whether it\'s business or baseball, or the theater, or any field. If you don\'t love what you\'re doing and you can\'t give it your best, get out of it. Life is too short. You\'ll be an old man before you know it. Al Lopez','Little League baseball is a very good thing because it keeps the parents off the streets. -Yogi Berra','Baseball is like church. Many attend few understand. -Leo Durocher','I see great things in baseball. It\'s our game - the American game. -Walt Whitman', 'Baseball is a lot like life. It\'s a day-to-day existence, full of ups and downs. You make the most of your opportunities in baseball as you do in life. -Ernie Harwell'];
    rand = Math.floor((Math.random() * quotes.length));
    randomQuote = quotes[rand];
    
    $(".quote").text(randomQuote);
  }
  
  $('#newQuote').on("click", function(){
    getQuote();
  });
  
  $('#tweet').on("click", function(){
    window.open('https://twitter.com/intent/tweet?text=' + randomQuote);
  });
  
});