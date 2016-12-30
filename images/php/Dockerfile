FROM ubuntu:16.04

RUN locale-gen es_ES.UTF-8
RUN update-locale LANG=es_ES.UTF-8
ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update -y
RUN apt-get install --no-install-recommends -y apache2 php libapache2-mod-php
RUN apt-get clean -y

COPY ./apache2/sites-available/000-default.conf /etc/apache2/sites-available/000-default.conf

RUN mkdir -p /mnt/src

RUN a2enmod rewrite
RUN a2enmod proxy
RUN a2enmod mpm_prefork

RUN chown -R www-data:www-data /mnt/src
ENV APACHE_RUN_USER www-data
ENV APACHE_RUN_GROUP www-data
ENV APACHE_LOG_DIR /var/log/apache2
ENV APACHE_LOCK_DIR /var/lock/apache2
ENV APACHE_PID_FILE /var/run/apache2/apache2.pid
ENV APACHE_SERVERADMIN admin@localhost
ENV APACHE_SERVERNAME localhost

EXPOSE 80