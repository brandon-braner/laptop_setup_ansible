# Use Ansible to setup laptop

We will be using Ansible to setup a Mac laptop / desktop. This should install everything we need to get a laptop up and running for a new developer.

** Software that will be installed **
* bartender
* dbeaver
* docker desktop
* dockutil
* figma
* geos
* google cloud
* iterm2
* jq
* kubectl
* kubectx
* kustomize
* node
* oh-my-zsh
* poetry
* postgres
* postman
* pre-commit
* pyenv
* terraform
* tilt
* slack
* visual studio code
* zsh-autosuggestions
* zsh-completions
* zsh-syntax-highlighting

** Installs the following VS Code extensions **
* [Python - ms-python.python](https://marketplace.visualstudio.com/items?itemName=ms-python.python)
* [Remote Containers - ms-vscode-remote.remote-containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)
- [Docker - ms-azuretools.vscode-docker](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker)
- [Kubernetes - ms-kubernetes-tools.vscode-kubernetes-tools](https://marketplace.visualstudio.com/items?itemName=ms-kubernetes-tools.vscode-kubernetes-tools)
- [Gitlens - eamodio.gitlens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)
- [VS Code ES Lint - dbaeumer.vscode-eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Terraform - HashiCorp.terraform](https://marketplace.visualstudio.com/items?itemName=HashiCorp.terraform)
- [Sourcery - sourcery.sourcery](https://marketplace.visualstudio.com/items?itemName=sourcery.sourcery)
- [Angular Extension Pack - loiane.angular-extension-pack](https://marketplace.visualstudio.com/items?itemName=loiane.angular-extension-pack)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [NX Console](https://marketplace.visualstudio.com/items?itemName=nrwl.angular-console)
- [Tilt](https://marketplace.visualstudio.com/items?itemName=Tchoupinax.tilt)

** Other Items**
* Set your global git name and email
* Create a new ssh key as id_rsa and id_rsa.pub and add it to your keychain. This should be added to your github account manually.
* Removes all the cruft from your dock for you.

## Create virtual environment
* Open terminal and cd to the downloaded folder
* Run `python3 -m venv venv` install command line dev tools when prompted. This may take a couple minutes as it is installing xcode. You will probably have to run `python3 -m venv venv` again if the folder doesn't exist.
* Run `source venv/bin/activate` to activate the virtual environment
* Upgrade pip `python -m pip install --upgrade pip`
* Run `pip install -r requirements.txt` to install all the requirements
* Install homebrew `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"` (Figure out how to automate this)[https://github.com/geerlingguy/ansible-role-homebrew]
## Update variables
* run `whoami` in your terminal to get your username
* Update variables in the vars.yml file
* Update remote_user in the ansible.cfg file as your local username from whoami
## Run the playbooks

* Source the Python venv `source venv/bin/activate` this will allow you to run the ansible commands.
* Run the following commands to run the playbooks
  * ansible-playbook tasks/asdf.yml 
  * ansible-playbook tasks/homebrew.yml
  * ansible-playbook tasks/oh-my-zsh.yml
  * ansible-playbook tasks/ssh_key.yml
  * ansible-playbook tasks/git-config.yml
  * ansible-playbook tasks/setup-vscode.yml
  * ansible-playbook tasks/cleanup-dock.yml


## Add ssh key to Github
* run pbcopy < ~/.ssh/id_rsa.pub
* Log into Github and go to your profile -> SSH & GPG Keys
* Create a new ssh key and paste your public key copied above with pbcopy
