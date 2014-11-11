# -*- mode: ruby -*-
# vi: set ft=ruby :

VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  config.vm.box = "box-cutter/ubuntu1404-docker"
  config.vm.network :forwarded_port, guest: 3000, host: 3000
  config.vm.synced_folder "salt/roots/", "/srv/salt/"
  config.ssh.forward_agent = true
  
  config.vm.provision :salt do |salt|
	salt.minion_config = "salt/minion"
	salt.run_highstate = true
	salt.verbose = true
  end
end
