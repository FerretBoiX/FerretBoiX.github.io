var peer = new Peer(Math.random().toString(16).slice(8));

peer.on('open', function(id) {
	document.getElementById('youridh').innerHTML = `<strong>Your ID: </strong> ${id}`;
  });

document.getElementById('conButt').onclick = function() {
    if(document.getElementById('conID').value != null) {
        var conn = peer.connect(document.getElementById('conID').value);
        navigator.mediaDevices
          .getUserMedia({
            audio: true,
            video: false,
          })
          .then((stream) => {
            var call = peer.call(document.getElementById('conID').value, stream);
            call.on('stream', function(res) {
                const video = document.querySelector("video");
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
            call.answer(stream);
            call.on('stream', function(res) {
                const video = document.querySelector("video");
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
