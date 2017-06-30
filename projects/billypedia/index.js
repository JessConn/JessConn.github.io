/* global $ _ opspark */
$(document).ready(function() {
    $.getJSON('data.json', function (data) {
        // YOUR CODE BELOW HERE //
    $('#section-quotes').css('color', 'white').css('background-color', 'grey').css('border-radius', '4px').css('padding-left', '10px').css('padding-right', '10px').css('padding-bottom', '4px').css('font-style', 'italic');
    $('#section-bio').css('color', 'white').css('background-color', 'grey').css('border-radius', '4px').css('padding-left', '10px').css('padding-right', '10px').css('padding-bottom', '4px').css('padding-top', '2px');
    $('.heading-quotes').css('padding-left', '10px').css('padding-right', '10px').css('padding-top', '10px');
    
    var topRated = data.discography.topRated;
        _.forEach(topRated, function(recording) {
            $('#list-top-rated').append($('<li>').text(recording.title));
        });
        
    $('<section>').attr('id', 'section-recordings').append($('<h3>').text('Recordings')).appendTo($('#sidebar'));
    $('#section-recordings').append($('<ul>').attr('id', 'list-recordings').css('color', 'white').css('background-color', 'grey').css('border-radius', '4px').css('padding-left', '10px').css('padding-right', '10px').css('padding-bottom', '4px').css('padding-top', '4px'));
    
    var recordings = data.discography.recordings;
    _.map(recordings, function(recording) {
        var $listItem = $('<li>').addClass('recording');
        var $title = $('<div>').text(recording.title).css('color', 'rgb(14, 62, 136)').css('font-weight', 'bold');
        var $artist = $('<div>').text(recording.artist).addClass('artist').css('font-style', 'italic').css('color', 'black');
        var $release = $('<div>').text(recording.release).addClass('release').css('font-weight', 'light').css('color', 'black');
        var $year = $('<div>').text(recording.year).addClass('year').css('color', 'black');
        $listItem.append($title, $artist, $release, $year);
        $('#list-recordings').append($listItem);
    });
        
    $('#section-top-rated').prepend($('<img>').attr('id', 'top-rated-image').attr('src', "images/album/eastern-rebellion.jpg"));
    
    $('#section-recordings').prepend($('<img>').attr('src', recordings[0].art).attr('id', 'recording-image'));
    
    var billyImages = data.images.billy;
    
    $('#image-billy').click(function(event) {
        var billyPic = $('#image-billy').attr('src');
        // console.log(billyPic, billyImages);
        var max = billyImages.length - 1;
        var min = 0;
        // console.log(typeof(billyPic));
        billyPic = billyImages[Math.floor(Math.random() * max)];
        // console.log(billyPic);
        $('#image-billy').attr('src', billyPic);
    });
    
    var topPics = _.pluck(data.discography.topRated, 'art');
    // console.log(recordingPics);
    $('#top-rated-image').click(function(event) {
        var topRatedPic = $('#top-rated-image').attr('src');
        // console.log(topRatedPic);
        var max = topPics.length - 1;
        topRatedPic = topPics[Math.floor(Math.random() * max)];
        // console.log(billyPic);
        $('#top-rated-image').attr('src', topRatedPic);
    });
    
      var recordingPics = _.pluck(data.discography.recordings, 'art');
    $('#recording-image').click(function(event) {
        var recordingPic = $('#recording-image').attr('src');
        // console.log(topRatedPic);
        var max = recordingPics.length - 1;
        recordingPic = recordingPics[Math.floor(Math.random() * max)];
        // console.log(billyPic);
        $('#recording-image').attr('src', recordingPic);
    });
    
    
    var createTable = function(riderData){
    var createRow = function(rider){
        var $row = $("<tr>");
        var $type = $("<td>").text(rider.type);
        var $desc = $("<td>").text(rider.desc);
        $row.append($type);
        $row.append($desc);
        return $row;
    };
    var $table = $("<table>");
    var $rows = riderData.map(createRow);
    $table.append($rows);
    return $table;
};
    var riderData = data.rider;
    createTable(riderData).appendTo(".content").css('color', 'white').css('background-color', 'rgb(240, 155, 88)').css('border-radius', '4px').css('border-color', 'white').css('padding-left', '10px').css('padding-right', '10px').css('padding-bottom', '4px').css('padding-top', '2px');
    
    $('table').css('border', 'white dotted 6px');
        // YOUR CODE ABOVE HERE //
    })
    .fail(function() { console.log('getJSON on discography failed!'); });
});


