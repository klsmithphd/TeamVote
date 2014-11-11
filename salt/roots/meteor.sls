install-meteor:
  cmd.run :
    - name: curl https://install.meteor.com/ | sh
    - user: vagrant
    - group: vagrant
    - unless: find /home/vagrant/.meteor > /dev/null
