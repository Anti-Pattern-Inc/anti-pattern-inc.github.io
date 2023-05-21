# corporate

# How to check by Staging

make your pull request to develop branch  
after it's merged, you can check update by staging URL.

# How to deploy to Production

make your pull request to master branch
after it's merged, you can see update on production.

# Production

- Site URL: https://anti-pattern.co.jp/

# Staging

- Site URL: https://anti-pattern-inc-stg.vercel.app/

# Set Up

1. Receive permission to use vercel and prismic

2. Install Volta

```
$ cd ~ && curl https://get.volta.sh | bash
```

3. Install Dependencies

```
$ yarn install
```

4. Start Next.js in development mode

```
$ yarn dev
```

# formatting before push

```
$ yarn lint:fix
```
