meteor-home-local-dir:
  file.directory:
    - name: /home/vagrant/.meteor-local/app
    - user: vagrant
    - group: vagrant
    - makedirs: True

meteor-local-dir:
  file.directory:
    - name: /vagrant/app/.meteor/local
    - user: vagrant
    - group: vagrant
    - makedirs: True

bind-mount:
  mount.mounted:
    - name: /home/vagrant/.meteor-local/app
    - device: /vagrant/app/.meteor/local
    - fstype: auto
    - opts: bind
    - requires:
      - file.directory: meteor-home-local-dir
      - file.directory: meteor-local-dir
