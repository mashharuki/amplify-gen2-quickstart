import { defineBackend } from "@aws-amplify/backend";
import { PolicyStatement } from 'aws-cdk-lib/aws-iam';
import { auth } from './auth/resource';
import { OnUploaded } from './custom/onUploaded/resource';
import { chatHandler } from './data/chatHandler/resource';
import { data } from './data/resource';
import { webSearch } from './data/webSearch/resource';
import { storage } from './storage/resource';

const backend = defineBackend({
  auth,
  data, 
  chatHandler,
  webSearch, 
  storage, 
});

// チャット機能用のlambda関数にBedrock権限設定
backend.chatHandler.resources.lambda.addToRolePolicy(
  new PolicyStatement({
    actions: ['bedrock:InvokeModel', 'bedrock:InvokeModelWithResponseStream'],
    resources: ['*'],
  })
);

// webSearch用のlambda関数にBedrock権限を追加
backend.webSearch.resources.lambda.addToRolePolicy(
  new PolicyStatement({
    actions: ['bedrock:InvokeModel'],
    resources: ['*'],
  })
);

const onUploaded = new OnUploaded(
  backend.createStack('OnUploaded'),
  'OnUploaded',
  {
    bucketName: backend.storage.resources.bucket.bucketName,
    dynamoDbTableName: backend.data.resources.tables['PublicStorage'].tableName,
  }
);
