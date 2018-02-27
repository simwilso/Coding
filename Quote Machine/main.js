$(document).ready(function() {
// setup global variables
  var quote;
  var author;

// get quote button output
  $(".get-quote").on("click", function() {
      $.ajax( {
        url: "http://api.forismatic.com/api/1.0/",
        jsonp: "jsonp",
        dataType: "jsonp",
          data: {
          method: "getQuote",
          format: "jsonp",
          lang: "en",
          },
        success: function(response) {
        $("#quote").html(response.quoteText);
        quote = response.quoteText;
        $("#author").html(response.quoteAuthor);
        author = response.quoteAuthor;
        }
      });
    });

// share on twitter button

  $(".share-quote").on("click", function() {
      window.open("https://twitter.com/intent/tweet?text=" + encodeURIComponent(quote + author));
    })
});
