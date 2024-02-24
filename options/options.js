let storeSettings = () => {
  let formats = document.getElementsByName("format");
  let shows = document.getElementsByName("show");
  let format = "1";
  let show = "1";

  for (let i = 0; i < formats.length; i++) {
    if (formats[i].checked) {
      format = formats[i].value;
      break;
    }
  }

  for (let i = 0; i < shows.length; i++) {
    if (shows[i].checked) {
      show = shows[i].value;
      break;
    }
  }

  chrome.storage.local.set({
    format: format,
    show: show,
  }, updateStatus);
}

let updateUI = (restoredSettings) => {
  if (typeof restoredSettings.format !== "undefined") {
    document.getElementById('format'+restoredSettings.format).checked = true
  }else{
    document.getElementById('format1').checked = true
  }

  if (typeof restoredSettings.show !== "undefined") {
    document.getElementById('show'+restoredSettings.show).checked = true
  }else{
    document.getElementById('show1').checked = true
  }
}

const gettingStoredSettings = chrome.storage.local.get(updateUI);

let updateStatus = () => {
  let status = document.getElementById('status');
  status.textContent = "セーブしました。";
  setTimeout(function() {
    status.textContent = '';
  }, 750);
}

document.getElementById("save").addEventListener("click", storeSettings);