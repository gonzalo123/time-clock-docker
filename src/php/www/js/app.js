var socket = io.connect('//localhost:8080');

$(function () {
    socket.on('time', function (data) {
        $('#display').html(data);
    });
});