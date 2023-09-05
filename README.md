# react-amplified

code for https://docs.amplify.aws/start/q/integration/react/

## creation

```bash
yarn create react-app react-amplifed --template typescript
```

## init

```bash
cd react-amplified
amplify init
Note: It is recommended to run this command from the root of your app directory
? Enter a name for the project reactamplified
The following configuration will be applied:

Project information
| Name: reactamplified
| Environment: dev
| Default editor: Visual Studio Code
| App type: javascript
| Javascript framework: react
| Source Directory Path: src
| Distribution Directory Path: build
| Build Command: npm.cmd run-script build
| Start Command: npm.cmd run-script start

? Initialize the project with the above configuration? No
? Enter a name for the environment dev        
? Choose your default editor: Visual Studio Code
√ Choose the type of app that you're building · javascript
Please tell us about your project
? What javascript framework are you using react
? Source Directory Path:  src
? Distribution Directory Path: build
? Build Command:  yarn build
? Start Command: yarn start
Using default provider  awscloudformation
? Select the authentication method you want to use: AWS profile

For more information on AWS Profiles, see:
https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-profiles.html

? Please choose the profile you want to use default
Adding backend environment dev to AWS Amplify app: **************

Deployment completed.
Deploying root stack reactamplified [ ====================-------------------- ] 2/4
        amplify-reactamplified-dev-17… AWS::CloudFormation::Stack     CREATE_IN_PROGRESS             Tue Sep 05 2023 17:23:44…
        AuthRole                       AWS::IAM::Role                 CREATE_COMPLETE                Tue Sep 05 2023 17:24:05…     
        DeploymentBucket               AWS::S3::Bucket                CREATE_IN_PROGRESS             Tue Sep 05 2023 17:23:47…
        UnauthRole                     AWS::IAM::Role                 CREATE_COMPLETE                Tue Sep 05 2023 17:24:03…     

√ Help improve Amplify CLI by sharing non sensitive configurations on failures (y/N) · no
Deployment state saved successfully.
√ Initialized provider successfully.
✅ Initialized your environment successfully.

Your project has been successfully initialized and connected to the cloud!

Some next steps:
"amplify status" will show you what you've added already and if it's locally configured or deployed
"amplify add <category>" will allow you to add features like user login or a backend API
"amplify push" will build all your local backend resources and provision it in the cloud
"amplify console" to open the Amplify Console and view your project status
"amplify publish" will build all your local backend and frontend resources (if you have hosting category added) and provision it in the cloud

Pro tip:
Try "amplify add api" to create a backend API and then "amplify push" to deploy everything
```

## amplify add api

```bash
amplify add api
? Select from one of the below mentioned services: GraphQL
? Here is the GraphQL API that we will create. Select a setting to edit or continue Continue
? Choose a schema template: Single object with fields (e.g., “Todo” with ID, name, description)

⚠️  WARNING: your GraphQL API currently allows public create, read, update, and delete access to all models via an API Key. To configure PRODUCTION-READY authorization 
rules, review: https://docs.amplify.aws/cli/graphql/authorization-rules

✅ GraphQL schema compiled successfully.

Edit your schema at H:\node.js\react-amplified\amplify\backend\api\reactamplified\schema.graphql or place .graphql files in a directory at H:\node.js\react-amplified\amplify\backend\api\reactamplified\schema
√ Do you want to edit the schema now? (Y/n) · yes
Edit the file in your editor: H:\node.js\react-amplified\amplify\backend\api\reactamplified\schema.graphql
✅ Successfully added resource reactamplified locally

✅ Some next steps:
"amplify push" will build all your local backend resources and provision it in the cloud
"amplify publish" will build all your local backend and frontend resources (if you have hosting category added) and provision it in the cloud
```

## amplify push

