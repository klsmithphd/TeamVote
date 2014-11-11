TeamVote
========

Simple web app for gathering votes for a team competition


Getting started
---------------

Getting your development environment set up should be as simple as installing [Vagrant](http://vagrantup.com) and either [VirtualBox](https://www.virtualbox.org/wiki/Downloads) or the appropriate [VMware Desktop app](http://www.vmware.com/products/).

**Note:** Using VMware with Vagrant will require the purchase of the [vagrant-vmware-plugin](https://www.vagrantup.com/vmware).

Then, just go into the TeamVote directory and type:
    vagrant up

Once the vagrant VM boots, you can log into it:
    vagrant ssh

Inside the VM, you can go into the app directory, launch the meteor app, and begin making edits in your host OS with your preferred text editor/IDE:
    cd /vagrant/app
    meteor

On your host system, you can see the running app at [http://localhost:3000]

