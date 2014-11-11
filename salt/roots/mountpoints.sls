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
    - name: /vagrant/app/.meteor/local
    - device: /home/vagrant/.meteor-local/app
    - fstype: auto
    - opts: bind
    - require:
      - file.directory: meteor-home-local-dir
      - file.directory: meteor-local-dir
