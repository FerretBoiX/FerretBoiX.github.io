function main() {

var peer = new Peer(Math.random().toString(16).slice(8));

peer.on('open', function(id) {
	document.getElementById('youridh').innerHTML = `<strong>Your ID: </strong> ${id}`;
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

peer.on('call', function(call) {
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
            call.answer(stream);
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
  });

  document.getElementById('disButt').onclick = function() {
    try {call.close()} catch {}
    peer.disconnect();
    main();
}
}

main();
