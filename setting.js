/* Bot settings 

You don't have to set this if you deploy using heroku because you can simply set them in environment variables, also don't forget to sleep */


const session = process.env.SESSION || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0N2eWs2cGhEL21hcWVLdnRteGduY3lrRTN0cTVWelpPMS83UzFaYlJtVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVXpqWXlIelFxSEtLVVhqZDdQRTFMaGJDdnpCR0FQQk5ZRjhVY2dZNXV6MD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrQzAyYjk4ZTREV0pFdUJNWWVlb1doZlhHME1rTXprUW5MeHNFT1VHSGxzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJmdnVGYUcyZ29tYm1iZXhSdVJ6eCs2WXkzcW1TazV2THVIVGxnVG5PVVZVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNHU1J1eDNjLzBXWG5WV01sblVZYVk3dDlIdmtLOEpZT0VJRFAxZ2tva1U9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9JRzlNamEzVDJuNFB0UW5MMU9jL1RXaWVVbm01YkkwandHaERXbUVkbG89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0IwZTN3TzlLZGNEaG52Vi82b0tjeEdFWVcxMU1BQjd2MGhjMWlaZlEyRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOUFRelQ0UUc5M0NyUVVpcTdYb0ova1pZbmRLQTdiSS9JY1JsQTFuUTVndz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlEbkMxc3dIM1JuNmFpNW9ybE5Fc1ZjZ2tNUkRkeUlhQUFQYmR6SEJ0VDFqcXZCWlB2Q3d0ZXBsTEZZU2hta3U0ZFFSS3ZiSVZDcDRwR0dZdDFJYUNBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTU5LCJhZHZTZWNyZXRLZXkiOiJOaVFackN6Nnl3NFlTenJ4QmZjM2NTaVl5WEU5ZGZ6emVDaFF6V1B6U05NPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijc5MTQ5OTU4NjIyQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjVBREVBNEUwQTVDQjgwNjMzRUU4REMyNEM1N0EwQTdBIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzA3MTEyNjJ9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijc5MTQ5OTU4NjIyQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjUxMUQ1OEU5MEJGNUVCNEIxRkE2MzJGQjBFODM1NkY5In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzA3MTEyNjJ9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjVIUjdWWmdfU3MyOFluLXRPMUpXY3ciLCJwaG9uZUlkIjoiYzE3NGNmNDktNGIwZS00Zjc2LWFlYzUtZWMzNjU1NTViMzNlIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlKU1NaWHVXY0hCRGJqNzk0cnJoMUdNb2ZNYz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJUV0EyYm1WT1FXdWcvVWY5cFVoSG84SlFtR3c9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiVEpTRkpZQU0iLCJtZSI6eyJpZCI6Ijc5MTQ5OTU4NjIyOjU5QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IuKEm/CdkZLwnZGSIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMcVdrOEFGRU5DZG9ya0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJIN204TU1yOHB6YlFvdUNxZWNZaHhXSzhkZnQ0aUpzV2phMnJoOFE3TjIwPSIsImFjY291bnRTaWduYXR1cmUiOiJ3Rm9ndzN1RFIwYlpYWjE2M0hGUnJycHhpUUxrblFveUtpVWJSYXJvT1JQQTBlalZNV2xPaGNsWWhkam9Lb2lGSk11QXJOTUxDcmpnSUZzdDJ1YTlCdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiSEJMSmdHUXVIZEU3OWJCRS9uMTYyWmtxNWZ0b1VWaXdPN1JydUVVKzd1NHFyNGFoOUgxQ3c4YTlaamZpZjFDN0FUYVVuczNCNWd5ZXRxL0FUR1ZsQUE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI3OTE0OTk1ODYyMjo1OUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJSKzV2RERLL0tjMjBLTGdxbm5HSWNWaXZIWDdlSWliRm8ydHE0ZkVPemR0In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzMwNzExMjYwLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU4veSJ9';

const prefix = process.env.PREFIX || '.';
const mycode = process.env.CODE || "7";
const author = process.env.STICKER_AUTHOR || 'Keith';
const packname = process.env.PACKNAME || 'keith';
const dev = process.env.DEV || '917002015750';
const DevDreaded = dev.split(",");
const botname = process.env.BOTNAME || 'KEITH-MD';
const mode = process.env.MODE || 'public';
const gcpresence = process.env.GC_PRESENCE || 'false';
const antionce = process.env.ANTIVIEWONCE || 'true';
const sessionName = "session";
const presence = process.env.WA_PRESENCE || 'online';

const antitag = process.env.ANTITAG || 'false';
const antidelete = process.env.ANTIDELETE || 'false';
const autoview = process.env.AUTOVIEW_STATUS || 'false';
const autolike = process.env.AUTOLIKE_STATUS || 'false';
const autoread = process.env.AUTOREAD || 'true';
const autobio = process.env.AUTOBIO || 'false';

module.exports = {
  sessionName,
  presence,
  autoview,
  autoread,
  botname,
  autobio,
  mode,
  prefix,
  autolike,
  mycode,
  author,
  packname,
  dev,
  DevDreaded,
  gcpresence,
  antionce,
session,
antitag,
antidelete
};
