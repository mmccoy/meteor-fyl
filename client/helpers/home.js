var mediaConstraints = { audio: true };

Template.home.helpers({
  // Helpers
});

Template.home.rendered = function () {
  var container = this.find("#postsContainer");
};

Template.home.events({
  'click .record-start': startRecording,
  'click .record-stop': stopRecording
});

function startRecording(e) {
  console.log('Record clicked')
  // console.log(e);
  navigator.getUserMedia(mediaConstraints, onMediaSuccess, onMediaError);
}

function stopRecording(e) {
  console.log('Recording stopped');
  // console.log(e);
  console.log(this);
  console.log(window.mediaRecorder)
}

function onMediaSuccess(stream) {
  console.log(this);
  console.log('Recording started')
  var mediaRecorder = new MediaStreamRecorder(stream);
  mediaRecorder.mimeType = 'audio/ogg';

  mediaRecorder.ondataavailable = function (blob) {
    // POST/PUT "Blob" using FormData/XHR2
    var audio = document.createElement('audio');

    audio = mergeProps(audio, {
      controls: true,
      src: URL.createObjectURL(blob)
    });

    document.body.appendChild(audio);
    mediaRecorder.stop();
  };

  mediaRecorder.start(5000);
}

function onMediaError(e) {
  console.error('media error', e);
}