      $("#main").hide();
      $('#login').show();
      
      $('#sub').click(function(){
          $('#login').hide()
            window.name = $('#uname').val();
          $('#main').show();
          var socket = io();
          socket.emit('joined', window.name);
      });

      $(function () {
          var socket = io();
          $('form').submit(function(){
            socket.emit('chat message', window.name + ': ' + $('#m').val());
            $('#m').val('');
            return false;
          });
          socket.on('chat message', function(msg){
            $('#messages').append($('<p>').html(msg));
          });
        });
