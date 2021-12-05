# Use Ansible to setup laptop

We will be using Ansible to setup a laptop. This should install everything we need to get a laptop up and running for a new developer.


## Create virtual environment
* Open terminal and cd to the downloaded folder
* Run `python3 -m venv venv` install command line dev tools when prompted. This may take a couple minutes as it is installing xcode. You will probably have to run `python3 -m venv venv` again if the folder doesn't exist.
* Run `source venv/bin/activate` to activate the virtual environment
* Upgrade pip ``
* Run `pip install -r requirements.txt` to install all the requirements
* 
## Update variables
* Update email_address with your torqata email address
## Run the playbooks

* Source the Python venv `source venv/bin/activate` this will allow you to run the ansible commands.
* Run the following commands to run the playbooks
  * ansible-playbook ./tasks/homebrew.yml
  * ansible-playbook ./tasks/oh-my-zsh.yml
  * ansible-playbook ./tasks/ssh_key.yml
  * ansible-playbook ./tasks/git-config.yml
  * ansible-playbook ./tasks/pyenv.yml
  * ansible-playbook ./tasks/cleanup-dock.yml