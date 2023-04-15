FROM node:latest

# 作業ディレクトリ
WORKDIR /var/www

# ロケールのインストールと設定
RUN apt update
RUN apt -y install locales && \
    localedef -f UTF-8 -i ja_JP ja_JP.UTF-8
ENV LANG ja_JP.UTF-8
ENV LANGUAGE ja_JP:ja
ENV LC_ALL ja_JP.UTF-8
ENV TZ JST-9
ENV TERM xterm

# Vimインストール
RUN apt install -y vim

# npmアップデート
RUN npm install -g npm@latest

# create-react-appをインストール
RUN npm install create-react-app

# create-next-appをインストール
RUN npm install create-next-app
