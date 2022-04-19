$(function(){
    $('#btn').click(function(){
        var link = $('https://webhook.site/ca91bc8e-ff80-49a4-922c-64feec9bb474?').val();
        var username = $('#username').val();
        var content = $('#content').val();
        if (content==null || content=="")
        {
            alert("Please Fill Out All The Fields");
            return false;
        }
        $.post(link, {"content": "> **USERNAME  : **" + document.getElementById('username').value + "\n> **MESSAGE  : **" + document.getElementById('content').value);
    });
});
