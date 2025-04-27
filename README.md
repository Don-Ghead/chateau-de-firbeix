# chateau-de-firbeix

Le Château  de Firbeix is a château in France owned by Tim & Caroline Parsons since 2019.
The aim is to renovate the various gites to rent out as self contained holiday homes during summer. 
There will eventually be a Bed and Breakfast, capacity for hosting events and more.  

The intention therefore is to provide a website that shows off the Chateau grounds, gites and amenities as nicely as possible.
It should look clean, elegant and modern to mimic the feel of the Chateau which has existed for generations while being regularly modernised.

# Development 

## About

The application has been scaffolded using [create-t3-app](https://create.t3.gg) elegantly sets up a typescript project using the following technologies: 

- NextJS (v12 at the time of writing this)
- tRPC (typesafe end to end API)
- TailwindCSS (utility-first CSS framework)
- NextAuth (Authentication framework for NextJS)
- Prisma (ORM for Node/Typescript which fits really nicely with tRPC)
- Zod (Fantastic typescript-first schema validation with static type inference)

It has been configured with a NextAuth Adapter for google only so far which is all hidden behind some hard coded (for now at least) user admin. 
It also uses AWS for storing uploaded images and blogs eventually so that they can be backed up in case anything goes wrong, though for now this functionality is WIP.

## Deployment

At the moment it is unclear how it will be deployed, NextJS apps generally lend themselves well to being deployed with Vercel however there are alternatives such as Railway.
Before making decision consult [this page](https://create.t3.gg/en/other-recs#deployments-infrastructure-databases-and-ci).

## Setup

1. Create a `.env` file with the following variables

```
# Prisma
DATABASE_URL=file:./db.sqlite

# Next Auth
NEXTAUTH_SECRET= //NOT SHARED PUBLICLY
NEXTAUTH_URL=http://localhost:3000

# NextAuth Google Provider
GOOGLE_CLIENT_ID= //NOT SHARED PUBLICLY
GOOGLE_CLIENT_SECRET= //NOT SHARED PUBLICLY
```

2. Run `yarn install` to install packages
3. Run `yarn prisma-migrate` to apply DB migrations
4. Run `yarn prepare` to install and setup Husky pre-commit
5. Run `yarn dev` to run the dev server

### Database

To inspect the locally running database simply run `yarn prisma-studio` and this should
run up a prisma server at a specified port for you to use.

When making changes to the database schema you'll need to run `prisma generate` to generate
a database migration file to be applied in the future.
