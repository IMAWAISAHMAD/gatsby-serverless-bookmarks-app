const query = require("./utils/query");
 
const GET_BOOKMARKS = `
   query {
    allBookMarks{
        data{
          _id
          url
          pageTitle
          description
        }
    }
 }  
`;



exports.handler = async () => {
    const { data, errors } = await query(GET_BOOKMARKS);
   
    if (errors) {
      return {
        statusCode: 500,
        body: JSON.stringify(errors)
      };
    }
   
    return {
      statusCode: 200,
      body: JSON.stringify({ bookmarks: data.allBookMarks.data })
    };
};