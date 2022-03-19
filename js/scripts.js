$(document).ready(function() {
    $("#womanone").click(function() {
        let src = $(this).attr('src');
        let newSrc = (src=='img/womanonebefore.png') ? 'img/womanoneafter.png' : 'img/womanonebefore.png';
        $(this).attr('src', newSrc );
      });
  });

$(document).ready(function() {
    $("#womantwo").click(function() {
        let src = $(this).attr('src');
        let newSrc = (src=='img/womantwobefore.png') ? 'img/womantwoafter.png' : 'img/womantwobefore.png';
        $(this).attr('src', newSrc );
        });
});

$(document).ready(function() {
    $("#womanthree").click(function() {
        let src = $(this).attr('src');
        let newSrc = (src=='img/womanthreebefore.png') ? 'img/womanthreeafter.png' : 'img/womanthreebefore.png';
        $(this).attr('src', newSrc );
        });
});

$(document).ready(function() {
    $("#manone").click(function() {
        let src = $(this).attr('src');
        let newSrc = (src=='img/manonebefore.png') ? 'img/manoneafter.png' : 'img/manonebefore.png';
        $(this).attr('src', newSrc );
        });
});

$(document).ready(function() {
    $("#mantwo").click(function() {
        let src = $(this).attr('src');
        let newSrc = (src=='img/mantwobefore.png') ? 'img/mantwoafter.png' : 'img/mantwobefore.png';
        $(this).attr('src', newSrc );
        });
});

$(document).ready(function() {
    $("#behind").click(function() {
        let src = $(this).attr('src');
        let newSrc = (src=='img/behindbefore.png') ? 'img/behindafter.png' : 'img/behindbefore.png';
        $(this).attr('src', newSrc );
        });
});