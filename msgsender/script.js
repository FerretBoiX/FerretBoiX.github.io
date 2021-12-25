function sndmsg() {
    var msg = document.getElementById('msgpls').value
    var cnl = document.getElementById('cnlpls').value
    var srv = document.getElementById('srvpls').value
    var tkn = document.getElementById('tknpls').value

    if(msg != null && cnl != null && tkn != null && srv != null) {

        fetch(`https://discord.com/api/v9/channels/${cnl}/messages`, {
  "headers": {
    "accept": "*/*",
    "accept-language": "he,en-US;q=0.9",
    "authorization": `${tkn}`,
    "content-type": "application/json",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-debug-options": "bugReporterEnabled",
    "x-discord-locale": "en-US",
    "x-super-properties": "eyJvcyI6IldpbmRvd3MiLCJicm93c2VyIjoiRGlzY29yZCBDbGllbnQiLCJyZWxlYXNlX2NoYW5uZWwiOiJzdGFibGUiLCJjbGllbnRfdmVyc2lvbiI6IjEuMC45MDAzIiwib3NfdmVyc2lvbiI6IjEwLjAuMjIwMDAiLCJvc19hcmNoIjoieDY0Iiwic3lzdGVtX2xvY2FsZSI6ImhlIiwiY2xpZW50X2J1aWxkX251bWJlciI6MTA4OTI0LCJjbGllbnRfZXZlbnRfc291cmNlIjpudWxsfQ=="
  },
  "referrer": `https://discord.com/channels/${srv}/${cnl}`,
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": `{\"content\":\"${msg}\",\"nonce\":\"92437405818578${String(Math.trunc((Math.random() * 9000) + 1000))}\",\"tts\":false}`,
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
}).then(res => res.json())
.then(console.log);

    }
    console.log(msg + ", " + cnl + ", " + srv + ", " + tkn + ", ")
}