# Red Alert

This is an experimental UI for Redmine project management application.
It's written with Ext JS 6.0.1 and utilizes REST api.


###Disclaimer
This application is for research and educational purposes only. Do not use it in production.


Build
---

To build an application you have to download and install Sencha Cmd and SDK and run this commands from the cloned project folder:
1. > `sencha app upgrade -p "path/to/SDK"`
2. > `sencha app build production`

Your build will be available at `build/production/RedAlert` folder.


Configure
---
To set your configuration up you have to:
1. Copy `env.json.example` to `env.json` in project root folder.
2. Open `env.json` and fill up `backend_url` and `api_key` values with your redmine instance configuration.


Run
---
After Build and Configure steps your application is ready to be served by any suitable web server. There is no extra requirements.