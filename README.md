# piep [![Travis build status](https://api.travis-ci.org/piep/piep.svg)](https://travis-ci.org/piep/piep)
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

There are two ways to develop Piep locally; within a Vagrantbox, or directly on your machine with
SQLite3. It is recommended that you use the Vagrant development environment.

### Setting up Vagrant

- Ensure that [Ansible](http://docs.ansible.com/intro_installation.html#getting-ansible) is installed.
  You can test this by running `ansible --version` in the command line.

- You'll also need [Vagrant](https://www.vagrantup.com/downloads.html).
  Run `vagrant -v` in the command line to verify that you've got it.

- Run `vagrant up` to start up the virtual machine

- Lastly, run `sudo npm run configure-hosts-vm`

That's all!

To test that it's working, navigate to `piep.loc/api/0/resources` in the browser. It should return a JSON response.

### Setting up local SQLite3

- Run `sudo npm run configure-hosts-local`

- Start the app via `npm index.js`

Confirm that it's working by pointing your browser to `piep.loc:8080/api/0/resources`. If you get a JSON response, then all is well!

### Deploying changes

- First, you'll need to get the `piep.pem` credentials to log in to AWS. We have no secret sharing tool
  set up quite yet, so unfortunately these will need to be exchanged between persons directly.

- Place the credentials file inside the `./config/secrets` directory. Don't worry, this directory is gitignored.

If you are unable to get your hands on `piep.pem`, then the usual methods of contributing to open source apply: simply make
issues/PRs in this repository.

On the other hand, if you do have those credentials, then the following applies:

#### Deploying to staging

- Run `npm deploy-staging` 

#### Deploying to production

- Run `npm deploy`

## FAQ

#### How do I get a fresh copy of the production database to develop with?

If developing locally:

```
npm run destroy-database
npm run restore-database
```

If developing in a VM:
```
npm run vagrant-reset-database
```

#### Everything is running but I can't connect!

If you're running Vagrant, be sure you did `npm run configure-hosts-vm` so your hosts file points piep.loc to the Vagrant box.  If you're
running SQLite3 locally, be sure you did `npm run configure-hosts-local`, which points piep.loc to 127.0.0.1.

#### How do I reset the staging database?

There are three ways to do this easily:

- Run the command `npm run reset-staging` on your local machine.
- Run the command `npm run deploy` on your local machine (not recommended unless you are actually deploying).
- Do nothing, it's automatically scheduled to happen at 12AM every day.

#### How do I connect to the production database manually?

```
ssh -i config/secrets/piep.pem ubuntu@54.172.25.63
psql piep
```

Be careful in there!

*Note: This requires the `piep.pem` credentials mentioned [above](#deploying-changes).*

#### Where is the code?

If you're developing locally, it's running from root of this repository. If you're running Vagrant, `/vagrant` stays in sync with your local system.  If you're on the production server, it's all under `/mnt/piep`.

## Who

- [Ashley Williams](http://twitter.com/ag_dubs)
- [Tyler Kellen](http://twitter.com/tkellen)
- [Leo Balter](http://twitter.com/leobalter)
- [Isaac Durazo](http://twitter.com/isaacdurazo)
