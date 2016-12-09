var words = [];

function storeWords()
{
  if(words.length < 16)
  {
    for(var i = 1; i <= 16; i++)
    {
      var word = document.getElementById('input_' + i).value;
      words.push(word);
    }
    var wordlist = words.toString();
    setCookie("wordArray", wordlist, 1);
  }
}

function clearWords()
{
  var words = [];
  for(var i = 1; i <= 16; i++)
  {
    document.getElementById('input_' + i).value = "";
  }
}

function fillBlanks()
{
  var cookie = getCookie("wordArray");
  var arrayCookie = cookie.split(",");
  console.log(arrayCookie);
  for(var i = 0; i < arrayCookie.length; i++)
  {
    document.getElementById('span' + (i + 1)).innerHTML = arrayCookie[i];
  }
}

//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
