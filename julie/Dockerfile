FROM quay.io/lyfe00011/test:beta

RUN git clone https://github.com/cyberjack17/Ammukutty-2.O /root/WhatsAsenaDuplicated
WORKDIR /root/WhatsAsenaDuplicated/
RUN yarn install --no-audit
RUN git clone https://github.com/cyberjack17/Nandhuttynew
RUN cp -R /root/Utils/* /root/WhatsAsenaDuplicated 
CMD ["node", "bot.js"]
