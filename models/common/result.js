class Result {
  constructor(options = { code: 200, message: "操作成功", data: null }) {
    this.code = options.code;
    this.message = options.message;
    this.data = options.data;
  }
  successMessage(message) {
    return new Result({ code: 200, message: message, data:null });
  }
  successMessageData(message, data) {
    return new Result({ code: 200, message: message, data: data });
  }
  errorCodeMessage(code, message) {
    return new Result({ code: code, message: message, data: null });
  }
  errorCodeMessageData(code, message, data) {
    return new Result({ code: code, message: message, data: data });
  }
}


module.exports = new Result()