```bash
$ amplify push
| Fetching updates to backend environment: dev from the cloud.
⚠️  WARNING: your GraphQL API currently allows public create, read, update, and delete access to all models via an API Key. To configure PRODUCTION-READY authorization 
rules, review: https://docs.amplify.aws/cli/graphql/authorization-rules

- Building resource api/reactamplified✅ GraphQL schema compiled successfully.

Edit your schema at H:\node.js\react-amplified\amplify\backend\api\reactamplified\schema.graphql or place .graphql files in a directory at H:\node.js\react-amplified\amplify\backend\api\reactamplified\schema
√ Successfully pulled backend environment dev from the cloud.
\ Building resource api/reactamplified
⚠️  WARNING: your GraphQL API currently allows public create, read, update, and delete access to all models via an API Key. To configure PRODUCTION-READY authorization 
rules, review: https://docs.amplify.aws/cli/graphql/authorization-rules

- Building resource api/reactamplified✅ GraphQL schema compiled successfully.

Edit your schema at H:\node.js\react-amplified\amplify\backend\api\reactamplified\schema.graphql or place .graphql files in a directory at H:\node.js\react-amplified\amplify\backend\api\reactamplified\schema

    Current Environment: dev

┌──────────┬────────────────┬───────────┬───────────────────┐
│ Category │ Resource name  │ Operation │ Provider plugin   │
├──────────┼────────────────┼───────────┼───────────────────┤
│ Api      │ reactamplified │ Create    │ awscloudformation │
└──────────┴────────────────┴───────────┴───────────────────┘
√ Are you sure you want to continue? (Y/n) · yes

⚠️  WARNING: your GraphQL API currently allows public create, read, update, and delete access to all models via an API Key. To configure PRODUCTION-READY authorization 
rules, review: https://docs.amplify.aws/cli/graphql/authorization-rules

✅ GraphQL schema compiled successfully.

Edit your schema at H:\node.js\react-amplified\amplify\backend\api\reactamplified\schema.graphql or place .graphql files in a directory at H:\node.js\react-amplified\amplify\backend\api\reactamplified\schema
\ Building resource api/reactamplified
⚠️  WARNING: your GraphQL API currently allows public create, read, update, and delete access to all models via an API Key. To configure PRODUCTION-READY authorization 
rules, review: https://docs.amplify.aws/cli/graphql/authorization-rules

- Building resource api/reactamplified✅ GraphQL schema compiled successfully.

Edit your schema at H:\node.js\react-amplified\amplify\backend\api\reactamplified\schema.graphql or place .graphql files in a directory at H:\node.js\react-amplified\amplify\backend\api\reactamplified\schema
? Do you want to generate code for your newly created GraphQL API Yes
? Choose the code generation language target typescript
? Enter the file name pattern of graphql queries, mutations and subscriptions src\graphql\**\*.ts
? Do you want to generate/update all possible GraphQL operations - queries, mutations and subscriptions Yes
? Enter maximum statement depth [increase from default if your schema is deeply nested] 2
? Enter the file name for the generated code src\API.ts

Deployment completed.
Deployed root stack reactamplified [ ======================================== ] 2/2
        amplify-reactamplified-dev-17… AWS::CloudFormation::Stack     UPDATE_COMPLETE                Tue Sep 05 2023 19:57:33…     
        apireactamplified              AWS::CloudFormation::Stack     CREATE_COMPLETE                Tue Sep 05 2023 19:57:30…     
Deployed api reactamplified [ ======================================== ] 6/6
        GraphQLAPI                     AWS::AppSync::GraphQLApi       CREATE_COMPLETE                Tue Sep 05 2023 19:56:01…     
        GraphQLAPIDefaultApiKey215A6D… AWS::AppSync::ApiKey           CREATE_COMPLETE                Tue Sep 05 2023 19:56:04…     
        GraphQLAPINONEDS95A13CF0       AWS::AppSync::DataSource       CREATE_COMPLETE                Tue Sep 05 2023 19:56:04…     
        GraphQLAPITransformerSchema3C… AWS::AppSync::GraphQLSchema    CREATE_COMPLETE                Tue Sep 05 2023 19:56:15…     
        Todo                           AWS::CloudFormation::Stack     CREATE_COMPLETE                Tue Sep 05 2023 19:57:04…     
        CustomResourcesjson            AWS::CloudFormation::Stack     CREATE_IN_PROGRESS             Tue Sep 05 2023 19:57:04…

√ Generated GraphQL operations successfully and saved at src\graphql
√ Code generated successfully and saved in file src\API.ts
Deployment state saved successfully.

GraphQL endpoint: https://******************.appsync-api.us-east-1.amazonaws.com/graphql
GraphQL API KEY: ******************

GraphQL transformer version: 2

Browserslist: caniuse-lite is outdated. Please run:
  npx update-browserslist-db@latest
  Why you should do it regularly: https://github.com/browserslist/update-db#readme
```

## amplify add auth

```bash
$ amplify add auth
Using service: Cognito, provided by: awscloudformation

 The current configured provider is Amazon Cognito. 

 Do you want to use the default authentication and security configuration? Default configuration
 Warning: you will not be able to edit these selections.     
 How do you want users to be able to sign in? Username       
 Do you want to configure advanced settings? No, I am done.
✅ Successfully added auth resource reactamplified966b78e6 locally

✅ Some next steps:
"amplify push" will build all your local backend resources and provision it in the cloud
"amplify publish" will build all your local backend and frontend resources (if you have hosting category added) and provision it in the cloud
```