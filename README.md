# Simple Server

Simple Server is an [express](https://www.npmjs.com/package/express) node http server with a custom CLI

## Installing 
### Pre-requisites

* **Ubuntu**

  * Install and update npm

    ```bash
    sudo apt-get install npm    ## Will pull NodeJS
    sudo npm install -g n     
    sudo n latest
    ```

  * References: [how can I update Nodejs](https://askubuntu.com/questions/426750/how-can-i-update-my-nodejs-to-the-latest-version), and [install Ubuntu](http://www.hostingadvice.com/how-to/install-nodejs-ubuntu-14-04/#ubuntu-package-manager)

* **Windows**
  
  * Installing from the [installer](https://nodejs.org/en/download/)
  * Installing with the [CLI](https://en.wikipedia.org/wiki/Command-line_interface)

    ```bash
    iex (new-object net.webclient).downstring(‘https://get.scoop.sh’)
    scoop install nodejs
    ```
## Installing SimpleServer

SimpleServer application can be locally (on your desktop) started in the following way
```
npm install
node index.js "path_folder_to_serve" "port"
```
