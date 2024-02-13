# #############################################################################
# Dev init file
# #############################################################################
#
# @description This file is displayed on container init
#
# #############################################################################

sudo apt update
sudo apt install exa figlet zsh-autosuggestions zsh-syntax-highlighting gh -y
sudo sh -c "$(wget https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh -O -)"
sudo echo "source /usr/share/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh" >> ~/.zshrc
sudo echo "source /usr/share/zsh-autosuggestions/zsh-autosuggestions.zsh" >> ~/.zshrc

sudo echo alias pn="pnpm" >> ~/.zshrc
sudo echo "export PNPM_HOME="$HOME/.local/share/pnpm"
case ":$PATH:" in
  *":$PNPM_HOME:"*) ;;
  *) export PATH="$PNPM_HOME:$PATH" ;;
esac" >> ~/.zshrc

pnpm start

sudo figlet "PIGEONPOSSE
------
FAKE-ADMIN
"

/bin/zsh