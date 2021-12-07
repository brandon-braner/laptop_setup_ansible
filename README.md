# Use Ansible to setup laptop

We will be using Ansible to setup a laptop. This should install everything we need to get a laptop up and running for a new developer.


## Create virtual environment
* Open terminal and cd to the downloaded folder
* Run `python3 -m venv venv` install command line dev tools when prompted. This may take a couple minutes as it is installing xcode. You will probably have to run `python3 -m venv venv` again if the folder doesn't exist.
* Run `source venv/bin/activate` to activate the virtual environment
* Upgrade pip `python -m pip install --upgrade pip`
* Run `pip install -r requirements.txt` to install all the requirements
* Install homebrew `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"` (Figure out how to automate this)[https://github.com/geerlingguy/ansible-role-homebrew]
## Update variables
* Update variables in the vars.yml file
* Update remote_user in the ansible.cfg file as your local username
## Run the playbooks

* Source the Python venv `source venv/bin/activate` this will allow you to run the ansible commands.
* Run the following commands to run the playbooks
  * might have to run like `sudo ansible-playbook ./tasks/homebrew.yml -u username` the first time to get past an error then run it again without sudo???
  * ansible-playbook tasks/homebrew.yml
  * ansible-playbook tasks/oh-my-zsh.yml
  * ansible-playbook tasks/ssh_key.yml
  * ansible-playbook tasks/git-config.yml
  * ansible-playbook tasks/pyenv.yml
  * ansible-playbook tasks/setup-vscode.yml
  * ansible-playbook tasks/cleanup-dock.yml