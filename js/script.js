window.onload = function () {
  var modal = new bootstrap.Modal(document.getElementById('modalAudio'));
  modal.show();

  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });

  var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
  var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl);
  });
};

function activarAudio() {
  var audio = document.getElementById('miAudio');
  audio.volume = 0.3;
  audio.play();
  var modal = bootstrap.Modal.getInstance(document.getElementById('modalAudio'));
  modal.hide();
}

function silenciarAudio() {
  var audio = document.getElementById('miAudio');
  audio.muted = !audio.muted;
}

function reproducirVideo() {
  var video = document.getElementById('miVideo');
  video.play();
}

function toggleDetalles(elementId) {
  var element = document.getElementById(elementId);
  if (element.hasAttribute('hidden')) {
    element.removeAttribute('hidden');
  } else {
    element.setAttribute('hidden', 'true');
  }
}