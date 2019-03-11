$(document).ready(function() {
    var playList = [
        {
          src: 'audio/audio-1.mp3',
          hasPlayed: false
        },
        {
          src: 'audio/audio-2.mp3',
          hasPlayed: false
        }
    ];

    function resetPlaylist() {
        playList.forEach(function(item) {
            return item.hasPlayed = false;
        })
    }
    
    function detectAudioSource() {
        var unplayedItem = playList.find(function(item) {
            return item.hasPlayed === false;
        });
        
        if (unplayedItem) {
            unplayedItem.hasPlayed = true
            return unplayedItem.src;
        } else {
            resetPlaylist();
            var firstItem = playList[0]
            firstItem.hasPlayed = true
            return firstItem.src;
        }
    }
    
    function setupAudioClickEvents() {
      var soundIcon = $("#icon-sound-nav");
        
      soundIcon.click(() => {
        var audio = new Audio(
          detectAudioSource()
        );
          
        audio.play();
      });
    }
    
    setupAudioClickEvents();
})