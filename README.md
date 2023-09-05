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

