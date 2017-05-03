---
layout: post
title:  "How to build KDE Calligra Words?"
date:   2011-03-11 17:16:15 +0100
categories: jekyll update
---

After long frustration with system crashes and configurations I finally managed to compile calligra. So I decided to put it down on the node and here is the short and fast tutorial to compile calligra so that you don’t waste much of your precious time to relearn it again.

First of all remove already existing calligra/koffice files and libraries from package manager. It will conflict with calligra you are going to compile and result in the crash. You will have hard time to figure out why its happening.

## 1. Make three directories
```sh
$ mkdir $HOME/kde/src/
$ mkdir $HOME/kde/build/calligra
$ mkdir $HOME/kde/inst
```

## 2. Get the source code

To get the source code you will need to install git.Next you have to specify the location from where will get the source code. Copy paste below code in ~/.gitconfig file and replace “Your Name” with your name and same with email.

```sh
[url "git@git.kde.org:"]
  pushInsteadOf = git://anongit.kde.org/
  pushInsteadOf = git://git.kde.org/
  pushInsteadOf = kde:

[url "git://anongit.kde.org/"]
  insteadOf = kde:

[user]
  name = Your Name
  email = Your Email

[push]
  default=tracking
```
```sh
$ cd $HOME/kde/src/
$ sudo git clone kde:calligra
```
Grab a cup of Coffee. Depending on your internet speed it will take some time to fetch approx data of 450 mb.

## 3. Install below dependencies to compile
  * qt
  * kdelibs
  * kdebase/runtime
  * kdepimlibs
  * cmake
  * sqlite
  * lcms
  * blah..blah..blah..

In short type below command in terminal to get the dependencies installed in your system.

### In deb-based Distributions(Debian, Ubuntu…):
```sh
$sudo apt-get build-dep calligra
```

### OpenSuSE:
```sh
$ zypper si -d calligra
```

### Fedora:
```sh
$ yum-builddep calligra
```

## 4. Compile and Install:
```sh
$ mkdir -p $HOME/kde/build/calligra
$ mkdir -p $HOME/kde/inst
$ cd $HOME/kde/build/calligra
$ cmake -DCMAKE_INSTALL_PREFIX=$HOME/kde/inst $HOME/kde/src/calligra -DCMAKE_BUILD_TYPE=RelWithDebInfo
$ make -j4
$ make install
```

## 5. Export library paths
Put this lines inside ~/.bashrc so you won’t have to type it again and again to run application.

```sh
$ export KDEDIRS=$KDEDIRS:$HOME/kde/inst
$ export PATH=$PATH:$HOME/kde/inst/bin
$ export KDEHOME=$HOME/kde/.kde
$ kbuildsycoca4
```
## 6. Run Calligrawords
```sh
$calligrawords
```

Happy Hacking!! :)

