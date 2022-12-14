var Typer = {
  text: '',
  accessCountimer: null,
  index: 0,
  speed: 2,
  file: '',
  accessCount: 0,
  deniedCount: 0,
  answerVisible: 0,
  init: function () {
    accessCountimer = setInterval(function () {
      Typer.updLstChr();
    }, 500);
    $.get(Typer.file, function (data) {
      Typer.text = data;
      Typer.text = Typer.text.slice(0, Typer.text.length - 1);
    });
  },

  content: function () {
    return $('#console').html();
  },

  write: function (str) {
    $('#console').append(str);
    return false;
  },

  addText: function (key) {
    if (key.keyCode == 18) {
      Typer.accessCount++;

      if (Typer.accessCount >= 3) {
        Typer.makeAccess();
      }
    } else if (key.keyCode == 20) {
      Typer.deniedCount++;

      if (Typer.deniedCount >= 3) {
        Typer.makeDenied();
      }
    } else if (key.keyCode == 27) {
      Typer.hidepop();
    } else if (Typer.text) {
      var cont = Typer.content();
      if (cont.substring(cont.length - 1, cont.length) == '|')
        $('#console').html(
          $('#console')
            .html()
            .substring(0, cont.length - 1),
        );
      if (key.keyCode != 8) {
        Typer.index += Typer.speed;
      } else {
        if (Typer.index > 0) Typer.index -= Typer.speed;
      }
      var text = Typer.text.substring(0, Typer.index);
      var rtn = new RegExp('\n', 'g');

      $('#console').html(text.replace(rtn, '<br/>'));
      window.scrollBy(0, 50);
    }

    if (key.preventDefault && key.keyCode != 122) {
      key.preventDefault();
    }

    if (key.keyCode != 122) {
      // otherway prevent keys default behavior
      key.returnValue = false;
    }
  },

  updLstChr: function () {
    var cont = this.content();

    if (cont.substring(cont.length - 1, cont.length) == '|') {
      if ($('#answer').length && Typer.answerVisible == 0) {
        Typer.answerVisible = 1;
        clearInterval(accessCountimer);
        $('#answer').focus();
        $('#answer').select();
        var input = $("input");
        input[0].selectionStart = input[0].selectionEnd = input.val().length;
        $('#answer').on('keypress', function (e) {
          if(e.which === 13){
            var val = $(this).val();
            console.log(task);
            if (task == 0) {
              if (val == "start" || val == "Start") {
                window.location.href = "fashjer.html";
              }
            }
            if (task == 1) {
              if (val == "Jes??s Corona") {
                window.location.href = "khjaso.html";
              } else {
                alert(val + " ist falsch!! HA HAA");
              }
            }
            if (task == 2) {
              if (val == "Makoto Hasebe") {
                window.location.href = "oqjnkdsl.html";
              } else {
                alert(val + " ist falsch!! HA HAA");
              }
            }
            if (task == 3) {
              if (val == "Shinji Kagawa") {
                window.location.href = "qwdniqwd.html";
              } else {
                alert(val + " ist falsch!! HA HAA");
              }
            }
            if (task == 4) {
              if (val == "64") {
                window.location.href = "quuuqu.html";
              } else {
                alert(val + " ist falsch!! HA HAA");
              }
            }
            if (task == 5) {
              if (val == "Steve Mandanda") {
                window.location.href = "iqiiqiiqiiqii.html";
              } else {
                alert(val + " ist falsch!! HA HAA");
              }
            }
            if (task == 6) {
              if (val == "Schweiz") {
                window.location.href = "uiiiiiii.html";
              } else {
                alert(val + " ist falsch!! HA HAA");
              }
            }
            if (task == 7) {
              if (val == "62") {
                window.location.href = "zzzzzzzzzz.html";
              } else {
                alert(val + " ist falsch!! HA HAA");
              }
            }
            if (task == 8) {
              if (val == "2") {
                window.location.href = "kqwjmelkbn.html";
              } else {
                alert(val + " ist falsch!! HA HAA");
              }
            }
            if (task == 9) {
              if (val == "1954,1974,1990,2014" || val == "1954, 1974, 1990, 2014") {
                window.location.href = "fjkqkvn.html";
              } else {
                alert(val + " ist falsch!! HA HAA");
              }
            }
            if (task == 10) {
              if (val == "Sepp Herberger,Helmut Sch??n,Franz Beckenbauer,Joachim L??w" || val == "Sepp Herberger, Helmut Sch??n, Franz Beckenbauer, Joachim L??w") {
                window.location.href = "oiqbwb.html";
              } else {
                alert(val + " ist falsch!! HA HAA");
              }
            }
            if (task == 11) {
              if (val == "Ungarn,Niederlande,Argentinien,Argentinien" || val == "Ungarn, Niederlande, Argentinien, Argentinien") {
                window.location.href = "qweibqweqw.html";
              } else {
                alert(val + " ist falsch!! HA HAA");
              }
            }
            if (task == 12) {
              if (val == "2") {
                window.location.href = "qouwge.html";
              } else {
                alert(val + " ist falsch!! HA HAA");
              }
            }
            if (task == 13) {
              if (val == "CULTURA" || val == "cultura" || val == "Cultura") {
                window.location.href = "uquqwui.html";
              } else {
                alert(val + " ist falsch!! HA HAA");
              }
            }
            if (task == 14) {
              if (val == "ULTRAS" || val == "ultras" || val == "Ultras") {
                window.location.href = "toigtaogb.html";
              } else {
                alert(val + " ist falsch!! HA HAA");
              }
            }
            if (task == 15) {
              if (val == "Fc K??ln" || val == "FC K??LN" || val == "fc k??ln") {
                window.location.href = "luhefg.html";
              } else {
                alert(val + " ist falsch!! HA HAA");
              }
            }
            if (task == 16) {
              if (val == "1") {
                window.location.href = "qefiufqelguqfl.html";
              } else {
                alert(val + " ist falsch!! HA HAA");
              }
            }
          }
        });
      }
      // $('#console').html(
      //   $('#console')
      //     .html()
      //     .substring(0, cont.length - 1),
      // );
    }
    else {
      this.write('|'); // else write it
    }
  },
};

