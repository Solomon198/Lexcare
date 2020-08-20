
# Lexcare Desktop Application

## Requirement

- install Microsoft Visual Studio 2019
- install python@2.7


## installation
- Clone repository

```bash
git clone https://github.com/dixre-products/lexcare-desktop.git
```

- install dependencies

```bash
yarn install
cd app 
yarn install
```

**Install windows-build-tools node package:**

run in elevated command prompt (as Administrator)

```bash
npm install -g --production windows-build-tools
```

**Install tools and configuration manually:**
- Install Visual C++ Build Environment: Visual Studio Build Tools (using "Visual C++ build tools" workload) or Visual Studio 2019 Community (using the "Desktop development with C++" workload)


## Installing openssl libraries with vcpkg

Create folder at your local disk directory call src and open the directory on the terminal then run the below code

```bash
git clone https://github.com/Microsoft/vcpkg
cd vcpkg
bootstrap-vcpkg.bat
vcpkg install openssl:x64-windows-static
mkdir C:\src\vcpkg\installed\x64-windows-static\lib
copy .\packages\openssl-windows_x64-windows-static\lib\libeay32.lib C:\src\vcpkg\installed\x64-windows-static\lib\
```

## Building Realm from source

make sure you are on the `project-root/app` directory, that is where native dependencies are installed.

```bash
Yarn electron-rebuild 
        or 
npm electron-rebuild
```

## Runing app in dev mode
make sure you are non the root directory
```bash
Yarn dev
```

## Building app for production
make sure you are non the root directory
```bash
Yarn package
```


# Bug Fixes
 
## Bug 1 

Unable to finde msvs_version node gyp for some reason always use 2012 even if you set other versions. to  solve this issue follow  the below steps

 ### Follow the directory below to the file  find-visualstudio.js

- C:\Users\USER\Documents\Dixre\clients\electron-react-boilerplate\node_modules\node-gyp\lib\find-visualstudio.js

- Then replace the below line. you might find it at line 17 => this.configMsvsVersion = "2017"




### Bug 2

**Realm global fetch faulty follow this repo to solve issue**

- https://github.com/realm/realm-js/issues/3005#issuecomment-650595714

