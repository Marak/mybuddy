# Buddy Pond My Buddy

Companion App for [Buddy Pond](https://buddypond.com). 
Run your own [https://buddypond.com](https://buddypond.com) offline with a single command.

## What does this App do?
  - Installs the latest [Buddy Pond source code](https://github.com/marak/buddypond) locally to your system
  - Installs the latest [Buddy Pond AppStore](https://github.com/marak/buddypond-appstore) locally to your system
  - Starts up an HTTPS / SSL Static File Server on localhost to serve Buddy Pond

## Download My Buddy

### Mac OS X

[https://github.com/Marak/mybuddy/releases/download/v4.20.69/mybuddy](https://github.com/Marak/mybuddy/releases/download/v4.20.69/mybuddy)

*Note: You may have to `sudo chmod +x ./mybuddy` in order to run it.*

### Windows

`windows-x64-10.16.0`

[https://github.com/Marak/mybuddy/releases/download/v4.20.69/mybuddy.exe](https://github.com/Marak/mybuddy/releases/download/v4.20.69/mybuddy.exe)

## Starting My Buddy

After downloading My Buddy, double click the application. This will start My Buddy on port 80 and 443 ( HTTPS / SSL ).

You can start using Buddy Pond by visiting `https://localhost`

*Note: It's best to run `mybuddy` from the Terminal or Command Prompt if possible.*

## Compile My Buddy From source 

Would rather just run the source? Awesome!

Simply run the following commands. You will need to have: `git`, `npm`, and `node` ready.

```
git clone https://github.com/Marak/mybuddy
cd mybuddy
npm install
npm start
```

You can now start using Buddy Pond by visiting `https://localhost`

### License
Buddy Pond Copyright (C) 2022 Marak Squires
See `LICENSE` file