function $(id) {
  return document.getElementById(id);
}

function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}

var clients = [];
var streams = [];

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
        clients["<b>Clients:</b>"] = stream
      })

var tmpstrm = [];

var peer = new Peer(Math.random().toString(16).slice(8));

peer.on('open', function(id) {
	$('youridh').innerHTML = `<strong>Room ID: </strong> ${id}`;
});

peer.on('call', function(call) {
  let id = call.peer
  tmpstrm = [];
  for(i in clients) {
    for(j in clients[i].getAudioTracks()) {
      tmpstrm.push(clients[i].getAudioTracks()[j])
    }
  }
  streams[id] = new MediaStream(tmpstrm)
  call.answer(streams[id]);
  call.peerConnection.onconnectionstatechange = function (event) {
    if (event.currentTarget.connectionState === 'disconnected') {
      delete clients[id]
      upui()
      call.close();
    }
  };
  call.on('stream', function(res) {
    clients[id] = res
    for(i in streams) {
      for(j in res.getAudioTracks()) {
        streams[i].addTrack(res.getAudioTracks()[j])
      }
    }
    upui()
  })
});

function upui() {
  $('clients').innerHTML = ""
    for(i in clients) $('clients').innerHTML+=i+"</br>"
}