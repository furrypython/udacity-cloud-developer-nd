// DOWNGRADE NODE VERSION FIRST
// https://stackoverflow.com/questions/66836644/unable-to-connect-to-aws-rds-using-sequelize-orm
// https://stackoverflow.com/questions/47008159/how-to-downgrade-node-version
export const config = {
  "dev": {
    "username": process.env.POSTGRES_USERNAME, //"udagramreidb",
    "password": process.env.POSTGRES_PASSWORD, //"process.env.udagramreidb",
    "database": process.env.POSTGRES_DATABASE, //"postgres",
    "host": process.env.POSTGRES_HOST, //[my RDS] "udagramreidb.cggzojrlznin.us-east-1.rds.amazonaws.com",
    "dialect": process.env.POSTGRES, //"postgres",
    "aws_region": process.env.AWS_REGION, //"us-east-1",
    "aws_profile": process.env.AWS_PROFILE, //"default",
    "aws_media_bucket": process.env.AWS_MEDIA_BUCKET //"udagram-209811866096-dev"
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  }, 
  "jwt": {
    "secret": process.env.JWT_SECRET //"helloworld"
  }
}
