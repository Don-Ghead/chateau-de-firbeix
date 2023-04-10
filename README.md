# chateau-de-firbeix

This project will house all of the code/infrastructure for the Chateau de Firbeix website.

# Development Setup

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

# AWS AccessKeys
AWS_SDK_ACCESS_KEY= //NOT SHARED PUBLICLY
AWS_SDK_SECRET= //NOT SHARED PUBLICLY
AWS_REGION=eu-west-2
AWS_S3_BUCKET_NAME=chateau-blog-images
NEXT_PUBLIC_S3_BUCKET_NAME=chateau-blog-images
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
