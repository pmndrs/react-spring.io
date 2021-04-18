# How to Contribute

1. Clone this repository:

```sh
git clone https://github.com/pmndrs/react-spring.io
cd react-spring.io
```

2. Install `yarn` (https://yarnpkg.com/en/docs/install)

3. Download the examples (this should run as a post install script):

```sh
yarn postinstall
```

4. Copy the examples out of `react-spring`:

```sh
yarn copy:spring-demos
```

5. Start the next project:

```sh
yarn dev # it'll run on localhost:3000
```

6. Let's get cooking! 👨🏻‍🍳🥓

## Guidelines

Be sure your commit messages follow this specification: https://www.conventionalcommits.org/en/v1.0.0-beta.4/

# Deployment

There's automatic deployment set up for the `main` branch to our vercel server.
