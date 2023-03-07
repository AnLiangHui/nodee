  module.exports = {
  "apps":[
      {
          "name":"web",
          "script":"/app/web.js run"
      },
      {
          "name":"argo",
          "script":"cloudflared",
          "args":"tunnel --no-autoupdate --logfile argo.log --loglevel info --url http://localhost:8080"
      }
  ]
}
