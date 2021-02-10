const query = require("./utils/query");

const UPDATE_BOOKMARK = `
    mutation($id: ID!, $url: String!, $pageTitle:String!){
        updateBookMark(id: $id, data: {url: $url,pageTitle:$pageTitle}){
            _id
            url
            pageTitle,
        }
    }
`;

exports.handler = async event => {
  const { id, url,pageTitle } = JSON.parse(event.body);
  const { data, errors } = await query(
       UPDATE_BOOKMARK, { id, url ,pageTitle});

  if (errors) {
    return {
      statusCode: 500,
      body: JSON.stringify(errors)
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ bookmark: data.updateBookMark })
  };
};