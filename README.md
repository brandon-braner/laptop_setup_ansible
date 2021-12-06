# Use Ansible to setup laptop

We will be using Ansible to setup a laptop. This should install everything we need to get a laptop up and running for a new developer.


## Create virtual environment
* Open terminal and cd to the downloaded folder
* Run `python3 -m venv venv` install command line dev tools when prompted. This may take a couple minutes as it is installing xcode. You will probably have to run `python3 -m venv venv` again if the folder doesn't exist.
* Run `source venv/bin/activate` to activate the virtual environment
* Upgrade pip `python -m pip install --upgrade pip`
* Run `pip install -r requirements.txt` to install all the requirements

## Update variables
* run `whoami` in your terminal to get your username
* Update variables in the vars.yml file
* Update remote_user in the ansible.cfg file as your local username from whoami
## Run the playbooks

* Source the Python venv `source venv/bin/activate` this will allow you to run the ansible commands.
* Run the following commands to run the playbooks
* {{username}} below is the result of whoami
  * might have to run the homebrew playbook like `ansible-playbook ./tasks/homebrew.yml -u {{username}} -kK` the first time to get past an error then run it again without -kK
  * ansible-playbook tasks/homebrew.yml -u {{username}}
  * ansible-playbook tasks/oh-my-zsh.yml -u {{username}}
  * ansible-playbook tasks/ssh_key.yml -u {{username}}
  * ansible-playbook tasks/git-config.yml -u {{username}}
  * ansible-playbook tasks/pyenv.yml -u {{username}}
  * ansible-playbook tasks/setup-vscode.yml -u {{username}}
  * ansible-playbook tasks/cleanup-dock.yml -u {{username}}