const query = require("./utils/query");

const DELETE_BOOKMARK = `
  mutation($id: ID!) {
    deleteBookMark(id: $id){
      _id
      url
    }
  }
`;

exports.handler = async event => {
  const { id } = JSON.parse(event.body);
  const { data, errors } = await query(
    DELETE_BOOKMARK, { id });

  if (errors) {
    return {
      statusCode: 500,
      body: JSON.stringify(errors)
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ bookmark: data.deleteBookMark })
  };
};