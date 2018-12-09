
```bash
git clone https://github.com/shubhamdeol/newsApp NewsApp && cd NewsApp
yarn install # install the dependencies
yarn start # start the expo development server
```

# Deployment

I used <a href="https://docs.expo.io/versions/latest/guides/release-channels.html">Expo Release Chennels</a> to deploy/build for different environemnts

## Building for different platforms

```bash
yarn build:android <[test|staging|prod]> # build for android
yarn build:ios <[test|staging|prod]> # build for android
```

## Deploying

```bash
yarn expo publish --release-channel  <your-channel>
```
