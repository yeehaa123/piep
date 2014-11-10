# piep ![Travis build status](https://api.travis-ci.org/piep/piep.svg)
## an education package manager

A [Bocoup](http://www.bocoup.com) project

`piep` is a package manager for educational materials related to teaching programming and computer science.  Creating good content for a class is the biggest bottleneck in developing good educational programs in these fields, partially because the content changes so quickly. `piep` aims to harness the power of the community to alleviate this bottleneck and produce relevant up-to-date open source content for teachers.

## Installation

Clone this repository.

```sh
git clone https://github.com/piep/piep.git
```

Navigate to the install directory and install the node dependencies.

```sh
cd piep && npm install
```

## Setting up the development environment

- Ensure that [Ansible](http://docs.ansible.com/intro_installation.html#getting-ansible) is installed.
  You can test this by running `ansible --version` in the command line.

- You'll also need [Vagrant](https://www.vagrantup.com/downloads.html).
  Run `vagrant -v` in the command line to verify that you've got it.

- Run `vagrant up` to start up the virtual machine

- Lastly, run `sudo npm run configure-hosts-vm`

That's all!

To test that it's working, navigate to `piep.loc/api/0/resources` in the browser. It should return a JSON response.

## Who

- [Ashley Williams](http://twitter.com/ag_dubs)
- [Tyler Kellen](http://twitter.com/tkellen)
- [Leo Balter](http://twitter.com/leobalter)
- [Isaac Durazo](http://twitter.com/isaacdurazo)
