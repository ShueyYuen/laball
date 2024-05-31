FROM mcr.microsoft.com/devcontainers/typescript-node:1-22-bookworm

RUN git config --system codespaces-theme.hide-status 1

USER node
RUN npm install -g node-gyp
RUN echo 'export DISPLAY="${DISPLAY:-:1}"' | tee -a ~/.bashrc >> ~/.zshrc

USER root
CMD sleep inf