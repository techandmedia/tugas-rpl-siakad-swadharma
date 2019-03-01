// TIDAK DIGUNAKAN !!
// SAAT INI MENGGUNAKAN NODE_ENV

const devURL =  ""
const apiURL = "https://app.subarnanto.com/"


const config = process.env.REACT_APP_STAGE === 'production'
  ? apiURL
  : devURL;

export default config

// export default {
//   // Add common config values here
//   MAX_ATTACHMENT_SIZE: 5000000,
//   ...config
// };

// const dev = {
//   s3: {
//     BUCKET: "YOUR_DEV_S3_UPLOADS_BUCKET_NAME"
//   },
//   apiGateway: {
//     REGION: "YOUR_DEV_API_GATEWAY_REGION",
//     URL: "YOUR_DEV_API_GATEWAY_URL"
//   },
//   cognito: {
//     REGION: "YOUR_DEV_COGNITO_REGION",
//     USER_POOL_ID: "YOUR_DEV_COGNITO_USER_POOL_ID",
//     APP_CLIENT_ID: "YOUR_DEV_COGNITO_APP_CLIENT_ID",
//     IDENTITY_POOL_ID: "YOUR_DEV_IDENTITY_POOL_ID"
//   }
// };

// const prod = {
//   s3: {
//     BUCKET: "YOUR_PROD_S3_UPLOADS_BUCKET_NAME"
//   },
//   apiGateway: {
//     REGION: "YOUR_PROD_API_GATEWAY_REGION",
//     URL: "YOUR_PROD_API_GATEWAY_URL"
//   },
//   cognito: {
//     REGION: "YOUR_PROD_COGNITO_REGION",
//     USER_POOL_ID: "YOUR_PROD_COGNITO_USER_POOL_ID",
//     APP_CLIENT_ID: "YOUR_PROD_COGNITO_APP_CLIENT_ID",
//     IDENTITY_POOL_ID: "YOUR_PROD_IDENTITY_POOL_ID"
//   }
// };

