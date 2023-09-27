# Install and Configure Wox + Zeal

This guides shares how to quickly and efficiently look up documentation on most of the languages and  learn—this skill is equally important as learning the framework or language itself.

We need two tools [Wox](http://doc.wox.one) and [Zeal](https://zealdocs.org/).

Let's start with Wox. Here's the perfect description from the author themselves.

> Before writing Wox, I always wanted to write a launcher. I like to use hot keys instead of keyboards, especially after using Vim. `Win + R` inside Windows cannot search programs, not good for me. I also used [Launchy](http://www.launchy.net/), but it seems stopped maintenance for a long time. Back to 2011, I tried to using C-lang to make some attempts, like [fstart](https://code.google.com/p/fstart/) and [smartrun](https://code.google.com/p/smartrun/). Maybe I'm a new guy to coding at that time. Those attempts failed at the end. Probably in November 2013, I know [Alfred](http://www.alfredapp.com/), an outstanding launcher in Mac. Unfortunately, there is no such thing under Windows :( - [the documentation](http://doc.wox.one/en/basic/)

First:

[Download Wox](https://github.com/Wox-launcher/Wox/releases) You want to download and install the the "wox-full-installer\*.exe" ![](https://i.imgur.com/CB5A25V.png)

Go through the installation, leave all the default options:&#x20;

![installing Wox](https://i.imgur.com/xAzQlaO.gif)

Wox helps you find and open things on your computer without having to click around — it makes you faster. Life is short after all.

For example, if I want to open the **Control Panel**, instead of going to the menu bar, browsing around, click and open, I can do this:

![Open the control panel](https://i.imgur.com/i8jqTM7.gif)

Pretty fast! Right?

Now let's configure Wox.

Open Wox > **Right Click** > **Settings**

&#x20;![](https://i.imgur.com/ztJPqfj.gif)

Confirm you have the following settings checked:

* **General** > **Remember last launch location**
* **Hotkey** > (Set to whatever you prefer, or leave the default `Win + R` and memorize this). It's the key you can press from anywhere to start Wox.

Close Wox. When you click anywhere else, it closes.

Next:

[Download and install zeal](https://zealdocs.org/download.html#windows)

&#x20;![Install zeal](https://i.imgur.com/TFqrfBo.png)

What's zeal?

Per the documentation:

> Zeal is an offline documentation browser for software developers

Open Zeal, we're now doing to add documentation for:

* HTML
* CSS
* Emmet
* Tailwind CSS
* JavaScript
* Font Awesome
* React

Let's start with HTML

Go to **Tools** > **Docset** > **Available** > **HTML** > **Download**

Do the same for CSS, Emmet, JavaScript, Font Awesome and React.

For TailwindCSS, it's different. As you might notice, it doesn't show up like the others.

Here's how to install _docsets_ that are not in Zeal by default.

Go to https://zealusercontributions.vercel.app/docsets and in the search box type **TailwindCSS**

Click the **XML feed** , copy the URL and paste it in Zeal

&#x20;![](https://i.imgur.com/As0Baqj.gif)

Now you can browse any of those documentations with a few keystrokes.

You press `Win + R`, and `z` then type what you want to lookup in your documentation.

![Using Wox + Zeal](https://i.imgur.com/2khUHzk.gif)
