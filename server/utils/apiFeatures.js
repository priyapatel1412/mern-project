class ApiFeatures {
  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr;
  }

  search() {
    //MongoDB provides the functionality to search a pattern in a string during a query by writing a regular expression
    const keyword = this.queryStr.keyword
      ? {
          name: {
            $regex: this.queryStr.keyword,
            // "i" is for case insensitive
            $options: "i",
          },
        }
      : {};

    this.query = this.query.find({ ...keyword });
    return this;
  }

  filter() {
    const queryCopy = { ...this.queryStr };

    //Removing some fields of queryCopy for category
    //example keywords that we use for search
    const removeFields = ["keyword", "page", "limit"];
    removeFields.forEach((key) => delete queryCopy[key]);

    //filter for Price and Rating

    let queryStr = JSON.stringify(queryCopy);
    console.log("queryStr", queryStr);
    //mongoDB takes key with $ so replace all query key with $ using regex
    //#gt is greaterthen , #gte is greater then equal to
    //#lt is lessthen , #lte is less then equal to

    queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (key) => `$${key}`);
    this.query = this.query.find(JSON.parse(queryStr));

    return this;
  }

  //Result Per page  setting
  pagination(resultPerPage) {
    const currentPage = Number(this.queryStr.page) || 1;

    //check how many item to skip depending on which page user on
    //example resultPerPage= 10, and user on page 2(currentPage = 2) then skip will be 10
    const skip = resultPerPage * (currentPage - 1);
    this.query = this.query.limit(resultPerPage).skip(skip);
    return this;
  }
}

module.exports = ApiFeatures;
