Get started building [Horizon](http://horizon.io/) + [NativeScript](https://www.nativescript.org/) apps quickly.

### Prerequisites

* Install Rethinkdb: https://rethinkdb.com/docs/install/
* Install Horizon: `npm install -g horizon`
* Install TypeScript : `npm install -g typescript`


## Server Setup


##Create horizon server

```
hz init nsServer
cd nsServer
hz serve --dev  --allow-unauthenticated true --auto-create-collection true --auto-create-index true
```

### Client Setup

`git clone https://github.com/triniwiz/nativescript-horizon-seed`

##Start Android version
```
cd nativescript-horizon-seed
npm i
tns run android
```

##Start IOS version
```
cd nativescript-horizon-seed
npm i
tns run ios
```
