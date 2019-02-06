FROM node:lts

COPY . .

RUN yarn ci

ENTRYPOINT ["node", "/entrypoint.js"]

LABEL \
	maintainer='Dustin Falgout <dustin@falgout.us>' \
	repository=https://github.com/lots0logs/gh-action-filter-files \
	com.github.actions.name=filter-files \
	com.github.actions.description='Stops workflow unless certain files were modified.' \
	com.github.actions.icon=filter \
	com.github.actions.color=gray-dark
