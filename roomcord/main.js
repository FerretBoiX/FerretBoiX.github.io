function main() {

var peer = new Peer("roomcord-"+prompt("Enter name"));

peer.on('open', function(id) {
	document.getElementById('youridh').innerHTML = `<strong>Your username: </strong> ${id.substring(9)}`;
  });

document.getElementById('conButt').onclick = function() {
    if(document.getElementById('conID').value != null) {
        navigator.mediaDevices  
          .getUserMedia({
            audio: true,
            video: false,
          })
          .then((stream) => {
            stream.getAudioTracks()[0].applyConstraints({
                sampleSize: 16,
                channelCount: 2,
                echoCancellation: true,
                noiseSuppression: true,
        })
            var call = peer.call(document.getElementById('conID').value, stream);
            document.getElementById('disButt').onclick = function() {
              call.close()
              setTimeout(() => {
                peer.disconnect();
              main();
              }, 250);
          }
            call.on('stream', function(res) {
                const video = document.querySelector("audio");
                video.srcObject = res;
                video.onloadedmetadata = () => {
                video.play();
                };
            });
          })
          .catch((err) => {
           console.log(err)
          });
    }
}
}

main();