require('dotenv').config()
const AWS = require('aws-sdk')
const ENDPOINT = '' // ! WEBSOCKET_KEY
const client = new AWS.ApiGatewayManagementApi({ endpoint: ENDPOINT })
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: '', // ! CHATGPT_API_KEY
});
const openai = new OpenAIApi(configuration);

async function runCompletion(message) {  
  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: message,
    temperature: 0,
    max_tokens: 3500,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });
  return completion.data.choices[0].text
}

const sendToBot = async (ids, mess) => {
  let res = await runCompletion(mess);
  let message = { publicMessage: `gptidentifier# ${res}` }
  const all = ids.map(i => sendToOne(i, message));
  return Promise.all(all);
};

const sendToOne = async (id, body) => {
  try {
    await client.postToConnection({
      'ConnectionId': id,
      'Data': Buffer.from(JSON.stringify(body))
    }).promise();
  } catch (err) {
    console.error(err);
  }
};

const sendToAll = async (ids, body) => {
  const all = ids.map(i => sendToOne(i, body));
  return Promise.all(all);
};

const names = {};
exports.handler = async (event) => {
  if (event.requestContext) {
    const connectionId = event.requestContext.connectionId;
    const routeKey = event.requestContext.routeKey;
    let body = {};
    try {
      if (event.body) {
        body = JSON.parse(event.body);
      }
    } catch (err) {
      console.error(err);
    }
    
    switch (routeKey) {
      case '$connect':
        break;
      case '$disconnect':
        await sendToAll(Object.keys(names), { systemMessage: `${names[connectionId]} saiu` });
        delete names[connectionId];
        await sendToAll(Object.keys(names), { members: Object.values(names) });
        break;
      case '$default':
        break;
      case 'setName':
        names[connectionId] = body.name;
        await sendToAll(Object.keys(names), { members: Object.values(names) });
        await sendToAll(Object.keys(names), { systemMessage: `${names[connectionId]} entrou` });
        break;
      case 'sendPublic':
        await sendToAll(Object.keys(names), { publicMessage: `${names[connectionId]}: ${body.message}` });
        break;
      case 'sendBot':
        await sendToAll(Object.keys(names), { publicMessage: `gptidentifier# ${names[connectionId]}: ${body.message}` });
        await sendToBot(Object.keys(names), body.message);
        break;
      case 'sendPrivate':
        const to = Object.keys(names).find(key => names[key] === body.to);
        await sendToOne(to, { privateMessage: `[Privado] ${names[connectionId]}: ${body.message}` });
        break;
    }
  }

  const response = {
    statusCode: 200,
    body: JSON.stringify('Lambda a todo vapor!'),
  };
  return response;
  
};