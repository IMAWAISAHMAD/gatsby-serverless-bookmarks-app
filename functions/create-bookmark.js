const query = require("./utils/query");
 
const CREATE_BOOKMARK = `
  mutation($url: String!, $pageTitle:String!,$description: String) {
    createBookMark(data: {url: $url, pageTitle:$pageTitle,description: $description}) {
      _id
      url
      pageTitle
      description
    }
  }
`;
 
exports.handler = async event => {
  console.log(event.body);
  const { url,pageTitle,description } = JSON.parse(event.body);
  const { data, errors } = await query(
    CREATE_BOOKMARK, { url,pageTitle,description });
 
  if (errors) {
    return {
      statusCode: 500,
      body: JSON.stringify(errors)
    };
  }
 
  return {
    statusCode: 200,
    body: JSON.stringify({ bookmark: data.createBookMark })
  };
};