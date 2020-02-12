// //const AWS = require('aws-sdk');
 import * as dynamoDbLib from "./libs/dynamodb-lib";
 import { success, failure } from "./libs/response-lib";
// //const docClient = new AWS.DynamoDB.DocumentClient({region: 'us-east-1'});

// exports.handler = async function(event, context, callback){
//     console.log('processing event: ' + JSON.stringify(event, null, 2));


//     let params =  {
//         Item: {id:event.id,
//             name: event.name,
//             email: event.email,
//             pin: event.pin,
//             phone: event.phone,
//             children:[{id:event.id,
//                 name:event.name,
//                 dob:event.dob,
//                 gender:event.gender,
//                   inprogresshw:[{id:event.id,
//                     path:event.path,
//                     createon:event.createon,
//                     }],
//                 completedhw:[{
//                     id:event.id,
//                     path:event.path,
//                     createon:event.createon,
//                    }]
//                 }]
//                   },
//                      TableName: 'parent'
//             };

//   try {
//     await dynamoDbLib.call("put", params);
//     return success(params.Item);
//     } catch (e) {
//       console.log(e);
//     return failure({ status: false });
//   }
// };
//const AWS = require('aws-sdk');

 //const docClient = new AWS.DynamoDB.DocumentClient({region: 'us-east-1'});

 exports.handler = async function (event, context, callback) {
  console.log('processing event: ' + JSON.stringify(event, null, 2));
  let params = {
    Item: {
      id: event.id,
      name: event.name,
      email: event.email,
      pin: event.pin,
      phone: event.phone,
      children: [{
        id: event.id,
        name: event.name,
        dob: event.dob,
        gender: event.gender,
        inprogresshw: [{
          id: event.id,
          path: event.path,
          createon: event.createon
        }],
        completedhw: [{
          id: event.id,
          path: event.path,
          createon: event.createon
        }]
      }]
    },
    TableName: 'parent'
  };

  try {
    await dynamoDbLib.call("put", params);
    return success(params.Item);
  } catch (e) {
    console.log(e);
    return failure({
      status: false
    });
  }
};
