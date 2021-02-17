# **ezOrders: Easy orders management**

<img src="./docs/JSTack-ezOrders.png" alt="ezOrders" />

<p align="center">
  <img src="http://img.shields.io/static/v1?label=STATUS&message=V1%20FINISHED&color=yellow&style=for-the-badge"/>
  <img src="https://img.shields.io/static/v1?label=web&message=reactjs&color=blue&style=for-the-badge&logo=REACT"/>
  <img src="https://img.shields.io/static/v1?label=mobile&message=react%20native&color=blue&style=for-the-badge&logo=REACT"/>
  <img src="https://img.shields.io/static/v1?label=server&message=node.js&color=darkgreen&style=for-the-badge&logo=node.js"/>
</p>

The ezOrders is a basic application - created during the JStack classes - where the user can preview orders created by your users in the mobile application.


## Default scope

- **App:** Insert and preview all orders
- **Web:** Preview all orders and update order status
- **Back-end:** Return a list containing all orders; Insert a new order; and Update order status.

## **:warning: Prerequisites**

- [NodeJS](https://nodejs.org/en/)
- [YarnPKG](https://yarnpkg.com/) or [NPM](https://www.npmjs.com/)
- [Android](https://react-native.rocketseat.dev/android/linux) or [iOS](https://react-native.rocketseat.dev/ios/macos) Emulator
- [Expo](https://docs.expo.io/get-started/installation/) installed globally in your PC.

### Running the server

```
# Clonning the repository
git clone https://github.com/dgbragas/jstack__ezorders

# Entering in the folder
cd jstack__ezorders/server

# Installing project dependencies (you can also use 'npm install')
yarn

# Running the application (it will run at http://localhost:3000)
yarn start
```

### Running the web application

```
# Open another terminal in root folder (jstack__ezorders) and and DON'T stop the backend
# Enter in the front-end folder
cd jstack__ezorders/web

# Installing project dependencies (you can also use 'npm install')
yarn

# Running the application (it will run at http://localhost:3000)
yarn start
```

### Running the mobile app

```
# Entering in the cloned folder
cd jstack__ezorders/app

# Installing project dependencies (you can also use 'npm install')
yarn

# (After initialize your AVD):
yarn start
```

## Next steps

- [ ] Redesign the mobile and web applications
- [ ] Allow profile creation
- [ ] ...
