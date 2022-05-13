# Geneticure Website

## Install

```sh
$ brew install rbenv
$ brew upgrade rbenv ruby-build
$ rbenv init
$ gem install bundler
$ bundle install
```

## Run

```sh
$ bin/dev
```

# Dev notes

## Reusable blocks

Use `include` or just use CSS classes? `include/capture` is gross, and does add some unnecessary overhead, but is ultimately is better at enforcing consistency.