function replaceUrls(text) {
  var http = text.indexOf('http://');
  var space = text.indexOf('.me ', http);

  if (space != -1) {
    var url = text.slice(http, space - 1);
    return text.replace(url, '<a href="' + url + '">' + url + '</a>');
  } else {
    return text;
  }
}

Typer.speed = 2;
if (task == 0) {
  Typer.file = 'WmPokal.txt';
}
if (task == 1) {
  Typer.file = 'Task1.txt';
}
if (task == 2) {
  Typer.file = 'Task2.txt';
}
if (task == 3) {
  Typer.file = 'Task3.txt';
}
if (task == 4) {
  Typer.file = 'Task4.txt';
}
if (task == 5) {
  Typer.file = 'Task5.txt';
}
if (task == 6) {
  Typer.file = 'Task6.txt';
}
if (task == 7) {
  Typer.file = 'Task7.txt';
}
if (task == 8) {
  Typer.file = 'Task8.txt';
}
if (task == 9) {
  Typer.file = 'Task9.txt';
}
if (task == 10) {
  Typer.file = 'Task10.txt';
}
if (task == 11) {
  Typer.file = 'Task11.txt';
}
if (task == 12) {
  Typer.file = 'Task12.txt';
}
if (task == 13) {
  Typer.file = 'Task13.txt';
}
if (task == 14) {
  Typer.file = 'Task14.txt';
}
if (task == 15) {
  Typer.file = 'Task15.txt';
}
if (task == 16) {
  Typer.file = 'Task16.txt';
}
if (task == 17) {
  Typer.file = 'Task17.txt';
}
Typer.init();

var timer = setInterval('t();', 30);
function t() {
  Typer.addText({ keyCode: 123748 });

  if (Typer.index > Typer.text.length) {
    clearInterval(timer);
  }
}
